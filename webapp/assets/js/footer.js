window.addEventListener('DOMContentLoaded', () => {
    let root = "./"

    var xhr = new XMLHttpRequest();
    let path = "footer.html";

    while (true) {
        xhr.open('HEAD', root + path, false);
        xhr.send();

        if (xhr.status == "404") {
            root = root + "../"
        } else {
            break;
        }
    }

    fetch(root + path)
        .then(response => response.text())
        .then(data => {
            footer = document.querySelector(`#footer`);
            footer.innerHTML = data;
            const aTag = document.querySelectorAll('#footer a');
            const imgTag = document.querySelectorAll('#footer img');

            aTag.forEach((a) => {
                a.setAttribute('href', root + a.getAttribute('href'));
            });

            imgTag.forEach((img) => {
                img.setAttribute('src', root + img.getAttribute('src'));
            })
        });
});