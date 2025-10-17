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
        'nav-mentor': 'Ustozim',
        'nav-languages': 'Tillar',
        'nav-projects': 'Loyihalar',
        'nav-contact': 'Aloqa',
        'hero-greeting': 'Salom, men',
        'hero-age': '15 yoshda',
        'hero-title-text': 'To\'liq stack dasturchi',
        'hero-description': 'IT Park talabasi va maktab o\'quvchisi. Python, HTML, CSS, Web Design va Backend yo\'nalishlarida ishlayman. Ustozim Nodir Odilov rahbarligida dasturlashni o\'rganaman.',
        'hero-view-projects': 'Loyihalarimni ko\'ring',
        'hero-contact-me': 'Bog\'laning',
        'hero-scroll': 'Pastga aylantiring',
        'experience-title': 'Tajriba',
        'experience-subtitle': 'IT Park talabasi va maktab o\'quvchisi',
        'experience-itpark-title': 'IT Park',
        'experience-itpark-role': 'Talaba',
        'experience-itpark-description': 'IT Park da dasturlashni o\'rganaman. Ustozim Nodir Odilov rahbarligida Python, Web Design va Backend yo\'nalishlarida ishlayman.',
        'experience-freelance-title': 'Maktab',
        'experience-freelance-role': 'O\'quvchi',
        'experience-freelance-description': 'Maktab o\'quvchisi sifatida umumiy ta\'lim olib bormoqdaman. IT Park bilan bir vaqtda ta\'lim olishni davom ettiraman.',
        'certificates-title': 'Sertifikatlar',
        'certificates-subtitle': 'Professional yutuqlar va sertifikatlar',
        'cert-english-title': 'English (IT) — Study',
        'cert-english-desc': 'Ingliz tili (IT yo\'nalishi) sertifikati',
        'cert-ecommerce-title': 'Elektron Tijorat',
        'cert-ecommerce-desc': 'E-commerce bo\'yicha sertifikat',
        'cert-smm-title': 'SMM — Social Media Marketing',
        'cert-smm-desc': 'Video o\'quv kursi sertifikati',
        'cert-webdesign-title': 'Web Design',
        'cert-webdesign-desc': 'Web dizayn bo\'yicha sertifikat',
        'mentor-title': 'Ustozim',
        'mentor-subtitle': 'Mening dasturlash yo\'lida rahnamom',
        'mentor-name': 'Nodir Odilov',
        'mentor-role': 'IT Park O\'qituvchisi',
        'mentor-description': 'Meni dasturlash yo\'lida rahnamolik qilayotgan ustozim. Python, Web Design va Backend yo\'nalishlarida bilim beradi.',
        'languages-title': 'Tillar',
        'languages-subtitle': 'Men biladigan tillar',
        'lang-uzbek': 'O\'zbek tili',
        'lang-uzbek-level': '(Native)',
        'lang-english': 'Ingliz tili',
        'lang-english-level': '(Advanced)',
        'lang-russian': 'Rus tili',
        'lang-russian-level': '(Basic)',
        'projects-title': 'Loyihalar',
        'projects-subtitle': '15+ ishlab chiqilgan loyiha',
        'project-channel-desc': 'Telegram kanallarini boshqarish va moderatsiya qilish uchun bot. Xabarlarni tekshirish, spam filtrlash va avtomatik moderatsiya xizmatlari.',
        'project-shutdown-desc': 'Guruhlarda spam va noto\'g\'ri xabarlarni avtomatik ravishda to\'xtatish uchun bot. Moderatlar uchun qulay boshqaruv paneli va real vaqtda filtrlash.',
        'project-tasks-desc': 'Jamoa ishi va vazifalar boshqarish uchun bot. Vazifalar yaratish, taqsimlash va kuzatish. Jamoaviy loyihalar uchun ideal yechim.',
        'project-file-desc': 'Fayllarni yuklash, saqlash va boshqarish uchun bot. Cloud storage, fayl turlarini qo\'llab-quvvatlash va xavfsiz saqlash xizmatlari.',
        'project-view': 'Ko\'rish',
        'contact-title': 'Aloqa',
        'contact-subtitle': 'Men bilan bog\'laning',
        'contact-email': 'Email',
        'contact-phone': 'Telefon',
        'contact-telegram': 'Telegram',
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
        'nav-mentor': 'Mentor',
        'nav-languages': 'Languages',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-greeting': 'Hello, I am',
        'hero-age': '15 years old',
        'hero-title-text': 'Full Stack Developer',
        'hero-description': 'IT Park student and school student. I work in Python, HTML, CSS, Web Design and Backend directions. I learn programming under the guidance of my mentor Nodir Odilov.',
        'hero-view-projects': 'View my projects',
        'hero-contact-me': 'Contact me',
        'hero-scroll': 'Scroll down',
        'experience-title': 'Experience',
        'experience-subtitle': 'IT Park student and school student',
        'experience-itpark-title': 'IT Park',
        'experience-itpark-role': 'Student',
        'experience-itpark-description': 'Learning programming at IT Park. Working in Python, Web Design and Backend directions under the guidance of my mentor Nodir Odilov.',
        'experience-freelance-title': 'School',
        'experience-freelance-role': 'Student',
        'experience-freelance-description': 'Continuing general education as a school student. Simultaneously studying at IT Park.',
        'certificates-title': 'Certificates',
        'certificates-subtitle': 'Professional achievements and certificates',
        'cert-english-title': 'English (IT) — Study',
        'cert-english-desc': 'English for IT certificate',
        'cert-ecommerce-title': 'E-commerce',
        'cert-ecommerce-desc': 'E-commerce certificate',
        'cert-smm-title': 'SMM — Social Media Marketing',
        'cert-smm-desc': 'Video course certificate',
        'cert-webdesign-title': 'Web Design',
        'cert-webdesign-desc': 'Web design certificate',
        'mentor-title': 'My Mentor',
        'mentor-subtitle': 'My guide in programming',
        'mentor-name': 'Nodir Odilov',
        'mentor-role': 'IT Park Teacher',
        'mentor-description': 'My mentor who guides me in programming. Teaches Python, Web Design and Backend directions.',
        'languages-title': 'Languages',
        'languages-subtitle': 'Languages I know',
        'lang-uzbek': 'Uzbek',
        'lang-uzbek-level': '(Native)',
        'lang-english': 'English',
        'lang-english-level': '(Advanced)',
        'lang-russian': 'Russian',
        'lang-russian-level': '(Basic)',
        'projects-title': 'Projects',
        'projects-subtitle': '15+ developed projects',
        'project-channel-desc': 'Bot for managing and moderating Telegram channels. Message checks, spam filtering, and automated moderation services.',
        'project-shutdown-desc': 'Bot that automatically stops spam and inappropriate messages in groups. Handy admin panel and real-time filtering for moderators.',
        'project-tasks-desc': 'Team collaboration and task management bot. Create, assign, and track tasks—ideal for team projects.',
        'project-file-desc': 'Bot for uploading, storing, and managing files. Cloud storage, multiple file types, and secure storage features.',
        'project-view': 'View',
        'contact-title': 'Contact',
        'contact-subtitle': 'Get in touch with me',
        'contact-email': 'Email',
        'contact-phone': 'Phone',
        'contact-telegram': 'Telegram',
        'contact-github': 'GitHub',
        'form-name': 'Name',
        'form-subject': 'Subject',
        'form-message': 'Message',
        'form-send': 'Send message',
        'footer-rights': 'All rights reserved.'
    },
    ru: {
        'title': 'Озодбек Собиров — Full Stack Разработчик',
        'nav-home': 'Главная',
        'nav-experience': 'Опыт',
        'nav-certificates': 'Сертификаты',
        'nav-mentor': 'Наставник',
        'nav-languages': 'Языки',
        'nav-projects': 'Проекты',
        'nav-contact': 'Контакты',
        'hero-greeting': 'Привет, я',
        'hero-age': '15 лет',
        'hero-title-text': 'Full Stack разработчик',
        'hero-description': 'Студент IT Park и школьник. Работаю в направлениях Python, HTML, CSS, Web Design и Backend. Изучаю программирование под руководством моего наставника Нодира Одилова.',
        'hero-view-projects': 'Посмотреть мои проекты',
        'hero-contact-me': 'Связаться со мной',
        'hero-scroll': 'Прокрутите вниз',
        'experience-title': 'Опыт',
        'experience-subtitle': 'Студент IT Park и школьник',
        'experience-itpark-title': 'IT Park',
        'experience-itpark-role': 'Студент',
        'experience-itpark-description': 'Изучаю программирование в IT Park. Работаю в направлениях Python, Web Design и Backend под руководством моего наставника Нодира Одилова.',
        'experience-freelance-title': 'Школа',
        'experience-freelance-role': 'Ученик',
        'experience-freelance-description': 'Продолжаю общее образование как школьник. Одновременно учусь в IT Park.',
        'certificates-title': 'Сертификаты',
        'certificates-subtitle': 'Профессиональные достижения и сертификаты',
        'cert-english-title': 'Английский (IT) — Study',
        'cert-english-desc': 'Сертификат по английскому для IT',
        'cert-ecommerce-title': 'Электронная коммерция',
        'cert-ecommerce-desc': 'Сертификат по e-commerce',
        'cert-smm-title': 'SMM — Social Media Marketing',
        'cert-smm-desc': 'Сертификат видеокурса',
        'cert-webdesign-title': 'Web Design',
        'cert-webdesign-desc': 'Сертификат по веб‑дизайну',
        'mentor-title': 'Мой наставник',
        'mentor-subtitle': 'Мой проводник в программировании',
        'mentor-name': 'Нодир Одилов',
        'mentor-role': 'Преподаватель IT Park',
        'mentor-description': 'Мой наставник, который направляет меня в программировании. Обучает направлениям Python, Web Design и Backend.',
        'languages-title': 'Языки',
        'languages-subtitle': 'Языки, которые я знаю',
        'lang-uzbek': 'Узбекский',
        'lang-uzbek-level': '(Native)',
        'lang-english': 'Английский',
        'lang-english-level': '(Advanced)',
        'lang-russian': 'Русский',
        'lang-russian-level': '(Basic)',
        'projects-title': 'Проекты',
        'projects-subtitle': '15+ разработанных проектов',
        'project-channel-desc': 'Бот для управления и модерации Telegram‑каналов. Проверка сообщений, фильтрация спама и автоматическая модерация.',
        'project-shutdown-desc': 'Бот, который автоматически останавливает спам и неподходящие сообщения в группах. Удобная панель и фильтрация в реальном времени для модераторов.',
        'project-tasks-desc': 'Бот для командной работы и управления задачами. Создание, назначение и отслеживание задач — идеален для командных проектов.',
        'project-file-desc': 'Бот для загрузки, хранения и управления файлами. Облако, поддержка разных форматов и безопасное хранение.',
        'project-view': 'Посмотреть',
        'contact-title': 'Контакты',
        'contact-subtitle': 'Свяжитесь со мной',
        'contact-email': 'Email',
        'contact-phone': 'Телефон',
        'contact-telegram': 'Telegram',
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
        '.hero-text, .hero-visual, .timeline-item, .certificate-card, .mentor-info, .language-card, .project-card, .contact-item'
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
    const mailtoLink = `mailto:ozodbeks165@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

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
        'Full Stack Developer',
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