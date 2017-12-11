
/*========================NAVIGATION FIXED POSITION (header)===================*/
$(window).scroll( function(){
  var top_of_object = $('.movie-slide').offset().top;
  var top_of_window = $(window).scrollTop();

  if( top_of_window > top_of_object ){
    $(".fixed-nav").animate({top:'0', borderBottomWidth: '1px'}, 800);
  }
  /*else {
    $(".fixed-nav").animate({top:'-112px', borderBottomWidth: '0'}, 800);
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
