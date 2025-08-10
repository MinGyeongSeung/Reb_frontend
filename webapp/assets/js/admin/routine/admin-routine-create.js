const okBtn = document.querySelector(".button-ok");
const cancelBtn = document.querySelector(".button-cancel");

okBtn.addEventListener('click', ()=>{
  alert("등록 완료되었습니다.");
  location.href= "./../../../app/admin/routine/admin-routine-detail.html";
});

cancelBtn.addEventListener('click', ()=>{
  if(confirm("작성하신 내용을 지우시겠습니까?")){
    alert("작성을 취소하셨습니다.");
    location.href= "./../../../app/admin/routine/admin-routine-list.html";
  }
});