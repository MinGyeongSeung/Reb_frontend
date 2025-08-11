window.addEventListener('DOMContentLoaded', () => {
    let root = "./../../";

    if (document.querySelector(`#header`).getAttribute('class') === "main-page") {
        root = "./";
    }
    

    console.log(root);
    fetch(root + "footer.html")
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