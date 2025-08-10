const deleteButton = document.querySelector(".button-cancel");

deleteButton.addEventListener("click",(e)=>{
  if(confirm("정말 삭제하시겠습니까?")){
    alert("삭제 완료");
    location.href = "./routine-meeting-review-list.html";
  }
  else{
    e.preventDefault();
  }
});