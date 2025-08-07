const sideMenuBtnClose = document.querySelector(".mypage-sidemenubtn-close");
const sideMenuBtnOpen = document.querySelector(".mypage-sidemenubtn-open");
const sideMenu = document.querySelector(".mypage-sidemenumove");
const buttonPw = document.querySelector(".button-pw");
const wrongpw = document.querySelector(".wrongpw");


sideMenuBtnClose.addEventListener('click',()=>{moveSideMenu("-300px");});
sideMenuBtnOpen.addEventListener('click',()=>{moveSideMenu("0px");});

function moveSideMenu(left){
    sideMenu.style.left= left;
    sideMenu.style.transition = '0.3s ease';
    
    sideMenuBtnClose.innerHTML = "&lt;";
}

function inputPw(){
    wrongpw.style.color = "white";
}
