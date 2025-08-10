const deleteBtn = document.querySelector(".delete");
const addBtn = document.querySelector("#main-banner-add");

deleteBtn.addEventListener('click', ()=>{
  if(confirm("정말로 삭제하시겠습니까?")){
    alert("삭제 완료되었습니다.");
  }
});

addBtn.addEventListener('click', ()=>{
  location.href="./../../../app/admin/banner/admin-banner-create.html";
});