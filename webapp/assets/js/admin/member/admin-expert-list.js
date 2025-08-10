const search = document.querySelector("#main-search-menu");
const dropdown = document.querySelector("#main-search-basic");
const chooseMenu = document.querySelector("#main-search-basic>div>p");
const modalBackground = document.querySelector("#modal-background");
const acceptBtn = document.querySelectorAll(".accept");
const cancelBtn = document.querySelectorAll(".cancel");
const submitBtn = document.querySelector("#submit");
const closeModal = document.querySelector("#close-modal");
const returnMsg = document.querySelector("#return-message");

dropdown.addEventListener('click', () => {
  search.style.display = "block";
});

chooseMenu.addEventListener('blur', () => {
  search.style.display = "none";
});




acceptBtn.forEach(btn => {
  btn.addEventListener('click', function (e) {
    const nextBtn = e.target.nextElementSibling;
    nextBtn.style.width = "90px";
    btn.style.display = "none";
    nextBtn.innerText = "승인 취소";
  });
});


cancelBtn.forEach(btn => {
  btn.addEventListener('click', function (e) {
    modalBackground.style.display = "flex";
    modalBackground.style.zIndex = 5;
    submitBtn.addEventListener('click', () => {
      alert("취소/반려 사유 등록 완료");
      returnMsg.value= "";
      modalBackground.style.display = "none";
      const list= e.target.parentNode.parentNode;
      list.remove();
    });
  });
});


closeModal.addEventListener(('click'), () => {
  modalBackground.style.display = "none";
});

const logoutBtn = document.querySelector("header>button>img");
logoutBtn.addEventListener('click', ()=>{
  location.href= "./../login/admin-login.html";
});
