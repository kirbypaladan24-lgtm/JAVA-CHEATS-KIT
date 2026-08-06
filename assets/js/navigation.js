/* ===================================================================
   Java Cheats — navigation.js
   Builds sidebar from cheats data, handles sidebar clicks,
   prev/next topic, scroll spy on sidebar, keyboard nav.
   =================================================================== */

const Navigation = (() => {
  const CAT_ORDER = ["Home", "Basics", "OOP", "Collections", "Utilities", "Modern Java", "Concurrency", "Data Structures", "Algorithms", "Best Practices", "Advanced", "Reference"];
  const CAT_ICON = {
    Home: "JC",
    Basics: "{}",
    OOP: "OO",
    Collections: "[]",
    Utilities: "ut",
    Advanced: ">>",
  };

  let orderedKeys = []; // flat list of topic keys in sidebar order (home first)
  let activeKey = "home";

  // ---------- Build sidebar ----------
  function build() {
    // Build category → [keys] mapping, in declared order
    const byCat = {};
    Object.keys(cheats).forEach((key) => {
      const cat = cheats[key].category;
      (byCat[cat] = byCat[cat] || []).push(key);
    });

    const nav = document.getElementById("sidebarNav");
    nav.innerHTML = "";

    CAT_ORDER.forEach((cat) => {
      if (!byCat[cat]) return;
      const block = document.createElement("div");
      block.className = "cat-block";

      const title = document.createElement("div");
      title.className = "cat-title";
      title.textContent = cat;
      block.appendChild(title);

      byCat[cat].forEach((key) => {
        orderedKeys.push(key);
        const item = document.createElement("button");
        item.className = "cat-item";
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

    // Sync fav stars
    refreshFavStars();
  }

  // ---------- Active highlight ----------
  function setActive(key) {
    activeKey = key;
    document.querySelectorAll(".cat-item").forEach((el) => {
      el.classList.toggle("active", el.dataset.topic === key);
    });
    // scroll the active item into view inside the sidebar
    const active = document.querySelector(".cat-item.active");
    if (active) active.scrollIntoView({ block: "nearest", behavior: "smooth" });

    // breadcrumb — on home show just "Home", otherwise "Home › Category › Title"
    const bc = document.getElementById("breadcrumb");
    const t = cheats[key];
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
    bc.querySelectorAll("a[data-topic]").forEach((a) =>
      a.addEventListener("click", (e) => {
        e.preventDefault();
        App.loadTopic(a.dataset.topic);
      })
    );
    bc.querySelectorAll("a[data-topic-cat]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const targetCat = a.dataset.topicCat;
        const firstKey = orderedKeys.find((k) => cheats[k].category === targetCat && k !== "home");
        if (firstKey) App.loadTopic(firstKey);
      });
    });
  }

  // ---------- Prev / Next ----------
  function renderPrevNext(key) {
    const idx = orderedKeys.indexOf(key);
    const prev = idx > 0 ? orderedKeys[idx - 1] : null;
    const next = idx >= 0 && idx < orderedKeys.length - 1 ? orderedKeys[idx + 1] : null;
    const box = document.getElementById("prevNext");
    let html = "";
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
    box.querySelectorAll("a[data-topic]").forEach((a) =>
      a.addEventListener("click", (e) => {
        e.preventDefault();
        App.loadTopic(a.dataset.topic);
      })
    );
  }

  // ---------- Favorites star sync in sidebar ----------
  function refreshFavStars() {
    const favs = Store.getFavs();
    document.querySelectorAll(".cat-item").forEach((el) => {
      el.classList.toggle("is-fav", favs.includes(el.dataset.topic));
    });
  }

  // ---------- Mobile sidebar ----------
  function openMobileSidebar() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("sidebarOverlay").hidden = false;
  }
  function closeMobileSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarOverlay").hidden = true;
  }
  function toggleSidebar() {
    const sb = document.getElementById("sidebar");
    if (sb.classList.contains("open")) closeMobileSidebar();
    else openMobileSidebar();
  }

  // ---------- Keyboard nav ----------
  function onKey(e) {
    const tag = (e.target.tagName || "").toLowerCase();
    const isInput = tag === "input" || tag === "textarea";

    // "/" focuses search
    if (e.key === "/" && !isInput) {
      e.preventDefault();
      document.getElementById("searchInput").focus();
      return;
    }

    // Escape closes search/drawer/mobile sidebar
    if (e.key === "Escape") {
      Search.close();
      closeMobileSidebar();
      App.closeDrawer();
      return;
    }

    // Ctrl/Cmd+B toggles sidebar (works even on desktop to collapse)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
      e.preventDefault();
      toggleSidebar();
      return;
    }

    if (isInput) return;

    // ↑ / ↓ navigate between topics
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const idx = orderedKeys.indexOf(activeKey);
      if (idx < 0) return;
      const next = e.key === "ArrowDown"
        ? orderedKeys[idx + 1]
        : orderedKeys[idx - 1];
      if (next) App.loadTopic(next);
      return;
    }

    // ← / → prev / next
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      // ignore if user is in a horizontally scrollable code block
      const srcEl = e.target;
      if (srcEl && srcEl.classList && srcEl.classList.contains("code-body")) return;
      e.preventDefault();
      const idx = orderedKeys.indexOf(activeKey);
      const dest = e.key === "ArrowRight"
        ? orderedKeys[idx + 1]
        : orderedKeys[idx - 1];
      if (dest) App.loadTopic(dest);
      return;
    }

    // Enter on a focused cat-item is automatic (button), no handler needed
  }

  // ---------- Helpers ----------
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
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
