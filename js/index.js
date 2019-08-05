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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.querySelectorAll("nav a");
//console.log(navLinks);
for (let i=0; i<navLinks.length; i++) {
  navLinks[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
}

let ctaHeader = document.querySelector(".cta-text h1")
ctaHeader.textContent=siteContent["cta"]["h1"];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let contentHeader = document.querySelectorAll(".text-content h4");
let mainContent = siteContent ["main-content"];
let arr = Object.keys (mainContent).filter(obj => obj.includes("h4"));
for (let i=0; i<contentHeader.length; i++) {
  contentHeader[i].textContent = siteContent["main-content"][`${arr[i]}`]
}

let contentText = document.querySelectorAll(".text-content p");
let textOnly = siteContent ["main-content"];
let content = Object.keys (textOnly).filter(obj => obj.includes("content"));
for (let i=0; i<contentText.length; i++) {
  contentText[i].textContent = siteContent["main-content"][`${content[i]}`]
}

let middleImg = document.getElementById ("middle-img")
middleImg.setAttribute('src', siteContent ["main-content"]["middle-img-src"]);


let contactHeader= document.querySelector('.contact h4');
contactHeader.textContent =siteContent ["contact"]["contact-h4"];

let contactInfo = document.querySelectorAll (".contact p");
let info = siteContent ["contact"];
let infoPara = Object.keys(info);
infoPara.shift();
for (let i=0; i<contactInfo.length; i++) {
  contactInfo[i].textContent = siteContent ["contact"] [`${infoPara[i]}`]
}


// let info = siteContent["contact"];
// let infoValue = Object.values (siteContent ["contact"]);
// for (let i=0; i<info.length; i++) {
//   contactInfo[i].textContent = siteContent ["contact"] [`${i+1}`];
// }


 //for (let i=0; i<contact.length; i++) {
//   contactInfo[i].textContent = siteContent["contact"] [i+1];
// }

let footer = document.querySelector('footer');
footer.textContent = siteContent ["footer"]["copyright"];