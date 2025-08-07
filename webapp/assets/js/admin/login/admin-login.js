let loginBtn = document.querySelector("#main-login-submit");
let loginWarning = document.querySelector("#main-login-warning");



loginBtn.addEventListener('click', () => {
  const id = document.querySelector("#main-login-id").value;
  const pw = document.querySelector("#main-login-pw").value;
  if (id === 'admin' && pw === 'admin') {
    loginWarning.style.display = "none";
    alert("성공입니다.");
  } else {
    loginWarning.style.display = "block";
  }
});
