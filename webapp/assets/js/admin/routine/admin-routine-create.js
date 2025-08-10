const okBtn = document.querySelector(".button-ok");
const cancelBtn = document.querySelector(".button-cancel");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");

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

function checkDate(){
  if(endDate.value != '' && startDate.value > endDate.value){
    startDate.value= '';
    endDate.value= '';
    alert("종료일이 시작일 보다 빠릅니다. 다시 선택해주세요");
  }
}

if(endDate.value != '' && startDate.value > endDate.value){
    startDate.value= '';
    endDate.value= '';
    alert("종료일이 시작일 보다 빠릅니다. 다시 선택해주세요");
  }