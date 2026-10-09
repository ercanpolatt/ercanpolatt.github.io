// ─── MENU ICON TOGGLE ─────────────────────────────────────────
const menuBtn = document.querySelector("#menu-icon-btn");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

function toggleMenu() {
  if (!navbar) return;
  const isActive = navbar.classList.toggle("active");
  if (menuIcon) menuIcon.classList.toggle("bx-x", isActive);
  if (menuBtn) menuBtn.setAttribute("aria-expanded", String(isActive));
}

if (menuBtn) {
  menuBtn.addEventListener("click", toggleMenu);
} else if (menuIcon) {
  menuIcon.addEventListener("click", toggleMenu);
}

// Close menu when clicking on any navigation link
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar && navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      if (menuIcon) menuIcon.classList.remove("bx-x");
      if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
    }
  });
});

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
    "nav-contact": "Contact",
    "hero-status": "Available for Opportunities &amp; Projects",
    "hero-title": "Ercan Polat | Computer Engineer - Data &amp; Business Analyst",
    "hero-im": "I'm a",
    "hero-desc": "I am Ercan Polat, a Computer Engineering graduate specializing in Business Analysis, Data Analytics, and Full-Stack Development. I bridge the gap between business needs and technical solutions, turning requirements and complex datasets into actionable business intelligence.",
    "btn-cv": "Download CV",
    "btn-about": "About Me",
    "heading-education": "Education &amp; Experience",
    "heading-services": "Technical <span>Services</span>",
    "heading-projects": "Featured <span>Projects &amp; Presentations</span>",
    "projects-subtitle": "Real-world enterprise automations, data analytics systems, and end-to-end software solutions",
    "catalog-title": "Full Projects Portfolio",
    "catalog-subtitle": "Filter by domain and explore architectural details",
    "heading-skills": "Technical <span>Skills</span>",
    "heading-certificates": "My <span>Certificates</span>",
    "heading-testimonials": "Professional <span>References</span>",
    "ref-subtitle": "Academic mentors and executive directors from past projects and internships",
    "heading-about": "About <span>Me</span>",
    "filter-all": "All (7)",
    "filter-featured": "⭐ Featured",
    "filter-automation": "Automation &amp; Tools",
    "filter-datascience": "Data Science &amp; Analytics",
    "filter-ai": "AI &amp; ML",
    "filter-fullstack": "Full-Stack Web",
    "filter-mobile": "Mobile Apps",
    "btn-details": "Details",
    "btn-video": "Watch Video Demo",
    "btn-presentation": "View Detailed Presentation",
    "spotlight-fide-tag": "Flagship Solution",
    "spotlight-fide-title": "FİDE Konserve - Smart Attendance &amp; PDKS System",
    "spotlight-fide-desc": "An enterprise automation platform that parses hardware PDKS attendance logs, calculates complex shift durations, overtime, weekend compensations, and generates ERP-ready timesheet schedules with zero data loss.",
    "spotlight-qr-tag": "Professional Desktop Suite",
    "spotlight-qr-title": "Barcode &amp; QR Code Studio (Excel &amp; National ID)",
    "spotlight-qr-desc": "A professional desktop utility generating 1D/2D barcodes and QR codes for personnel IDs, serials, and national IDs with direct embedded Excel cell export and automatic 3-column A4 grid printing.",
    "prj-puantaj-badge": "PDKS &amp; Automation",
    "prj-puantaj-desc": "Smart attendance platform developed with FastAPI and Pandas, interpreting badge logs, computing shifts &amp; overtime, and generating automated Excel timesheets.",
    "prj-qrcode-badge": "Barcode Studio",
    "prj-qrcode-desc": "Desktop software generating 1D/2D codes, verifying TC ID checksums, embedding images into Excel cells, and printing A4 grids.",
    "prj-1-badge": "AI &amp; ML",
    "prj-1-desc": "AI mentor and sentiment analytics dashboard analyzing user feedback using NLP and LLM models, tracking performance and learning workflows.",
    "prj-2-badge": "Business &amp; Data Analytics",
    "prj-2-desc": "A business intelligence and analytics portal designed for logistics and port terminal operations, streamlining workflows by visualizing operational KPIs and ERP data flows.",
    "prj-3-badge": "Mobile Apps",
    "prj-3-desc": "Advanced task management mobile app with fast interactions, offline-first sync, and smooth UI transitions.",
    "prj-4-badge": "Full-Stack",
    "prj-4-desc": "Full-stack logistics web platform offering real-time container tracking, location verification, and WebSockets live data streaming.",
    "prj-5-badge": "Cyber Security",
    "prj-5-desc": "Security data visualizer analyzing server and network logs using Scikit-Learn machine learning algorithms to detect anomalies and threat vectors.",
    "edu-1-title": "Computer Engineering Degree",
    "edu-1-desc": "Amasya University (GPA: 2.95 / 4.00). Focused on computer engineering fundamentals, data analysis & ML, database architectures, and scalable technical systems.",
    "edu-fide-title": "Business Analyst",
    "edu-fide-desc": "FİDE Konserve. Analyzed cross-departmental business workflows, gathered and modeled operational requirements for HR and payroll processes, integrated hardware terminal logs into automated attendance systems, and digitized timesheet/ERP reporting pipelines.",
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
        "skills-subtitle": "Data analytics, business intelligence, AI, and modern software architectures",
    "sk-cat-1-title": "Business Analytics &amp; BI",
    "sk-cat-1-sub": "Process Modeling &amp; Decision Support",
    "sk-cat-2-title": "Backend &amp; Databases",
    "sk-cat-2-sub": "Server Architecture &amp; APIs",
    "sk-cat-3-title": "AI &amp; Data Science",
    "sk-cat-3-sub": "Machine Learning &amp; Analytics",
    "sk-cat-4-title": "UI &amp; Engineering Tools",
    "sk-cat-4-sub": "Web, Desktop &amp; Version Control",
    "about-subtitle": "Engineering principles unifying business targets with technical architectures",
    "ab-tag": "Computer Engineer &amp; Analyst",
    "ab-lead-title": "Engineering Vision Unifying Data, Process, and Software",
    "ab-lead-desc-1": "I am a Computer Engineering graduate from Amasya University. By blending software engineering discipline with field and business process analytics, I transform operational bottlenecks into end-to-end digital solutions. With my experience at FİDE Konserve on attendance &amp; payroll systems and at DP World Evyap on logistics/terminal workflows, I focus on delivering tangible value to business units beyond just writing code.",
    "ab-lead-desc-2": "While building decision support systems, automation utilities, data cleaning pipelines, and RESTful APIs, I serve as a vital bridge: an analyst who speaks the stakeholders' language and an engineer who executes the backend flawlessly.",
    "ab-p1-title": "Business &amp; Data-Driven Mindset",
    "ab-p1-desc": "Acting upon verified field requirements, user stories, and quantitative data analysis rather than assumptions to model workflows with minimal error.",
    "ab-p2-title": "Engineering Standards &amp; Quality",
    "ab-p2-desc": "Building long-term, maintainable systems through modular architecture, clean code, high data integrity, and edge-case testing discipline.",
    "ab-p3-title": "Rapid Adaptation &amp; Execution",
    "ab-p3-desc": "Quickly mastering new technologies, AI-assisted development tools, and enterprise requirements to shorten the cycle from requirement to production-ready software.",
    "heading-contact": "Contact <span>&amp; Collaboration</span>",
    "contact-subtitle": "Reach out directly for career opportunities, technical collaborations, or consulting",
    "cnt-status": "Available for Opportunities · Active",
    "cnt-email-label": "Direct Email Address",
    "cnt-btn-copy": "Copy Address",
    "cnt-btn-send": "Send Email",
    "lightbox-hint": "Click on the image or use the Zoom button to view fine details. You can navigate using arrow keys.",
    "cert-view": "Click to View",
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
    "nav-contact": "İletişim",
    "hero-status": "Kariyer Fırsatlarına &amp; Projelere Açık",
    "hero-title": "Ercan Polat | Bilgisayar Mühendisi - Veri & İş Analisti",
    "hero-im": "Ben bir",
    "hero-desc": "İş analizi, veri analitiği ve full-stack geliştirme süreçlerine odaklanmış Bilgisayar Mühendisiyim. İş gereksinimleri ile teknik çözümler arasında köprü kurarak, gereksinimleri ve karmaşık veri kümelerini aksiyon alınabilir iş zekası çıktılarına dönüştürüyorum.",
    "btn-cv": "Özgeçmişi İndir",
    "btn-about": "Hakkımda",
    "heading-education": "Eğitim &amp; Deneyim",
    "heading-services": "Teknik <span>Hizmetler</span>",
    "heading-projects": "Öne Çıkan <span>Projeler &amp; Sunumlar</span>",
    "projects-subtitle": "Gerçek dünya kurumsal otomasyonları, veri analitiği sistemleri ve uçtan uca yazılım çözümleri",
    "catalog-title": "Tüm Proje Portfolyosu",
    "catalog-subtitle": "Kategoriye göre filtreleyip detaylı inceleyebilirsiniz",
    "heading-skills": "Teknik <span>Yetkinlikler</span>",
    "heading-certificates": "Sertifikalarım",
    "heading-testimonials": "Kurumsal <span>&amp; Akademik Referanslar</span>",
    "ref-subtitle": "Akademik ve kurumsal iş birliklerimde birlikte çalıştığım yöneticilerim ve danışmanlarım",
    "heading-about": "Hakkımda",
    "filter-all": "Tümü (7)",
    "filter-featured": "⭐ Öne Çıkanlar",
    "filter-automation": "Otomasyon &amp; Araçlar",
    "filter-datascience": "Veri Bilimi &amp; Analitik",
    "filter-ai": "Yapay Zekâ &amp; ML",
    "filter-fullstack": "Full-Stack Web",
    "filter-mobile": "Mobil Uygulama",
    "btn-details": "Detaylar",
    "btn-video": "Video Sunumu İzle",
    "btn-presentation": "Detaylı Sunumu Gör",
    "spotlight-fide-tag": "Amiral Gemisi Çözüm",
    "spotlight-fide-title": "FİDE Konserve - Akıllı Puantaj ve PDKS Sistemi",
    "spotlight-fide-desc": "Donanım terminallerinden gelen karmaşık personel giriş-çıkış kart verilerini analiz ederek, İnsan Kaynakları ve Muhasebe departmanları için vardiya, fazla mesai ve puantaj hesaplama sürecini tam otomatik hale getiren kurumsal yazılım.",
    "spotlight-qr-tag": "Profesyonel Masaüstü Yazılımı",
    "spotlight-qr-title": "Barkod &amp; QR Kod Studio (TC Kimlik &amp; Excel Destekli)",
    "spotlight-qr-desc": "Personel kartları, ürün seri numaraları ve TC kimlikler için 1D Barkod ve 2D QR Kod üreten, Excel hücrelerine gömülü resimler olarak aktaran ve 3'lü A4 baskı sayfaları hazırlayan profesyonel masaüstü otomasyon stüdyosu.",
    "prj-puantaj-badge": "PDKS &amp; Otomasyon",
    "prj-puantaj-desc": "PDKS kart basım verilerini analiz eden, vardiya ve mesaileri hesaplayan ve Excel puantaj cetvelleri oluşturan akıllı otomasyon.",
    "prj-qrcode-badge": "Barkod Studio",
    "prj-qrcode-desc": "1D Barkod ve 2D QR Kod üreten, TC kimlik doğrulayan, Excel'e resim gömen ve A4 grid baskı sağlayan masaüstü yazılımı.",
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
    "edu-1-desc": "Amasya Üniversitesi (GNO: 2.95 / 4.00). Bilgisayar mühendisliği temelleri, veri analizi, makine öğrenmesi algoritmaları ve veri tabanı mimarileri odaklı lisans eğitimi.",
    "edu-fide-title": "İş Analisti",
    "edu-fide-desc": "FİDE Konserve. Departmanlar arası iş süreçlerinin analizi ve optimizasyonu, İK ve bordro gereksinimlerinin belirlenmesi, donanım terminallerinden gelen ham logların puantaj sistemlerine entegrasyonu ve ERP/Excel raporlama akışlarının uçtan uca dijitalleştirilmesi.",
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
    "ab-1-desc": "İş analizi, veri analitiği ve bilgisayar mühendisliği süreçlerine odaklanmış, analitik yaklaşıma sahip Bilgisayar Mühendisiyim. İş birimleri ile teknik ekipler arasında köprü kurarak, nicel analizler ve iş gereksinimleri üzerinden süreçleri optimize ediyorum.",
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
        "skills-subtitle": "İş analitiği, veri mühendisliği ve uçtan uca modern yazılım mimarilerinde kullandığım araçlar",
    "sk-cat-1-title": "İş Analitiği &amp; İş Zekası",
    "sk-cat-1-sub": "Süreç Modelleme &amp; Karar Destek",
    "sk-cat-2-title": "Yazılım &amp; Backend Mimarisi",
    "sk-cat-2-sub": "Sunucu, Veritabanı &amp; REST API",
    "sk-cat-3-title": "Veri Bilimi &amp; Yapay Zekâ",
    "sk-cat-3-sub": "Makine Öğrenmesi &amp; İstatistiksel Modelleme",
    "sk-cat-4-title": "Geliştirme &amp; Mühendislik Araçları",
    "sk-cat-4-sub": "Frontend, Sürüm Kontrolü &amp; Dağıtım",
    "about-subtitle": "İş hedefleri ile teknik mimarileri birleştiren mühendislik yaklaşımım ve ilkelerim",
    "ab-tag": "Bilgisayar Mühendisi &amp; Analist",
    "ab-lead-title": "Veri, Süreç ve Yazılımı Tek Çatıda Birleştiren Mühendislik Vizyonu",
    "ab-lead-desc-1": "Amasya Üniversitesi Bilgisayar Mühendisliği mezunuyum. Yazılım mühendisliği disiplinini, saha ve iş süreçleri analitiğiyle harmanlayarak operasyonel darboğazları uçtan uca dijital çözümlere dönüştürüyorum. FİDE Konserve bünyesindeki PDKS ve puantaj otomasyonu ile DP World Evyap'taki lojistik/terminal süreç deneyimim sayesinde, sadece kod yazmanın ötesinde iş birimlerine doğrudan ölçülebilir değer üretmeye odaklanıyorum.",
    "ab-lead-desc-2": "Karar destek sistemleri, otomasyon araçları, veri temizleme boru hatları ve RESTful mimariler inşa ederken; paydaşların dilinden anlayan bir analist ve arka planı kusursuz kurgulayan bir mühendis olarak köprü görevi görüyorum.",
    "ab-p1-title": "İş &amp; Veri Odaklı Düşünce",
    "ab-p1-desc": "Varsayımlarla değil; saha gereksinimleri, kullanıcı hikâyeleri ve nicel veri analizleriyle hareket ederek iş süreçlerini en aza indirgenmiş hata ile modellerim.",
    "ab-p2-title": "Mühendislik Standartları &amp; Kalite",
    "ab-p2-desc": "Modüler mimari, temiz kod, yüksek veri bütünlüğü ve edge-case'leri kapsayan test disiplini ile uzun vadeli, sürdürülebilir sistemler kurarım.",
    "ab-p3-title": "Hızlı Adaptasyon &amp; Yüksek İcraat",
    "ab-p3-desc": "Yeni teknolojilere, yapay zekâ destekli araçlara ve kurumsal ihtiyaçlara hızla uyum sağlayarak gereksinimden çalışan ürüne giden süreyi kısaltırım.",
    "heading-contact": "İletişim <span>&amp; İş Birliği</span>",
    "contact-subtitle": "Kariyer fırsatları, teknik iş birlikleri veya projeleriniz için doğrudan iletişime geçebilirsiniz",
    "cnt-status": "Yeni Fırsatlara Açık · Aktif",
    "cnt-email-label": "Doğrudan E-posta Adresi",
    "cnt-btn-copy": "Adresi Kopyala",
    "cnt-btn-send": "E-posta Gönder",
    "lightbox-hint": "Detayları net okumak için görsele tıklayabilir veya Yakınlaştır butonunu kullanabilirsiniz. Yön tuşlarıyla gezinebilirsiniz.",
    "cert-view": "Tıklayarak İncele",
    "ftr-copy": "Tüm Hakları Saklıdır | Mühendislik Portfolyosu"
  }
};

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);

  document.documentElement.lang = lang;

  if (lang === "en") {
    document.title = "Ercan Polat | Computer Engineer - Data & Business Analyst";
  } else {
    document.title = "Ercan Polat | Bilgisayar Mühendisi - Veri & İş Analisti";
  }

  const langText = document.getElementById("lang-text");
  const langToggleBtn = document.getElementById("lang-toggle");
  if (langText) {
    langText.textContent = lang === "tr" ? "EN" : "TR";
  }
  if (langToggleBtn) {
    const toggleTitle = lang === "tr" ? "Switch to English" : "Türkçe'ye Geç";
    langToggleBtn.setAttribute("title", toggleTitle);
    langToggleBtn.setAttribute("aria-label", toggleTitle);
  }

  // Translate all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key] !== undefined) {
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
    trackAnalyticsEvent("language_change", {
      event_category: "Localization",
      target_lang: newLang
    });
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
    "Data & Business Analyst",
    "Computer Engineer",
    "Data Scientist"
  ],
  tr: [
    "İş Analisti",
    "Veri & İş Analisti",
    "Bilgisayar Mühendisi",
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

// ─── SCROLL: ACTIVE LINKS + STICKY HEADER + PROGRESS BAR ────────
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector(".header");
const scrollProgressBar = document.getElementById("scroll-progress");
const backToTopBtn = document.getElementById("back-to-top");

function updateScrollUI() {
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Reading progress bar calculation
  if (scrollProgressBar && docHeight > 0) {
    const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
    scrollProgressBar.style.width = `${progress}%`;
  }

  // Floating Back to Top Button
  if (backToTopBtn) {
    if (scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }
}

function handleScroll() {
  const scrollY = window.scrollY;

  if (header) {
    header.classList.toggle("sticky", scrollY > 80);
  }

  updateScrollUI();

  // Scrollspy: Check if user has reached or is near the bottom of the page (where Contact is)
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  const isNearBottom = (scrollY + windowHeight) >= (docHeight - 120);

  if (isNearBottom) {
    navLinks.forEach((link) => link.classList.remove("active"));
    const contactLink = document.querySelector('header nav a[href*="contact"]');
    if (contactLink) contactLink.classList.add("active");
  } else {
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
  }

  if (menuIcon && navbar && navbar.classList.contains("active")) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }

  animateSkills();
}

window.addEventListener("scroll", handleScroll, { passive: true });

// Floating Back to Top Click
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ─── ANALYTICS EVENT TRACKING HELPER ─────────────────────────
function trackAnalyticsEvent(eventName, eventParams = {}) {
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, eventParams);
    }
  } catch (err) {
    // Fail silently in development
  }
}

// Track CV Download Click
const cvDownloadBtn = document.getElementById("cv-download-btn");
if (cvDownloadBtn) {
  cvDownloadBtn.addEventListener("click", () => {
    trackAnalyticsEvent("cv_download", {
      event_category: "Engagement",
      file_name: "Ercan_Polat.pdf"
    });
  });
}

// ─── TOAST NOTIFICATION & 1-CLICK EMAIL COPY ──────────────────
const toastEl = document.getElementById("toast");
const toastMsg = document.getElementById("toast-msg");
let toastTimeout;

function showToast(message) {
  if (!toastEl || !toastMsg) return;
  toastMsg.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 3200);
}

const copyEmailBtn = document.getElementById("copy-email-btn");
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", async () => {
    const emailToCopy = "ercanpolatt.tr@gmail.com";
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        const tempInput = document.createElement("input");
        tempInput.value = emailToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }

      const copyIcon = document.getElementById("copy-icon-status");
      if (copyIcon) {
        copyIcon.className = "bx bx-check copy-icon";
        setTimeout(() => {
          copyIcon.className = "bx bx-copy copy-icon";
        }, 2500);
      }

      const successMsg = currentLang === "en" 
        ? "Email copied to clipboard! (ercanpolatt.tr@gmail.com)"
        : "E-posta adresi kopyalandı! (ercanpolatt.tr@gmail.com)";
      showToast(successMsg);

      trackAnalyticsEvent("email_copy", {
        event_category: "Lead",
        event_label: "ercanpolatt.tr@gmail.com"
      });
    } catch (err) {
      window.location.href = `mailto:${emailToCopy}`;
    }
  });
}


// Contact Section Email Copy Button
const copyContactBtn = document.getElementById("copy-contact-email");
if (copyContactBtn) {
  copyContactBtn.addEventListener("click", async () => {
    const emailToCopy = "ercanpolat.tr@gmail.com";
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        const tempInput = document.createElement("input");
        tempInput.value = emailToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }

      const copyIcon = document.getElementById("contact-copy-icon");
      const copyText = document.getElementById("contact-copy-text");
      if (copyIcon) copyIcon.className = "bx bx-check";
      if (copyText) {
        const origText = copyText.textContent;
        copyText.textContent = currentLang === "en" ? "Copied!" : "Kopyalandı!";
        setTimeout(() => {
          if (copyIcon) copyIcon.className = "bx bx-copy";
          if (copyText) copyText.textContent = origText;
        }, 2500);
      }

      const successMsg = currentLang === "en"
        ? "Email copied to clipboard! (ercanpolat.tr@gmail.com)"
        : "E-posta adresi kopyalandı! (ercanpolat.tr@gmail.com)";
      showToast(successMsg);

      trackAnalyticsEvent("email_copy", {
        event_category: "Lead",
        event_label: "contact_section_copy"
      });
    } catch (err) {
      window.location.href = "mailto:" + emailToCopy;
    }
  });
}

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

      // Immediately activate corresponding nav link for crisp user feedback
      if (this.closest(".navbar") || this.classList.contains("nav-link")) {
        navLinks.forEach((link) => link.classList.remove("active"));
        this.classList.add("active");
      } else {
        const matchingLink = document.querySelector('header nav a[href="' + targetId + '"]');
        if (matchingLink) {
          navLinks.forEach((link) => link.classList.remove("active"));
          matchingLink.classList.add("active");
        }
      }

      // Smooth scroll with header clearance
      const headerEl = document.querySelector(".header");
      const headerHeight = headerEl ? headerEl.offsetHeight : 80;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = Math.max(0, targetTop - headerHeight + 5);

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    }
  });
});

// ─── SPOTLIGHT THUMBNAILS SWITCHER ─────────────────────────
document.querySelectorAll(".spotlight-thumbs").forEach((container) => {
  const targetId = container.getAttribute("data-target");
  const targetImg = document.getElementById(targetId);
  const thumbBtns = container.querySelectorAll(".thumb-btn");

  if (targetImg && thumbBtns.length > 0) {
    thumbBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("active")) return;
        thumbBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const newSrc = btn.getAttribute("data-img");
        targetImg.style.opacity = "0.25";
        setTimeout(() => {
          targetImg.src = newSrc;
          targetImg.style.opacity = "1";
        }, 140);
      });
    });
  }
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
      trackAnalyticsEvent("project_filter_click", {
        event_category: "Portfolio",
        filter_category: filter
      });

      // Phase 1: Fade out all current cards first
      projectCards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "scale(0.94) translateY(10px)";
      });

      // Phase 2: After fade-out (220ms), update display & grid layout
      setTimeout(() => {
        let matchingIndex = 0;

        projectCards.forEach((card) => {
          const categoryAttr = card.getAttribute("data-category") || "";
          const categories = categoryAttr.split(/\s+/);
          const isMatch = (filter === "all" || categories.includes(filter));

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

// ─── PROJECT DETAIL & PRESENTATION MODAL ──────────────────────
const projectModal = document.getElementById("project-modal");
const projectModalClose = document.getElementById("project-modal-close");
const projectModalCloseBtn = document.getElementById("project-modal-close-btn");
const projectDetailsBtns = document.querySelectorAll(".btn-details");

const projectDataMap = {
  "puantaj": {
    en: {
      badge: "Enterprise Attendance & PDKS Automation",
      title: "FİDE Konserve - Smart Attendance & PDKS System",
      description: "Custom-built enterprise automation system for FİDE Konserve to automate factory human resources and payroll operations. The platform analyzes thousands of raw punch-clock badge records from hardware terminals, identifies missed or corrupted badge events, computes regular/overtime/weekend/night shifts with strict labor law compliance, and outputs comprehensive Excel/BIFF spreadsheets ready for ERP integration with zero data loss.",
      features: [
        "Automated PDKS Punch Log Ingestion & Data Cleansing from hardware terminal logs (CSV, Excel & DB)",
        "Intelligent Shift & Overtime Engine (Regular shift, Saturday overtime, Sunday overtime, and Night Shift bonus)",
        "Exception & Anomaly Detection (Instantly alerts HR for personnel who forgot badges or registered invalid times)",
        "Advanced Excel/BIFF & ERP Reporting (Official timesheets, daily work summaries, salary radar, and compliance radar)",
        "High-Performance Python Architecture (FastAPI, Pandas, SQLite, processing tens of thousands of rows in seconds)",
        "Interactive Web Management Portal with real-time analytics dashboard"
      ],
      specsTitle: "System Architecture & Execution Modes",
      specs: [
        "Backend Architecture: Python 3.10+, FastAPI, Pandas, Uvicorn, SQLite, Openpyxl, BIFF Engine",
        "Frontend & UI: Responsive Web Dashboard, Chart.js, HTML5/CSS3",
        "Launch Web Portal: python run.py --mode web  (Access at http://127.0.0.1:8000)",
        "Batch Monthly Calculation: python run.py --month 10 --year 2026",
        "Unit Test Suite: python run.py --mode test"
      ]
    },
    tr: {
      badge: "Kurumsal PDKS & Puantaj Otomasyonu",
      title: "FİDE Konserve - Akıllı Puantaj ve PDKS Sistemi",
      description: "FİDE Konserve fabrikası için özel olarak geliştirilmiş kurumsal otomasyon sistemi. Personel devam kontrol sistemi (PDKS) terminal verilerini işler, kart basmayı unutan veya hatalı basım yapan personelleri tespit eder, vardiya, fazla mesai, hafta sonu / pazar ve gece vardiyası sürelerini yasal mevzuata uygun hesaplar ve muhasebe/ERP sistemlerine aktarılabilir puantaj cetvellerini saniyeler içinde sıfır hatayla hazırlar.",
      features: [
        "Otomatik PDKS Analizi: Donanım terminallerinden gelen binlerce ham basım kaydını anında ayrıştırır, temizler ve doğrular.",
        "Akıllı Vardiya ve Mesai Motoru: Normal çalışma, fazla mesai, pazar mesaisi ve gece vardiyası sürelerini mevzuata tam uyumlu otomatik hesaplar.",
        "İstisna & Anomali Yönetimi: Kart basmayan veya eksik basan personeli tespit ederek İnsan Kaynakları departmanına anında raporlar.",
        "Gelişmiş Raporlama & ERP Entegrasyonu: Excel puantaj cetveli, günlük çalışma raporları, maaş radarı ve yasal uyum analizleri üretir.",
        "Yüksek Performanslı Altyapı: Python, FastAPI ve Pandas ile on binlerce satırlık veriyi birkaç saniyede kayıpsız işler.",
        "Modern Web Portalı: PDKS verilerini yönetmek ve tek tıkla rapor üretmek için interaktif web dashboard arayüzü sunar."
      ],
      specsTitle: "Sistem Mimarisi ve Çalıştırma Modları",
      specs: [
        "Arka Plan Mimarisi: Python 3.10+, FastAPI, Pandas, Uvicorn, SQLite, Openpyxl, BIFF Motoru",
        "Arayüz / Dashboard: Web Yönetim Portalı, İnteraktif Grafikler, Modern CSS3",
        "Web Portalı Başlatma: python run.py --mode web  (http://127.0.0.1:8000)",
        "Aylık Toplu Hesaplama: python run.py --month 10 --year 2026",
        "Birim Testleri: python run.py --mode test"
      ]
    },
    images: [
      { src: "img/projects/puantaj/app_screen_1.png", title: "PDKS Analizi & Kart Basım Hareketleri" },
      { src: "img/projects/puantaj/app_screen_2.png", title: "Vardiya & Fazla Mesai Hesaplama Motoru" },
      { src: "img/projects/puantaj/app_screen_3.png", title: "İstisna & Kart Unutma Hata Tespiti" },
      { src: "img/projects/puantaj/app_screen_4.png", title: "Excel Puantaj Cetveli & Rapor Çıktısı" },
      { src: "img/projects/puantaj/app_screen_5.png", title: "Web Yönetim Portalı & Dashboard" },
      { src: "img/projects/puantaj/app_screen_6.png", title: "Sistem Ayarları & Yapılandırma" }
    ],
    tags: ["Python 3.10+", "FastAPI", "Pandas", "Uvicorn", "SQLite", "Excel BIFF", "ERP Entegrasyonu", "Data Analytics"],
    iconClass: "bx bx-time-five",
    github: "https://github.com/ercanpolatt/personel-pdks-verisini-puantaja-isleme",
    video: "https://youtu.be/OnxTkWwbZQA",
    live: "https://youtu.be/OnxTkWwbZQA"
  },
  "qrcode": {
    en: {
      badge: "Desktop Automation & Barcode Studio",
      title: "Barcode & QR Code Studio (National ID & Excel Integrated)",
      description: "A professional desktop application built with Python and Tkinter for generating 1D barcodes and 2D QR codes. Designed for corporate operations, personnel ID card generation, and serial labeling with native embedded Excel cell image export, algorithmic TC ID checksum validation, and automated 3-column A4 grid printing.",
      features: [
        "Multi-Format Engine: 2D QR Code and 1D Barcodes (Code 128, Code 39, EAN-13, EAN-8, UPC-A)",
        "Combined Badge Cards: Embed both QR code and 1D Barcode on a single card layout",
        "National ID Algorithmic Checksum: Strict mathematical algorithm validation for 11-digit Turkish National IDs",
        "Native Excel Image Embedding: Inserts high-resolution barcode images directly inside Excel spreadsheet cells",
        "A4 Grid Print Layout: Automatically organizes records into an optimized 3-column A4 print sheet",
        "Clipboard Integration: Copy barcode graphic directly to Windows clipboard (Ctrl+Shift+C) or paste table data (Ctrl+V)",
        "Batch Sequential Generation: Generate hundreds of sequential codes with customizable prefix and numbering"
      ],
      specsTitle: "Keyboard Shortcuts & Stack",
      specs: [
        "Ctrl + C: Copy selected table rows in Excel format",
        "Ctrl + Shift + C: Copy active barcode graphic directly to Windows clipboard",
        "Ctrl + V: Smart paste clipboard rows into table",
        "Ctrl + P: Send print jobs directly to default system printer",
        "Technologies: Python 3.8+, Tkinter GUI, Pillow (PIL), qrcode, python-barcode, openpyxl, pywin32, SQLite"
      ]
    },
    tr: {
      badge: "Masaüstü & Barkod Otomasyonu",
      title: "Barkod & QR Kod Studio (TC Kimlik & Excel Destekli)",
      description: "T.C. Kimlik numaraları, personel kodları, ürün seri numaraları ve özel metinler için gelişmiş 1D Barkod ve 2D QR Kod üretimi sağlayan profesyonel bir masaüstü uygulamasıdır. Gelişmiş Excel entegrasyonu, toplu üretim özellikleri ve A4 baskı yetenekleriyle iş süreçlerini hızlandırır.",
      features: [
        "Çoklu Format Desteği: QR Kod (2D) ve 1D Barkodlar (Code 128, Code 39, EAN-13, EAN-8, UPC-A)",
        "Kombine Kartlar: Tek bir kart üzerinde hem QR kod hem de Barkod barındırabilme",
        "Akıllı T.C. Doğrulama: 11 haneli T.C. Kimlik numaraları için matematiksel algoritma kontrolü",
        "Excel Hücresine Gömülü Resim: Oluşturulan barkodları hücre içine gömülü resimler olarak Excel'e aktarma",
        "A4 Grid Baskı Modu: Toplu kayıtları otomatik olarak A4 sayfalarına 3'lü sütunlar halinde dizme",
        "Gelişmiş Pano Entegrasyonu: Barkodları doğrudan Windows panosuna resim olarak kopyalama (Ctrl+Shift+C)",
        "Seri & Ardışık Üretim: Tek tıkla yüzlerce sıralı barkod üretimi (Örn: URUN-0001, URUN-0002)"
      ],
      specsTitle: "Kısayol Tuşları ve Teknolojiler",
      specs: [
        "Ctrl + C: Tabloda seçili satırları Excel uyumlu formatta metin olarak kopyalar",
        "Ctrl + Shift + C: Önizlemedeki barkod görselini doğrudan Windows panosuna kopyalar",
        "Ctrl + V: Excel'den kopyalanan satırları akıllıca tabloya aktarır",
        "Ctrl + P: Seçili kayıtları doğrudan varsayılan yazıcıya gönderir",
        "Teknolojiler: Python 3.8+, Tkinter GUI, Pillow (PIL), qrcode, python-barcode, openpyxl, pywin32, SQLite"
      ]
    },
    images: [
      { src: "img/projects/qr-code/uygulama_arayuzu.png", title: "Geniş ve Detaylı Uygulama Arayüzü" },
      { src: "img/projects/qr-code/toplu_a4_formati.png", title: "A4 Sayfa Grid Dizilimi ve Baskı Çıktısı" },
      { src: "img/projects/qr-code/png_formati.png", title: "Detaylı ve Okunabilir PNG Kod Formatı" }
    ],
    tags: ["Python 3.8+", "Tkinter GUI", "Pillow (PIL)", "qrcode", "python-barcode", "openpyxl", "pywin32", "SQLite"],
    iconClass: "bx bx-qr-scan",
    github: "https://github.com/ercanpolatt/belirli-bir-sayi-icin-QR-code-olusturma-TC-KIMLIK-",
    live: "https://github.com/ercanpolatt/belirli-bir-sayi-icin-QR-code-olusturma-TC-KIMLIK-"
  },
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

function openProjectModal(projectId) {
  const projectItem = projectDataMap[projectId];
  if (!projectItem || !projectModal) return;

  const langData = projectItem[currentLang] || projectItem.tr;

  trackAnalyticsEvent("project_modal_open", {
    event_category: "Portfolio",
    project_id: projectId,
    project_title: langData.title || projectId
  });

  const badgeEl = document.getElementById("project-modal-badge");
  const titleEl = document.getElementById("project-modal-title");
  const descEl = document.getElementById("project-modal-desc");
  const iconContainer = document.getElementById("project-modal-icon");
  const tagsContainer = document.getElementById("project-modal-tags");
  const featuresContainer = document.getElementById("project-modal-features");
  const specsSection = document.getElementById("project-modal-specs-section");
  const specsTitle = document.getElementById("project-modal-specs-title");
  const specsContainer = document.getElementById("project-modal-specs");
  const galleryContainer = document.getElementById("project-modal-gallery");
  const mainImg = document.getElementById("project-modal-main-img");
  const captionEl = document.getElementById("project-modal-gallery-caption");
  const thumbsContainer = document.getElementById("project-modal-thumbs");
  const githubLink = document.getElementById("project-modal-github");
  const videoLink = document.getElementById("project-modal-video");

  if (badgeEl) badgeEl.textContent = langData.badge;
  if (titleEl) titleEl.textContent = langData.title;
  if (descEl) descEl.textContent = langData.description;

  if (iconContainer) {
    iconContainer.innerHTML = `<i class='${projectItem.iconClass}'></i>`;
  }

  if (tagsContainer) {
    tagsContainer.innerHTML = projectItem.tags.map(t => `<span>${t}</span>`).join("");
  }

  if (featuresContainer) {
    featuresContainer.innerHTML = langData.features.map(f => `<li><i class='bx bx-check-circle'></i> <span>${f}</span></li>`).join("");
  }

  // Gallery Handling
  currentActiveModalProjectId = projectId;
  currentActiveModalImgIndex = 0;

  if (projectItem.images && projectItem.images.length > 0 && galleryContainer && mainImg && thumbsContainer) {
    galleryContainer.style.display = "block";
    mainImg.src = projectItem.images[0].src;
    if (captionEl) captionEl.textContent = projectItem.images[0].title;

    thumbsContainer.innerHTML = projectItem.images.map((img, idx) => `
      <div class="modal-thumb ${idx === 0 ? 'active' : ''}" data-idx="${idx}" title="${img.title}">
        <img src="${img.src}" alt="${img.title}" />
      </div>
    `).join("");

    const modalThumbs = thumbsContainer.querySelectorAll(".modal-thumb");
    modalThumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        modalThumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        const idx = parseInt(thumb.getAttribute("data-idx"), 10);
        currentActiveModalImgIndex = idx;
        const selectedImg = projectItem.images[idx];
        mainImg.style.opacity = "0.2";
        setTimeout(() => {
          mainImg.src = selectedImg.src;
          if (captionEl) captionEl.textContent = selectedImg.title;
          mainImg.style.opacity = "1";
        }, 120);
      });
    });
  } else if (galleryContainer) {
    galleryContainer.style.display = "none";
  }

  // Specs Handling
  if (langData.specs && langData.specs.length > 0 && specsSection && specsContainer) {
    specsSection.style.display = "block";
    if (specsTitle && langData.specsTitle) specsTitle.innerHTML = `<i class='bx bx-terminal'></i> ${langData.specsTitle}`;
    specsContainer.innerHTML = langData.specs.map(s => `<li>${s}</li>`).join("");
  } else if (specsSection) {
    specsSection.style.display = "none";
  }

  // Links
  if (githubLink) githubLink.href = projectItem.github;
  if (videoLink) {
    if (projectItem.video) {
      videoLink.href = projectItem.video;
      videoLink.style.display = "inline-flex";
    } else {
      videoLink.style.display = "none";
    }
  }

  projectModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Global modal tracking
let currentActiveModalProjectId = null;
let currentActiveModalImgIndex = 0;

// Project Modal Gallery zoom triggers
const modalMainImgEl = document.getElementById("project-modal-main-img");
const modalGalleryZoomTrigger = document.getElementById("gallery-zoom-trigger");

if (modalMainImgEl) {
  modalMainImgEl.addEventListener("click", () => {
    if (currentActiveModalProjectId && projectDataMap[currentActiveModalProjectId]) {
      const imgs = projectDataMap[currentActiveModalProjectId].images;
      if (imgs && imgs.length > 0) {
        openLightbox(imgs, currentActiveModalImgIndex);
      }
    }
  });
}

if (modalGalleryZoomTrigger) {
  modalGalleryZoomTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentActiveModalProjectId && projectDataMap[currentActiveModalProjectId]) {
      const imgs = projectDataMap[currentActiveModalProjectId].images;
      if (imgs && imgs.length > 0) {
        openLightbox(imgs, currentActiveModalImgIndex);
      }
    }
  });
}

// Bind all details buttons (grid cards + spotlight cards) & Spotlight image zoom
document.addEventListener("click", (e) => {
  const detailsBtn = e.target.closest(".btn-details");
  if (detailsBtn) {
    const projectId = detailsBtn.getAttribute("data-project");
    if (projectId) {
      openProjectModal(projectId);
    }
    return;
  }

  // Spotlight Zoom trigger button
  const zoomBtn = e.target.closest(".spotlight-zoom-trigger");
  if (zoomBtn) {
    const prjId = zoomBtn.getAttribute("data-project");
    if (prjId && projectDataMap[prjId] && projectDataMap[prjId].images) {
      const targetImg = document.getElementById(`spotlight-img-${prjId}`);
      let startIdx = 0;
      if (targetImg) {
        const foundIdx = projectDataMap[prjId].images.findIndex(img => targetImg.src.includes(img.src));
        if (foundIdx !== -1) startIdx = foundIdx;
      }
      openLightbox(projectDataMap[prjId].images, startIdx);
    }
    return;
  }

  // Spotlight main image click
  const spotlightImg = e.target.closest(".spotlight-main-img");
  if (spotlightImg) {
    const prjId = spotlightImg.getAttribute("data-project") || (spotlightImg.id === "spotlight-img-puantaj" ? "puantaj" : "qrcode");
    if (prjId && projectDataMap[prjId] && projectDataMap[prjId].images) {
      let startIdx = 0;
      const foundIdx = projectDataMap[prjId].images.findIndex(img => spotlightImg.src.includes(img.src));
      if (foundIdx !== -1) startIdx = foundIdx;
      openLightbox(projectDataMap[prjId].images, startIdx);
    }
  }
});

if (projectModalClose) {
  projectModalClose.addEventListener("click", closeProjectModal);
}

if (projectModalCloseBtn) {
  projectModalCloseBtn.addEventListener("click", closeProjectModal);
}

if (projectModal) {
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) closeProjectModal();
  });
}

function closeProjectModal() {
  if (projectModal) {
    projectModal.style.display = "none";
    if (!lightboxModal || !lightboxModal.classList.contains("active")) {
      document.body.style.overflow = "auto";
    }
  }
}

// ─── FULLSCREEN HIGH-RES IMAGE LIGHTBOX MANAGER ─────────────
const lightboxModal = document.getElementById("image-lightbox-modal");
const lightboxBackdrop = document.getElementById("lightbox-backdrop");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCounter = document.getElementById("lightbox-counter");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
const lightboxPrevBtn = document.getElementById("lightbox-prev-btn");
const lightboxNextBtn = document.getElementById("lightbox-next-btn");
const lightboxZoomBtn = document.getElementById("lightbox-zoom-btn");
const lightboxZoomIcon = document.getElementById("lightbox-zoom-icon");
const lightboxZoomText = document.getElementById("lightbox-zoom-text");

let lightboxImagesList = [];
let activeLightboxIndex = 0;
let isImageZoomed = false;

function openLightbox(images, startIndex = 0) {
  if (!images || images.length === 0 || !lightboxModal || !lightboxImage) return;
  lightboxImagesList = images;
  activeLightboxIndex = Math.max(0, Math.min(startIndex, images.length - 1));
  isImageZoomed = false;
  lightboxImage.classList.remove("is-zoomed");
  updateZoomButtonState();

  updateLightboxView();
  lightboxModal.classList.add("active");
  lightboxModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function updateLightboxView() {
  const currentItem = lightboxImagesList[activeLightboxIndex];
  if (!currentItem) return;

  lightboxImage.style.opacity = "0.2";
  lightboxImage.src = currentItem.src;
  lightboxImage.alt = currentItem.title || "Ekran Görüntüsü";

  if (lightboxCounter) {
    lightboxCounter.textContent = `${activeLightboxIndex + 1} / ${lightboxImagesList.length}`;
  }
  if (lightboxCaption) {
    lightboxCaption.textContent = currentItem.title || "";
  }

  const hasMultiple = lightboxImagesList.length > 1;
  if (lightboxPrevBtn) lightboxPrevBtn.style.display = hasMultiple ? "flex" : "none";
  if (lightboxNextBtn) lightboxNextBtn.style.display = hasMultiple ? "flex" : "none";

  setTimeout(() => {
    lightboxImage.style.opacity = "1";
  }, 90);
}

function closeLightbox() {
  if (!lightboxModal) return;
  lightboxModal.classList.remove("active");
  lightboxModal.setAttribute("aria-hidden", "true");
  isImageZoomed = false;
  if (lightboxImage) lightboxImage.classList.remove("is-zoomed");
  updateZoomButtonState();

  const isModalOpen = (projectModal && projectModal.style.display === "block") ||
                      (certModal && certModal.style.display === "block");
  if (!isModalOpen) {
    document.body.style.overflow = "auto";
  }
}

function toggleLightboxZoom() {
  if (!lightboxImage) return;
  isImageZoomed = !isImageZoomed;
  lightboxImage.classList.toggle("is-zoomed", isImageZoomed);
  updateZoomButtonState();
}

function updateZoomButtonState() {
  if (!lightboxZoomIcon || !lightboxZoomText) return;
  if (isImageZoomed) {
    lightboxZoomIcon.className = "bx bx-zoom-out";
    lightboxZoomText.textContent = (typeof currentLang !== "undefined" && currentLang === "en") ? "Reset" : "Sıfırla";
  } else {
    lightboxZoomIcon.className = "bx bx-zoom-in";
    lightboxZoomText.textContent = (typeof currentLang !== "undefined" && currentLang === "en") ? "Zoom" : "Yakınlaştır";
  }
}

function nextLightboxImage() {
  if (lightboxImagesList.length <= 1) return;
  activeLightboxIndex = (activeLightboxIndex + 1) % lightboxImagesList.length;
  isImageZoomed = false;
  if (lightboxImage) lightboxImage.classList.remove("is-zoomed");
  updateZoomButtonState();
  updateLightboxView();
}

function prevLightboxImage() {
  if (lightboxImagesList.length <= 1) return;
  activeLightboxIndex = (activeLightboxIndex - 1 + lightboxImagesList.length) % lightboxImagesList.length;
  isImageZoomed = false;
  if (lightboxImage) lightboxImage.classList.remove("is-zoomed");
  updateZoomButtonState();
  updateLightboxView();
}

if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);
if (lightboxNextBtn) lightboxNextBtn.addEventListener("click", (e) => { e.stopPropagation(); nextLightboxImage(); });
if (lightboxPrevBtn) lightboxPrevBtn.addEventListener("click", (e) => { e.stopPropagation(); prevLightboxImage(); });
if (lightboxZoomBtn) lightboxZoomBtn.addEventListener("click", (e) => { e.stopPropagation(); toggleLightboxZoom(); });
if (lightboxImage) {
  lightboxImage.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleLightboxZoom();
  });
}

// Touch swipe support for mobile lightbox
let touchStartX = 0;
let touchEndX = 0;
if (lightboxModal) {
  lightboxModal.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightboxModal.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50 && !isImageZoomed) {
      if (diff < 0) nextLightboxImage();
      else prevLightboxImage();
    }
  }, { passive: true });
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
  if (lightboxModal && lightboxModal.classList.contains("active")) {
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      prevLightboxImage();
    } else if (e.key === "ArrowRight") {
      nextLightboxImage();
    }
    return;
  }

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

// ─── OUTBOUND SOCIAL CLICKS TRACKING ──────────────────────────
document.querySelectorAll(".social-icons a, .footer .social a").forEach((link) => {
  link.addEventListener("click", () => {
    trackAnalyticsEvent("social_click", {
      event_category: "Outbound",
      platform: link.getAttribute("aria-label") || link.href
    });
  });
});

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
