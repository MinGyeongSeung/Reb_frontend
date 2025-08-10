const buttonApp = document.querySelector(".button-application");
const buttonCancel = document.querySelector(".button-cancel");
const modal = document.querySelector(".modal-background");
const deleteBtn = document.querySelector(".button-delete");
const modalClose = document.querySelector(".button-x");
const buttonModalDelete = document.querySelector(".button-modal-delete");
let textarea = document.querySelector(".textarea-delete-modal");

buttonApp.addEventListener("click",()=>{
  if(confirm("신청하시겠습니까?")){
    buttonApp.style.display= 'none';
    buttonCancel.style.display = 'block';
  }
});

buttonCancel.addEventListener("click",()=>{
  if(confirm("취소하시겠습니까?")){
    buttonCancel.style.display= 'none';
    buttonApp.style.display = 'block';
  }
});

deleteBtn.addEventListener('click', () => {
  modal.style.display = "flex";
});

modalClose.addEventListener('click',()=>{
  modal.style.display = "none";
});

buttonModalDelete.addEventListener('click',()=>{
  alert("삭제 요청 완료되었습니다");
  textarea.value = null;
  modal.style.display ="none";
});