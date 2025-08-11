window.addEventListener('DOMContentLoaded', () => {
  let root = "./"
  var xhr = new XMLHttpRequest();
  let path = "header-nologin.html";

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
      footer = document.querySelector(`#header`);
      footer.innerHTML = data;
      const aTag = document.querySelectorAll('#header a');
      const imgTag = document.querySelectorAll('#header img');

      aTag.forEach((a) => {
        a.setAttribute('href', root + a.getAttribute('href'));
      });

      imgTag.forEach((img) => {
        img.setAttribute('src', root + img.getAttribute('src'));
      })
    });
});