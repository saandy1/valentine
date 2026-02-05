const slides = [
  { src: "images/moment-1.svg", caption: "Moment 1" },
  { src: "images/moment-2.svg", caption: "Moment 2" },
  { src: "images/moment-3.svg", caption: "Moment 3" },
  { src: "images/moment-4.svg", caption: "Moment 4" },
  { src: "images/moment-5.svg", caption: "Moment 5" },
  { src: "images/moment-6.svg", caption: "Moment 6" }
];

const slideImg = document.getElementById("slide");
const slideCaption = document.getElementById("slide-caption");
const dotsContainer = document.getElementById("dots");
const playBtn = document.getElementById("play-slideshow");
const pauseBtn = document.getElementById("pause-slideshow");

let current = 0;
let timer = null;

function renderDots() {
  dotsContainer.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "dot" + (index === current ? " active" : "");
    dot.addEventListener("click", () => goTo(index));
    dotsContainer.appendChild(dot);
  });
}

function goTo(index) {
  current = index;
  slideImg.src = slides[current].src;
  slideImg.alt = slides[current].caption;
  slideCaption.textContent = slides[current].caption;
  renderDots();
}

function next() {
  current = (current + 1) % slides.length;
  goTo(current);
}

function play() {
  if (timer) return;
  timer = setInterval(next, 3000);
}

function pause() {
  if (!timer) return;
  clearInterval(timer);
  timer = null;
}

playBtn.addEventListener("click", play);
pauseBtn.addEventListener("click", pause);

renderDots();
