const search = document.querySelector("#modal-background");
const deleteBtn = document.querySelector(".button-delete");

deleteBtn.addEventListener('click', () => {
  search.style.display = "flex";
});

// chooseMenu.addEventListener('blur', () => {
//   search.style.display = "none";
// });
