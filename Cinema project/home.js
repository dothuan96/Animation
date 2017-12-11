/*========================IMAGES SLIDE====================*/
var slide_num = 1;
showSlide(slide_num);
//set an interval by default
var times = setInterval(function () {
  showSlide(slide_num++);
}, 6000);

function currentSlide(n) {
  showSlide(slide_num = n);
  clearInterval(times);  //clear interval when click any small poster, avoid time conflic when set time out
  slide_num++;
  time_loop = setTimeout(showSlide, 6000);  //run next wallpaper after next 6s
}

function showSlide(n) {
  var time;
  var slides = document.getElementsByClassName('slide');
  var images = document.getElementsByClassName('image');
  if(slide_num>slides.length) {slide_num = 1}
  if(slide_num<1) {slide_num = slides.length}
  for(var i=0; i<slides.length; i++) {
    slides[i].style.opacity = 0;  //hide all wallpaper by default
  }
  for (var i = 0; i < images.length; i++) {
    images[i].className = images[i].className.replace("show-top", ""); //hide all by default
  }
  slides[slide_num-1].style.opacity = 1;  //show a image that clicked
  images[slide_num-1].classList.add("show-top");  //add class .show-top to image that clicked
  /***USE CLASSLST FOR CUBIC-BEIZER ACTIVATE***/
}

/*================MOVIES SHOW WHEN SCROLL DOWN============================*/
/* Every time the window is scrolled ... */
$(window).scroll( function(){
    /* Check the location of each desired element */
    $('.row-mov').each( function(i){
        var top_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > top_of_object + 100 ){
          $(this).animate({opacity:'1', top: '0'}, 800);
        }
    });
});
