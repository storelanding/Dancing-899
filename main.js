// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Template filters
document.querySelectorAll(".filter").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    document.querySelectorAll(".tpl").forEach((t) => {
      const show = f === "all" || t.dataset.cat.split(" ").includes(f);
      t.classList.toggle("hide", !show);
      if (show) t.classList.add("in");
    });
  })
);

// Current year
document.querySelectorAll(".year").forEach((el) => (el.textContent = new Date().getFullYear()));
