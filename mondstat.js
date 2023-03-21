const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

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