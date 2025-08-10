const okButton = document.querySelector(".button-ok");
const cancelButton = document.querySelector(".button-cancel");

okButton.addEventListener("click",(e)=>{
  if(confirm("정말로 작성하시겠습니까?")){
    alert("작성 완료");
    location.href="./routine-meeting-review-list.html";
  }
  else{
    e.preventDefault();
  }
});

cancelButton.addEventListener("click",()=>{
  if(confirm("정말로 취소하시겠습니까? 내용은 전부 삭제됩니다")){
    location.href="./routine-meeting-review-list.html";
  }
});