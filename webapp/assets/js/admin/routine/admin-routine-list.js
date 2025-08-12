const search = document.querySelector("#main-search-menu");
const dropdown = document.querySelector("#main-search-basic");
const chooseMenu = document.querySelector("#main-search-basic>div>p");
const createBtn = document.querySelector("#main-create-routine");

dropdown.addEventListener('click', () => {
  search.style.display = "block";
});

chooseMenu.addEventListener('blur', () => {
  search.style.display = "none";
});

createBtn.addEventListener('click', ()=>{
  location.href= "./../../../app/admin/routine/admin-routine-create.html";
});

const logoutBtn = document.querySelector("header>button");
logoutBtn.addEventListener('click', ()=>{
  location.href= "./../login/admin-login.html";
});
