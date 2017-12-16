/*=================================SCHEDUEL SLIDE ANIMATION==============================================*/
var slide_height = document.getElementById('sche-slide');
var tables = document.getElementsByClassName('table');
var tables_height = tables[0].offsetHeight;
var tables_width = tables[0].offsetWidth;
slide_height.style.height = tables_height + 12 + 'px';

for (var i = 0; i < tables.length; i++) {
  tables[i].style.left = i*tables_width + 'px';
}

var b = 0;
var table_slies = document.getElementsByClassName('table-sli');
var icons = document.getElementsByClassName('hide-icon');

function next_week() {
  if(b <= 0 && b > (table_slies.length - table_slies.length*2 + 1)) { //only execute if the position of last image is 0 on screen and position of first image > (-array.length + 1)
    for(var a=0; a<table_slies.length; a++) {  //a is the position of image in array
      table_slies[a].style.left = (b*tables_width - tables_width) + "px";

      if(table_slies[a].style.left == '0px') {
        table_slies[a].classList.add('show-table');
        icons[a].classList.add('show-icon');
      }
      else {
        table_slies[a].classList.remove('show-table');
        icons[a].classList.remove('show-icon');
      }
      b++;
    }
    b = b - table_slies.length -1; //reset b based on first image
    }
}

function pre_week() {
  if(b < 0) {
    for(var a=0; a<table_slies.length; a++) {  //a is the position of image in array
      table_slies[a].style.left = (b*tables_width + tables_width) + "px";
      if(table_slies[a].style.left == '0px') {
        table_slies[a].classList.add('show-table');
        icons[a].classList.add('show-icon');
      }
      else {
        table_slies[a].classList.remove('show-table');
        icons[a].classList.remove('show-icon');
      }
      b++;
    }
    b = b - table_slies.length +1; //reset b based on first image
    }
}

/*==================================SEARCH TITLE POSITION==============================================*/
var sear_til = document.getElementById('search-title');
var thea_til = document.getElementById('theater-title');

sear_til.style.top = thea_til.offsetHeight + 8 + 'px';
sear_til.style.height = icons[0].offsetHeight + 'px';

/*------------------------------------NOW SHOWING MOVIES SLIDE------------------------------------------------*/
var movie_slide = document.getElementById('movie-slide');
var slide_content = document.getElementsByClassName('slide-content');
var win_width = document.getElementsByClassName('container')[0].offsetWidth;
var lr_button = document.getElementsByClassName('icon-bor');
var pos = 0;
var c = 0;
//set the position of each row of movie based on window width (px)
for (var i = 0; i < slide_content.length; i++) {
  movie_slide.style.height = slide_content[i].offsetHeight  + 'px';
  slide_content[i].style.left = pos*win_width + 'px';
  pos++;
}
//set position for left right button
for (var i = 0; i < lr_button.length; i++) {
  lr_button[i].style.top = (slide_content[i].offsetHeight - 50) / 2 + 'px'
}

function mov_right() {
  if(c <= 0 && c > (slide_content.length - slide_content.length*2 + 1)) { //only execute if the position of last image is 0 on screen and position of first image > (-array.length + 1)
    for(var a=0; a<slide_content.length; a++) {  //a is the position of image in array
      slide_content[a].style.left = (c*win_width - win_width) + "px";

      if(slide_content[a].style.left == '0px') {
        slide_content[a].classList.add('show-mov');
      }
      else {
        slide_content[a].classList.remove('show-mov');
      }
      c++;
    }
    c = c - slide_content.length -1; //reset b based on first image
    }
}

function mov_left() {
  if(c < 0) { //only execute if the position of last image is 0 on screen and position of first image > (-array.length + 1)
    for(var a=0; a<slide_content.length; a++) {  //a is the position of image in array
      slide_content[a].style.left = (c*win_width + win_width) + "px";

      if(slide_content[a].style.left == '0px') {
        slide_content[a].classList.add('show-mov');
      }
      else {
        slide_content[a].classList.remove('show-mov');
      }
      c++;
    }
    c = c - slide_content.length +1; //reset b based on first image
    }
}

/*=====================================ANIMATION WHOLE OF PAGE===========================================*/
$('.col-sm-8').each( function(i){
    var top_of_object = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it in */
    if( bottom_of_window > top_of_object){
      $(this).animate({opacity:'1'}, 800);
      $('.mov, .mov.out, .mov.less').animate({opacity:'0', top:'-57px'}, 800);
      $('.mov, .mov.out, .mov.less').animate({opacity:'1', top:'0'}, 1000);

      $('p.1').animate({opacity:'0', left:'-162px'}, 600);
      $('p.2').animate({opacity:'0', left:'-162px'}, 600*2);
      $('p.3').animate({opacity:'0', left:'-162px'}, 600*3);
      $('p.1').animate({opacity:'1', left:'0'}, 600);
      $('p.2').animate({opacity:'1', left:'0'}, 600);
      $('p.3').animate({opacity:'1', left:'0'}, 600);

      $('.select.1').animate({opacity:'0', left:'100px'}, 400);
      $('.select.2').animate({opacity:'0', left:'100px'}, 400*2);
      $('.select.3').animate({opacity:'0', left:'100px'}, 400*3);
      $('.select.4').animate({opacity:'0', left:'100px'}, 400*4);
      $('.select.5').animate({opacity:'0', left:'100px'}, 400*5);
      $('.select.1').animate({opacity:'1', left:'0'}, 600);
      $('.select.2').animate({opacity:'1', left:'0'}, 600);
      $('.select.3').animate({opacity:'1', left:'0'}, 600);
      $('.select.4').animate({opacity:'1', left:'0'}, 600);
      $('.select.5').animate({opacity:'1', left:'0'}, 600);
    }
});

/*=====================================ANIMATION WHOLE OF NOW SHOWING MOVIES===========================================*/
$(window).scroll( function(){
  $('.icon-right').each( function(i){
      var top_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > top_of_object - 100){
        $('.row-mov').animate({top:'0', opacity: '1'}, 1000);
      }
  });
});
