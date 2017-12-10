/*================MOVIES SHOW ANIMATION============================*/
/* Check the location of each desired element */
$('.mov-info').each( function(i){
    var top_of_object = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it in */
    if( bottom_of_window > top_of_object + 100 ){
      $('.nav-left').animate({opacity:'1', left: '0'}, 800);
      $('.nav-right').animate({opacity:'1', left: '0'}, 800);
      $(this).animate({opacity:'1'}, 1000);
    }
});

/*================MOVIES SHOW WHEN SCROLL============================*/
$(window).scroll( function(){
    /* Check the location of each desired element */
    $('.mov-info').each( function(i){
        var top_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > top_of_object ){
          $(this).animate({opacity:'1'}, 1000);
        }
    });
});

/*==================FADE OUT THE TAB===========================*/
$('#movies a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

/*=================TOP MOVIE ANIMATION===========================*/
/* Check the location of each desired element */
$(window).scroll( function(){
  $('.mov-left').each( function(i){
      var top_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > top_of_object){
        $(this).animate({opacity:'1', left: '0'}, 800);
        $('.mov-right').animate({opacity:'1', left: '0'}, 800);
      }

      if( bottom_of_window > top_of_object + 255) {
        $('.discr-mov').animate({opacity:'1', top: '0'}, 800);
      }
  });
});
