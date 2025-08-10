window.addEventListener('DOMContentLoaded', () => {
    //불러오기
    
    fetch("./../../header-login.html")
        .then(response => response.text())
        .then(data => {
            header = document.querySelector(`#header`);
            header.innerHTML = data;
        });
})