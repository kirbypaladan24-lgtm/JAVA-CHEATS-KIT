/* ===================================================================
   Java Cheats — navigation.js
   Builds sidebar from cheats data, handles sidebar clicks,
   prev/next topic, keyboard nav, breadcrumbs.
   Depends on: cheats (cheats.js), App (app.js — must be loaded first),
               escapeHtml (defined globally in app.js).
   =================================================================== */

const Navigation = (() => {
  const CAT_ORDER = [
    "Home", "Basics", "OOP", "Collections", "Utilities",
    "Modern Java", "Concurrency", "Data Structures",
    "Algorithms", "Best Practices", "Advanced", "Reference",
  ];
  const CAT_ICON = {
    Home:              "JC",
    Basics:            "{}",
    OOP:               "OO",
    Collections:       "[]",
    Utilities:         "ut",
    "Modern Java":     "MJ",
    Concurrency:       ">>",
    "Data Structures": "DS",
    Algorithms:        "Ax",
    "Best Practices":  "BP",
    Advanced:          "Av",
    Reference:         "Rf",
  };

  let orderedKeys = [];
  let activeKey   = "home";

  // ---------- Build sidebar ----------
  function build() {
    const byCat = {};
    Object.keys(cheats).forEach(key => {
      const cat = cheats[key].category;
      (byCat[cat] = byCat[cat] || []).push(key);
    });

    const nav = document.getElementById("sidebarNav");
    nav.innerHTML = "";

    CAT_ORDER.forEach(cat => {
      if (!byCat[cat]) return;

      const block = document.createElement("div");
      block.className = "cat-block";

      const title = document.createElement("div");
      title.className = "cat-title";
      title.textContent = cat;
      block.appendChild(title);

      byCat[cat].forEach(key => {
        orderedKeys.push(key);
        const item = document.createElement("button");
        item.className    = "cat-item";
        item.dataset.topic = key;
        item.innerHTML =
          `<span>${escapeHtml(cheats[key].title)}</span>` +
          `<svg class="fav-star" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
        item.addEventListener("click", () => {
          App.loadTopic(key);
          closeMobileSidebar();
        });
        block.appendChild(item);
      });

      nav.appendChild(block);
    });

    refreshFavStars();
  }

  // ---------- Active highlight + breadcrumb ----------
  function setActive(key) {
    activeKey = key;
    document.querySelectorAll(".cat-item").forEach(el => {
      el.classList.toggle("active", el.dataset.topic === key);
    });
    const active = document.querySelector(".cat-item.active");
    if (active) active.scrollIntoView({ block: "nearest", behavior: "smooth" });

    const bc = document.getElementById("breadcrumb");
    const t  = cheats[key];
    if (key === "home" || !t) {
      bc.innerHTML = `<span class="cur">Home</span>`;
    } else {
      bc.innerHTML =
        `<a href="#" data-topic="home">Home</a>` +
        `<span class="sep">›</span>` +
        `<a href="#" data-topic-cat="${t.category}">${t.category}</a>` +
        `<span class="sep">›</span>` +
        `<span class="cur">${escapeHtml(t.title)}</span>`;
    }

    bc.querySelectorAll("a[data-topic]").forEach(a =>
      a.addEventListener("click", e => { e.preventDefault(); App.loadTopic(a.dataset.topic); })
    );
    bc.querySelectorAll("a[data-topic-cat]").forEach(a =>
      a.addEventListener("click", e => {
        e.preventDefault();
        const firstKey = orderedKeys.find(k => cheats[k].category === a.dataset.topicCat && k !== "home");
        if (firstKey) App.loadTopic(firstKey);
      })
    );
  }

  // ---------- Prev / Next ----------
  function renderPrevNext(key) {
    const idx  = orderedKeys.indexOf(key);
    const prev = idx > 0 ? orderedKeys[idx - 1] : null;
    const next = idx >= 0 && idx < orderedKeys.length - 1 ? orderedKeys[idx + 1] : null;
    const box  = document.getElementById("prevNext");
    let html   = "";

    if (prev) {
      html +=
        `<a href="#" class="prev" data-topic="${prev}">` +
        `<div class="pn-label">← Previous</div>` +
        `<div class="pn-title">${escapeHtml(cheats[prev].title)}</div></a>`;
    } else {
      html += `<span></span>`;
    }
    if (next) {
      html +=
        `<a href="#" class="next" data-topic="${next}">` +
        `<div class="pn-label">Next →</div>` +
        `<div class="pn-title">${escapeHtml(cheats[next].title)}</div></a>`;
    }
    box.innerHTML = html;
    box.querySelectorAll("a[data-topic]").forEach(a =>
      a.addEventListener("click", e => { e.preventDefault(); App.loadTopic(a.dataset.topic); })
    );
  }

  // ---------- Favorites star sync ----------
  function refreshFavStars() {
    const favs = Store.getFavs();
    document.querySelectorAll(".cat-item").forEach(el => {
      el.classList.toggle("is-fav", favs.includes(el.dataset.topic));
    });
  }

  // ---------- Mobile sidebar ----------
  function openMobileSidebar()  {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("sidebarOverlay").hidden = false;
  }
  function closeMobileSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarOverlay").hidden = true;
  }
  function toggleSidebar() {
    document.getElementById("sidebar").classList.contains("open")
      ? closeMobileSidebar()
      : openMobileSidebar();
  }

  // ---------- Keyboard nav ----------
  function onKey(e) {
    const tag     = (e.target.tagName || "").toLowerCase();
    const isInput = tag === "input" || tag === "textarea";

    if (e.key === "/" && !isInput) {
      e.preventDefault();
      document.getElementById("searchInput").focus();
      return;
    }
    if (e.key === "Escape") {
      Search.close();
      closeMobileSidebar();
      App.closeDrawer();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
      e.preventDefault();
      toggleSidebar();
      return;
    }
    if (isInput) return;

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const idx  = orderedKeys.indexOf(activeKey);
      if (idx < 0) return;
      const dest = e.key === "ArrowDown" ? orderedKeys[idx + 1] : orderedKeys[idx - 1];
      if (dest) App.loadTopic(dest);
      return;
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      if (e.target?.classList?.contains("code-body")) return;
      e.preventDefault();
      const idx  = orderedKeys.indexOf(activeKey);
      const dest = e.key === "ArrowRight" ? orderedKeys[idx + 1] : orderedKeys[idx - 1];
      if (dest) App.loadTopic(dest);
      return;
    }
  }

  function init() {
    build();
    document.getElementById("menuToggle").addEventListener("click", toggleSidebar);
    document.getElementById("sidebarOverlay").addEventListener("click", closeMobileSidebar);
    document.addEventListener("keydown", onKey);
    window.addEventListener("hashchange", () => App.routeFromHash());
  }

  return { init, setActive, renderPrevNext, refreshFavStars, orderedKeys: () => orderedKeys };
})();
