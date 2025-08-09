const search = document.querySelector("#main-search-menu");
const dropdown = document.querySelector("#main-search-basic");
const chooseMenu = document.querySelector("#main-search-basic>div>p");
const modalBackground = document.querySelector("#modal-background");
// const acceptBtn = document.querySelectorAll(".accept");
// const cancelBtn = document.querySelectorAll(".cancel");
const cancelBtn = document.querySelector(".cancel");
const acceptBtn = document.querySelector(".accept");
const submitBtn = document.querySelector("#submit");

dropdown.addEventListener('click', () => {
  search.style.display = "block";
});

chooseMenu.addEventListener('blur', () => {
  search.style.display = "none";
});


cancelBtn.addEventListener('click', () => {
  modalBackground.style.display = "flex";
  modalBackground.style.zIndex = 5;
});

// for (let i = 0; i < acceptBtn.length; i++) {
//   acceptBtn.addEventListener('click', () => {
//     cancelBtn[i].style.width = "90px";
//     acceptBtn[i].style.display = "none";
//     cancelBtn[i].style.backgroundColor = "#be0000";
//     cancelBtn[i].innerText = "승인 취소";
//   });
// }

acceptBtn.addEventListener('click', () => {
    cancelBtn.style.width = "90px";
    acceptBtn.style.display = "none";
    cancelBtn.style.backgroundColor = "#be0000";
    cancelBtn.innerText = "승인 취소";
  });

  submitBtn.addEventListener('click', ()=>{
    alert("취소/반려 사유 등록 완료");
    location.href= "./../../../app/admin/member/admin-expert-list.html";
  })