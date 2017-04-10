var link = document.querySelector(".btn-contacts");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var username = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var useremail = popup.querySelector("[name=email]");
var storage = localStorage.getItem("username");

link.addEventListener("click",function(event) {
   event.preventDefault();
   popup.classList.add("modal-content-show");
   
   if (storage) {
      username.value = storage;
      useremail.focus();
   } else{
      username.focus();
   }   
});

close.addEventListener("click",function(event) {
   event.preventDefault();
   popup.classList.remove("modal-content-show");
   popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
   if(!username.value || !useremail.value) {
      event.preventDefault();
      popup.classList.add("modal-error");
   } else {
      localStorage.setItem("username", username.value);
   }
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
        }
    }
});


function initialize() {
    var x = 59.9386673;
    var y = 30.3237900;
    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(x, y),
        scrollwheel: false,
		disableDefaultUI: true
    }
    var map = new  google.maps.Map(
        document.querySelector(".map-script"),
        mapOptions
    );
    var image = "img/map-marker.png"; 
    var myLatLng = new google.maps.LatLng(x, y);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
google.maps.event.addDomListener(window, "load", initialize);

