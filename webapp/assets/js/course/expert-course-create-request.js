let courseStartDate = document.querySelector("input[name = 'courseStartDate']");
let recuitmentEndDate = document.querySelector("input[name = 'recruitmentEndDate']");
let warning = document.querySelector(".p-warning");

const okButton = document.querySelector(".button-ok");
const cancelButton = document.querySelector(".button-cancel");

courseStartDate.addEventListener('blur',()=>{
  if(courseStartDate.value<recuitmentEndDate.value){
    warning.style.display = 'block';
  }
  else{
    warning.style.display = 'none';
  }
});

okButton.addEventListener("click",(e)=>{
  if(confirm("정말로 개설 신청하시겠습니까?")){
    alert("신청 완료");
    location.href="./course-list.html";
  }
  else{
    e.preventDefault();
  }
});

cancelButton.addEventListener("click",()=>{
  if(confirm("정말로 취소하시겠습니까? 내용은 전부 삭제됩니다")){
    location.href="./course-list.html";
  }
});