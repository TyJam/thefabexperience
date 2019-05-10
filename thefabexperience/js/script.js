//Create the module and name it scotchApp
var app = angular.module("myApp",['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
       
    })
    .when("/about", {
        templateUrl : "about.html"
        
    })
    .when("/services", {
        templateUrl : "services.html"
       
    })
    .when("/menu", {
        templateUrl : "menu.html"
     
    })
    .when("/contact", {
        templateUrl : "contact.html"
    });
});

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
  
var btn = document.getElementById('defaultOpen');
var clickEvent = new MouseEvent("click", {
    "view":window,
    "bubbles":true,
    "cancelable":false
});
btn.dispatchEvent(clickEvent);

  
