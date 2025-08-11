const updateBtn = document.querySelector(".button-application");
const deleteBtn = document.querySelector(".button-cancel");

updateBtn.addEventListener('click', ()=>{
  location.href= "./../../../app/admin/notice/admin-notice-edit.html";
});

deleteBtn.addEventListener('click', ()=>{
  if(confirm("삭제하시겠습니까?")){
    alert("삭제 완료되었습니다.");
    location.href= "./../../../app/admin/notice/admin-notice-list.html";
  }
});

const moveBtn = document.querySelector(".back-list");
moveBtn.addEventListener('click', ()=>{
  location.href= "./../../../app/admin/notice/admin-notice-list.html"
});