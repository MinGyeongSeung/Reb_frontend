const cancelBtn = document.querySelector(".button-cancel");
const deleteCommentBtn = document.querySelector(".div-comment-area>div>button");

cancelBtn.addEventListener('click', ()=>{
  if(confirm("삭제하시겠습니까?")){
    alert("삭제 되었습니다.");
    location.href= "./../../../app/admin/review/admin-routine-review-list.html";
  }
});

deleteCommentBtn.addEventListener('click', ()=>{
  alert("삭제 시키려는 것입니다.");
});