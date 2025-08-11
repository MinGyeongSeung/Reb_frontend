let count = 3;

let edit = document.querySelectorAll(".span-comment-edit");
let commentAdd = document.querySelector(".input-comment");
const buttonWrite = document.querySelector(".button-write");
const commentList = document.querySelector(".ul-comment-list");
buttonWrite.addEventListener('click', (e) => {
    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'li-comment');
    newLi.innerHTML = '<div class="div-user-profile"><img src="./../../assets/img/karina.jpg" class="img-user-profile"></div>' +
      '<div class="div-user-info">' +
      '<div class="div-user-name-area">' +
      `<p class="p-user-name">곰융</p><span class="span-comment-edit">수정</span>` +
      '</div>' +
      '<div class="div-user-text-area">' +
      '<p class="p-comment-text">' + commentAdd.value + '</p><span class="span-comment-delete">삭제</span>' +
      '</div>' +
      '<p class="p-update-date">2025.07.02<span class="p-update-status"></span></p>' +
      '</div>';
    if (commentAdd != null && commentAdd.length != 0) {
      commentList.appendChild(newLi);
      count++;
      commentAdd.value = "";
    }
});

commentList.addEventListener('click',(e)=>{
  console.log(e.target.classList);
  if(e.target.classList.contains('span-comment-edit')){
    
  }
  if(e.target.classList.contains('span-comment-delete')){
    if(confirm("삭제하시겠습니까?")){
      commentList.classList.remove();
    }
  }
});





