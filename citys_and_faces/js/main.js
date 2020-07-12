

 var slideIndex = 1;

showSlidesByClick(slideIndex);

function showSlidesByClick(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
}
// Next Image
function plusSlides(n) {
  showSlidesByClick(slideIndex += n);
}
// Previous Image
function currentSlide(n) {
  showSlidesByClick(slideIndex = n);
}