// ─── MENU ICON TOGGLE ─────────────────────────────────────────
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };
}

// ─── LANGUAGE TRANSLATIONS (CV-BASED ENHANCED) ──────────────
let currentLang = localStorage.getItem("portfolio_lang") || "tr"; // Default Turkish

const translations = {
  en: {
    "nav-home": "Home",
    "nav-education": "Experience",
    "nav-services": "Services",
    "nav-projects": "Projects",
    "nav-skills": "Skills",
    "nav-certificates": "Certificates",
    "nav-testimonials": "References",
    "nav-about": "About Me",
    "hero-title": "Ercan Polat | Computer Engineer - Data & Business Analyst",
    "hero-im": "I'm a",
    "hero-desc": "I am Ercan Polat, a Computer Engineering graduate specializing in Business Analysis, Data Analytics, and Full-Stack Development. I bridge the gap between business needs and technical solutions, turning requirements and complex datasets into actionable business intelligence.",
    "btn-cv": "Download CV",
    "btn-about": "About Me",
    "heading-education": "Education &amp; Experience",
    "heading-services": "Technical <span>Services</span>",
    "heading-projects": "Featured <span>Projects</span>",
    "heading-skills": "Technical <span>Skills</span>",
    "heading-certificates": "My <span>Certificates</span>",
    "heading-testimonials": "Professional <span>References</span>",
    "heading-about": "About <span>Me</span>",
    "filter-all": "All",
    "filter-ai": "AI & ML",
    "filter-fullstack": "Full-Stack Web",
    "filter-mobile": "Mobile Apps",
    "filter-datascience": "Data Science",
    "btn-details": "Details",
    "prj-1-badge": "AI & ML",
    "prj-1-desc": "AI mentor and sentiment analytics dashboard analyzing user feedback using NLP and LLM models, tracking performance and learning workflows.",
    "prj-2-badge": "Business & Data Analytics",
    "prj-2-desc": "A business intelligence and analytics portal designed for logistics and port terminal operations, streamlining workflows by visualizing operational KPIs and ERP data flows.",
    "prj-3-badge": "Mobile Apps",
    "prj-3-desc": "Advanced task management mobile app with fast interactions, offline-first sync, and smooth UI transitions.",
    "prj-4-badge": "Full-Stack",
    "prj-4-desc": "Full-stack logistics web platform offering real-time container tracking, location verification, and WebSockets live data streaming.",
    "prj-5-badge": "Cyber Security",
    "prj-5-desc": "Security data visualizer analyzing server and network logs using Scikit-Learn machine learning algorithms to detect anomalies and threat vectors.",
    "edu-1-title": "Computer Engineering Degree",
    "edu-1-desc": "Amasya University (GPA: 2.95 / 4.00). Focused on computer engineering fundamentals, data analysis & ML, database architectures, and scalable software systems.",
    "edu-2-title": "IT & Data Analytics Specialist Intern",
    "edu-2-desc": "DP World Evyap, Kocaeli. Analyzed operational logistics workflows for terminal operations, conducted SAP & ERP data extraction/validation, provided 1st-line IT support, and monitored network traffic for cyber security audits.",
    "edu-3-title": "Freelance Computer Engineer & Data Analyst",
    "edu-3-desc": "Custom full-stack web applications, end-to-end data pipelines, statistical data cleaning, and database automation script integrations tailored to client business metrics.",
    "srv-1-title": "AI & Machine Learning",
    "srv-1-desc": "Designing and deploying predictive models, text classification, computer vision, and NLP architectures with Python, Scikit-Learn, and TensorFlow to extract actionable insights from complex data.",
    "srv-2-title": "Full-Stack Web Architecture",
    "srv-2-desc": "Building robust, scalable web applications using React.js, Flask, Node.js, and RESTful APIs with efficient front-to-back integration, clean architecture, and deployment pipelines.",
    "srv-3-title": "Data Analysis & Pipelines",
    "srv-3-desc": "Developing automated data pipelines (ETL), statistical data cleaning, Exploratory Data Analysis (EDA) with Pandas/NumPy, and interactive visualization dashboards with Plotly.",
    "srv-4-title": "Databases & ERP Systems",
    "srv-4-desc": "Designing and querying relational (PostgreSQL, MySQL, MSSQL) and NoSQL (MongoDB) databases, managing ERP/SAP data consistency, and automating query workflows.",
    "srv-5-title": "Business Analysis & BI",
    "srv-5-desc": "Analyzing business processes, eliciting requirements, and designing interactive dashboards to streamline operations and bridge the gap between business stakeholders and engineering teams.",
    "cert-subtitle": "Official certifications, university diploma, and professional achievements showcasing my continuous engineering growth",
    "ref-1-role": "Chair of the Department of Computer Engineering",
    "ref-2-role": "IT Director",
    "ref-3-role": "Technical Director",
    "ab-1-title": "Who Am I?",
    "ab-1-desc": "I am a Computer Engineer focused on business analysis, data analytics, and full-stack development. I bridge the gap between stakeholders and technical teams, using analytical frameworks and quantitative data to optimize business decisions.",
    "ab-2-title": "What I Do?",
    "ab-2-desc": "I map complex business workflows, define technical requirements, engineer data pipelines, and design interactive dashboards. I turn raw data and business needs into strategic, high-value technical solutions.",
    "ab-3-title": "My Approach",
    "ab-3-desc": "I prioritize clean code, strict data quality control, scalable software architecture, and continuous learning. Engineering precision and user value guide everything I build.",
    "ab-4-title": "Beyond Coding",
    "ab-4-desc": "When not engineering systems, I explore open-source AI projects, contribute to GitHub repositories, write technical automation scripts, and read data science research.",
    "ab-5-title": "Current Goals",
    "ab-5-desc": "I am seeking a Data Analyst or Business Analyst role where I can leverage my skills in data pipelines, reporting, requirements analysis, and engineering to solve business challenges and deliver measurable value.",
    "ab-6-title": "Technical Strengths",
    "ab-ff-1": "Proficient in Python, SQL, React.js, Flask & Docker",
    "ab-ff-2": "Hands-on experience in port & logistics ERP data analysis",
    "ab-ff-3": "Strong analytical problem-solving and rapid adaptation",
    "ab-ff-4": "Committed to clean code quality & data pipeline integrity",
    "val-title": "My Core Engineering Values",
    "val-1-title": "Analytical Rigor",
    "val-1-desc": "Making data-driven decisions through quantitative analysis",
    "val-2-title": "Data Integrity",
    "val-2-desc": "Ensuring high accuracy, data cleaning, and consistency",
    "val-3-title": "Scalable Engineering",
    "val-3-desc": "Building modular, high-performance software systems",
    "val-4-title": "Team Collaboration",
    "val-4-desc": "Communicating effectively and driving joint success",
    "cnt-title": "Let's Work Together!",
    "cnt-desc": "I'm open to full-time career opportunities, engineering projects, or technical collaborations. Feel free to connect or drop an email!",
    "cnt-note": "I typically respond within 24 hours. Looking forward to hearing from you!",
    "ftr-copy": "All Rights Reserved | Portfolio & Engineering Resume"
  },
  tr: {
    "nav-home": "Ana Sayfa",
    "nav-education": "Deneyim",
    "nav-services": "Hizmetler",
    "nav-projects": "Projeler",
    "nav-skills": "Beceriler",
    "nav-certificates": "Sertifikalar",
    "nav-testimonials": "Referanslar",
    "nav-about": "Hakkımda",
    "hero-title": "Ercan Polat | Bilgisayar Mühendisi - Veri & İş Analisti",
    "hero-im": "Ben bir",
    "hero-desc": "İş analizi, veri analitiği ve full-stack geliştirme süreçlerine odaklanmış Bilgisayar Mühendisiyim. İş gereksinimleri ile teknik çözümler arasında köprü kurarak, gereksinimleri ve karmaşık veri kümelerini aksiyon alınabilir iş zekası çıktılarına dönüştürüyorum.",
    "btn-cv": "Özgeçmişi İndir",
    "btn-about": "Hakkımda",
    "heading-education": "Eğitim &amp; Deneyim",
    "heading-services": "Teknik <span>Hizmetler</span>",
    "heading-projects": "Öne Çıkan <span>Projeler</span>",
    "heading-skills": "Teknik <span>Yetkinlikler</span>",
    "heading-certificates": "Sertifikalarım",
    "heading-testimonials": "Kurumsal <span>Referanslar</span>",
    "heading-about": "Hakkımda",
    "filter-all": "Tümü",
    "filter-ai": "Yapay Zekâ & ML",
    "filter-fullstack": "Full-Stack Web",
    "filter-mobile": "Mobil Uygulama",
    "filter-datascience": "Veri Bilimi",
    "btn-details": "Detaylar",
    "prj-1-badge": "Yapay Zekâ",
    "prj-1-desc": "NLP ve LLM modellerini kullanarak kullanıcı geri bildirimlerini analiz eden, performans ve öğrenme iş akışlarını takip eden duygu analizi ve AI asistan paneli.",
    "prj-2-badge": "İş & Veri Analitiği",
    "prj-2-desc": "Liman ve terminal operasyonları için tasarlanmış iş zekası ve analitik portalı. Operasyonel KPI'ları ve ERP veri akışlarını görselleştirerek iş süreçlerini kolaylaştırır.",
    "prj-3-badge": "Mobil Uygulama",
    "prj-3-desc": "Hızlı etkileşimler, çevrimdışı senkronizasyon ve akıcı UI geçişleri sunan gelişmiş mobil görev ve üretkenlik yönetimi uygulaması.",
    "prj-4-badge": "Full-Stack",
    "prj-4-desc": "Gerçek zamanlı konteyner takip, konum doğrulama ve WebSockets ile anlık canlı veri akışı sağlayan lojistik web platformu.",
    "prj-5-badge": "Siber Güvenlik",
    "prj-5-desc": "Sunucu ve ağ loglarını Scikit-Learn makine öğrenimi modelleriyle analiz ederek anormallikleri ve siber tehditleri tespit eden güvenlik görselleştirici.",
    "edu-1-title": "Bilgisayar Mühendisliği Lisans",
    "edu-1-desc": "Amasya Üniversitesi (GNO: 2.95 / 4.00). Yazılım mühendisliği prensipleri, veri analizi, makine öğrenmesi algoritmaları ve veri tabanı mimarileri odaklı lisans eğitimi.",
    "edu-2-title": "BT Operasyonları & Veri Analitiği Stajyeri",
    "edu-2-desc": "DP World Evyap, Kocaeli. Liman ve terminal lojistik iş akışlarının analizi, SAP/ERP sistemleri üzerinden veri çıkarma ve tutarlılık kontrolleri, 1. seviye BT desteği ve siber güvenlik denetim loglarının izlenmesi.",
    "edu-3-title": "Freelance Bilgisayar Mühendisi & Veri Analisti",
    "edu-3-desc": "Müşterilerin ticari metriklerine özel full-stack web uygulamaları, uçtan uca veri hatları (data pipeline), istatistiksel veri temizleme ve otomasyon script entegrasyonları.",
    "srv-1-title": "Yapay Zekâ & Makine Öğrenmesi",
    "srv-1-desc": "Python, Scikit-Learn ve TensorFlow kullanarak karmaşık veri kümelerinden tahmine dayalı modeller, metin sınıflandırma ve görüntü işleme çözümleri geliştirme.",
    "srv-2-title": "Full-Stack Web Mimarisi",
    "srv-2-desc": "React.js, Flask, Node.js ve RESTful API'ler ile verimli, sürdürülebilir ve kullanıcı odaklı uçtan uca web uygulamalarının geliştirilmesi ve yayına alınması.",
    "srv-3-title": "Veri Analizi & Data Pipeline",
    "srv-3-desc": "Otomatize veri hatlarının (ETL) kurulması, Pandas/NumPy ile istatistiksel veri temizleme ve Plotly/Dash ile etkileşimli iş zekası panellerinin oluşturulması.",
    "srv-4-title": "Veri Tabanları & ERP Sistemleri",
    "srv-4-desc": "İlişkisel (PostgreSQL, MySQL, MSSQL) ve NoSQL (MongoDB) veri tabanı tasarımları, SQL sorgu optimizasyonu, SAP/ERP sistemlerinde yüksek veri kalitesi yönetimi.",
    "srv-5-title": "İş Analizi & İş Zekası (BI)",
    "srv-5-desc": "İş süreçlerinin analiz edilmesi, gereksinimlerin belirlenmesi ve operasyonel verimliliği artırmak amacıyla iş paydaşları ile mühendislik ekipleri arasında köprü kurarak interaktif raporlama panellerinin tasarlanması.",
    "cert-subtitle": "Mühendislik yetkinliklerimi ve sürekli gelişim yolculuğumu kanıtlayan resmi sertifika ve diplomalarım",
    "ref-1-role": "Bilgisayar Mühendisliği Bölüm Başkanı",
    "ref-2-role": "Bilgi Teknolojileri Direktörü",
    "ref-3-role": "Teknik Direktör",
    "ab-1-title": "Ben Kimim?",
    "ab-1-desc": "İş analizi, veri analitiği ve yazılım süreçlerine odaklanmış, analitik yaklaşıma sahip Bilgisayar Mühendisiyim. İş birimleri ile teknik ekipler arasında köprü kurarak, nicel analizler ve iş gereksinimleri üzerinden süreçleri optimize ediyorum.",
    "ab-2-title": "Ne Yapıyorum?",
    "ab-2-desc": "İş süreçlerini modelliyor, teknik gereksinimleri tanımlıyor, veri hatları ve etkileşimli iş zekası panelleri geliştiriyorum. Ham veriyi ve iş ihtiyaçlarını aksiyon alınabilir teknik çözümlere çeviriyorum.",
    "ab-3-title": "Mühendislik Yaklaşımım",
    "ab-3-desc": "Temiz kod prensipleri, yüksek veri kalitesi kontrolleri, ölçeklenebilir kod mimarileri ve sürekli öğrenme tutkusu. İş çözümlerimde verimlilik ve kullanıcı deneyimi esastır.",
    "ab-4-title": "Kodlamanın Ötesinde",
    "ab-4-desc": "Açık kaynak teknolojileri takip ediyor, GitHub üzerinde projeler geliştiriyor, veri analitiği bloglarını inceliyor ve yeni framework'leri pratiğe dönüştürüyorum.",
    "ab-5-title": "Kariyer Hedeflerim",
    "ab-5-desc": "Veri Analisti veya İş Analisti pozisyonlarında, veri analizi, iş süreçleri tasarımı ve gereksinim analizi becerilerimi kullanarak gerçek problemlere veri odaklı ve katma değerli çözümler üretebileceğim yenilikçi takımlarda yer almayı hedefliyorum.",
    "ab-6-title": "Teknik Öne Çıkanlar",
    "ab-ff-1": "Python, SQL, React.js, Flask ve Docker yetkinliği",
    "ab-ff-2": "Lojistik operasyonlarında SAP/ERP veri analizi deneyimi",
    "ab-ff-3": "Güçlü analitik problem çözme ve hızlı adaptasyon",
    "ab-ff-4": "Temiz kod kalitesi ve veri hattı (pipeline) disiplini",
    "val-title": "Temel Mühendislik Değerlerim",
    "val-1-title": "Analitik Yaklaşım",
    "val-1-desc": "Nicel analizler üzerinden veri odaklı kararlar alma",
    "val-2-title": "Veri Kalitesi & Doğruluk",
    "val-2-desc": "Veri tutarlılığı, temizleme ve yüksek veri kalitesi sağlama",
    "val-3-title": "Ölçeklenebilir Mimari",
    "val-3-desc": "Modüler, yüksek performanslı ve sürdürülebilir kod",
    "val-4-title": "Ekip Çalışması & Uyum",
    "val-4-desc": "Açık iletişimle ortak hedeflere birlikte ulaşma",
    "cnt-title": "İletişime Geçelim!",
    "cnt-desc": "İş fırsatları, mühendislik projeleri veya teknik iş birlikleri için dilediğiniz zaman ulaşabilirsiniz.",
    "cnt-note": "Genellikle 24 saat içinde dönüş yapıyorum. Mesajınızı bekliyorum!",
    "ftr-copy": "Tüm Hakları Saklıdır | Mühendislik Portfolyosu"
  }
};

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);

  const langText = document.getElementById("lang-text");
  if (langText) {
    langText.textContent = lang === "tr" ? "EN" : "TR";
  }

  // Translate data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Reset typewriter
  wordIndex = 0;
  charIndex = 0;
  isDeleting = false;
}

const langToggleBtn = document.getElementById("lang-toggle");
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    const newLang = currentLang === "en" ? "tr" : "en";
    updateLanguage(newLang);
  });
}

// Initial language load
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage(currentLang);
});

// ─── TYPEWRITER EFFECT ───────────────────────────────────────
const typingText = document.querySelector(".typing-text");
const typingWords = {
  en: [
    "Business Analyst",
    "AI & Data Analyst",
    "Full Stack Developer",
    "Data Scientist"
  ],
  tr: [
    "İş Analisti",
    "Yapay Zekâ & Veri Analisti",
    "Full Stack Geliştirici",
    "Veri Bilimci"
  ]
};

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingText) return;
  const currentList = typingWords[currentLang] || typingWords.en;
  const currentWord = currentList[wordIndex % currentList.length];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 45 : 95;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;
    typeSpeed = 350;
  }

  setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 400);
});

// ─── SCROLL: ACTIVE LINKS + STICKY HEADER ─────────────────────
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector(".header");

function handleScroll() {
  const scrollY = window.scrollY;

  if (header) {
    header.classList.toggle("sticky", scrollY > 80);
  }

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 160;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector("header nav a[href*=" + id + "]");
      if (activeLink) activeLink.classList.add("active");
    }
  });

  if (menuIcon && navbar && navbar.classList.contains("active")) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }

  animateSkills();
}

window.addEventListener("scroll", handleScroll, { passive: true });

// ─── SKILLS ANIMATION ─────────────────────────────────────────
const skillsSection = document.querySelector(".skills");
const skillsContainer = document.querySelector(".skills-container");
const skillProgressBars = document.querySelectorAll(".skill-progress");

function isInViewport(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth)
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
        }, index * 90);
      });
    }
  }
}

window.addEventListener("load", () => {
  setTimeout(animateSkills, 200);
});

// ─── SMOOTH SCROLL ────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      if (menuIcon && navbar) {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
      }
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ─── PROJECT FILTERING ────────────────────────────────────────
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".projects-grid .project-card");
let isFiltering = false;

if (filterBtns.length > 0 && projectCards.length > 0) {
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active") || isFiltering) return;
      isFiltering = true;

      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      // Phase 1: Fade out all current cards first
      projectCards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "scale(0.94) translateY(10px)";
      });

      // Phase 2: After fade-out (220ms), update display & grid layout
      setTimeout(() => {
        let matchingIndex = 0;

        projectCards.forEach((card) => {
          const category = card.getAttribute("data-category");
          const isMatch = (filter === "all" || filter === category);

          if (isMatch) {
            card.style.display = "flex";
            card.style.opacity = "0";
            card.style.transform = "scale(0.94) translateY(10px)";

            const currentIdx = matchingIndex++;
            // Phase 3: Stagger fade-in directly at final grid position
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "scale(1) translateY(0)";
            }, 30 + currentIdx * 70);
          } else {
            card.style.display = "none";
          }
        });

        setTimeout(() => {
          isFiltering = false;
        }, (matchingIndex || 1) * 70 + 200);

      }, 220);
    });
  });
}

// ─── PROJECT DETAIL MODAL ─────────────────────────────────────
const projectModal = document.getElementById("project-modal");
const projectModalClose = document.getElementById("project-modal-close");
const projectDetailsBtns = document.querySelectorAll(".btn-details");

const projectDataMap = {
  "1": {
    en: {
      badge: "AI & ML",
      title: "AI Mentor & Sentiment Dashboard",
      description: "An AI mentor and sentiment analytics dashboard built with deep learning and Natural Language Processing (NLP) models. Tracks model learning workflows, user feedback, and real-time performance metrics.",
      features: [
        "Transformers-based sentiment analysis engine for English and Turkish",
        "Real-time model performance charts and metric visualizer",
        "Low-latency RESTful FastAPI backend service",
        "Reactive and modern React frontend user interface"
      ]
    },
    tr: {
      badge: "Yapay Zekâ & ML",
      title: "AI Mentor & Sentiment Dashboard",
      description: "Derin öğrenme ve doğal dil işleme (NLP) teknikleriyle geliştirilmiş duygu analizi ve AI asistan yönetim paneli. Modellerin öğrenme süreçlerini, kullanıcı etkileşimlerini ve performans metriklerini gerçek zamanlı takip eder.",
      features: [
        "Transformers tabanlı Türkçe ve İngilizce duygu analizi motoru",
        "Gerçek zamanlı model performans grafikleri ve metrik görselleştirme",
        "Hızlı yanıt üreten RESTful FastAPI arka plan servisi",
        "Reaktif ve modern React tabanlı kullanıcı arayüzü"
      ]
    },
    tags: ["NLP", "Transformers", "React.js", "FastAPI", "Python", "TensorFlow"],
    iconClass: "bx bx-brain",
    github: "https://github.com/ercanpolatt",
    live: "https://github.com/ercanpolatt"
  },
  "2": {
    en: {
      badge: "Business & Data Analytics",
      title: "Smart Freight Analytics Portal",
      description: "A business intelligence and analytics portal designed for logistics and port terminal operations, streamlining workflows by visualizing operational KPIs and ERP data flows.",
      features: [
        "Elicited operational requirements from terminal stakeholders to define core KPIs",
        "Designed interactive Plotly dashboards for real-time executive reporting",
        "Mapped end-to-end data flows between SAP/ERP systems and database schemas",
        "Developed optimized SQL queries for high-performance data retrieval"
      ]
    },
    tr: {
      badge: "İş & Veri Analitiği",
      title: "Smart Freight Analytics Portal",
      description: "Liman ve terminal operasyonları için tasarlanmış iş zekası ve analitik portalı. Operasyonel KPI'ları ve ERP veri akışlarını görselleştirerek iş süreçlerini kolaylaştırır.",
      features: [
        "Temel KPI'ları belirlemek için liman paydaşlarından operasyonel gereksinimlerin toplanması",
        "Gerçek zamanlı yönetici raporlaması için etkileşimli Plotly panellerinin tasarlanması",
        "SAP/ERP sistemleri ile veri tabanı şemaları arasındaki uçtan uca veri akışlarının modellenmesi",
        "Yüksek performanslı veri çekme işlemleri için optimize edilmiş SQL sorguları"
      ]
    },
    tags: ["Python", "Pandas", "Plotly", "Flask", "SQL", "Business Analysis"],
    iconClass: "bx bx-bar-chart-alt-2",
    github: "https://github.com/ercanpolatt",
    live: "https://github.com/ercanpolatt"
  },
  "3": {
    en: {
      badge: "Mobile Apps",
      title: "Productivity & Task Flow App",
      description: "Advanced task management mobile app streamlining daily workflows, goals, and time management. Features offline-first sync, smooth UI transitions, and high usability.",
      features: [
        "Cross-platform (iOS & Android) architecture built with React Native",
        "Offline-first synchronization using local storage (AsyncStorage)",
        "Interactive task organization with push notification reminders",
        "Smooth UI transitions and native dark mode support"
      ]
    },
    tr: {
      badge: "Mobil Uygulama",
      title: "Productivity & Task Flow App",
      description: "Kullanıcıların günlük iş akışlarını, hedeflerini ve zaman yönetimi süreçlerini kolaylaştıran mobil uygulama. Çevrimdışı çalışma desteği ve akıcı animasyonlarla yüksek kullanılabilirlik sunar.",
      features: [
        "Çapraz platform (iOS & Android) uyumlu React Native mimarisi",
        "Yerel depolama (AsyncStorage) ile çevrimdışı (offline-first) senkronizasyon",
        "Sürükle-bırak görev yönetimi ve anlık bildirim sistemi",
        "Smooth UI animasyonları ve karanlık mod desteği"
      ]
    },
    tags: ["React Native", "Expo", "Redux Toolkit", "Node.js", "AsyncStorage"],
    iconClass: "bx bx-mobile-alt",
    github: "https://github.com/ercanpolatt",
    live: "https://github.com/ercanpolatt"
  },
  "4": {
    en: {
      badge: "Full-Stack Web",
      title: "Smart Logistics Container Tracker",
      description: "Full-stack tracking platform monitoring container movements on live maps in real time, delivering instant status updates via WebSockets.",
      features: [
        "Designed user stories, system wireframes, and mapped requirements to technical specifications",
        "Real-time location and status updates via WebSockets (Socket.io)",
        "PostgreSQL relational database schema with query optimization",
        "Secure JWT authentication and role-based access control"
      ]
    },
    tr: {
      badge: "Full-Stack Web",
      title: "Smart Logistics Container Tracker",
      description: "Tedarik zincirindeki konteyner hareketlerini canlı harita üzerinde izleyen, statü değişikliklerini WebSockets ile anlık ileten full-stack takip platformu.",
      features: [
        "Kullanıcı hikayeleri (user stories), sistem tel kafesleri (wireframe) ve teknik gereksinimlerin tasarlanması",
        "WebSockets (Socket.io) ile anlık konteyner konum ve durum güncellemeleri",
        "PostgreSQL ilişkisel veritabanı mimarisi ve optimize edilmiş sorgular",
        "Güvenli JWT tabanlı kullanıcı yetkilendirme ve rol yönetimi"
      ]
    },
    tags: ["Node.js", "Express", "PostgreSQL", "WebSockets", "React"],
    iconClass: "bx bx-code-block",
    github: "https://github.com/ercanpolatt",
    live: "https://github.com/ercanpolatt"
  },
  "5": {
    en: {
      badge: "Cyber Security",
      title: "Cyber Threat Log Visualizer",
      description: "Security data visualization tool analyzing network and server logs using machine learning models to detect anomaly access patterns and threat vectors.",
      features: [
        "Scikit-Learn anomaly detection (Isolation Forest) algorithms",
        "Heatmap visualization and alert engine categorized by threat severity",
        "Real-time log parsing engine (Regex & Python log parser)",
        "Comprehensive cyber incident reporting interface"
      ]
    },
    tr: {
      badge: "Siber Güvenlik & Veri Bilimi",
      title: "Cyber Threat Log Visualizer",
      description: "Sunucu ve ağ loglarını analiz ederek şüpheli paket erişimlerini ve olası siber tehditleri tespit eden güvenlik veri görselleştirme aracı.",
      features: [
        "Scikit-Learn anomali tespiti (Isolation Forest) algoritmaları",
        "Tehdit türlerine göre ısı haritası (Heatmap) ve uyarı mekanizması",
        "Log verilerini anlık ayrıştırma (Regex & Python log parser)",
        "Detaylı siber olay raporlama arayüzü"
      ]
    },
    tags: ["Python", "Scikit-Learn", "Dash", "Security", "Machine Learning"],
    iconClass: "bx bx-shield-quarter",
    github: "https://github.com/ercanpolatt",
    live: "https://github.com/ercanpolatt"
  }
};

if (projectDetailsBtns.length > 0 && projectModal) {
  projectDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-project");
      const projectItem = projectDataMap[projectId];

      if (projectItem) {
        const langData = projectItem[currentLang] || projectItem.tr;

        document.getElementById("project-modal-badge").textContent = langData.badge;
        document.getElementById("project-modal-title").textContent = langData.title;
        document.getElementById("project-modal-desc").textContent = langData.description;

        const iconContainer = document.getElementById("project-modal-icon");
        iconContainer.innerHTML = `<i class='${projectItem.iconClass}'></i>`;

        const tagsContainer = document.getElementById("project-modal-tags");
        tagsContainer.innerHTML = projectItem.tags.map(t => `<span>${t}</span>`).join("");

        const featuresContainer = document.getElementById("project-modal-features");
        featuresContainer.innerHTML = langData.features.map(f => `<li><i class='bx bx-check-circle'></i> ${f}</li>`).join("");

        const githubLink = document.getElementById("project-modal-github");
        const liveLink = document.getElementById("project-modal-live");
        if (githubLink) githubLink.href = projectItem.github;
        if (liveLink) liveLink.href = projectItem.live;

        projectModal.style.display = "block";
        document.body.style.overflow = "hidden";
      }
    });
  });
}

if (projectModalClose) {
  projectModalClose.addEventListener("click", closeProjectModal);
}

if (projectModal) {
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) closeProjectModal();
  });
}

function closeProjectModal() {
  if (projectModal) {
    projectModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// ─── CERTIFICATE MODAL ────────────────────────────────────────
const certificateCards = document.querySelectorAll(".certificate-card");
const certModal = document.getElementById("certificate-modal");
const certModalImage = document.getElementById("modal-image");
const certModalTitle = document.getElementById("modal-title");
const certModalIssuer = document.getElementById("modal-issuer");
const certModalDate = document.getElementById("modal-date");
const certModalClose = document.querySelector("#certificate-modal .modal-close");
const certModalPrev = document.querySelector(".modal-prev");
const certModalNext = document.querySelector(".modal-next");

let currentCertificateIndex = 0;

const certificatesData = [
  {
    image: "certificates/promt-muhendisligi_page-0001.jpg",
    title: "ChatGPT 2026: Prompt Mühendisliği",
    issuer: "Udemy / Atil Samancioglu",
    date: "February 2026"
  },
  {
    image: "certificates/yuksekogretim-mezun-belgesi-sorgulama.jpg",
    title: "Mezun Belgesi",
    issuer: "Amasya University",
    date: "January 2026"
  },
  {
    image: "certificates/Siber_Güvenliğe_Giriş_Sertifika_page-0001.jpg",
    title: "Siber Güvenlik Sertifikası",
    issuer: "T.C. Türkiye Bilgi Teknolojileri ve İletişim Kurumu",
    date: "October 2025"
  },
  {
    image: "certificates/ingilizce_page-0001.jpg",
    title: "İngilizce Sertifikası",
    issuer: "Amasya University",
    date: "December 2022"
  },
  {
    image: "certificates/bilgiteknogiris_page-0001.jpg",
    title: "Bilgi Teknolojileri Giriş Sertifikası",
    issuer: "T.C. Türkiye Bilgi Teknolojileri ve İletişim Kurumu",
    date: "October 2025"
  },
  {
    image: "certificates/Ağ_Temelleri_Sertifika_page-0001.jpg",
    title: "Ağ Temelleri Sertifikası",
    issuer: "T.C. Türkiye Bilgi Teknolojileri ve İletişim Kurumu",
    date: "October 2025"
  }
];

if (certificateCards.length > 0 && certModal) {
  certificateCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      currentCertificateIndex = index;
      showCertificate(currentCertificateIndex);
      certModal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });
}

function showCertificate(index) {
  const cert = certificatesData[index];
  if (!cert || !certModalImage || !certModalTitle || !certModalIssuer || !certModalDate) return;

  certModalImage.style.opacity = "0";
  certModalImage.src = cert.image;
  certModalTitle.textContent = cert.title;
  certModalIssuer.textContent = cert.issuer;
  certModalDate.textContent = cert.date;

  setTimeout(() => { certModalImage.style.opacity = "1"; }, 120);
}

if (certModalClose) {
  certModalClose.addEventListener("click", closeCertModal);
}

if (certModal) {
  certModal.addEventListener("click", (e) => {
    if (e.target === certModal) closeCertModal();
  });
}

function closeCertModal() {
  if (certModal) {
    certModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

if (certModalPrev) {
  certModalPrev.addEventListener("click", (e) => {
    e.stopPropagation();
    currentCertificateIndex =
      (currentCertificateIndex - 1 + certificatesData.length) % certificatesData.length;
    showCertificate(currentCertificateIndex);
  });
}

if (certModalNext) {
  certModalNext.addEventListener("click", (e) => {
    e.stopPropagation();
    currentCertificateIndex =
      (currentCertificateIndex + 1) % certificatesData.length;
    showCertificate(currentCertificateIndex);
  });
}

document.addEventListener("keydown", (e) => {
  if (certModal && certModal.style.display === "block") {
    if (e.key === "Escape") {
      closeCertModal();
    } else if (e.key === "ArrowLeft") {
      currentCertificateIndex = (currentCertificateIndex - 1 + certificatesData.length) % certificatesData.length;
      showCertificate(currentCertificateIndex);
    } else if (e.key === "ArrowRight") {
      currentCertificateIndex = (currentCertificateIndex + 1) % certificatesData.length;
      showCertificate(currentCertificateIndex);
    }
  }

  if (projectModal && projectModal.style.display === "block") {
    if (e.key === "Escape") {
      closeProjectModal();
    }
  }
});

// ─── RESPONSIVE & VIEWPORT FIXES ─────────────────────────────
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth > 991 && menuIcon && navbar) {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    }
    animateSkills();
  }, 200);
});

function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', setVH);

// ─── GSAP SOFT ENTRANCE ANIMATIONS ────────────────────────────
if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.home-content h1, .home-content h3, .home-content p, .social-icons, .btn-group', {
    opacity: 0,
    y: 35,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.12,
    delay: 0.2,
  });

  gsap.from('.home-img', {
    opacity: 0,
    x: 45,
    duration: 1.1,
    ease: 'power2.out',
    delay: 0.35,
  });

  gsap.utils.toArray('.service-box, .project-card, .certificate-card, .testimonial-item, .about-card, .timeline-item').forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 35,
      duration: 0.75,
      ease: 'power2.out',
    });
  });
}
