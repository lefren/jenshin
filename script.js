window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i<reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// const inputText = document.getElementById("inputName");
// const inputEmail = document.getElementById("inputEmail");
// const inputPassword = document.getElementById("inputPassword");
// const inputAge = document.getElementById("inputAge");
// const buttonRegister = document.getElementById("registerBtn");

// buttonRegister.addEventListener('click', (event)=>{

// })

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
// }

var sliderIndex = 1;
showDivs(sliderIndex);

function plusDivs(n) {
  showDivs((sliderIndex += n));
}

function currentDiv(n) {
  showDivs((sliderIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlide");
  if (n > x.length) {
    sliderIndex = 1;
  }
  if (n < 1) {
    sliderIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[sliderIndex - 1].style.display = "flex";
}

var sliderIndexResponsive = 1;
showDivsResponsive(sliderIndexResponsive);

function plusDivsResponsive(n) {
  showDivsResponsive((sliderIndexResponsive += n));
}

function currentDivResponsive(n) {
  showDivsResponsive((sliderIndexResponsive = n));
}

function showDivsResponsive(n) {
  var i;
  var x = document.getElementsByClassName("mySlide-responsive");
  if (n > x.length) {
    sliderIndexResponsive = 1;
  }
  if (n < 1) {
    sliderIndexResponsive = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[sliderIndexResponsive - 1].style.display = "block";
}
