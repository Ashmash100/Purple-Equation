import "../scss/index.scss";
import globeImage from '../images/globe.webp';
import potraitImage from '../images/man-nobg.webp'
import spinner from '../images/spinner.png'

// apply aos
AOS.init();

// progress bar animation

const scrollProgress = () => {
  const progressBar = document.getElementById("progress-bar");
  const max = document.body.scrollHeight - innerHeight;
  const percent = (pageYOffset / max) * 100;
  progressBar.style.width = percent + "%";
};

addEventListener("scroll", scrollProgress);
// scroll to section

const scrollToSection = () => {
  const links = document.querySelectorAll("[data-location]");

  [...links].forEach(link => {
    link.addEventListener('click', () => {
        let section = document.getElementById(link.getAttribute('data-location'));
        section.scrollIntoView({block:"center"})
    })
  })
}

scrollToSection()

// adding images

document.getElementById('globe-img').src = globeImage;
document.getElementById('joseph-dp').src = potraitImage;
document.getElementById('sam-dp').src = potraitImage;
document.getElementById('joshua-dp').src = potraitImage;
document.getElementById('spinner').src = spinner;




// mobile menu

const mobileMenu = () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const close = document.getElementById("close-icon");
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    // mobileMenu.querySelector("nav").classList.toggle("hidden")
    if(!mobileMenu.classList.contains("hidden")) {
      hamburger.classList.add("opacity-0");
      close.classList.remove("hidden")
    } else {
      hamburger.classList.remove("opacity-0")
      close.classList.add("hidden");
    }
  });

   mobileMenu.querySelectorAll("nav > button").forEach(link => {
      link.addEventListener("click", () => {
         mobileMenu.classList.toggle("hidden");
         close.classList.add("hidden");
         hamburger.classList.remove("opacity-0");
      })
   })
  
};

mobileMenu();

const heroImage = document.getElementById("hero-image");
const cube = document.getElementById("cube");
const sphere = document.getElementById("sphere");
const globe = document.getElementById("globe");
const triangle = document.getElementById("triangle");

const transform = (x, y, element) => {
  element.style.transform = `translate(${x}px,${y}px)`;
};

heroImage.addEventListener("mouseover", (event) => {
  let maxX = 40;
  let mousex = event.clientX / maxX;
  let mousey = event.clientY / 10;

  transform(-mousex, mousey, cube);
  transform(mousex, -mousey, sphere);
  transform(-mousex, -mousey, globe);
  transform(-mousex, -mousey, triangle);
});

heroImage.addEventListener("mouseleave", () => {
  [cube, sphere, globe, triangle].forEach((element) => {
    element.style.transform = `translate(0,0)`;
  });
});


// form 

const currentUrl = window.location.href;
const submitPage = document.getElementById("submit-page");
submitPage.value = `${currentUrl}submit.html`


function validateForm() {
  const fields = document.querySelectorAll(".input-field")
  const isValue = [...fields].every(field => field.length !== 0);

  const submit = document.getElementById("submit-button");
  const spinner = document.getElementById("spinner")

  if(isValue) {
    submit.classList.add("hidden");
    spinner.classList.remove("hidden");
  }  
}

document.getElementById("contact-form").addEventListener('submit', validateForm);

