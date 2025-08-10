window.addEventListener('DOMContentLoaded', () => {
    //불러오기
    
    fetch("./../../header-login-br.html")
        .then(response => response.text())
        .then(data => {
            modal = document.querySelector(`#header`);
            modal.innerHTML = data;
        });
})