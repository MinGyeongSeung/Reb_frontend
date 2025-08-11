const okBtn = document.querySelector(".button-ok");
const cancelBtn = document.querySelector(".button-cancel");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const rStartDate = document.querySelector("#routine-start-date");
const rEndDate = document.querySelector("#routine-end-date");
const today = new Date().toISOString().split('T')[0];
startDate.setAttribute('min', today);
rStartDate.setAttribute('min', today);
const inputIn = document.querySelectorAll(".input-in");

cancelBtn.addEventListener('click', () => {
  if (confirm("작성하신 내용을 지우시겠습니까?")) {
    alert("작성을 취소하셨습니다.");
    location.href = "./../../../app/admin/routine/admin-routine-list.html";
  }
});

startDate.addEventListener('change', function () {
  if (startDate.value) {
    endDate.min = startDate.value;
  }
}, false);

endDate.addEventListener('change', function () {
  if (endDate.value) {
    startDate.max = endDate.value;
  }
}, false);

rStartDate.addEventListener('change', function () {
  if (rStartDate.value) {
    rEndDate.min = rStartDate.value;
  }
}, false);

endDate.addEventListener('change', function () {
  if (rEndDate.value) {
    rStartDate.max = rEndDate.value;
  }
}, false);

okBtn.addEventListener("click", (e) => {
  let tf = true;
  if (confirm("정말로 개설하시겠습니까?")) {
    for (let i = 0; i < inputIn.length; i++) {
      if (inputIn[i].value === null || inputIn[i].value.length === 0) {
        tf = false;
      }
    }
    if (tf === true) {
      alert("등록 완료되었습니다.");
      location.href = "./../../../app/admin/routine/admin-routine-detail.html";
    }
    else {
      alert("모든 정보가 입력되어야 합니다");
    }
  }

});