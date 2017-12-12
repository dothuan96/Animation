/*====================Menu drop down==========================*/
function showmenu() {
  document.getElementById("col-menu").classList.toggle("show-menu");
}

/*===================Show verification message===============*/
function show_verify() {
  document.getElementById("flip").classList.add("show-more");
  document.getElementById("verify-btn").textContent = "Resend";
}

/*==================SUBCRIBE ANIMEATED (footer)===============================*/
$(window).scroll( function(){
    $('.label-sub').each( function(i){
        var top_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > top_of_object ){
          $(this).animate({opacity:'1', left: '0'}, 600);
          $('.sub-input').animate({opacity:'1', left: '0'}, 600);
        }
    });
});

/*========================NAVIGATION FIXED POSITION (header)===================*/
$(window).scroll( function(){
  var top_of_object = $('main').offset().top;
  var top_of_window = $(window).scrollTop();

  if( top_of_window > top_of_object ){
    $(".fixed-nav").animate({top:'0', borderBottomWidth: '0px'}, 800);
    console.log("a");
  }
  /*else {
    $(".fixed-nav").animate({top:'-112px', borderBottomWidth: '0'}, 800);
    console.log("b");
  }*/
});

/*This version do not need copy another black nav, but it's not smooth
$(window).scroll( function(){
  var top_of_object = $('.movie-slide').offset().top;
  var top_of_window = $(window).scrollTop();

  if( top_of_window > top_of_object ){
    $(".relativ").css({top: '-112px'});
    $("#blue-nav").css({top: '112px'});
    $(".relativ").animate({top:'0'}, 800);
    $(".relativ").css({position: 'fixed'});
  }
});*/
