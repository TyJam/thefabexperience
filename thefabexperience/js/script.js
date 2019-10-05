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
    .when("/gallery", {
        templateUrl: "gallery.php"
    })
    .when("/contact", {
        templateUrl : "contact.html"
    })
});


