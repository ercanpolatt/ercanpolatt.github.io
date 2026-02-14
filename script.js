// ─── MENU ICON TOGGLE ─────────────────────────────────────────
let menuIcon = document.querySelector("#menu-icon");
let navbar   = document.querySelector(".navbar");

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };
}

// ─── SCROLL: ACTIVE LINKS + STICKY HEADER ─────────────────────
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let header   = document.querySelector(".header");

window.onscroll = () => {
  // Active nav link
  sections.forEach((sec) => {
    let top    = window.scrollY;
    let offset = sec.offsetTop - 160;
    let height = sec.offsetHeight;
    let id     = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector("header nav a[href*=" + id + "]");
      if (activeLink) activeLink.classList.add("active");
    }
  });

  // Sticky header
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 80);
  }

  // Close mobile menu on scroll
  if (menuIcon && navbar) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }

  // Trigger skill bar animation
  animateSkills();
};

// ─── SKILLS ANIMATION ─────────────────────────────────────────
const skillsSection   = document.querySelector(".skills");
const skillsContainer = document.querySelector(".skills-container");
const skillProgressBars = document.querySelectorAll(".skill-progress");

function isInViewport(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.right  > 0 &&
    rect.top    < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left   < (window.innerWidth  || document.documentElement.clientWidth)
  );
}

function animateSkills() {
  if (skillsSection && skillsContainer && isInViewport(skillsSection)) {
    if (!skillsContainer.classList.contains("active")) {
      skillsContainer.classList.add("active");

      skillProgressBars.forEach((bar, index) => {
        const progress = bar.getAttribute("data-progress");
        setTimeout(() => {
          bar.style.setProperty("--progress-width", progress + "%");
        }, index * 120);
      });
    }
  }
}

// Check on load
window.addEventListener("load", () => {
  setTimeout(animateSkills, 200);
});

// ─── SMOOTH SCROLL ────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      // Close mobile menu when a link is clicked
      if (menuIcon && navbar) {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ─── RESPONSIVE UTILITIES ─────────────────────────────────────
// Window resize handler
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Close mobile menu on resize
    if (window.innerWidth > 991 && menuIcon && navbar) {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    }
    
    // Re-check skills animation
    animateSkills();
  }, 250);
});

// Touch events for better mobile interaction
if ('ontouchstart' in window) {
  document.addEventListener('touchstart', function() {}, {passive: true});
}

// ─── CERTIFICATE MODAL ────────────────────────────────────────
const certificateCards = document.querySelectorAll(".certificate-card");
const modal       = document.getElementById("certificate-modal");
const modalImage  = document.getElementById("modal-image");
const modalTitle  = document.getElementById("modal-title");
const modalIssuer = document.getElementById("modal-issuer");
const modalDate   = document.getElementById("modal-date");
const modalClose  = document.querySelector(".modal-close");
const modalPrev   = document.querySelector(".modal-prev");
const modalNext   = document.querySelector(".modal-next");

let currentCertificateIndex = 0;

const certificatesData = [
  {
    image: "certificates/promt-muhendisligi_page-0001.jpg",
    title:  "ChatGPT 2026: Prompt Mühendisliği",
    issuer: "Udemy / Atil Samancioglu",
    date:   "February 2026"
  },
  {
    image: "certificates/yuksekogretim-mezun-belgesi-sorgulama.jpg",
    title:  "Mezun Belgesi",
    issuer: "Amasya University",
    date:   "January 2026"
  },
  {
    image: "certificates/Siber_Güvenliğe_Giriş_Sertifika_page-0001.jpg",
    title:  "Siber Güvenlik Sertifikası",
    issuer: "T.C. Türkiye Bilgi Teknolojileri ve İletişim Kurumu",
    date:   "October 2025"
  },
  {
    image: "certificates/ingilizce_page-0001.jpg",
    title:  "İngilizce Sertifikası",
    issuer: "Amasya University",
    date:   "December 2022"
  },
  {
    image: "certificates/bilgiteknogiris_page-0001.jpg",
    title:  "Bilgi Teknolojileri Giriş Sertifikası",
    issuer: "T.C. Türkiye Bilgi Teknolojileri ve İletişim Kurumu",
    date:   "October 2025"
  },
  {
    image: "certificates/Ağ_Temelleri_Sertifika_page-0001.jpg",
    title:  "Ağ Temelleri Sertifikası",
    issuer: "T.C. Türkiye Bilgi Teknolojileri ve İletişim Kurumu",
    date:   "October 2025"
  }
];

// Open modal
if (certificateCards.length > 0 && modal) {
  certificateCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      currentCertificateIndex = index;
      showCertificate(currentCertificateIndex);
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });
}

function showCertificate(index) {
  const cert = certificatesData[index];
  if (!cert || !modalImage || !modalTitle || !modalIssuer || !modalDate) return;

  modalImage.style.opacity = "0";
  modalImage.src    = cert.image;
  modalTitle.textContent  = cert.title;
  modalIssuer.textContent = cert.issuer;
  modalDate.textContent   = cert.date;

  setTimeout(() => { modalImage.style.opacity = "1"; }, 120);
}

// Close modal
if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

function closeModal() {
  if (modal) {
    modal.style.display   = "none";
    document.body.style.overflow = "auto";
  }
}

// Prev / Next buttons
if (modalPrev) {
  modalPrev.addEventListener("click", (e) => {
    e.stopPropagation();
    currentCertificateIndex =
      (currentCertificateIndex - 1 + certificatesData.length) % certificatesData.length;
    showCertificate(currentCertificateIndex);
  });
}

if (modalNext) {
  modalNext.addEventListener("click", (e) => {
    e.stopPropagation();
    currentCertificateIndex =
      (currentCertificateIndex + 1) % certificatesData.length;
    showCertificate(currentCertificateIndex);
  });
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!modal || modal.style.display !== "block") return;

  if (e.key === "Escape") {
    closeModal();
  } else if (e.key === "ArrowLeft") {
    currentCertificateIndex =
      (currentCertificateIndex - 1 + certificatesData.length) % certificatesData.length;
    showCertificate(currentCertificateIndex);
  } else if (e.key === "ArrowRight") {
    currentCertificateIndex =
      (currentCertificateIndex + 1) % certificatesData.length;
    showCertificate(currentCertificateIndex);
  }
});

// ─── PREVENT HORIZONTAL SCROLL ────────────────────────────────
document.body.style.overflowX = 'hidden';
document.documentElement.style.overflowX = 'hidden';

// ─── VIEWPORT HEIGHT FIX FOR MOBILE ───────────────────────────
function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVH);