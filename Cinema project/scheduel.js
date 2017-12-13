/*=================================SCHEDUEL SLIDE ANIMATION==============================================*/
var slide_height = document.getElementById('sche-slide');
var tables = document.getElementsByClassName('table');
var tables_height = tables[0].offsetHeight;
var tables_width = tables[0].offsetWidth;
slide_height.style.height = tables_height + 'px';

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
