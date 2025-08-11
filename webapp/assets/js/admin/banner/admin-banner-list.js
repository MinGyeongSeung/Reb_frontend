const addBtn = document.querySelector("#main-banner-add");
const deleteBtn = document.querySelectorAll(".delete");

addBtn.addEventListener('click', () => {
  location.href = "./../../../app/admin/banner/admin-banner-create.html";
});

const logoutBtn = document.querySelector("header>button>img");
logoutBtn.addEventListener('click', () => {
  location.href = "./../login/admin-login.html";
});

deleteBtn.forEach(btn => {
  btn.addEventListener('click', function (e) {
    if (confirm("정말로 삭제하시겠습니까?")) {
      alert("삭제 완료되었습니다.");
      const list = e.target.parentNode.parentNode.parentNode;
      list.remove();
    };
  });
});