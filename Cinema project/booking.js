/*==========================================SLIDE PROMOTION ANIMAION=======================================*/
var promo_slide = document.getElementById('pro-sli');
var images = document.getElementsByClassName('image');

promo_slide.style.height = images[0].offsetHeight + 'px';
setInterval(promo_animate, 3000);

function promo_animate() {
  for (var i = 0; i < images.length; i++) {
    if (images[i].classList.contains('show-promo')) {
      images[i].classList.remove('show-promo');
    }
    else {
      images[i].classList.add('show-promo');
    }
  }
}

/*=====================================ANIMATION WHOLE OF PAGE===========================================*/
$('.col-sm-8.1').each( function(i){
    var top_of_object = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it in */
    if( bottom_of_window > top_of_object){
      $('.select.1').animate({opacity:'0', left:'100px'}, 400);
      $('.select.2').animate({opacity:'0', left:'100px'}, 400*2);
      $('.select.3').animate({opacity:'0', left:'100px'}, 400*3);
      $('.select.4').animate({opacity:'0', left:'100px'}, 400*4);
      $('.select.5').animate({opacity:'0', left:'100px'}, 400*5);
      $('.select.6').animate({opacity:'0', left:'100px'}, 400*6);

      $('.select.1').animate({opacity:'1', left:'0'}, 400);
      $('.select.2').animate({opacity:'1', left:'0'}, 400);
      $('.select.3').animate({opacity:'1', left:'0'}, 400);
      $('.select.4').animate({opacity:'1', left:'0'}, 400);
      $('.select.5').animate({opacity:'1', left:'0'}, 400);
      $('.select.6').animate({opacity:'1', left:'0'}, 400);
    }
});

/*====================================TIME TABLE SLIDE============================================*/
var time_table_slide = document.getElementById('time-slide');
var table_slies = document.getElementsByClassName('table-sli');
var tables_height = 458;
var tables_width = 753;

time_table_slide.style.width = tables_width + 'px';
time_table_slide.style.height = tables_height + 'px';

for (var i = 0; i < table_slies.length; i++) {
  table_slies[i].style.left = i*tables_width + 'px';
}

var b = 0;

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

/*==========================================SELECTED SEAT===========================================*/
window.onload = function() {
  var seats = document.getElementsByClassName('avai');

  for(var i = 0; i < seats.length; i++) {
    seats[i].onclick = function() {
      this.classList.toggle('selected');
      document.getElementsByClassName('apply-btn')[0].style.opacity = 1;
    }
  }
}
//another version
/*window.onload = function() {
  var seats = document.getElementsByClassName('avai');

  var clickHandler = function() {
    this.classList.toggle('selected');
  };

  for (var i = 0; i < seats.length; i++) {
    seats[i].addEventListener('click', clickHandler, false);
  }
}*/

/*=========================================PICK SEAT ANIMAION============================================*/
var pick_seat = document.getElementById('pick-seat');
var pick_seat_height = pick_seat.offsetHeight;

function showseat() {
  document.getElementById("pick-seat").classList.toggle("show-more");
}
