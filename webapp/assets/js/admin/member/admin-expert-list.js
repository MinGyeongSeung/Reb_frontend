const search = document.querySelector("#main-search-menu");
const dropdown = document.querySelector("#main-search-basic");
const chooseMenu = document.querySelector("#main-search-basic>div>p");
const cancelBtn = document.querySelector("#cancel");
const modalBackground = document.querySelector("#modal-background");


dropdown.addEventListener('click', () => {
  search.style.display = "block";
});

chooseMenu.addEventListener('blur', () => {
  search.style.display = "none";
});

cancelBtn.addEventListener('click', () => {
  modalBackground.style.display = "block";
})