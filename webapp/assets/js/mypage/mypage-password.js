const sideMenuBtnClose = document.querySelector(".mypage-sidemenubtn-close");
const sideMenuBtnOpen = document.querySelector(".mypage-sidemenubtn-open");
const sideMenu = document.querySelector(".mypage-sidemenumove");
const buttonPw = document.querySelector(".button-pw");
const wrongpw = document.querySelector(".wrongpw");


sideMenuBtnClose.addEventListener('click',()=>{moveSideMenu("-300px");});
sideMenuBtnOpen.addEventListener('click',()=>{moveSideMenu("0px");});

const correctPw = '12345';

function moveSideMenu(left){
    sideMenu.style.left = left;
    sideMenu.style.transition = '0.3s ease';
    
    sideMenuBtnClose.innerHTML = "&lt;";
}

buttonPw.addEventListener('click', (e) =>{
   inputPw(document.getElementsByName(e.target.value)[0].value);
})

function inputPw(pw){
    if(pw === correctPw){
        wrongpw.style.display = "none";
        location.href="personal-info.html";
        location.replace(link);
    }
    else
        wrongpw.style.display = "block";
}
