/*=====================================ROOM THEATER INFOMATION SLIDE================================================================*/
var b=0; //count the position of theater div on screen in number (-2, -1, 0, 1, 2,...)
var win_width= document.getElementsByClassName('container')[0].offsetWidth;
var theas = document.getElementsByClassName('theas'); //store all room theater div in an array
var theas_opa = document.getElementsByClassName('hide-thea');
var rooms = document.getElementsByClassName('room');
var thea_tabs = document.getElementsByClassName('theater-tab');
var areas = document.getElementsByClassName('area')
var num_thea_area = theas.length / thea_tabs.length; //numberof theater on each area
var count_room = 0;

//beacuse all theater div are position: absolute, so height of Slide div is 0
//but we need height to set overflow: hidden, so we must sum all of contents's height
var sum_height_slide = document.getElementsByClassName('sli-thea');
var img_height = document.getElementsByClassName('thea-img');
var info_height = document.getElementsByClassName('thea-info');
for (var i = 0; i < sum_height_slide.length; i++) {
  sum_height_slide[i].style.height = img_height[i+2].offsetHeight + info_height[+2].offsetHeight + 42 + 'px';
}

for (var x = 0; x < thea_tabs.length; x++) {
 count_room = 0;
  for(var i= x*num_thea_area; i<(num_thea_area*(x+1) -1); i++) {   //set position for each image
    theas[i].style.left = count_room*win_width + "px";
    count_room++;
  }
}

function right() {
  if(b <= 0 && b > (num_thea_area - num_thea_area*2 + 1)) { //only execute if the position of last image is 0 on screen and position of first image > (-array.length + 1)
    for(var a=0; a<num_thea_area; a++) {  //a is the position of image in array
      theas[a].style.left = (b*win_width - win_width) + "px";
      if(theas[a].style.left == '0px') {
        theas_opa[a].classList.add('show-thea');
        rooms[a].classList.add('active');
      }
      else {
        theas_opa[a].classList.remove('show-thea');
        rooms[a].classList.remove('active');
      }
      b++;
    }
    b = b - num_thea_area -1; //reset b based on first image
    }
    else {
      b= 1;
      for(var a=0; a<num_thea_area; a++) {  //a is the position of image in array
        theas[a].style.left = (b*win_width - win_width) + "px";
        if(theas[a].style.left == '0px') { //which theater have been show (left=0) then change opacity=1
          theas_opa[a].classList.add('show-thea');
          rooms[a].classList.add('active');
        }
        else { //all remain theaters will be hide by opacity = 0
          theas_opa[a].classList.remove('show-thea');
          rooms[a].classList.remove('active');
        }
        b++;
      }
      b = b - num_thea_area -1; //reset b based on first image
    }
  }

function left() { //only execute if the position of first image is negative, that's mean if the position of first image on screen is 0 then cannot execute
  if(b < 0) {
    for(var a=0; a<num_thea_area; a++) {
      theas[a].style.left = (b*win_width + win_width) + "px";
      if(theas[a].style.left == '0px') {
        theas_opa[a].classList.add('show-thea');
        rooms[a].classList.add('active');
      }
      else {
        theas_opa[a].classList.remove('show-thea');
        rooms[a].classList.remove('active');
      }
      b++;
    }
    b = b - num_thea_area + 1;
    }
    else {
      b=-1;
      for(var a=0; a<num_thea_area; a++) {  //a is the position of image in array
        theas[a].style.left = (b*win_width - win_width) + "px";
        if(theas[a].style.left == '0px') {
          theas_opa[a].classList.add('show-thea');
          rooms[a].classList.add('active');
        }
        else {
          theas_opa[a].classList.remove('show-thea');
          rooms[a].classList.remove('active');
        }
        b++;
      }
      b = b - num_thea_area -1; //reset b based on first image
    }
  }
