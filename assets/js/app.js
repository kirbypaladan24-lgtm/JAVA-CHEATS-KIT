/* ===================================================================
   Java Cheats — app.js
   Renders a topic from the cheats object into #content.
   Wires: code block copy/expand/collapse, theme toggle, mode toggle,
   favorites, recently viewed, drawer, hash routing, toast.
   Depends on: cheats (cheats.js), Navigation, Search.
   =================================================================== */

/* ---------- Shared helpers (used by app.js and navigation.js) ---------- */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ---------- Tiny localStorage wrapper shared by app + navigation ---------- */
const Store = {
  FAV:   "jc.favs",
  REC:   "jc.recent",
  THEME: "jc.theme",
  MODE:  "jc.mode",

  getFavs()  { try { return JSON.parse(localStorage.getItem(Store.FAV)  || "[]"); } catch { return []; } },
  setFavs(a) { localStorage.setItem(Store.FAV, JSON.stringify(a)); },
  toggleFav(key) {
    const f = Store.getFavs(), i = f.indexOf(key);
    if (i >= 0) f.splice(i, 1); else f.unshift(key);
    Store.setFavs(f);
    return f.includes(key);
  },

  getRecent()   { try { return JSON.parse(localStorage.getItem(Store.REC) || "[]"); } catch { return []; } },
  pushRecent(key) {
    let r = Store.getRecent().filter(k => k !== key);
    r.unshift(key);
    r = r.slice(0, 12);
    localStorage.setItem(Store.REC, JSON.stringify(r));
  },

  getTheme()  { return localStorage.getItem(Store.THEME) || "dark"; },
  setTheme(t) { localStorage.setItem(Store.THEME, t); },

  getMode()   { return localStorage.getItem(Store.MODE)  || "full"; },
  setMode(m)  { localStorage.setItem(Store.MODE, m); },
  toggleMode() {
    const next = Store.getMode() === "full" ? "simple" : "full";
    Store.setMode(next);
    return next;
  },

  // Quiz scores: { topicKey: { correct: 3, total: 3, answered: true } }
  QUIZ: "jc.quiz",
  getQuizScores() {
    try { return JSON.parse(localStorage.getItem(Store.QUIZ) || "{}"); }
    catch { return {}; }
  },
  setQuizScore(key, correct, total) {
    const scores = Store.getQuizScores();
    scores[key] = { correct, total, answered: true, ts: Date.now() };
    localStorage.setItem(Store.QUIZ, JSON.stringify(scores));
  },
  clearQuizScore(key) {
    const scores = Store.getQuizScores();
    delete scores[key];
    localStorage.setItem(Store.QUIZ, JSON.stringify(scores));
  },
};

/* ---------- Main App ---------- */
const App = (() => {
  let currentKey = "home";

  // ---------- Init ----------
  function init() {
    // Theme
    document.documentElement.setAttribute("data-theme", Store.getTheme());
    updateThemeLabel();
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);

    // Mode
    document.documentElement.setAttribute("data-mode", Store.getMode());
    updateModeLabel();
    document.getElementById("modeToggle").addEventListener("click", () => {
      const next = Store.toggleMode();
      document.documentElement.setAttribute("data-mode", next);
      updateModeLabel();
      // Re-render current topic in new mode
      loadTopic(currentKey);
      toast(next === "simple" ? "◆ Simple mode — beginner view" : "◈ Full mode — technical reference");
    });

    // Drawer (favorites / recent)
    document.getElementById("favToggle").addEventListener("click", () => openDrawer("favs"));
    document.getElementById("recentToggle").addEventListener("click", () => openDrawer("recent"));
    document.getElementById("drawerClose").addEventListener("click", closeDrawer);
    document.getElementById("drawerOverlay").addEventListener("click", closeDrawer);

    // Search + nav
    Search.init();
    Navigation.init();

    // Brand click → home
    document.querySelector(".brand").addEventListener("click", e => {
      e.preventDefault();
      loadTopic("home");
    });

    // First route
    routeFromHash();
    if (currentKey === "home" && !location.hash) loadTopic("home");

    // Update fav badge
    updateFavBadge();
  }

  // ---------- Hash routing ----------
  function routeFromHash() {
    const h = (location.hash || "").replace(/^#\/?/, "");
    if (h && cheats[h]) loadTopic(h);
    else if (!h) loadTopic("home");
  }
  function setHash(key) {
    if (location.hash !== "#" + key) {
      history.pushState(null, "", "#" + key);   // pushState → back button works
    }
  }

  // ---------- Load topic ----------
  function loadTopic(key) {
    if (!cheats[key]) key = "home";
    currentKey = key;
    setHash(key);
    Navigation.setActive(key);
    Navigation.renderPrevNext(key);

    const content = document.getElementById("content");
    content.innerHTML = cheats[key].isHome ? renderHome() : renderTopic(cheats[key]);
    content.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "smooth" });

    wireCodeBlocks(content);
    wireFavButton(content, key);
    wireQuiz(key, cheats[key]);

    content.querySelectorAll("a[data-related]").forEach(a =>
      a.addEventListener("click", e => { e.preventDefault(); loadTopic(a.dataset.related); })
    );

    if (key !== "home") Store.pushRecent(key);

    Navigation.refreshFavStars();
    updateFavBadge();
  }

  // ---------- Examples section ----------
  // If a topic has an `examples` array (each item: {label, code, output}),
  // render each as its own labeled sub-section with its own code + output
  // blocks. Otherwise fall back to the single example/output fields.
  function examplesSection(t) {
    if (Array.isArray(t.examples) && t.examples.length) {
      let inner = "";
      t.examples.forEach((ex) => {
        inner += `<div class="example-group">`;
        if (ex.label) {
          inner += `<h3 class="example-label">${escapeHtml(ex.label)}</h3>`;
        }
        if (ex.code)   inner += codeBlock(ex.code, "java");
        if (ex.output) inner += `<div class="example-output-label">Output</div>` + codeBlock(ex.output, "text");
        inner += `</div>`;
      });
      return section("Examples", inner);
    }
    // Fallback: single example + output
    return (
      (t.example ? section("Example", codeBlock(t.example, "java")) : "") +
      (t.output  ? section("Output",  codeBlock(t.output,  "text")) : "")
    );
  }

  // ---------- Mode-aware topic render dispatcher ----------
  function renderTopic(t) {
    return Store.getMode() === "simple" ? renderTopicSimple(t) : renderTopicFull(t);
  }

  // ---------- Simple mode — beginner view ----------
  // Shows: plain-English explanation + example + output + common mistakes + related
  function renderTopicSimple(t) {
    return (
      `<div class="topic-header">` +
        `<h1>${escapeHtml(t.title)}</h1>` +
        favBtnHtml(currentKey) +
      `</div>` +
      `<div class="topic-meta">` +
        `<span class="topic-tag tag-cat">${escapeHtml(t.category)}</span>` +
        `<span class="topic-tag tag-simple">◆ SIMPLE MODE</span>` +
      `</div>` +

      // Beginner explanation is the hero section in simple mode
      (t.beginnerExplanation
        ? simpleOverviewSection(t.beginnerExplanation)
        : section("Overview", `<p class="section-description">${escapeHtml(t.description)}</p>`)) +

      // Show a quick-reference syntax hint if available
      (t.syntax ? section("Quick Syntax", codeBlock(t.syntax, "java")) : "") +

      // Examples (supports multiple labeled examples OR a single example)
      examplesSection(t) +

      // Common mistakes are especially useful for beginners
      (t.commonMistakes?.length ? section("Common Mistakes", mistakeList(t.commonMistakes)) : "") +

      // Let them keep exploring
      (t.related?.length ? section("Related Topics", relatedList(t.related)) : "") +
      quizSection(currentKey, t) +

      // Nudge to full mode
      `<div class="mode-nudge">` +
        `Want the full technical reference — syntax details, parameters, return values, C++ equivalents?` +
        ` <button class="mode-nudge-btn" id="switchToFull">Switch to Full Mode →</button>` +
      `</div>`
    );
  }

  // ---------- Full mode — technical reference ----------
  function renderTopicFull(t) {
    return (
      `<div class="topic-header">` +
        `<h1>${escapeHtml(t.title)}</h1>` +
        favBtnHtml(currentKey) +
      `</div>` +
      `<div class="topic-meta">` +
        `<span class="topic-tag tag-cat">${escapeHtml(t.category)}</span>` +
        `<span class="topic-tag">Java</span>` +
        (t.cpp ? `<span class="topic-tag">C++ equiv ✓</span>` : "") +
      `</div>` +

      section("Description", `<p class="section-description">${escapeHtml(t.description)}</p>`) +
      (t.syntax      ? section("Syntax",            codeBlock(t.syntax, "java"))  : "") +
      (t.parameters?.length ? section("Parameters / Keywords", paramTable(t.parameters)) : "") +
      (t.returnValue ? section("Return Value",      `<p>${escapeHtml(t.returnValue)}</p>`)  : "") +
      (t.methods?.length    ? section("Methods",    methodList(t.methods))        : "") +
      examplesSection(t) +
      (t.commonMistakes?.length ? section("Common Mistakes", mistakeList(t.commonMistakes)) : "") +
      (t.cpp         ? section("Equivalent in C++", codeBlock(t.cpp, "cpp"))      : "") +
      (t.related?.length    ? section("Related Topics",  relatedList(t.related))  : "") +
      quizSection(currentKey, t) +
      bookRefSection(currentKey)
    );
  }

  // ---------- Simple-mode overview section ----------
  function simpleOverviewSection(text) {
    if (!text) return "";
    const paragraphs = text
      .split(/\n\n+/)
      .map(p => p.trim())
      .filter(Boolean)
      .map(p => `<p>${escapeHtml(p)}</p>`)
      .join("");
    return (
      `<section class="section simple-overview">` +
      `<h2>What is this?</h2>` +
      `<div class="beginner-body">${paragraphs}</div>` +
      `</section>`
    );
  }

  // ---------- Quiz section (self-test) ----------
  // Renders interactive quiz questions for topics that have a `quiz` array.
  // Each quiz item: { question, options: [...], answer: index, explanation }
  // If a topic has more than 5 questions, 5 are randomly selected each render.
  // User selects answers, clicks "Check Answers", sees score + explanations.
  // Score is saved to localStorage.
  //
  // We track which questions were selected in `currentQuiz` so the Check button
  // knows which ones to grade (the data indices may not be 0..4 if shuffled).
  let currentQuiz = null;  // { key, questions: [...selected question objects...] }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function quizSection(key, t) {
    if (!t.quiz || !t.quiz.length) return "";
    const score = Store.getQuizScores()[key];
    const answered = score && score.answered;

    // Select up to 5 questions, shuffled if there are more
    const MAX_Q = 5;
    let questions;
    if (t.quiz.length <= MAX_Q) {
      questions = shuffle(t.quiz);  // shuffle order even if all fit
    } else {
      questions = shuffle(t.quiz).slice(0, MAX_Q);  // pick 5 random
    }
    // Also shuffle the options within each question (and adjust answer index)
    questions = questions.map(q => {
      const indexed = q.options.map((opt, i) => ({ opt, isAnswer: i === q.answer }));
      const shuffled = shuffle(indexed);
      return {
        question: q.question,
        options: shuffled.map(x => x.opt),
        answer: shuffled.findIndex(x => x.isAnswer),
        explanation: q.explanation,
      };
    });

    // Remember the selected questions so wireQuiz can grade them
    currentQuiz = { key, questions };

    let html = `<section class="section quiz-section">`;
    html += `<h2>Quiz <span class="quiz-subtitle">— Test Yourself (${questions.length} questions)</span></h2>`;

    if (answered) {
      const pct = Math.round((score.correct / score.total) * 100);
      const grade = pct === 100 ? "PERFECT!" : pct >= 60 ? "PASSED" : "KEEP PRACTICING";
      html += `<div class="quiz-result quiz-result-${pct >= 60 ? 'pass' : 'fail'}">`;
      html += `<div class="quiz-score">Score: ${score.correct}/${score.total} (${pct}%)</div>`;
      html += `<div class="quiz-grade">${grade}</div>`;
      html += `<button class="quiz-retake-btn" id="quizRetake">↻ Retake Quiz</button>`;
      html += `</div>`;
    }

    html += `<div class="quiz-body" id="quizBody">`;
    questions.forEach((q, qi) => {
      html += `<div class="quiz-question" data-q="${qi}">`;
      html += `<div class="quiz-q-text"><span class="quiz-q-num">Q${qi+1}.</span> ${escapeHtml(q.question)}</div>`;
      html += `<div class="quiz-options">`;
      q.options.forEach((opt, oi) => {
        html += `<label class="quiz-option" data-q="${qi}" data-o="${oi}">`;
        html += `<input type="radio" name="quiz-q${qi}" value="${oi}" ${answered ? 'disabled' : ''}>`;
        html += `<span class="quiz-option-text">${escapeHtml(opt)}</span>`;
        html += `</label>`;
      });
      html += `</div>`;
      html += `<div class="quiz-explanation" id="quiz-explain-${qi}" hidden>`;
      html += `<strong>Explanation:</strong> ${escapeHtml(q.explanation)}`;
      html += `</div>`;
      html += `</div>`;
    });
    html += `</div>`;

    if (!answered) {
      html += `<button class="quiz-check-btn" id="quizCheck">Check Answers</button>`;
    }

    html += `</section>`;
    return html;
  }

  // ---------- Wire quiz interactions (called after render) ----------
  function wireQuiz(key, t) {
    if (!t.quiz || !t.quiz.length) return;
    // Use the questions that were actually displayed (shuffled subset)
    const questions = currentQuiz?.questions || t.quiz;
    const checkBtn = document.getElementById("quizCheck");
    const retakeBtn = document.getElementById("quizRetake");

    if (checkBtn) {
      checkBtn.addEventListener("click", () => {
        let correct = 0;
        questions.forEach((q, qi) => {
          const selected = document.querySelector(`input[name="quiz-q${qi}"]:checked`);
          const selectedIdx = selected ? parseInt(selected.value, 10) : -1;
          const isCorrect = selectedIdx === q.answer;

          // Mark each option as correct/incorrect
          document.querySelectorAll(`.quiz-option[data-q="${qi}"]`).forEach((label) => {
            const oi = parseInt(label.dataset.o, 10);
            label.classList.add("locked");
            if (oi === q.answer) label.classList.add("correct");
            if (oi === selectedIdx && !isCorrect) label.classList.add("wrong");
          });

          // Show explanation
          const explain = document.getElementById(`quiz-explain-${qi}`);
          if (explain) {
            explain.hidden = false;
            explain.classList.add(isCorrect ? "explain-correct" : "explain-wrong");
          }

          if (isCorrect) correct++;
        });

        Store.setQuizScore(key, correct, questions.length);
        updateQuizBadge();
        toast(`Quiz: ${correct}/${questions.length} correct`);

        // Replace the check button with the result display
        checkBtn.remove();
        const score = Store.getQuizScores()[key];
        const pct = Math.round((score.correct / score.total) * 100);
        const grade = pct === 100 ? "PERFECT!" : pct >= 60 ? "PASSED" : "KEEP PRACTICING";
        const resultDiv = document.createElement("div");
        resultDiv.className = `quiz-result quiz-result-${pct >= 60 ? 'pass' : 'fail'}`;
        resultDiv.innerHTML = `<div class="quiz-score">Score: ${score.correct}/${score.total} (${pct}%)</div>` +
                              `<div class="quiz-grade">${grade}</div>` +
                              `<button class="quiz-retake-btn" id="quizRetake">↻ Retake Quiz</button>`;
        const quizBody = document.getElementById("quizBody");
        quizBody.parentNode.insertBefore(resultDiv, quizBody);
        // Wire the new retake button
        document.getElementById("quizRetake")?.addEventListener("click", () => {
          Store.clearQuizScore(key);
          loadTopic(key); // re-render with fresh random questions
        });
      });
    }

    if (retakeBtn) {
      retakeBtn.addEventListener("click", () => {
        Store.clearQuizScore(key);
        loadTopic(key); // re-render
      });
    }
  }

  function updateQuizBadge() {
    const scores = Store.getQuizScores();
    const count = Object.keys(scores).filter(k => scores[k]?.answered).length;
    // Could add a badge to the sidebar or topbar if desired
  }

  // ---------- Book Reference footer ----------
  function bookRefSection(key) {
    const refs = (typeof bookRefs !== "undefined") ? bookRefs[key] : null;
    if (!refs || !refs.length) return "";
    const items = refs.map(r => `<li><code>${escapeHtml(r)}</code></li>`).join("");
    return (
      `<section class="section book-ref-section">` +
      `<h2>Book Reference</h2>` +
      `<div class="book-ref-intro">` +
        `<span class="book-icon">📖</span> ` +
        `<span class="book-ref-title">Introduction to Java Programming and Data Structures</span>` +
        `<span class="book-ref-author"> — 12th ed. (Pearson, 2020)</span>` +
      `</div>` +
      `<ul class="book-ref-list">${items}</ul>` +
      `<a href="#" data-related="liang-textbook-companion" class="book-ref-link">View full chapter index →</a>` +
      `</section>`
    );
  }

  // ---------- Section helpers ----------
  function section(title, body) {
    return `<section class="section"><h2>${escapeHtml(title)}</h2>${body}</section>`;
  }

  function paramTable(rows) {
    return (
      `<div class="table-wrap"><table class="info-table">` +
      `<thead><tr><th>Token</th><th>Meaning</th></tr></thead><tbody>` +
      rows.map(r => `<tr><td><code>${escapeHtml(r[0])}</code></td><td>${escapeHtml(r[1])}</td></tr>`).join("") +
      `</tbody></table></div>`
    );
  }

  function methodList(methods) {
    return `<ul>${methods.map(m => methodListItem(m)).join("")}</ul>`;
  }

  function methodListItem(m) {
    const escaped   = escapeHtml(m);
    const jumpMatch = m.match(/Jump to:\s*(.+)$/);
    if (!jumpMatch) return `<li><code>${escaped}</code></li>`;

    const names = jumpMatch[1].split(",").map(s => s.trim()).filter(Boolean);
    const links = names.map(name => {
      const cleanName = name.replace(/\s*\([^)]*\)\s*$/, "").trim();
      const key = Object.keys(cheats).find(
        k => cheats[k].title.toLowerCase() === cleanName.toLowerCase()
      );
      return key
        ? `<a href="#" data-related="${key}" style="color:var(--accent);font-weight:bold">${escapeHtml(cleanName)}</a>`
        : `<span style="color:var(--text-muted)">${escapeHtml(cleanName)}</span>`;
    }).join(", ");

    const before = m.slice(0, m.indexOf("Jump to:"));
    return `<li><code>${escapeHtml(before)}</code> → Jump to: ${links}</li>`;
  }

  function mistakeList(items) {
    return `<ul class="mistake-list">${items.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>`;
  }

  function relatedList(related) {
    return (
      `<div class="related-list">` +
      related
        .map(k => cheats[k]
          ? `<a href="#" data-related="${k}">${escapeHtml(cheats[k].title)}</a>`
          : `<span>${escapeHtml(k)}</span>`)
        .join("") +
      `</div>`
    );
  }

  // ---------- Code block with Copy / Expand / Collapse ----------
  function codeBlock(code, lang) {
    const id = "cb" + Math.random().toString(36).slice(2, 9);
    const highlighted = highlightJava(code, lang);
    return (
      `<div class="code-block" id="${id}">` +
        `<div class="code-head">` +
          `<span class="code-lang">${escapeHtml(lang)}</span>` +
          `<div class="code-btns">` +
            `<button class="code-btn code-copy" data-target="${id}" title="Copy">` +
              copyIcon() + `<span class="lbl">Copy</span>` +
            `</button>` +
            `<button class="code-btn code-expand" data-target="${id}" title="Collapse">` +
              expandIcon() + `<span class="lbl"></span>` +
            `</button>` +
          `</div>` +
        `</div>` +
        `<pre class="code-body" id="${id}-body">${highlighted}</pre>` +
      `</div>`
    );
  }

  function copyIcon() {
    return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
  }
  function expandIcon() {
    return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
  }

  function wireCodeBlocks(root) {
    root.querySelectorAll(".code-copy").forEach(btn => {
      btn.addEventListener("click", async () => {
        const body = document.getElementById(btn.dataset.target + "-body");
        const text = body?.innerText || body?.textContent || "";
        try {
          await navigator.clipboard.writeText(text);
          toast("Copied to clipboard");
          const lbl = btn.querySelector(".lbl");
          const old = lbl.textContent;
          lbl.textContent = "Copied!";
          setTimeout(() => (lbl.textContent = old), 1200);
        } catch {
          toast("Copy failed — select manually");
        }
      });
    });

    root.querySelectorAll(".code-expand").forEach(btn => {
      btn.addEventListener("click", () => {
        document.getElementById(btn.dataset.target)?.classList.toggle("collapsed");
      });
    });

    // Wire the "Switch to Full Mode" nudge in simple view
    const fullBtn = root.querySelector("#switchToFull");
    if (fullBtn) {
      fullBtn.addEventListener("click", () => {
        Store.setMode("full");
        document.documentElement.setAttribute("data-mode", "full");
        updateModeLabel();
        loadTopic(currentKey);
        toast("◈ Full mode — technical reference");
      });
    }
  }

  // ---------- Java + C++ syntax highlighter ----------
  function highlightJava(code, lang) {
    const JAVA_KW = new Set([
      "abstract","assert","boolean","break","byte","case","catch","char","class","const",
      "continue","default","do","double","else","enum","extends","final","finally","float",
      "for","goto","if","implements","import","instanceof","int","interface","long","native",
      "new","package","private","protected","public","return","short","static","strictfp",
      "super","switch","synchronized","this","throw","throws","transient","try","void",
      "volatile","while","var","record","yield","sealed","permits","non-sealed","when",
    ]);
    const CPP_KW = new Set([
      "auto","break","case","catch","class","const","constexpr","continue","default","delete",
      "do","double","else","enum","explicit","extern","false","final","float","for","friend",
      "goto","if","inline","int","long","namespace","new","noexcept","nullptr","operator",
      "override","private","protected","public","register","return","short","signed","sizeof",
      "static","struct","switch","template","this","throw","true","try","typedef","typeid",
      "typename","union","unsigned","using","virtual","void","volatile","while","include",
      "define","ifdef","endif","pragma","std",
    ]);
    const JAVA_TYPE = new Set([
      "String","Object","Integer","Double","Long","Boolean","Character","Float","Short","Byte",
      "Math","System","List","ArrayList","Map","HashMap","TreeMap","Set","HashSet","TreeSet",
      "Queue","Deque","ArrayDeque","Scanner","StringBuilder","StringBuffer",
      "Iterable","Iterator","Comparable","Comparator","Optional","Stream",
      "LocalDate","LocalTime","LocalDateTime","ZonedDateTime","Instant","Duration","Period",
      "Path","Files","Paths","BufferedReader","BufferedWriter","FileReader","FileWriter",
      "InputStream","OutputStream","Reader","Writer",
      "Thread","Runnable","Callable","ExecutorService","Executors","Future","SequencedCollection",
      "AtomicInteger","AtomicLong","AtomicBoolean","ConcurrentHashMap",
      "HttpClient","HttpRequest","HttpResponse","URI","URL","Socket","ServerSocket",
      "Connection","Statement","PreparedStatement","ResultSet","DriverManager",
      "Application","Stage","Scene","VBox","HBox","BorderPane","GridPane","StackPane",
      "Button","Label","TextField","TableView","ListView",
      "Exception","RuntimeException","IOException","SQLException","IllegalArgumentException",
      "NullPointerException","ArithmeticException","ClassCastException",
      "DateTimeFormatter","ChronoUnit","ZoneId","Random","SecureRandom","ThreadLocalRandom",
      "DateTimeException","NumberFormatException","SoundClip",
    ]);

    if (lang !== "java" && lang !== "cpp") return escapeHtml(code);

    const KW   = lang === "cpp" ? CPP_KW   : JAVA_KW;
    const TYPE = lang === "cpp" ? new Set() : JAVA_TYPE;

    const re =
      /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(#[^\n]*)|(\"(?:\\.|[^\"\\])*\"|'(?:\\.|[^'\\])*')|(@[A-Za-z_]\w*)|([A-Za-z_]\w*)|(\d[\d_]*\.?\d*[fFdDlL]?)|(\s+)|([^\sA-Za-z_0-9])/g;

    let out = "", m;
    while ((m = re.exec(code)) !== null) {
      const [, com, pre, str, anno, word, num, ws, other] = m;
      if (com)        out += `<span class="tok-com">${escapeHtml(com)}</span>`;
      else if (pre)   out += `<span class="tok-com">${escapeHtml(pre)}</span>`;  // C++ preprocessor
      else if (str)   out += `<span class="tok-str">${escapeHtml(str)}</span>`;
      else if (anno)  out += `<span class="tok-anno">${escapeHtml(anno)}</span>`;
      else if (word) {
        if (KW.has(word))        out += `<span class="tok-kw">${escapeHtml(word)}</span>`;
        else if (TYPE.has(word)) out += `<span class="tok-type">${escapeHtml(word)}</span>`;
        else                     out += escapeHtml(word);
      }
      else if (num)   out += `<span class="tok-num">${escapeHtml(num)}</span>`;
      else if (ws)    out += ws;
      else            out += escapeHtml(other);
    }
    return out;
  }

  // ---------- Home page ----------
  function renderHome() {
    const stats = computeStats();
    return (
      `<div class="home-hero">` +
        `<img src="assets/icons/logo.png" alt="Java Cheats logo" class="home-logo" />` +
        `<h1>Java Cheats Kit</h1>` +
        `<p>A fast, searchable single-page Java reference. Pick a topic from the sidebar, hit <code>/</code> to search, or browse by category below.</p>` +
        `<div class="home-stats">` +
          `<div class="home-stat"><div class="num">${stats.topics}</div><div class="lbl">Topics</div></div>` +
          `<div class="home-stat"><div class="num">${stats.cats}</div><div class="lbl">Categories</div></div>` +
          `<div class="home-stat"><div class="num">${stats.methods}</div><div class="lbl">Methods</div></div>` +
        `</div>` +
      `</div>` +
      categoryCards() +
      section("All Topics", topicGrid())
    );
  }

  function computeStats() {
    const keys    = Object.keys(cheats).filter(k => k !== "home");
    const cats    = new Set(keys.map(k => cheats[k].category));
    const methods = keys.reduce((n, k) => n + (cheats[k].methods?.length || 0), 0);
    return { topics: keys.length, cats: cats.size, methods };
  }

  function categoryCards() {
    const CAT_DESC = {
      Basics:           "Syntax, types, operators, I/O, loops, arrays, methods, recursion.",
      OOP:              "Classes, objects, inheritance, polymorphism, interfaces, enums, packages.",
      Collections:      "List, Set, Map, Queue, Deque and their implementations.",
      Utilities:        "Exceptions, files, dates, generics, regex, serialization.",
      "Modern Java":    "Lambdas, Streams, Records, Optional, var, sealed classes (Java 8–25+).",
      Concurrency:      "Threads, locks, atomic variables, executors, concurrent collections.",
      "Data Structures":"Linked lists, stacks, queues, trees, heaps, graphs.",
      Algorithms:       "Sorting, searching, Big-O notation, dynamic programming.",
      "Best Practices": "SOLID principles, design patterns, clean code, debugging.",
      Advanced:         "Reflection, modules, JARs, classpath, logging, JSON, JUnit, build tools.",
      Reference:        "Book companions and external resource indexes.",
    };

    const cats  = Object.keys(CAT_DESC);
    let html    = `<div class="cat-grid">`;

    cats.forEach(cat => {
      const count = Object.keys(cheats).filter(k => cheats[k].category === cat && k !== "home").length;
      html +=
        `<a href="#" class="cat-card" data-cat="${cat}">` +
        `<div class="cc-icon">${cat.slice(0, 2)}</div>` +
        `<h3>${cat} <span style="color:var(--text-muted);font-weight:400">· ${count}</span></h3>` +
        `<p>${CAT_DESC[cat]}</p>` +
        `</a>`;
    });
    html += `</div>`;

    // Wire listeners after the HTML is inserted — done in loadTopic's innerHTML set,
    // so we defer with a post-render microtask (cleaner than setTimeout).
    queueMicrotask(() => {
      document.querySelectorAll(".cat-card").forEach(card => {
        card.addEventListener("click", e => {
          e.preventDefault();
          const firstKey = Object.keys(cheats).find(
            k => cheats[k].category === card.dataset.cat && k !== "home"
          );
          if (firstKey) loadTopic(firstKey);
        });
      });
    });

    return html;
  }

  function topicGrid() {
    return (
      `<div class="topic-grid">` +
      Object.keys(cheats)
        .filter(k => k !== "home")
        .map(k => `<a href="#" data-related="${k}">${escapeHtml(cheats[k].title)}</a>`)
        .join("") +
      `</div>`
    );
  }

  // ---------- Favorites button on a topic ----------
  function favBtnHtml(key) {
    const isFav = Store.getFavs().includes(key);
    return (
      `<button class="topic-fav-btn${isFav ? " is-fav" : ""}" id="topicFavBtn" title="Favorite this topic">` +
      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>` +
      `</button>`
    );
  }
  function wireFavButton(root, key) {
    const btn = root.querySelector("#topicFavBtn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const nowFav = Store.toggleFav(key);
      btn.classList.toggle("is-fav", nowFav);
      Navigation.refreshFavStars();
      updateFavBadge();
      toast(nowFav ? "★ Added to favorites" : "Removed from favorites");
    });
  }

  function updateFavBadge() {
    const n     = Store.getFavs().length;
    const badge = document.getElementById("favBadge");
    badge.textContent = n;
    badge.hidden = n === 0;
  }

  // ---------- Drawer (favorites + recent) ----------
  function openDrawer(kind) {
    const drawer  = document.getElementById("drawer");
    const overlay = document.getElementById("drawerOverlay");
    const title   = document.getElementById("drawerTitle");
    const body    = document.getElementById("drawerBody");

    title.textContent = kind === "favs" ? "Favorites" : "Recently Viewed";
    const keys = kind === "favs" ? Store.getFavs() : Store.getRecent();

    body.innerHTML = !keys.length
      ? `<div class="drawer-empty">No ${kind === "favs" ? "favorites" : "recently viewed topics"} yet.</div>`
      : keys.filter(k => cheats[k]).map(k =>
          `<button class="drawer-item" data-topic="${k}">` +
          `<div>${escapeHtml(cheats[k].title)}</div>` +
          `<div class="di-cat">${escapeHtml(cheats[k].category)}</div>` +
          `</button>`
        ).join("");

    body.querySelectorAll(".drawer-item").forEach(el =>
      el.addEventListener("click", () => { loadTopic(el.dataset.topic); closeDrawer(); })
    );

    drawer.hidden  = false;
    overlay.hidden = false;
  }
  function closeDrawer() {
    document.getElementById("drawer").hidden         = true;
    document.getElementById("drawerOverlay").hidden  = true;
  }

  // ---------- Theme ----------
  function toggleTheme() {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    Store.setTheme(next);
    updateThemeLabel();
  }
  function updateThemeLabel() {
    const theme = document.documentElement.getAttribute("data-theme") || "dark";
    const label = document.querySelector(".toggle-label");
    if (label) label.textContent = theme === "dark" ? "DARK" : "LIGHT";
  }

  // ---------- Mode label ----------
  function updateModeLabel() {
    const mode  = Store.getMode();
    const label = document.querySelector(".mode-label");
    if (label) label.textContent = mode === "simple" ? "SIMPLE" : "FULL";
  }

  // ---------- Toast ----------
  let toastTimer = null;
  function toast(msg) {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.hidden = false;
    requestAnimationFrame(() => el.classList.add("show"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.classList.remove("show");
      setTimeout(() => (el.hidden = true), 250);
    }, 1800);
  }

  return { init, loadTopic, routeFromHash, closeDrawer, toast };
})();

// ---------- Boot ----------
document.addEventListener("DOMContentLoaded", App.init);
