const findIdModal = document.querySelector(".p-findid");
const closeFindIdModal = document.querySelector(".button-id-x");
const idModal = document.querySelector(".modal-id-background");

const idModalEnd = document.querySelector(".modal-id-end-background");
const goLoginBtn = document.querySelector(".button-modal-find-end");

const findPwModal = document.querySelector(".p-findpw");
const closeFindPwModal = document.querySelector(".button-pw-x");
const pwModal = document.querySelector(".modal-pw-background");

findIdModal.addEventListener('click',()=>{
  idModal.style.display = "flex";
});

closeFindIdModal.addEventListener('click',()=>{
  idModal.style.display = "none";
});

goLoginBtn.addEventListener('click',()=>{
  idModalEnd.style.display = "none";
});


findPwModal.addEventListener('click',()=>{
  pwModal.style.display = "flex";
});

closeFindPwModal.addEventListener('click',()=>{
  pwModal.style.display = "none";
});
