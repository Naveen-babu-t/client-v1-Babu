document.addEventListener("DOMContentLoaded", () => {
  // Set footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Contact form demo submit (Phase 1 static)
  const form = document.getElementById("quoteForm");
  const status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "✅ Demo only (Phase 1 static): Request captured locally.";
      form.reset();
    });
  }
  // Theme Toggle Logic
  const themeBtn = document.getElementById("themeToggle");
  const moonIcon = themeBtn ? themeBtn.querySelector(".moon-icon") : null;
  const sunIcon = themeBtn ? themeBtn.querySelector(".sun-icon") : null;

  // Check local storage or system preference
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    updateIcons("light");
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      let theme = document.documentElement.getAttribute("data-theme");
      if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        updateIcons("dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        updateIcons("light");
      }
    });
  }

  function updateIcons(theme) {
    if (!moonIcon || !sunIcon) return;
    if (theme === "light") {
      moonIcon.style.display = "none";
      sunIcon.style.display = "block";
    } else {
      moonIcon.style.display = "block";
      sunIcon.style.display = "none";
    }
  }

  // Scroll Animations using Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));
});
