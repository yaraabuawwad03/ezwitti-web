/**
 * EZWITTI (عزوتي) — Main JavaScript Controller
 * Handles Navigation, Language Toggle (AR/EN), Wall of Kindness Modal, and Sponsor Dialog.
 */

// Bilingual Translation Dictionary
const i18n = {
  ar: {
    langLabel: "EN",
    menuLabel: "القائمة",
    brandTitle: "عِزْوَتِي",
    brandSub: "مطعم اجتماعي غير ربحي",
    sponsorBtn: "اعزم شخص",
    
    // Hero
    heroTitle: "حيث يلتقي العازم والمعزوم على وجبة واحدة، بكرامة وبدون أي حكم",
    heroPrimaryCta: "اكتشف قصتنا",
    heroSecondaryCta: "تطوع معنا",
    heroScroll: "تمرير للأسفل",

    // Drawer Nav
    navHome: "الرئيسية",
    navStory: "قصتنا — من عزومة بدأت الحكاية",
    navHow: "كيف نعمل — عازم ومعزوم",
    navWall: "جدار الخير",
    navMedia: "عزوتي بعيون العالم",
    navVolunteer: "تطوّع معنا",
    navContact: "الموقع والتواصل",
    closeMenu: "إغلاق",
    locationNote: "عمّان، الأردن — وسط البلد، قرب درج الكلحة",

    // Welcome Popup
    popupTag: "جدار الخير",
    popupTitle: "كل ورقة بتحكي حكاية خير",
    popupDesc: "على حائط عزوتي، ترك الناس كلمات من القلب، ورسائل محبة، وحكايات بتذكرنا إن الخير بيجمعنا.",
    wallHint: "انقر على أي بطاقة لقراءة الرسالة كاملة",
    popupCta: "كن عزوة لغيرك",
    popupExplore: "تصفح الموقع",

    // Founder Story
    storyTag: "قصتنا — من نبض عمّان",
    storyHeading: "من فكرة صغيرة، بدأت حكاية كبيرة",
    storyParagraph: "في عام 2015، أسّس محمود النابلسي مطعم عزوتي في قلب عمّان، ليقدّم نموذجاً مختلفاً للتكافل الاجتماعي، يقوم على فكرة عازم ومعزوم، حيث تصبح الوجبة مساحة للكرامة والمشاركة والإنسانية.",
    storyCtaText: "اكتشف حكايتنا",

    // Sponsor Dialog
    sponsorTitle: "عازم ومعزوم — اعزم شخص",
    sponsorDesc: "فكرة عزوتي مبنية على أن يقوم القادر بدفع ثمن وجبة لشخص لا يعرفه، وتعليق البطاقة على جدار الخير ليحصل عليها المحتاج بكرامة تامة ودون أن يُسأل عن هويته.",
    sponsorNote: "ملاحظة: بانتظار تفعيل وسائل الدفع المعتمدة رسمياً من إدارة عزوتي، نرحب بزيارتكم الكريمة لمطعمنا في وسط البلد للمشاركة حضورياً.",
    sponsorClose: "إغلاق النافذة",

    // Contact & Location
    contactKicker: "الموقع والتواصل — Location & Contact",
    contactTitle: "أهلاً بكم في عزوتي",
    contactSubtitle: "نرحب بكم دائماً في قلب عمّان القديمة. زورونا لتشاركونا تجربة التكافل، أو تواصلوا معنا مباشرة.",
    locationsTitle: "فروعنا ومواقعنا",
    mainBranchLabel: "الفرع الرئيسي (عمّان):",
    mainBranchDesc: "وسط البلد، قرب درج الكلحة، عمّان — الأردن",
    saltBranchLabel: "فرع السلط:",
    saltBranchDesc: "مدينة السلط — بالشراكة المجتمعية مع شركة وضوح",
    mapsAction: "عرض الموقع على الخريطة",
    phoneTitle: "الاتصال المباشر",
    phoneDesc: "للاستفسارات، التنسيق، والترتيب للزيارات الميدانية والتطوع:",
    phoneHelper: "انقر للاتصال المباشر من هاتفك المحمول",
    socialTitle: "تابعونا وتواصلوا معنا",
    socialDesc: "تابعوا قصصنا اليومية وأثر وجبات الخير عبر منصاتنا الرسمية:",
    contactBottomNote: "عزوتي فكرة تكبر بمحبتكم ومشاركتكم. نرحب دائماً بالمتطوعين والداعمين."
  },
  en: {
    langLabel: "عربي",
    menuLabel: "MENU",
    brandTitle: "EZWITTI",
    brandSub: "NONPROFIT SOCIAL RESTAURANT",
    sponsorBtn: "Sponsor a Meal",
    
    // Hero
    heroTitle: "Where host and guest meet over a shared meal, with dignity and without judgment",
    heroPrimaryCta: "Discover Our Story",
    heroSecondaryCta: "Volunteer With Us",
    heroScroll: "SCROLL DOWN",

    // Drawer Nav
    navHome: "Home",
    navStory: "Our Story — From an Invitation",
    navHow: "How It Works — Host & Guest",
    navWall: "Wall of Kindness",
    navMedia: "Ezwitti in the Eyes of the World",
    navVolunteer: "Volunteer With Us",
    navContact: "Location & Contact",
    closeMenu: "CLOSE",
    locationNote: "Downtown Amman, near Daraj Al-Kalha, Jordan",

    // Welcome Popup
    popupTag: "The Wall of Kindness",
    popupTitle: "Every Note Tells a Story of Kindness",
    popupDesc: "On Ezwitti's wall, strangers leave words from the heart, messages of love, and stories reminding us that kindness brings us together.",
    wallHint: "Click any note to read its full message",
    popupCta: "Be Someone's Ezwitti",
    popupExplore: "Explore Website",

    // Founder Story
    storyTag: "Our Story — Heart of Amman",
    storyHeading: "From a Small Idea, a Great Story Began",
    storyParagraph: "In 2015, Mahmoud Al-Nabulsi established Ezwitti in the heart of Amman to introduce a different model of social solidarity based on the concept of Host & Guest, turning every meal into a space of dignity, sharing, and humanity.",
    storyCtaText: "Discover Our Story",

    // Sponsor Dialog
    sponsorTitle: "Host & Guest — Sponsor a Meal",
    sponsorDesc: "Ezwitti's mission enables anyone to sponsor a meal anonymously for a guest in need. The prepaid receipt is placed on the Wall of Kindness, allowing guests to dine with absolute dignity.",
    sponsorNote: "Note: Official payment integration will be connected according to Ezwitti's verified payment processes. We welcome you to visit our restaurant in Downtown Amman to participate in person.",
    sponsorClose: "Close Window",

    // Contact & Location
    contactKicker: "Location & Contact",
    contactTitle: "Welcome to Ezwitti",
    contactSubtitle: "We always welcome you in the heart of Downtown Amman. Visit us to experience solidarity, or contact us directly.",
    locationsTitle: "Our Locations",
    mainBranchLabel: "Main Branch (Amman):",
    mainBranchDesc: "Downtown Amman, near Daraj Al-Kalha, Jordan",
    saltBranchLabel: "Salt Branch:",
    saltBranchDesc: "As-Salt City — Community partnership with Wodouh",
    mapsAction: "View Location on Google Maps",
    phoneTitle: "Direct Contact",
    phoneDesc: "For inquiries, coordination, and scheduling visits or volunteering:",
    phoneHelper: "Tap to call directly from your mobile device",
    socialTitle: "Follow & Connect",
    socialDesc: "Follow our daily stories and the impact of kindness on our official platforms:",
    contactBottomNote: "Ezwitti grows through your warmth and generosity. We always welcome volunteers and supporters."
  }
};

let currentLang = "ar";

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initHeaderScroll();
  initMenuDrawer();
  initWelcomeModal();
  initSponsorDialog();
  initMediaFilters();
});

// Initialize Language Toggle
function initLanguage() {
  const langBtn = document.getElementById("langSwitchBtn");
  if (!langBtn) return;

  // Check saved language
  const savedLang = localStorage.getItem("ezwitti_lang");
  if (savedLang && (savedLang === "ar" || savedLang === "en")) {
    currentLang = savedLang;
  }

  applyLanguage(currentLang);

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "ar" ? "en" : "ar";
    localStorage.setItem("ezwitti_lang", currentLang);
    applyLanguage(currentLang);
  });
}

function applyLanguage(lang) {
  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  const strings = i18n[lang];

  // Update elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (strings[key]) {
      el.textContent = strings[key];
    }
  });

  // Update button label
  const langBtn = document.getElementById("langSwitchBtn");
  if (langBtn) {
    langBtn.textContent = strings.langLabel;
  }
}

// Scrolled Header Treatment (Ballena Cabo Style)
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// Full-screen Drawer Menu
function initMenuDrawer() {
  const openBtn = document.getElementById("menuTriggerBtn");
  const closeBtn = document.getElementById("drawerCloseBtn");
  const drawer = document.getElementById("menuDrawer");
  if (!drawer || !openBtn || !closeBtn) return;

  const openDrawer = () => {
    drawer.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    drawer.classList.remove("active");
    document.body.style.overflow = "";
  };

  openBtn.addEventListener("click", openDrawer);
  closeBtn.addEventListener("click", closeDrawer);

  // Close when clicking nav links
  drawer.querySelectorAll(".drawer-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  // Esc key to close
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("active")) {
      closeDrawer();
    }
  });
}

// Welcome Popup (Wall of Kindness — First Visit)
function initWelcomeModal() {
  const modal = document.getElementById("welcomeModal");
  const closeBtn = document.getElementById("welcomeModalClose");
  const exploreBtn = document.getElementById("welcomeModalExplore");
  const sponsorBtn = document.getElementById("welcomeModalSponsor");
  const viewer = document.getElementById("cardExpandedViewer");
  const viewerClose = document.getElementById("cardExpandedClose");
  const viewerBox = document.getElementById("cardExpandedBox");
  const viewerText = document.getElementById("cardExpandedText");
  const viewerAuthor = document.getElementById("cardExpandedAuthor");
  if (!modal) return;

  const openModal = () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("active");
    if (viewer) viewer.classList.remove("active");
    document.body.style.overflow = "";
    sessionStorage.setItem("ezwitti_welcome_seen", "true");
  };

  window.openWelcomeModal = openModal;
  window.closeWelcomeModal = closeModal;

  // Show once per browser session using sessionStorage
  const hasSeen = sessionStorage.getItem("ezwitti_welcome_seen");
  if (!hasSeen) {
    setTimeout(openModal, 700);
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (exploreBtn) exploreBtn.addEventListener("click", closeModal);

  // CTA button: "كن عزوة لغيرك"
  if (sponsorBtn) {
    sponsorBtn.addEventListener("click", () => {
      closeModal();
      if (typeof openSponsorDialog === "function") {
        openSponsorDialog();
      }
    });
  }

  // Click outside modal card to close
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Interactive Card Click -> Expand & Read Full Note
  const cards = modal.querySelectorAll(".kindness-card");
  cards.forEach(card => {
    const handleCardClick = () => {
      if (!viewer || !viewerBox || !viewerText || !viewerAuthor) return;
      const text = card.querySelector(".card-text")?.textContent || "";
      const author = card.querySelector(".card-author")?.textContent || "";

      viewerText.textContent = text;
      viewerAuthor.textContent = author;

      // Extract computed color from card to style the expanded preview
      const cardBg = window.getComputedStyle(card).backgroundColor;
      const cardBorder = window.getComputedStyle(card).borderColor;
      viewerBox.style.backgroundColor = cardBg;
      viewerBox.style.borderColor = cardBorder;

      viewer.classList.add("active");
      viewer.setAttribute("aria-hidden", "false");
    };

    card.addEventListener("click", handleCardClick);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCardClick();
      }
    });
  });

  // Close Expanded Viewer
  const closeViewer = () => {
    if (!viewer) return;
    viewer.classList.remove("active");
    viewer.setAttribute("aria-hidden", "true");
  };

  if (viewerClose) viewerClose.addEventListener("click", closeViewer);
  if (viewer) {
    viewer.addEventListener("click", (e) => {
      if (e.target === viewer) {
        closeViewer();
      }
    });
  }

  // Escape Key Navigation
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (viewer && viewer.classList.contains("active")) {
        closeViewer();
      } else if (modal.classList.contains("active")) {
        closeModal();
      }
    }
  });
}

// Sponsor a Meal Dialog
function initSponsorDialog() {
  const dialog = document.getElementById("sponsorDialog");
  const openBtns = document.querySelectorAll(".btn-sponsor-trigger");
  const closeBtn = document.getElementById("sponsorDialogClose");
  const dismissBtn = document.getElementById("sponsorDialogDismiss");
  if (!dialog) return;

  const openDialog = () => {
    dialog.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    dialog.classList.remove("active");
    document.body.style.overflow = "";
  };

  window.openSponsorDialog = openDialog;

  openBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openDialog();
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeDialog);
  if (dismissBtn) dismissBtn.addEventListener("click", closeDialog);

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      closeDialog();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && dialog.classList.contains("active")) {
      closeDialog();
    }
  });
}

// Interactive Category Filters for media.html ("عزوتي بعيون العالم")
function initMediaFilters() {
  const filterBtns = document.querySelectorAll(".media-filter-btn");
  const mediaCards = document.querySelectorAll(".media-card");
  const featuredCard = document.querySelector(".media-featured-card");
  const emptyState = document.getElementById("mediaEmptyState");

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-filter");

      // Update active button
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      let visibleCount = 0;

      // Handle Featured Card
      if (featuredCard) {
        const featCat = featuredCard.getAttribute("data-category");
        if (category === "all" || category === featCat) {
          featuredCard.style.display = "";
          visibleCount++;
        } else {
          featuredCard.style.display = "none";
        }
      }

      // Handle Grid Cards
      mediaCards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || category === cardCat) {
          card.classList.remove("is-hidden");
          card.classList.remove("fade-in");
          void card.offsetWidth; // trigger reflow for smooth animation
          card.classList.add("fade-in");
          visibleCount++;
        } else {
          card.classList.add("is-hidden");
          card.classList.remove("fade-in");
        }
      });

      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.classList.add("visible");
        } else {
          emptyState.classList.remove("visible");
        }
      }
    });
  });
}
