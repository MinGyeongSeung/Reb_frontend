const okButton = document.querySelector(".button-ok");
const cancelButton = document.querySelector(".button-cancel");

okButton.addEventListener("click",(e)=>{
  if(confirm("정말로 수정하시겠습니까?")){
    alert("수정 완료");
    location.href="./routine-meeting-review-detail.html";
  }
  else{
    e.preventDefault();
  }
});

cancelButton.addEventListener("click",(e)=>{
  if(confirm("정말로 취소하시겠습니까? 내용은 전부 삭제됩니다")){
    location.href="./routine-meeting-review-detail.html";
  }
  else{
    e.preventDefault();
  }
});