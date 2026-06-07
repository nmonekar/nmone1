/* =========================
   2026 LUXURY RESTAURANT UI
   SCRIPT (NO FRAMEWORK)
========================= */

/* =========================
   SMOOTH SCROLL (Luxury feel)
========================= */
document.querySelectorAll('a, .nav-links li, .btn').forEach(el => {
  el.addEventListener('click', () => {
    window.scrollTo({
      top: window.scrollY + 1,
      behavior: "smooth"
    });
  });
});

/* =========================
   MENU TABS SWITCHING
========================= */
const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".food-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Simple luxury fade animation
    cards.forEach(card => {
      card.style.opacity = "0.3";
      card.style.transform = "scale(0.95)";

      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      }, 300);
    });
  });
});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const revealElements = document.querySelectorAll(
  ".food-card, .section-header, .testimonial, .carousel-item"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    } else {
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateY(40px)";
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "1s cubic-bezier(0.2, 0.8, 0.2, 1)";
  observer.observe(el);
});

/* =========================
   FLOATING LIGHT / MOUSE GLOW
========================= */
const glow = document.createElement("div");
glow.style.position = "fixed";
glow.style.width = "200px";
glow.style.height = "200px";
glow.style.borderRadius = "50%";
glow.style.background = "radial-gradient(circle, rgba(212,175,55,0.15), transparent)";
glow.style.pointerEvents = "none";
glow.style.zIndex = "0";
glow.style.transform = "translate(-50%, -50%)";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* =========================
   PARALLAX HERO EFFECT
========================= */
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  let offset = window.pageYOffset;

  hero.style.backgroundPositionY = offset * 0.5 + "px";
});

/* =========================
   BUTTON MICRO INTERACTIONS
========================= */
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

/* =========================
   FLOATING PARTICLES (LIGHT EFFECT)
========================= */
function createParticle() {
  const particle = document.createElement("div");

  particle.style.position = "absolute";
  particle.style.width = "6px";
  particle.style.height = "6px";
  particle.style.borderRadius = "50%";
  particle.style.background = "rgba(212,175,55,0.5)";
  particle.style.top = Math.random() * window.innerHeight + "px";
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.opacity = "0.5";
  particle.style.filter = "blur(1px)";
  particle.style.transition = "all 6s linear";

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.style.transform = "translateY(-200px)";
    particle.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    particle.remove();
  }, 6000);
}

setInterval(createParticle, 800);

/* =========================
   RESERVATION SUBMIT (UI ONLY)
========================= */
const form = document.querySelector("form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const btn = form.querySelector("button");
  btn.textContent = "در حال ثبت رزرو...";

  setTimeout(() => {
    btn.textContent = "رزرو ثبت شد ✓";
    btn.style.background = "#C08A5B";
  }, 1500);
});
