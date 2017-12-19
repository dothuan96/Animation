/*=====================================POSITION OF BUTTON============================================*/
var btn_div = document.getElementsByClassName('rate')[0];
var mov_title = document.getElementsByClassName('mov-title')[0];
var info = document.getElementsByClassName('tab-info')[0];
var img = document.getElementsByClassName('img-bor')[0];

info.style.height = img.offsetHeight - (mov_title.offsetHeight + btn_div.offsetHeight + 32) + 'px';

/*=======================================PANEL DIMENSION=========================================*/
var list_panel = document.getElementsByClassName('li-panel');
var panel = document.getElementsByClassName('panels')[0];
var panel_contents = document.getElementsByClassName('panel-content');
var n = 0;

panel.style.height = panel_contents[n].offsetHeight + 'px';

function panelcur(m) {
  n = m;
  //remove class active on all list_panel
  for (var i = 0; i < list_panel.length; i++) {
    if (list_panel[i].classList.contains('active')) {
      list_panel[i].classList.remove('active');
    }
    //also remove all class active for panel_contents
    if (panel_contents[i].classList.contains('active')) {
      panel_contents[i].classList.remove('active');
    }
  }
  //add class active to the list_panel which clicked (n)
  list_panel[n].classList.add('active'); console.log(n);
  panel_contents[n].classList.add('active');
  panel.style.height = panel_contents[n].offsetHeight + 'px';
}

/*================MOVIES SHOW ANIMATION============================*/
/* Check the location of each desired element */
$('.mov-title').each( function(i){
    var top_of_object = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it in */
    if( bottom_of_window > top_of_object + 100 ){
      //stage 1
      $(this).animate({opacity:'0', left:'-700px'}, 800);
      $('.table').animate({opacity:'0', top:'-340px'}, 800);
      $('.star li.1, .star li.2, .star li.3, .star li.4, .star li.5').animate({opacity:'0'}, 800);
      $('.btn.1, .btn.2').animate({opacity:'0'}, 800);
      //stage 2
      $('img').animate({opacity:'1', top:'0'}, 800);
      $(this).animate({opacity:'1', left:'0'}, 800); console.log('a');
      $('.table').animate({opacity:'0', top:'-340px'}, 800);
      $('.star li.1, .star li.2, .star li.3, .star li.4, .star li.5').animate({opacity:'0'}, 800);
      $('.btn.1, .btn.2').animate({opacity:'0'}, 800);
      //stage 3
      $('.table').animate({opacity:'1', top:'0'}, 800);
      $('.star li.1, .star li.2, .star li.3, .star li.4, .star li.5').animate({opacity:'0'}, 800);
      $('.btn.1, .btn.2').animate({opacity:'0'}, 800);
      //stage 4
      $('.star li.1').animate({opacity:'1'}, 600);
      $('.star li.2').animate({opacity:'1'}, 600*2);
      $('.star li.3').animate({opacity:'1'}, 600*3);
      $('.star li.4').animate({opacity:'1'}, 600*4);
      $('.star li.5').animate({opacity:'1'}, 600*5);

      $('.star li.1').animate({opacity:'1'}, 400);
      $('.star li.2').animate({opacity:'1'}, 400);
      $('.star li.3').animate({opacity:'1'}, 400);
      $('.star li.4').animate({opacity:'1'}, 400);
      $('.star li.5').animate({opacity:'1'}, 400);
      //stage 5
      $('.btn.1').animate({opacity:'0'}, 600);
      $('.btn.2').animate({opacity:'0'}, 600*2);

      $('.btn.1').animate({opacity:'1'}, 600);
      $('.btn.2').animate({opacity:'1'}, 600);
    }
});

/*=================TAB PANEL ANIMATION WHEN SCROLL DOWN===========================*/
/* Check the location of each desired element */
$(window).scroll( function(){
  $('.tabs').each( function(i){
      var top_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > top_of_object){
        $(this).animate({opacity:'1'}, 800);
        $('.panels').animate({opacity:'1', top:'0'}, 800);
      }
  });
});
