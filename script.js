$(document).ready(function() {

   $('.menu-btn').click(function (){
     $('.navbar  .menu').toggleClass("active");
     $('.menu-btn i').toggleClass("active");
   });

   var typing = new Typed (".typing" ,{

    strings : ["Front End Developer", "Web Developer", "Traveller"],
    typeSpeed: 100,
    backSpeed:60,
    loop:true
});

   $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1, 
            nav: false
        },
        600:{

            items: 2,
            nav: false
        },
        1000:{
            items:3,
            nav:false
        }
    }

   })
    
})