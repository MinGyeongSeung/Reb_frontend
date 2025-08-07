let loginBtn = document.querySelector("#submit");
let loginWarning = document.querySelector("#login-warning");



loginBtn.addEventListener('click', () => {
  const id = document.querySelector("#id");
  const pw = document.querySelector("#pw");
  if (id.value === 'admin' && pw.value === 'admin') {
    loginWarning.style.display = "none";
    alert("성공입니다.");
  } else {
    loginWarning.style.display = "block";
  }
});
