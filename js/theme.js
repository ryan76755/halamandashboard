// Fitur Dark/Light Mode
function initTheme() {
    const themeToggleBtn = document.getElementById("themeToggle");
    if (!themeToggleBtn) return;
  
    const applyTheme = (mode) => {
      document.documentElement.setAttribute("data-theme", mode);
      themeToggleBtn.textContent = mode === "dark" ? "☀️" : "🌙";
    };
  
    let savedTheme = null;
    try { savedTheme = localStorage.getItem("theme"); } catch (e) { /* storage diblokir */ }
  
    const systemPrefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));
  
    themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) { /* storage diblokir */ }
    });
  }