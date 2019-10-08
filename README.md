var element = document.getElementById("myNav"), w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
function OpenTab(evt, menuDish) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");

    }
    document.getElementById(menuDish).style.display = "block";
    evt.currentTarget.className += " active";

  }

  // Get the element with id="defaultOpen" and click on it


function myFunction(){
  if(typeof window.location.hash != "undefined" && window.location.hash =="#!/menu" ){
  document.getElementById("defaultOpen").click();/*This not registering on menu.html*/
  if(w >= 775 && w <= 1104 ){
    menuElements(document.querySelector('body'), document.querySelector('header'), document.querySelector('main'));
   }
 }
}
window.onload = myFunction;

function menuElements( body, header, main){
     body.classList.toggle("fixbody");
     header.classList.toggle('fixheader');
     main.classList.toggle('fixmain');
}
function openNav(){
 element.classList.toggle('w-restore');

}

function closeNav(){
 element.classList.toggle('w-restore');
}

 var aTag = document.getElementsByClassName("clfullsceen");
 for(var i =0; i < aTag.length; i++){
   (function(index){
 aTag[index].addEventListener("click", function(){
      element.classList.toggle('mq-restore');
      element.classList.remove('w-restore');
   displayBlock();
    });
  })(i);
 }

function displayBlock(){
  document.getElementById("logowrapper").style.display = "block";
  element.style.display = "block";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1;  }
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {

      slides[i].style.display = "none";

  }
  /** come up undefined on the gallery.php**/
  slides[slideIndex-1].style.display = "block";
}

