const moveBtn = document.querySelector(".back-list");
const deleteBtn = document.querySelector(".button-cancel");
const dropModal = document.querySelector("#modal-background");
const submitBtn = document.querySelector("#submit");
const closeModal = document.querySelector("#close-modal");
const returnMsg = document.querySelector("#return-message");


moveBtn.addEventListener('click', () => {
  location.href = "./../../../app/admin/course/admin-course-list.html";
});

deleteBtn.addEventListener('click', () => {
  dropModal.style.display = "flex";
  dropModal.style.zIndex = 5;
});

submitBtn.addEventListener("click", () => {
  if (returnMsg.value == "") {
    alert("사유를 입력해주세요.");
  } else {
    if (confirm("수업을 삭제하시겠습니까?")) {
      alert("수업 삭제가 완료되었습니다..");
      location.href = "./../../../app/admin/course/admin-course-list.html";
      returnMsg.value = "";
    }
  }
});

closeModal.addEventListener(('click'), () => {
  dropModal.style.display = "none";
  returnMsg.value = "";
})