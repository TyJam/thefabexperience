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
  if(location.href === "http://localhost/thefabexperience/index.html#!/menu"){
  document.getElementById("defaultOpen").click();
  if(w >= 775 && w <= 1104 ){
    console.log("we");
    menuElements(document.querySelector('body'), document.querySelector('header'), document.querySelector('main'));
   }
 }
}
window.onload = myFunction;
if(location.hash === "http://localhost/thefabexperience/index.html#!/gallery"){
  var mainElement = document.querySelector('main');
  var headerElement = document.querySelector('header');
  mainElement.style.height ="100%";
  mainElement.style.marginLeft = "10.7%";
  headerElement.style.position ="fixed";
}
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
/*function lightbox(){
var lightboxElements = "<div id='ligthbox'>";
 lightboxElements += "<div id='overlay' class='hidden'></div>";
 lightboxElements += "<img class='hidden' id='big-image'/>";
 lightboxElements += "</div>";
 document.querySelector("section.gallery>div.gallery_container").innerHTML += lightboxElements;
 prepareThumbs();
}
//declare a new function 
function toggle( event ){
  //which image was clicked 
  var clickedImage = event.target;
  var bigImage = document.querySelector("#big-image");
  var overlay = document.querySelector("#overlay");
  bigImage.src = clickedImage.src;
  //if overlay is hidden, we can assume the big image 
  if(overlay.getAttribute("class") === "hidden" ){
    overlay.setAttribute("class", "showing");
    bigImage.setAttribute("class", "showing");
  }else{
    overlay.setAttribute("class", "hidden");
    bigImage.setAttribute("class", "hidden");
  }

}
//declare new function 
function prepareThumbs(){
  var liElements = document.querySelectorAll("ul#images li");
  var i = 0;
  var image, li;
  //loop through all <li> elements 
  while (i < liElements.length ){
    li = liElements[i];
    //set class = 'lightbox'
    li.setAttribute ("class", "lightbox");
    image = li.querySelector("img");
    //register a click event handler for the <img>Elements
    image.addEventListener("click", toggle, false);
    i +=1;
  }
}
window.onload = (function(){lightbox()})*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

console.log(window.location.hash);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1;  }
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {

      slides[i].style.display = "none";
      
  }
  
  slides[slideIndex-1].style.display = "block";
}


/* window.addEventListener('resize', function(){
  if(w >= 774) {
  if(element.style.width == "0%"){
    element.style.width= "100%";
  }else if(w <= 773){
    element.style.width = "0%";
  }

} 
 }, false);
   window.onload = function() {

  if (window.location.href.indexOf("test") <= -1) {
    var search_span = document.getElementsByClassName("securitySearchQuery");
    search_span[0].style.color = "blue";
    search_span[0].style.fontWeight = "bold";
    search_span[0].style.fontSize = "40px";

  }

}
 */