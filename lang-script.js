const translations = {
  en: {
    'navHome': 'Home',
    'navSer': 'Services',
    'navClient':'Our Clients',
    'navWho':'Who We Are',
    'navContact':'Contact',
    'hero-title': 'A IT Services & Software Development Company',
    'hero-desc': 'We provide innovative IT solutions for businesses with expertise in network system construction, software development, and IT product sales. Focused on quality and customer satisfaction.',
    'hero-cta': 'Contact Us on LINE',

    'serHeading':'your future needs you',
    'serMainDesc':'From building robust network systems to developing custom software, we help businesses thrive with reliable IT solutions and expert support.',
    'sercateHead1':'Network System Construction',
    'sercateDesc1':'Building secure and reliable computer networks for businesses.',
    'sercateHead2':'System Introduction and Operation Support',
    'sercateDesc2':'Providing assistance and maintenance for new and existing systems.',
    'sercateHead3':'Software Development',
    'sercateDesc3':'Creating custom software solutions for specific business needs.',
    'sercateHead4':'Sales of IT-Related Products',
    'sercateDesc4':'Offering a range of products to meet technology needs.',
    
    
    'footer-text': '© 2022 Our Company. All rights reserved.'
  },
  fr: {
    'navHome': ' ホーム',
    'navSer': 'サービス',
    'navClient': '当社のお客様',
    'navWho':'当社について',
    'navContact':'お問い合わせ',
    'hero-title': 'ITサービス・ソフトウェア開発会社',
    'hero-desc': '私たちは、ネットワークシステム構築、ソフトウェア開発、IT製品販売の専門知識を持ち、ビジネス向けに革新的なITソリューションを提供しています。品質とお客様満足度に重点を置いています。',
    'hero-cta': 'LINEでお問い合わせください',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',

    'footer-text': '© 2022 Notre entreprise. Tous droits réservés.'
  }
};

function translatePage(language) {
  // Get all elements with a "data-translation-key" attribute
  const elements = document.querySelectorAll('[data-translation-key]');
  
  // Loop through each element and set its text content to the corresponding translation
  elements.forEach((element) => {
    const translationKey = element.getAttribute('data-translation-key');
    element.textContent = translations[language][translationKey];
  });
}

// Set the initial language to English
let language = 'en';
translatePage(language);

// Add a click event listener to each language button
const languageButtons = document.querySelectorAll('.language-button');
languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the language from the button's data attribute
    const buttonLanguage = button.getAttribute('data-language');
    
    // Only translate the page if the button's language is different from the current language
    if (buttonLanguage !== language) {
      language = buttonLanguage;
      translatePage(language);
    }
  });
});

// Update active state of language buttons
languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    setActiveLanguageButton(button);
    translatePage(button.dataset.language);
  });
});

function setActiveLanguageButton(activeButton) {
  const languageButtons = document.querySelectorAll('.language-button');
  languageButtons.forEach(button => {
    if (button === activeButton) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}


