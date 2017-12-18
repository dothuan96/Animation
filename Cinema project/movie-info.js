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
