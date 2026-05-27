(() => {
  const storageKey = "sunderfolk-theme";
  const darkValue = "dark";
  const lightValue = "light";

  function getPreferredTheme() {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === darkValue || saved === lightValue) {
      return saved;
    }
    return darkValue;
  }

  function setTheme(theme) {
    document.body.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);
    const button = document.querySelector(".theme-toggle");
    if (button) {
      button.textContent = theme === darkValue ? "切换昼间" : "切换夜间";
      button.setAttribute("aria-pressed", theme === darkValue ? "true" : "false");
    }
  }

  function buildToggle() {
    const button = document.createElement("button");
    button.className = "theme-toggle";
    button.type = "button";
    button.addEventListener("click", () => {
      const nextTheme = document.body.dataset.theme === darkValue ? lightValue : darkValue;
      setTheme(nextTheme);
    });
    document.body.appendChild(button);
  }

  function init() {
    buildToggle();
    setTheme(getPreferredTheme());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
