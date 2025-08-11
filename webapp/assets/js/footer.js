window.addEventListener('DOMContentLoaded', () => {
    var xhr = new XMLHttpRequest();
    let path = "./footer.html";
    xhr.open('HEAD', path, false);
    xhr.send();

    if (xhr.status == "404") {
      path = "./../."+ path;
    } 

    fetch(path)
        .then(response => response.text())
        .then(data => {
            footer = document.querySelector(`#footer`);
            footer.innerHTML = data;
        });
});