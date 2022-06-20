
// Navigation Links Responsiveness
const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

// Scroll to Top Feature
const scrollTop = document.getElementById("scrollTopBtn");

// Dynamic Data
const slide = document.querySelector(".slide");
project.forEach((proj) => {
  const newSlide = slide.cloneNode(true);

  newSlide.querySelector(
    ".slide-img"
  ).style.backgroundImage = `url(${proj.image})`;

  newSlide.querySelector(".project-name").innerHTML = proj.name;
  newSlide.querySelector(".project-description").innerHTML = proj.description;

  slide.parentNode.appendChild(newSlide);
});

slide.parentNode.removeChild(slide);


// Tiny Slider Config
let slider = tns({
  container: ".my-slider",
  slideBy: 1,
  speed: 200,
  nav: false,
  controlsContainer: "#controls",
  prevButton: ".previous",
  nextButton: ".next",
  preventScrollOnTouch: "auto",
  autoplay: true,
  autoplayButtonOutput: false,
  responsive: {
    1600: {
      items: 4,
      gutter: 20,
    },
    1024: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
    480: {
      items: 1,
    },
  },
});

// Toggle to Show Navigation
function toggleButton() {
  navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);

// Scroll to Top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
