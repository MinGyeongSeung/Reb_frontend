const findIdModal = document.querySelector(".p-findid");
const closeFindIdModal = document.querySelector(".button-id-x");
const idModal = document.querySelector(".modal-id-background");

const idModalEnd = document.querySelector(".modal-id-end-background");
const pwModalEnd = document.querySelector(".modal-pw-end-background");
const goLoginIdBtn = document.querySelector(".button-modal-find-end-id");
const goLoginPwBtn = document.querySelector(".button-modal-find-end-pw");
const buttonIdFind = document.querySelector(".button-modal-find-id");

const findPwModal = document.querySelector(".p-findpw");
const closeFindPwModal = document.querySelector(".button-pw-x");
const pwModal = document.querySelector(".modal-pw-background");
const buttonPwFind = document.querySelector(".button-modal-find-pw");

const loginBtn = document.querySelector(".button-login");

const inputModalNameId = document.querySelector(".input-modal-name-id");
const inputModalPnId = document.querySelector(".input-modal-pn-id");
const inputModalNamePw = document.querySelector(".input-modal-name-pw");
const inputModalPnPw = document.querySelector(".input-modal-pn-pw");
const inputModalIdPw = document.querySelector(".input-modal-id-pw");

findIdModal.addEventListener('click', () => {
  idModal.style.display = "flex";
});

closeFindIdModal.addEventListener('click', () => {
  idModal.style.display = "none";
});

buttonIdFind.addEventListener('click', () => {
  if (inputModalNameId.value === '홍길동' && inputModalPnId.value === '01000000000') {
    idModal.style.display = "none";
    idModalEnd.style.display = "flex";
    inputModalNameId.value = "";
    inputModalPnId.value = "";
  }
  else {
    alert("올바르지 못한 이름 혹은 전화번호입니다");
    inputModalNameId.value = "";
    inputModalPnId.value = "";
  }
});

goLoginIdBtn.addEventListener('click', () => {
  idModalEnd.style.display = "none";
});
goLoginPwBtn.addEventListener('click', () => {
  pwModalEnd.style.display = "none";
});


findPwModal.addEventListener('click', () => {
  pwModal.style.display = "flex";
});

closeFindPwModal.addEventListener('click', () => {
  pwModal.style.display = "none";
});

buttonPwFind.addEventListener('click', () => {
  if (inputModalNamePw.value === '홍길동' && inputModalPnPw.value === '01000000000' && inputModalIdPw.value === 'user') {
    pwModal.style.display = "none";
    pwModalEnd.style.display = "flex";
    inputModalNamePw.value = "";
    inputModalPnPw.value = "";
    inputModalIdPw.value = "";
  }
  else {
    alert("올바르지 못한 이름 혹은 전화번호 혹은 아이디입니다");
    inputModalNamePw.value = "";
    inputModalPnPw.value = "";
    inputModalIdPw.value = "";
  }
});

loginBtn.addEventListener('click', (e) => {
  let inputId = document.querySelector(".input-id").value;
  let inputPw = document.querySelector(".input-pw").value;
  if (inputId.length === 0 || inputPw.length === 0) {
    alert("로그인 실패");
    e.preventDefault();
  }
  else if (inputId === 'user' && inputPw === '1234') {
    location.href = "./../../main.html";
  }
  else {
    alert("로그인 실패");
    e.preventDefault();
  }
});
