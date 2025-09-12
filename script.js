// Theme Toggle 

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const storageKey = "theme";

  // Function to set theme
  function setTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      root.removeAttribute("data-theme"); // defaults to light
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    localStorage.setItem(storageKey, theme);
  }

  // Load saved theme or system preference
  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Fallback to system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }

  // Toggle button click
  toggleBtn.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    setTheme(isDark ? "light" : "dark");
  });
});