(() => {
  const root = document.documentElement;
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");

  const setPointer = (x, y) => {
    const mx = ((x / window.innerWidth) - 0.5) * 28;
    const my = ((y / window.innerHeight) - 0.5) * 22;
    root.style.setProperty("--mx", `${mx}px`);
    root.style.setProperty("--my", `${my}px`);
  };

  window.addEventListener("pointermove", (event) => {
    setPointer(event.clientX, event.clientY);
  }, { passive: true });

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    root.style.setProperty("--sy", `${y * 0.08}px`);
  }, { passive: true });

  toggle?.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.animationDelay = `${i * 80}ms`;
    observer.observe(el);
  });
})();
