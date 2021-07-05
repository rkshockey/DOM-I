const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', `img/logo.png`);
const headerImg = document.getElementById(`cta-img`);
headerImg.setAttribute(`src`, `img/header-img.png`);
const accentImg = document.querySelector(`#middle-img`);
accentImg.src = `img/mid-page-accent.jpg`;

//nav bar
const link1 = document.querySelector(`nav a:nth-of-type(1)`)
const link2 = document.querySelector(`nav a:nth-of-type(2)`)
const link3 = document.querySelector(`nav a:nth-of-type(3)`)
const link4 = document.querySelector(`nav a:nth-of-type(4)`)
const link5 = document.querySelector(`nav a:nth-of-type(5)`)
const link6 = document.querySelector(`nav a:nth-of-type(6)`)
link1.textContent = `Services`;
link2.textContent = `Product`;
link3.textContent = `Vision`;
link4.textContent = `Features`;
link5.textContent = `About`;
link6.textContent = `Contact`;

//main blurb
const title = document.querySelector(`.cta-text h1`);
const button = document.querySelector(`.cta-text button`);
title.textContent = `DOM Is Awesome`;
button.textContent = `Get Started`;

//details
const featuresTitle = document.querySelector(`.text-content:nth-of-type(1) h4`);
const featuresContent = featuresTitle.nextSibling
const aboutTitle = document.querySelector(`.text-content:nth-of-type(2) h4`);
const aboutContent = document.querySelector(`.text-content:nth-of-type(2) p`);
const servicesTitle = document.querySelector(`.bottom-content .text-content:nth-of-type(1) h4`);
const servicesContent = document.querySelector(`.bottom-content .text-content:nth-of-type(1) p`);
const productTitle = document.querySelector(`.bottom-content .text-content:nth-of-type(2) h4`);
const productContent = document.querySelector(`.bottom-content .text-content:nth-of-type(2) p`);
const visionTitle = document.querySelector(`.bottom-content .text-content:nth-of-type(3) h4`);
const visionContent = document.querySelector(`.bottom-content .text-content:nth-of-type(3) p`);
featuresTitle.textContent = `Features`;
aboutTitle.textContent = `About`;
servicesTitle.textContent = `Services`;
productTitle.textContent = `Product`;
visionTitle.textContent = `Vision`;
featuresContent.textContent = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`;
aboutContent.textContent = `About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`;
servicesContent.textContent = `Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`;
productContent.textContent = `Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`;
visionContent.textContent = `Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.`;
