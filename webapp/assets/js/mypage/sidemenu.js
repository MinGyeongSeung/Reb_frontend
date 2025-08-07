window.addEventListener('DOMContentLoaded', () => {
  //불러오기
  fetch("./../../app/mypage/sidemenu.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById('mypage-sidemenu-container').innerHTML = data;

      sideMenuBtnClose = document.querySelector(".mypage-sidemenubtn-close");
      sideMenuBtnOpen = document.querySelector(".mypage-sidemenubtn-open");
      sideMenu = document.querySelector(".mypage-sidemenumove");
      
     expertCourceMenus = document.querySelectorAll(`#li-expert-course-menu a`);

      sideMenuBtnClose.addEventListener('click', () => { moveSideMenu("-300px"); });
      sideMenuBtnOpen.addEventListener('click', () => { moveSideMenu("0px"); });
    })
})

let sideMenuBtnClose;
let sideMenuBtnOpen;
let sideMenu;

let expertCourseMenus;


function moveSideMenu(left) {
  sideMenu.style.left = left;
  sideMenu.style.transition = '0.3s ease';

  sideMenuBtnClose.innerHTML = "&lt;";
}

