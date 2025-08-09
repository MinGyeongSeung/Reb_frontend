const createBtn = document.querySelector(".button-application");
const dropBtn = document.querySelector(".button-cancel");
const dropModal = document.querySelector("#modal-background");
const submitBtn = document.querySelector("#submit");

createBtn.addEventListener('click', ()=>{
  alert("개설을 승인하였습니다.");
  location.href= "./../../../app/admin/course/admin-course-detail.html";
});

dropBtn.addEventListener('click', ()=>{
  dropModal.style.display="flex";
  dropModal.style.zIndex=5;
});

submitBtn.addEventListener("click", ()=>{
  alert("개설을 반려하였습니다.");
  location.href= "./../../../app/admin/course/admin-course-request-list.html";
});