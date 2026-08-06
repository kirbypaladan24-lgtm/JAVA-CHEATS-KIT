/* ===================================================================
   Java Cheats — search.js
   Instant in-memory search across titles, methods, syntax, keywords.
   Builds an index from cheats data on first use, filters live as you
   type. Results are grouped: Topics / Methods / Syntax / Keywords.
   =================================================================== */

const Search = (() => {
  const MAX_PER_GROUP = 8;
  let index = [];        // flat list of {type, topic, topicTitle, label, sub, score}
  let activeIdx = -1;    // highlighted result index
  let currentMatches = [];

  // ---------- Build index ----------
  function buildIndex() {
    index = [];
    Object.keys(cheats).forEach((key) => {
      const t = cheats[key];

      // Topic itself
      index.push({
        type: "Topic",
        topic: key,
        label: t.title,
        sub: t.category,
        terms: (t.title + " " + t.category + " " + t.description).toLowerCase(),
      });

      // Methods
      (t.methods || []).forEach((m) => {
        index.push({
          type: "Method",
          topic: key,
          label: m,
          sub: `${t.title}`,
          terms: (m + " " + t.title).toLowerCase(),
        });
      });

      // Parameters (each row is a name + desc)
      (t.parameters || []).forEach(([name, desc]) => {
        index.push({
          type: "Syntax",
          topic: key,
          label: name,
          sub: `${t.title} — ${desc}`,
          terms: (name + " " + desc + " " + t.title).toLowerCase(),
        });
      });

      // Syntax block lines — tokenize the whole syntax string
      if (t.syntax) {
        const lines = String(t.syntax).split(/\n/);
        lines.forEach((line) => {
          const trimmed = line.trim();
          if (!trimmed || trimmed.length < 3) return;
          index.push({
            type: "Syntax",
            topic: key,
            label: trimmed.length > 70 ? trimmed.slice(0, 70) + "…" : trimmed,
            sub: t.title,
            terms: (trimmed + " " + t.title).toLowerCase(),
          });
        });
      }

      // Common-mistake keywords
      (t.commonMistakes || []).forEach((m) => {
        index.push({
          type: "Keyword",
          topic: key,
          label: m.length > 80 ? m.slice(0, 80) + "…" : m,
          sub: `${t.title} · common mistake`,
          terms: (m + " " + t.title).toLowerCase(),
        });
      });

      // C++ equivalent line
      if (t.cpp) {
        index.push({
          type: "C++",
          topic: key,
          label: String(t.cpp).split("\n")[0],
          sub: `${t.title} · C++ equivalent`,
          terms: (t.cpp + " " + t.title).toLowerCase(),
        });
      }
    });
  }

  // ---------- Query ----------
  function search(q) {
    q = q.trim().toLowerCase();
    if (!q) return [];

    // Score every index entry that contains all words.
    // Earlier matches (label startsWith) rank higher.
    const words = q.split(/\s+/).filter(Boolean);
    const scored = [];

    for (const entry of index) {
      // every word must be present somewhere in entry.terms
      let ok = true;
      for (const w of words) {
        if (!entry.terms.includes(w)) { ok = false; break; }
      }
      if (!ok) continue;

      let score = 0;
      // label startsWith query → very strong
      if (entry.label.toLowerCase().startsWith(q)) score += 100;
      // label contains query → strong
      else if (entry.label.toLowerCase().includes(q)) score += 50;
      // topic title match → medium
      if (entry.label.toLowerCase() === q) score += 50;

      score += 10 - Math.min(10, words.length); // fewer words = higher

      scored.push({ ...entry, score });
    }

    scored.sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));

    // Group by type, cap per group
    const groups = {};
    const out = [];
    for (const e of scored) {
      if ((groups[e.type] || 0) >= MAX_PER_GROUP) continue;
      groups[e.type] = (groups[e.type] || 0) + 1;
      out.push(e);
    }
    return out;
  }

  // ---------- Render ----------
  function render(q) {
    const box = document.getElementById("searchResults");
    const matches = search(q);
    currentMatches = matches;
    activeIdx = matches.length ? 0 : -1;

    if (!q) { box.hidden = true; box.innerHTML = ""; return; }
    if (!matches.length) {
      box.hidden = false;
      box.innerHTML = `<div class="search-empty">No matches for "${escapeHtml(q)}"</div>`;
      return;
    }

    // Group in display order
    const order = ["Topic", "Method", "Syntax", "Keyword", "C++"];
    const grouped = {};
    matches.forEach((m) => { (grouped[m.type] = grouped[m.type] || []).push(m); });

    let html = "";
    order.forEach((type) => {
      if (!grouped[type]) return;
      html += `<div class="search-group-title">${type}</div>`;
      grouped[type].forEach((m) => {
        const flatIdx = matches.indexOf(m);
        const label = highlight(m.label, q);
        const sub = highlight(m.sub, q);
        html +=
          `<button class="search-item${flatIdx === activeIdx ? " active" : ""}" data-idx="${flatIdx}" data-topic="${m.topic}">` +
          `<div class="si-title">${label}</div>` +
          `<div class="si-sub">${sub}</div>` +
          `</button>`;
      });
    });
    box.innerHTML = html;
    box.hidden = false;

    // Wire clicks
    box.querySelectorAll(".search-item").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        activeIdx = parseInt(el.dataset.idx, 10);
        updateActive();
      });
      el.addEventListener("click", () => {
        App.loadTopic(el.dataset.topic);
        close();
      });
    });
  }

  function updateActive() {
    document.querySelectorAll(".search-item").forEach((el) => {
      el.classList.toggle("active", parseInt(el.dataset.idx, 10) === activeIdx);
    });
    // scroll active into view
    const el = document.querySelector(".search-item.active");
    if (el) el.scrollIntoView({ block: "nearest" });
  }

  function highlight(text, q) {
    const esc = escapeHtml(text);
    if (!q) return esc;
    // escape regex special chars in query
    const safe = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return esc.replace(new RegExp("(" + safe + ")", "ig"), "<mark>$1</mark>");
  }

  function moveActive(delta) {
    if (!currentMatches.length) return;
    activeIdx = (activeIdx + delta + currentMatches.length) % currentMatches.length;
    updateActive();
  }

  function chooseActive() {
    if (activeIdx >= 0 && currentMatches[activeIdx]) {
      App.loadTopic(currentMatches[activeIdx].topic);
      close();
    }
  }

  function close() {
    const input = document.getElementById("searchInput");
    const box = document.getElementById("searchResults");
    box.hidden = true;
    box.innerHTML = "";
    input.value = "";
    document.getElementById("searchClear").hidden = true;
    currentMatches = [];
    activeIdx = -1;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function init() {
    buildIndex();
    const input = document.getElementById("searchInput");
    const box = document.getElementById("searchResults");
    const clear = document.getElementById("searchClear");

    input.addEventListener("input", () => {
      clear.hidden = !input.value;
      render(input.value);
    });
    input.addEventListener("focus", () => {
      if (input.value) render(input.value);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") { e.preventDefault(); moveActive(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); moveActive(-1); }
      else if (e.key === "Enter") { e.preventDefault(); chooseActive(); }
      else if (e.key === "Escape") { close(); input.blur(); }
    });

    clear.addEventListener("click", () => { close(); input.focus(); });

    // Click outside closes results
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-wrap")) box.hidden = true;
    });
  }

  return { init, close };
})();
