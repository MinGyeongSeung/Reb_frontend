const addBtn = document.querySelector(".main-btn:first-child");
const cancelBtn = document.querySelector(".main-btn:last-child");

addBtn.addEventListener('click', ()=>{
  if(confirm("수정하시겠습니까?")){
    alert("수정 완료되었습니다.");
    location.href= "./../../../app/admin/notice/admin-notice-detail.html";
  }
});

cancelBtn.addEventListener('click', ()=>{
  if(confirm("수정하신 내용은 사라집니다.수정을 취소하시겠습니까?")){
    alert("수정을 취소하셨습니다.");
    location.href= "./../../../app/admin/notice/admin-notice-detail.html";
  }
});