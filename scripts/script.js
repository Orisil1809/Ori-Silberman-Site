const tl = gsap.timeline({ defaults: { ease: "power1.out" }});
const tl2 = gsap.timeline({ defaults: { ease: "power3.out" }});

$(window).on('load', function(){  
//   tl2.to($(".overlay"),
//   {height: "0%", ease: "slow(0.7, 0.7, false)"});


// });
tl2.to(".overlay", {height: "0%", delay: 0.1, duration: 1.5});
});


$('.navbar-toggler').click(function(){
    $("#main_navbar").toggleClass('colored');
    $('body').toggleClass('noscroll');

    $('.colored #navbarCollapse').on("click", ".navbar-nav li #myContact" , function(){
      $('body').removeClass('noscroll');
      $('#navbarCollapse').collapse('hide');
      $('.navbar-toggler').removeClass('opened');
      $('.navbar-toggler').addClass('collapsed');
      $('#main_navbar').removeClass('colored');
  
    });
    $('.colored #navbarCollapse').on("click", ".navbar-nav li #myAboutMe" , function(){
        $('body').removeClass('noscroll');
        $('#navbarCollapse').collapse('hide');
        $('.navbar-toggler').removeClass('opened');
        $('.navbar-toggler').addClass('collapsed');
        $('#main_navbar').removeClass('colored');
    });

    $('.colored #navbarCollapse').on("click", ".navbar-nav li #mySkills" , function(){
      $('body').removeClass('noscroll');
      $('#navbarCollapse').collapse('hide');
      $('.navbar-toggler').removeClass('opened');
      $('.navbar-toggler').addClass('collapsed');
      $('#main_navbar').removeClass('colored');
  });

  });
  
  
  $(document).scroll(function () {
    var $nav = $("#main_navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() + 20 > 40);
  });

  tl.to (".text", {y: "0%", delay: 0.5, duration: 1, stagger: 0.5});
  // tl.to("#my_brand", {opacity: 1, duration: 0.3});
  tl.to("#home-text", {y: "0%", delay: 0.5, duration: 1}, "-=3");
  tl.to(".scroll-down", {opacity: 1, duration: 1}, "-=0.5");
  tl.to("#social-footer li", {opacity: 1, duration: 0.5}, "-=1");
  

  $('#scroll-arrow').click(function(){

    var defaultDuration = 777 // ms
    var edgeOffset = 25 // px
    zenscroll.setup(defaultDuration, edgeOffset)
    zenscroll.to(aboutMe)
    
    });

    function delay (URL) {
        setTimeout( function() { window.location = URL }, 500 );
    }

    $(window).scroll( function(){
        $('.wrapper').each( function(i){
              
          const top_of_object = $(this).offset().top;
          const middle_of_object = $(this).offset().top + $(this).outerHeight()/3;
          const bottom_of_window = $(window).scrollTop() + $(window).height();
      
          if( bottom_of_window > middle_of_object ){   
            $('.wrapper').addClass("anim");
            $('.picWrapper').addClass("anim");
          }
      
        });
    });