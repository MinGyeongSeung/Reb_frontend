const buttonApp = document.querySelector(".button-application");
const buttonCancel = document.querySelector(".button-cancel");


buttonApp.addEventListener("click",()=>{
  if(confirm("신청하시겠습니까?")){
    buttonApp.style.display= 'none';
    buttonCancel.style.display = 'block';
  }
});

buttonCancel.addEventListener("click",()=>{
  if(confirm("취소하시겠습니까?")){
    buttonCancel.style.display= 'none';
    buttonApp.style.display = 'block';
  }
});

