import "./style.scss";

// apply aos
AOS.init();

// progress bar animation

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

   mobileMenu.querySelectorAll("nav > a").forEach(link => {
      link.addEventListener("click", () => {
         mobileMenu.classList.toggle("hidden");
         close.classList.add("hidden");
         hamburger.classList.remove("opacity-0");
      })
   })
  
};

mobileMenu();

const scrollProgress = () => {
  const progressBar = document.getElementById("progress-bar");
  const max = document.body.scrollHeight - innerHeight;
  const percent = (pageYOffset / max) * 100;
  progressBar.style.width = percent + "%";
};

addEventListener("scroll", scrollProgress);

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

const images = [
  "./images/campaign-creators-yktK2qaiVHI-unsplash.jpeg",
  "./images/emile-perron-xrVDYZRGdw4-unsplash.jpeg",
  "./images/laptop.jpeg",
  "./images/marketing.jpeg",
];

const changeBg = () => {
  const changingImage = document.getElementById("changing-image");
  const bg = images[Math.floor(Math.random() * images.length)];
  changingImage.style.backgroundImage = `linear-gradient( to right,rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),url(${bg})`;
};

setInterval(changeBg, 5000);
