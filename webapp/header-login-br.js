window.addEventListener('DOMContentLoaded', () => {
    //불러오기
    
    fetch("http://localhost:5500/Reb_frontend/webapp/header-login-br.html")
        .then(response => response.text())
        .then(data => {
            modal = document.querySelector(`#header`);
            modal.innerHTML = data;
        });
})