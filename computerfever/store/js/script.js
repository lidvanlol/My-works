
// collapse the Navbar on scroll starts

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".scroll-top").fadeIn('1000', "easeInOutExpo");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".scroll-top").fadeOut('1000', "easeInOutExpo");
    }
});

 
// collapse the Navbar on scroll Ends

// Page Scrolling
$(function(){
$('.overlay-menu ul li a,.scroll-top a').bind('click',function(event){
var $anchor = $(this);
$('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top
}, 1500, 'easeInOutExpo');
event.preventDefault();

});


});


// Map Code Starts

function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 44.540, lng: -78.546},
      zoom: 8
    });
  }
  // Map Code Ends
  
//Animation Wow code Starts
$(function(){
wow = new WOW({
boxClass: 'wow',
animateClass: 'animated',
offset: 0,
mobile: true,
live :true
})
wow.init();

});
//Animation Wow code Ends

//Jquery main syntax code starts
$(document).ready(function(){
 

 //Superslides code starts
$('#slides').superslides({
animation: 'fade',
play: 5000,
slide_easing: 'easeInOutCubic',
slide_speed: 2000,
pagination: true,
haschange: true,
scrollable:true
});
 //Superslides code Ends

 //Fancybox code Starts
$('.youtube-media').on('click',function(e){
var jWindow = $(window).width();
if(jWindow <= 410){
return;
}
$.fancybox({
href: this.href,
padding:4,
type: "iframe",
'href' : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/')

});
return false;
});

 //Fancybox code Ends
 
//Portfolio Gallery section starts
$(function(){
var owl = $(".recent-project-carousel");
owl.owlCarousel({
items:3,
itemsDesktop: [1024, 4],
itemsTablet: [600, 2],
itemsMobile: [479, 1],
pagination: true,
navigation:false
});
 $(".btn-next").on('click',function(){
 owl.trigger('owl.next');
 }) 

  $(".btn-prev").on('click',function(){
 owl.trigger('owl.prev');
 }) 
 
});


//Portfolio Gallery section Ends

// Light Box code starts
$(function(){
$('.popup-gallery').magnificPopup({
delegate: '.full-project a',
type: 'image',
tLoading: 'Loading image #%curr%...',
minClass: 'mfp-img-mobile',
gallery: {
enabled: true,
navigateByImgClick: true,
preload: [0,1]
},
image: {
tError:'<a href="%url%">The Image #%curr%</a> could not be loaded',
titleSrc: function(item){
return item.el.attr('title') + '<small>By Computerfever</small>';
}

}
});

});
// Light Box code Ends

// Portfolio2 Offers Section
$('#portfolio2 a').nivoLightbox({
effect: 'fadeScale'
});

// Portfolio Our clients Section
$(function(){
var owl = $(".client-slider");
owl.owlCarousel({
items:3,
itemsDesktop: [1024, 4],
itemsTablet: [600, 2],
itemsMobile: [479, 1],
pagination: true,
navigation:false
});
});

// Portfolio Client Testimonials section
$(function(){
var owl = $(".client-testimonials");
owl.owlCarousel({
navigation: false,
slideSpeed: 300,
paginationSpeed: 400,
singleItem: true

});
});
// Portfolio Counter Section Starts
$(function(){
$('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY){
if(visible){
$(this).find('.timer').each(function(){
var $this = $(this);
$({
Counter: 0
}).animate({
Counter: $this.text()
},{
duration: 2000,
easing: 'swing',
step: function(){
$this.text(Math.ceil(this.Counter));
}
});

});
$(this).off('inview');

}

});


});


});