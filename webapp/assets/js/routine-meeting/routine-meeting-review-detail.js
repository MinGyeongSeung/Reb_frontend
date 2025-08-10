const deleteButton = document.querySelector(".button-cancel");
const heart = document.querySelector(".fa-heart");

deleteButton.addEventListener("click",(e)=>{
  if(confirm("정말 삭제하시겠습니까?")){
    alert("삭제 완료");
    location.href = "./course-review-list.html";
  }
  else{
    e.preventDefault();
  }
});

heart.addEventListener('click',()=>{
  if(heart.classList.contains('fa-regular')){
    heart.classList.replace('fa-regular','fa-solid');
  }
  else{
    heart.classList.replace('fa-solid','fa-regular');
  }
});