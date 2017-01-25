"use strict";
$(document).ready(function(){
    $(".button-collapse").sideNav({
        closeOnClick : true,
        menuWidth : 200,
        draggable : true
    });
    $('.carousel.carousel-slider').carousel({full_width: true});
    $('.scrollspy').scrollSpy({scrollOffset:100});
    $('.carousel .carousel-item img').css({
        maxWidth : 250 + 'px',
        height : 'auto'
    });
  });