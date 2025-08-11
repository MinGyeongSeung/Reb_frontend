window.addEventListener('DOMContentLoaded', () => {
    //불러오기
    var xhr = new XMLHttpRequest();
    let path = "./header-nologin.html";
    xhr.open('HEAD', path, false);
    xhr.send();

    if (xhr.status == "404") {
      path = "./../."+ path;
    }

    fetch(path)
        .then(response => response.text())
        .then(data => {
            header = document.querySelector(`#header`);
            header.innerHTML = data;
        });
});