function init() {

// ---===automatic slides===---

let slideIndex = 1;
showSlide(slideIndex);
setInterval(() => showSlide((slideIndex += 1)), 5000);

let btnNext = document.getElementById("btnNext");
let btnPrev = document.getElementById("btnPrev");

btnNext.addEventListener('click', function(){showSlide(slideIndex += 1);});

btnPrev.addEventListener('click', function(){showSlide(slideIndex -= 1);});

function showSlide(n) {
  let i;
  let slide = document.getElementsByClassName("mySlides");

  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  if (n > slide.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slide.length;
  }

  slide[slideIndex - 1].style.display = "block";
}

// ---===end automatic slides===---

}