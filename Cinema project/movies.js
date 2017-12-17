/*================MOVIES SHOW ANIMATION============================*/
/* Check the location of each desired element */
$('.cur-upc').each( function(i){
    var top_of_object = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it in */
    if( bottom_of_window > top_of_object + 100 ){
      $('.nav-left').animate({opacity:'1', left: '0'}, 800);
      $('.nav-right').animate({opacity:'1', left: '0'}, 800);

      $('img').animate({opacity:'1', top:'0'}, 800);
      $('.info').animate({opacity:'0', left:'-275px'}, 1200); console.log('a');
      $('.info').animate({opacity:'1', left:'0'}, 600); console.log('b');
    }
});

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

/*========================TAB PANE ANIMATION==========================================*/
var tab_content = document.getElementsByClassName('tab-all')[0];
var tab_pane = document.getElementsByClassName('tab-pane');
var pane_left = document.getElementsByClassName('pane-left');
var pane_right = document.getElementsByClassName('pane-right');
var type_movie = document.getElementsByClassName('type-mov');
var num_of_movie = pane_left.length / type_movie.length;

tab_content.style.height = tab_pane[0].offsetHeight + 'px';

/*for (var i = 0; i < type_movie.length; i++) {
  for (var j = i*num_of_movie; j <(num_of_movie*(i+1)-1); j++) {
    pane_left[j].style.left = 0 - pane_left[j].offsetWidth + 'px';
  }
}*/

function showpane() {
  for (var i = 0; i < type_movie.length; i++) {
    if (type_movie[i].classList.contains('active')) {
      type_movie[i].classList.remove('active');
    }
    else {
      type_movie[i].classList.add('active');
    }
  }

  for (var i = 0; i < pane_left.length; i++) {
    if (pane_left[i].classList.contains('show-pane')) {
      pane_left[i].classList.remove('show-pane');
    }
    else {
      pane_left[i].classList.add('show-pane');
    }
  }

  for (var i = 0; i < pane_right.length; i++) {
    if (pane_right[i].classList.contains('show-pane')) {
      pane_right[i].classList.remove('show-pane');
    }
    else {
      pane_right[i].classList.add('show-pane');
    }
  }
}
