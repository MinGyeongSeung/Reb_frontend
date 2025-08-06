let loginBtn = document.querySelector("#submit");
let loginWarning = document.querySelector("#login-warning");



loginBtn.addEventListener('click', (id, pw) => {
  const id = document.querySelector("#id");
  const pw = document.querySelector("#pw");
  if (id === 'admin' && pw === 'admin') {
    alert("성공입니다.");
  } else {
    loginWarning.style.display = "block";
  }
});
