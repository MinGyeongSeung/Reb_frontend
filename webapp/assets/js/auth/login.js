const findIdModal = document.querySelector(".p-findid");
const closeFindIdModal = document.querySelector(".button-id-x");
const idModal = document.querySelector(".modal-id-background");

const idModalEnd = document.querySelector(".modal-id-end-background");
const pwModalEnd = document.querySelector(".modal-pw-end-background");
const goLoginBtn = document.querySelector(".button-modal-find-end");

const findPwModal = document.querySelector(".p-findpw");
const closeFindPwModal = document.querySelector(".button-pw-x");
const pwModal = document.querySelector(".modal-pw-background");

const loginBtn = document.querySelector(".button-login");

findIdModal.addEventListener('click',()=>{
  idModal.style.display = "flex";
});

closeFindIdModal.addEventListener('click',()=>{
  idModal.style.display = "none";
});

goLoginBtn.addEventListener('click',()=>{
  idModalEnd.style.display = "none";
  pwModalEnd.style.display = "none";
});


findPwModal.addEventListener('click',()=>{
  pwModal.style.display = "flex";
  console.log(inputId);
});

closeFindPwModal.addEventListener('click',()=>{
  pwModal.style.display = "none";
});
loginBtn.addEventListener('click',(e)=>{
  let inputId = document.querySelector(".input-id").value;
  let inputPw = document.querySelector(".input-pw").value;

  if(inputId.length === 0 || inputPw.length === 0){
    alert("로그인 실패");
    e.preventDefault();
  }
});