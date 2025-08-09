
window.addEventListener('DOMContentLoaded', () => {
    //불러오기
    fetch("./../../app/mypage/mypage-modal.html")
        .then(response => response.text())
        .then(data => {
            modal = document.querySelector(`.mypage-modal`);

            modal.innerHTML = data;

            modalCloseBtn = document.querySelector(`.button-modal-close`);
            modalCloseBtn.addEventListener('click', closeModal);

            openModalButtonList = document.querySelectorAll(`.button-modal-open`);

            openModalButtonList.forEach((button) => {
                button.addEventListener('click', ()=>{
                    openModal();
                });
            });
        })
})

let modalCloseBtn;
let modal;

let openModalButtonList;

function closeModal() {
    modal.style.display = "none";
}

function openModal() {
    modal.style.display = "block";
}