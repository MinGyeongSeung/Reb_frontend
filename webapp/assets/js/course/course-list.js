const listClick = document.querySelector(".li-course-list");

const writeBtn = document.querySelector(".button-write");
const writeLink = './expert-course-create-request.html'
writeBtn.addEventListener('click', () => {
  location.href = writeLink;
})
// listClick.addEventListener('click',(e)=>{
//   e

// });