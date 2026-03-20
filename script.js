/**
 * Portfolio Website - Main JavaScript File
 * Features: Custom cursor, theme toggle, language switching, smooth scrolling, form handling
 * Author: Ozodbek Sobirov
 */

// ===== GLOBAL VARIABLES =====
let currentLanguage = 'uz';
let currentTheme = 'dark';

// ===== TRANSLATIONS =====
const translations = {
  uz: {
    'title': 'Ozodbek Sobirov - Full Stack Dasturchi',
    'nav-home': 'Bosh sahifa',
    'nav-experience': 'Tajriba',
    'nav-certificates': 'Sertifikatlar',
    'nav-skills': 'Texnologiyalar',
    'nav-mentor': 'Ustozim',
    'nav-languages': 'Tillar',
    'nav-projects': 'Loyihalar',
    'nav-contact': 'Aloqa',
    'hero-greeting': 'Salom, men',
    'hero-age': '16 yoshda',
    'hero-title-text': 'Full stack dasturchi',
    'hero-description': 'IT Park talabasi va maktab o\'quvchisi. Python, HTML, CSS, Web Design va Backend yo\'nalishlarida ishlayman. Telegram botlar, vebsaytlar va dasturlar yaratish bilan shug\'ullanaman.',
    'hero-view-projects': 'Loyihalarimni ko\'ring',
    'hero-contact-me': 'Bog\'laning',
    'hero-scroll': 'Pastga scroll qiling',
    'experience-title': 'Tajriba',
    'experience-subtitle': 'IT Park talabasi va maktab o\'quvchisi',
    'experience-itpark-title': 'IT Park',
    'experience-itpark-role': 'Talaba',
    'experience-itpark-description': 'IT Parkda dasturlashni o\'rganaman. Ustozim Nodir Odilov rahbarligida Python, Web Design va Backend yo\'nalishlarida ishlayman.',
    'experience-freelance-title': 'Maktab',
    'experience-freelance-role': 'O\'quvchi',
    'experience-freelance-description': 'Maktab o\'quvchisi sifatida ta\'lim olayapman. IT Park bilan bir vaqtda o\'qishni davom ettiryapman.',
    'certificates-title': 'Sertifikatlar',
    'certificates-subtitle': 'Professional sertifikatlar — Coursera & Meta',
    'cert-itpark-title': 'IT Park Sertifikati',
    'cert-itpark-desc': 'Python Backend Development kursi',
    'cert-security-title': 'Xavfsizlik Testlash',
    'cert-security-desc': 'Ethical Hacking va Penetration Testing',
    'cert-web-title': 'Web Development',
    'cert-web-desc': 'Modern Web Technologies',
    'cert-meta-title': 'Meta Backend Developer',
    'cert-meta-desc': 'Coursera · Meta professional sertifikat — Backend Development',
    'cert-meta-fullstack-title': 'Meta Full Stack Developer',
    'cert-meta-fullstack-desc': 'Coursera · Meta professional sertifikat — Front-End & Back-End',
    'cert-meta-react-title': 'Meta React Advanced',
    'cert-meta-react-desc': 'Coursera · Meta professional sertifikat — React Advanced',
    'cert-software-engineer-title': 'Software Engineer',
    'cert-software-engineer-desc': 'Meta professional sertifikat — Software Engineering',
    'cert-problem-solving-title': 'Problem Solving',
    'cert-problem-solving-desc': 'Meta professional sertifikat — algoritmik yechish',
    'cert-sql-title': 'SQL',
    'cert-sql-desc': 'Meta professional sertifikat — SQL va ma\'lumotlar bazasi',
    'cert-genai-specialization-title': 'Intro to Generative AI (Specialization)',
    'cert-genai-specialization-desc': 'Coursera’da onlayn, non-credit Specialization: "Intro to Generative AI" — Core Concepts uchun boshlang‘ich primer kursi muvaffaqiyatli yakunlandi.',
    'cert-genai-intro-title': 'Introduction to Generative AI (Google Cloud)',
    'cert-genai-intro-desc': 'Google Cloud universiteti tomonidan Coursera’da taklif etilgan non-credit onlayn kurs.',
    'cert-genai-course2-title': 'Generative AI (Course)',
    'cert-genai-course2-desc': 'Coursera’da Generative AI bo‘yicha onlayn kurs (sertifikat).',
    'cert-genai-course3-title': 'Generative AI (Course)',
    'cert-genai-course3-desc': 'Coursera’da Generative AI bo‘yicha onlayn kurs (sertifikat).',
    'cert-view': 'Ko\'rish',
    'skills-title': 'Texnologiyalar va ko\'nikmalar',
    'skills-subtitle': 'Ishlatadigan texnologiyalar va asboblar',
    'skills-frontend': 'Frontend',
    'skills-backend': 'Backend',
    'skills-databases': 'Ma\'lumotlar bazasi',
    'skills-tools': 'Ishlab chiqish asboblari',
    'skills-ides': 'IDE va muharrirlar',
    'skills-os': 'Operatsion tizimlar',
    'mentor-title': 'Ustozim',
    'mentor-subtitle': 'Menga dasturlash bo\'yicha bilim beradigan ustozim',
    'mentor-name': 'Nodir Odilov',
    'mentor-role': 'IT Park o\'qituvchisi',
    'mentor-description': 'Ustozim menga dasturlash bo\'yicha bilim beradi. Python, Web Design va Backend yo\'nalishlarida dars beradi.',
    'projects-title': 'Loyihalar',
    'projects-subtitle': 'Mening Telegram botlarim',
    'projects-tech-title': 'Asosiy texnologiyalar',
    'project-botchioka-desc': 'Mening brendim. Kanalda barcha yangiliklar, bot buyurtma berish uchun @BotchiOkabot ga yozing — sizga bot yasab beramiz.',
    'project-valyuta-desc': 'Aqlli valyuta boti: kurslar, kundalik yangilanish, 24/7 ishlaydi.',
    'project-fiileebot-desc': 'Fayllaringizni xavfsiz saqlash va boshqarish.',
    'project-saavedbot-desc': 'Tez videolar yuklash va musiqalarni topish — bitta botda.',
    'project-badge-brand': 'Brendim',
    'project-botchioka-channel': 'Kanal',
    'project-botchioka-order': 'Bot buyurtma',
    'project-view': 'Ko\'rish',
    'contact-title': 'Aloqa',
    'contact-subtitle': 'Men bilan bog\'laning',
    'contact-email': 'Email',
    'contact-phone': 'Telefon',
    'contact-telegram': 'Telegram',
    'contact-telegram-hint': 'Men bilan bog\'lanish uchun Telegramdan yozing',
    'contact-github': 'GitHub',
    'form-name': 'Ism',
    'form-subject': 'Mavzu',
    'form-message': 'Xabar',
    'form-send': 'Xabarni yuborish',
    'footer-rights': 'Barcha huquqlar himoyalangan.'
  },
  en: {
    'title': 'Ozodbek Sobirov - Full Stack Developer',
    'nav-home': 'Home',
    'nav-experience': 'Experience',
    'nav-certificates': 'Certificates',
    'nav-skills': 'Technologies',
    'nav-mentor': 'My mentor',
    'nav-languages': 'Languages',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    'hero-greeting': 'Hello, I am',
    'hero-age': '16 years old',
    'hero-title-text': 'Full Stack Developer',
    'hero-description': 'IT Park student and school student. I work with Python, HTML, CSS, Web Design and Backend. I build Telegram bots, websites and applications.',
    'hero-view-projects': 'View my projects',
    'hero-contact-me': 'Contact me',
    'hero-scroll': 'Scroll down',
    'experience-title': 'Experience',
    'experience-subtitle': 'IT Park student and school student',
    'experience-itpark-title': 'IT Park',
    'experience-itpark-role': 'Student',
    'experience-itpark-description': 'I learn programming at IT Park. I work with Python, Web Design and Backend under my mentor Nodir Odilov.',
    'experience-freelance-title': 'School',
    'experience-freelance-role': 'Pupil',
    'experience-freelance-description': 'I go to school and study at IT Park at the same time.',
    'certificates-title': 'Certificates',
    'certificates-subtitle': 'Professional certificates — Coursera & Meta',
    'cert-itpark-title': 'IT Park Certificate',
    'cert-itpark-desc': 'Python Backend Development course',
    'cert-security-title': 'Security Testing',
    'cert-security-desc': 'Ethical Hacking and Penetration Testing',
    'cert-web-title': 'Web Development',
    'cert-web-desc': 'Modern Web Technologies',
    'cert-meta-title': 'Meta Backend Developer',
    'cert-meta-desc': 'Coursera · Meta professional certificate — Backend Development',
    'cert-meta-fullstack-title': 'Meta Full Stack Developer',
    'cert-meta-fullstack-desc': 'Coursera · Meta professional certificate — Front-End & Back-End',
    'cert-meta-react-title': 'Meta React Advanced',
    'cert-meta-react-desc': 'Coursera · Meta professional certificate — React Advanced',
    'cert-software-engineer-title': 'Software Engineer',
    'cert-software-engineer-desc': 'Meta professional certificate — Software Engineering',
    'cert-problem-solving-title': 'Problem Solving',
    'cert-problem-solving-desc': 'Meta professional certificate — algorithmic problem solving',
    'cert-sql-title': 'SQL',
    'cert-sql-desc': 'Meta professional certificate — SQL and databases',
    'cert-genai-specialization-title': 'Intro to Generative AI (Specialization)',
    'cert-genai-specialization-desc': 'Coursera has successfully completed the online, non-credit Specialization: Intro to Generative AI — A Beginner’s Primer on Core Concepts.',
    'cert-genai-intro-title': 'Introduction to Generative AI (Google Cloud)',
    'cert-genai-intro-desc': 'An online, non-credit course from the University of Google Cloud offered on Coursera.',
    'cert-genai-course2-title': 'Generative AI (Course)',
    'cert-genai-course2-desc': 'An online Coursera course on Generative AI (certificate).',
    'cert-genai-course3-title': 'Generative AI (Course)',
    'cert-genai-course3-desc': 'An online Coursera course on Generative AI (certificate).',
    'cert-view': 'View',
    'skills-title': 'Technologies & Skills',
    'skills-subtitle': 'Technologies and tools I use',
    'skills-frontend': 'Frontend',
    'skills-backend': 'Backend',
    'skills-databases': 'Databases',
    'skills-tools': 'Development Tools',
    'skills-ides': 'IDEs & Editors',
    'skills-os': 'Operating Systems',
    'mentor-title': 'My mentor',
    'mentor-subtitle': 'The person who shares programming knowledge with me',
    'mentor-name': 'Nodir Odilov',
    'mentor-role': 'IT Park teacher',
    'mentor-description': 'My mentor shares his knowledge with me in programming. He teaches Python, Web Design and Backend.',
    'projects-title': 'Projects',
    'projects-subtitle': 'My Telegram bots',
    'projects-tech-title': 'Key technologies',
    'project-botchioka-desc': 'My brand. All news on the channel; write to @BotchiOkabot to order a custom bot — we build bots for you.',
    'project-valyuta-desc': 'Smart currency bot: exchange rates, daily updates, 24/7.',
    'project-fiileebot-desc': 'Store and manage your files securely.',
    'project-saavedbot-desc': 'Download videos fast and find music — all in one bot.',
    'project-badge-brand': 'My brand',
    'project-botchioka-channel': 'Channel',
    'project-botchioka-order': 'Order bot',
    'project-view': 'View',
    'contact-title': 'Contact',
    'contact-subtitle': 'Get in touch with me',
    'contact-email': 'Email',
    'contact-phone': 'Phone',
    'contact-telegram': 'Telegram',
    'contact-telegram-hint': 'Message me on Telegram to get in touch',
    'contact-github': 'GitHub',
    'form-name': 'Name',
    'form-subject': 'Subject',
    'form-message': 'Message',
    'form-send': 'Send message',
    'footer-rights': 'All rights reserved.'
  },
  ru: {
    'title': 'Озодбек Собиров - Full Stack Разработчик',
    'nav-home': 'Главная',
    'nav-experience': 'Опыт',
    'nav-certificates': 'Сертификаты',
    'nav-skills': 'Технологии',
    'nav-mentor': 'Мой наставник',
    'nav-languages': 'Языки',
    'nav-projects': 'Проекты',
    'nav-contact': 'Контакты',
    'hero-greeting': 'Привет, я',
    'hero-age': '16 лет',
    'hero-title-text': 'Full Stack Разработчик',
    'hero-description': 'Студент IT Park и школьник. Работаю с Python, HTML, CSS, Web Design и Backend. Создаю Telegram-ботов, сайты и приложения.',
    'hero-view-projects': 'Посмотреть мои проекты',
    'hero-contact-me': 'Связаться со мной',
    'hero-scroll': 'Прокрутите вниз',
    'experience-title': 'Опыт',
    'experience-subtitle': 'Студент IT Park и школьник',
    'experience-itpark-title': 'IT Park',
    'experience-itpark-role': 'Студент',
    'experience-itpark-description': 'Учусь программированию в IT Park. Работаю по направлениям Python, Web Design и Backend под руководством наставника Нодира Одилова.',
    'experience-freelance-title': 'Школа',
    'experience-freelance-role': 'Ученик',
    'experience-freelance-description': 'Учусь в школе и параллельно в IT Park.',
    'certificates-title': 'Сертификаты',
    'certificates-subtitle': 'Профессиональные сертификаты — Coursera и Meta',
    'cert-itpark-title': 'Сертификат IT Park',
    'cert-itpark-desc': 'Курс Python Backend Development',
    'cert-security-title': 'Тестирование Безопасности',
    'cert-security-desc': 'Этический хакинг и тестирование на проникновение',
    'cert-web-title': 'Веб-разработка',
    'cert-web-desc': 'Современные веб-технологии',
    'cert-meta-title': 'Meta Backend Developer',
    'cert-meta-desc': 'Coursera · Meta профессиональный сертификат — Backend Development',
    'cert-meta-fullstack-title': 'Meta Full Stack Developer',
    'cert-meta-fullstack-desc': 'Coursera · Meta профессиональный сертификат — Front-End и Back-End',
    'cert-meta-react-title': 'Meta React Advanced',
    'cert-meta-react-desc': 'Coursera · Meta профессиональный сертификат — React Advanced',
    'cert-software-engineer-title': 'Software Engineer',
    'cert-software-engineer-desc': 'Meta профессиональный сертификат — Software Engineering',
    'cert-problem-solving-title': 'Problem Solving',
    'cert-problem-solving-desc': 'Meta профессиональный сертификат — алгоритмическое решение',
    'cert-sql-title': 'SQL',
    'cert-sql-desc': 'Meta профессиональный сертификат — SQL и базы данных',
    'cert-genai-specialization-title': 'Intro to Generative AI (Специализация)',
    'cert-genai-specialization-desc': 'Coursera успешно завершила онлайн-специализацию без зачетных единиц: Intro to Generative AI — вводный primer по Core Concepts.',
    'cert-genai-intro-title': 'Introduction to Generative AI (Google Cloud)',
    'cert-genai-intro-desc': 'Онлайн-курс без зачетных единиц от университета Google Cloud, предлагаемый на Coursera.',
    'cert-genai-course2-title': 'Generative AI (Курс)',
    'cert-genai-course2-desc': 'Онлайн-курс Coursera по Generative AI (сертификат).',
    'cert-genai-course3-title': 'Generative AI (Курс)',
    'cert-genai-course3-desc': 'Онлайн-курс Coursera по Generative AI (сертификат).',
    'cert-view': 'Посмотреть',
    'skills-title': 'Технологии и навыки',
    'skills-subtitle': 'Технологии и инструменты, которые я использую',
    'skills-frontend': 'Frontend',
    'skills-backend': 'Backend',
    'skills-databases': 'Базы данных',
    'skills-tools': 'Инструменты разработки',
    'skills-ides': 'IDE и редакторы',
    'skills-os': 'Операционные системы',
    'mentor-title': 'Мой наставник',
    'mentor-subtitle': 'Человек, который передаёт мне знания по программированию',
    'mentor-name': 'Нодир Одилов',
    'mentor-role': 'Преподаватель IT Park',
    'mentor-description': 'Мой наставник передаёт мне знания по программированию. Ведёт занятия по Python, Web Design и Backend.',
    'projects-title': 'Проекты',
    'projects-subtitle': 'Мои Telegram-боты',
    'projects-tech-title': 'Ключевые технологии',
    'project-botchioka-desc': 'Мой бренд. Все новости в канале; напишите @BotchiOkabot, чтобы заказать бота — мы создадим бота для вас.',
    'project-valyuta-desc': 'Умный бот курсов валют: курсы, ежедневное обновление, 24/7.',
    'project-fiileebot-desc': 'Безопасное хранение и управление вашими файлами.',
    'project-saavedbot-desc': 'Быстрая загрузка видео и поиск музыки — всё в одном боте.',
    'project-badge-brand': 'Мой бренд',
    'project-botchioka-channel': 'Канал',
    'project-botchioka-order': 'Заказать бота',
    'project-view': 'Посмотреть',
    'contact-title': 'Контакты',
    'contact-subtitle': 'Свяжитесь со мной',
    'contact-email': 'Email',
    'contact-phone': 'Телефон',
    'contact-telegram': 'Telegram',
    'contact-telegram-hint': 'Напишите мне в Telegram для связи',
    'contact-github': 'GitHub',
    'form-name': 'Имя',
    'form-subject': 'Тема',
    'form-message': 'Сообщение',
    'form-send': 'Отправить сообщение',
    'footer-rights': 'Все права защищены.'
  }
};

// ===== DOM ELEMENTS =====
const elements = {
  cursor: document.getElementById('cursor'),
  cursorTrail: document.getElementById('cursorTrail'),
  themeToggle: document.getElementById('themeToggle'),
  languageBtn: document.getElementById('languageBtn'),
  languageDropdown: document.getElementById('languageDropdown'),
  mobileMenuToggle: document.getElementById('mobileMenuToggle'),
  navMenu: document.getElementById('navMenu'),
  header: document.getElementById('header'),
  contactForm: document.getElementById('contactForm')
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  loadUserPreferences();
  // initializeCustomCursor(); // Disabled for better usability
  initializeThemeToggle();
  initializeLanguageSwitcher();
  initializeMobileMenu();
  initializeSmoothScrolling();
  initializeScrollAnimations();
  initializeContactForm();
  initializeTypingAnimation();
  updateLanguage(currentLanguage);
  updateTheme(currentTheme);
}

// ===== CUSTOM CURSOR - DISABLED =====
/*
function initializeCustomCursor() {
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let trailX = 0, trailY = 0;
  const trail = [];
  const maxTrailLength = 10;

  // Mouse move handler
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Cursor animation loop
  function animateCursor() {
    // Smooth cursor movement
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    // Update cursor position
    elements.cursor.style.left = cursorX + 'px';
    elements.cursor.style.top = cursorY + 'px';
    elements.cursor.style.opacity = '1';

    // Add trail points
    trail.push({ x: cursorX, y: cursorY });
    if (trail.length > maxTrailLength) {
      trail.shift();
    }

    // Update trail
    updateCursorTrail();
    
    requestAnimationFrame(animateCursor);
  }

  function updateCursorTrail() {
    let trailHTML = '';
    trail.forEach((point, index) => {
      const opacity = (index + 1) / trail.length * 0.6;
      const size = (index + 1) / trail.length * 8;
      trailHTML += `
        <div style="
          position: absolute;
          left: ${point.x}px;
          top: ${point.y}px;
          width: ${size}px;
          height: ${size}px;
          background: var(--primary-color);
          border-radius: 50%;
          opacity: ${opacity};
          pointer-events: none;
          transform: translate(-50%, -50%);
        "></div>
      `;
    });
    elements.cursorTrail.innerHTML = trailHTML;
  }

  // Hover effects
  document.addEventListener('mouseenter', (e) => {
    if (e.target.matches('a, button, .project-card, .certificate-card, .timeline-content')) {
      elements.cursor.classList.add('hover');
    }
  });

  document.addEventListener('mouseleave', (e) => {
    if (e.target.matches('a, button, .project-card, .certificate-card, .timeline-content')) {
      elements.cursor.classList.remove('hover');
    }
  });

  // Click effects
  document.addEventListener('mousedown', () => {
    elements.cursor.classList.add('click');
  });

  document.addEventListener('mouseup', () => {
    elements.cursor.classList.remove('click');
  });

  // Start animation
  animateCursor();
}
*/

// ===== THEME TOGGLE =====
function initializeThemeToggle() {
  elements.themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  updateTheme(currentTheme);
  saveUserPreferences();
}

function updateTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  elements.themeToggle.setAttribute('aria-checked', theme === 'dark');
  
  // Update theme toggle icons
  const sunIcon = elements.themeToggle.querySelector('.sun-icon');
  const moonIcon = elements.themeToggle.querySelector('.moon-icon');
  
  if (theme === 'dark') {
    sunIcon.style.opacity = '0';
    moonIcon.style.opacity = '1';
  } else {
    sunIcon.style.opacity = '1';
    moonIcon.style.opacity = '0';
  }
}

// ===== LANGUAGE SWITCHER =====
function initializeLanguageSwitcher() {
  elements.languageBtn.addEventListener('click', toggleLanguageDropdown);
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
      closeLanguageDropdown();
    }
  });

  // Language option clicks
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', (e) => {
      const lang = e.currentTarget.dataset.lang;
      switchLanguage(lang);
      closeLanguageDropdown();
    });
  });
}

function toggleLanguageDropdown() {
  const isOpen = elements.languageDropdown.classList.contains('active');
  
  if (isOpen) {
    closeLanguageDropdown();
  } else {
    openLanguageDropdown();
  }
}

function openLanguageDropdown() {
  elements.languageDropdown.classList.add('active');
  elements.languageBtn.setAttribute('aria-expanded', 'true');
}

function closeLanguageDropdown() {
  elements.languageDropdown.classList.remove('active');
  elements.languageBtn.setAttribute('aria-expanded', 'false');
}

function switchLanguage(lang) {
  currentLanguage = lang;
  updateLanguage(lang);
  saveUserPreferences();
}

function updateLanguage(lang) {
  // Update HTML lang attribute
  document.documentElement.lang = lang === 'uz' ? 'uz' : lang === 'ru' ? 'ru' : 'en';
  
  // Update language button
  const flags = { uz: '🇺🇿', en: '🇺🇸', ru: '🇷🇺' };
  const codes = { uz: 'UZ', en: 'EN', ru: 'RU' };
  
  elements.languageBtn.querySelector('.language-flag').textContent = flags[lang];
  elements.languageBtn.querySelector('.language-code').textContent = codes[lang];
  
  // Update active language option
  document.querySelectorAll('.language-option').forEach(option => {
    option.classList.remove('active');
    option.setAttribute('aria-selected', 'false');
  });
  
  const activeOption = document.querySelector(`[data-lang="${lang}"]`);
  if (activeOption) {
    activeOption.classList.add('active');
    activeOption.setAttribute('aria-selected', 'true');
  }
  
  // Update document title
  document.title = translations[lang].title;
  
  // Update all translatable elements
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// ===== MOBILE MENU =====
function initializeMobileMenu() {
  elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  
  // Close menu when clicking on nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function toggleMobileMenu() {
  const isOpen = elements.navMenu.classList.contains('active');
  
  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  elements.navMenu.classList.add('active');
  elements.mobileMenuToggle.classList.add('active');
  elements.mobileMenuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  elements.navMenu.classList.remove('active');
  elements.mobileMenuToggle.classList.remove('active');
  elements.mobileMenuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
  // Handle nav link clicks
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = elements.header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update active nav link
        updateActiveNavLink(targetId);
      }
    });
  });
  
  // Update active nav link on scroll
  window.addEventListener('scroll', throttle(updateActiveNavOnScroll, 100));
}

function updateActiveNavLink(activeId) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${activeId}`) {
      link.classList.add('active');
    }
  });
}

function updateActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + elements.header.offsetHeight + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      updateActiveNavLink(sectionId);
    }
  });
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    '.hero-text, .hero-visual, .timeline-item, .certificate-card, .skill-group, .project-card, .projects-tech-section, .contact-item'
  );
  
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // Add animation classes
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
}

// ===== CONTACT FORM =====
function initializeContactForm() {
  elements.contactForm.addEventListener('submit', handleContactFormSubmit);
}

function handleContactFormSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(elements.contactForm);
  const name = formData.get('name');
  const subject = formData.get('subject');
  const message = formData.get('message');
  
  // Create mailto link
  const emailBody = `Name: ${name}\n\nSubject: ${subject}\n\nMessage:\n${message}`;
  const mailtoLink = `mailto:ozodbek117s@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  
  // Open email client
  window.location.href = mailtoLink;
  
  // Show success message
  showNotification('Email client opened successfully!', 'success');
  
  // Reset form
  elements.contactForm.reset();
}

// ===== TYPING ANIMATION =====
function initializeTypingAnimation() {
  const titles = [
    translations[currentLanguage]['hero-title-text'],
    'Software Engineer',
    'Pentester',
    'Ethical Hacker'
  ];
  
  const titleElement = document.querySelector('.title-text');
  const cursorElement = document.querySelector('.typing-cursor');
  
  let currentTitleIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  
  function typeText() {
    const currentTitle = titles[currentTitleIndex];
    
    if (isDeleting) {
      titleElement.textContent = currentTitle.substring(0, currentCharIndex - 1);
      currentCharIndex--;
    } else {
      titleElement.textContent = currentTitle.substring(0, currentCharIndex + 1);
      currentCharIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && currentCharIndex === currentTitle.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentTitleIndex = (currentTitleIndex + 1) % titles.length;
      typeSpeed = 500; // Pause before starting next title
    }
    
    setTimeout(typeText, typeSpeed);
  }
  
  // Start typing animation after a delay
  setTimeout(typeText, 1000);
}

// ===== UTILITY FUNCTIONS =====
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Style the notification
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: type === 'success' ? 'var(--primary-color)' : 'var(--accent-color)',
    color: 'white',
    padding: 'var(--space-sm) var(--space-md)',
    borderRadius: 'var(--radius-md)',
    boxShadow: '0 10px 30px var(--shadow)',
    zIndex: '10000',
    transform: 'translateX(100%)',
    transition: 'transform var(--transition-normal)'
  });
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// ===== USER PREFERENCES =====
function saveUserPreferences() {
  const preferences = {
    language: currentLanguage,
    theme: currentTheme
  };
  localStorage.setItem('portfolioPreferences', JSON.stringify(preferences));
}

function loadUserPreferences() {
  const saved = localStorage.getItem('portfolioPreferences');
  if (saved) {
    try {
      const preferences = JSON.parse(saved);
      currentLanguage = preferences.language || 'uz';
      currentTheme = preferences.theme || 'dark';
    } catch (e) {
      console.warn('Failed to load user preferences:', e);
    }
  } else {
    // Check system preferences
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      currentTheme = 'light';
    }
    
    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'ru'].includes(browserLang)) {
      currentLanguage = browserLang;
    }
  }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Preload critical images
function preloadImages() {
  const imageUrls = [
    // Add any image URLs here when you have actual images
  ];
  
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

// Lazy load images
function initializeLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
  console.error('JavaScript error:', e.error);
  // You could send this to an error tracking service
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Keyboard navigation
document.addEventListener('keydown', (e) => {
  // Escape key closes dropdowns and mobile menu
  if (e.key === 'Escape') {
    closeLanguageDropdown();
    closeMobileMenu();
  }
  
  // Tab navigation enhancement
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-navigation');
});

// ===== INITIALIZATION COMPLETE =====
console.log('Portfolio website initialized successfully!');
console.log('Features loaded: Custom cursor, theme toggle, language switching, smooth scrolling, animations');
