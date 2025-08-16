const addLicenseBtn = document.querySelector("#main-input-license-title>button");
const licenseArea = document.querySelector("#main-input-license-list");
const addCareerBtn = document.querySelector("#main-input-career-title>button");
const careerArea = document.querySelector("#main-input-career-list");
const submitBtn = document.querySelector("#main-submit-btn");
const cancelBtn = document.querySelector("#main-cancel-btn");

// 자격증 입력창 추가
addLicenseBtn.addEventListener('click', () => {
  let newLi = document.createElement('li');
  newLi.setAttribute("class", "li-input-license");
  newLi.style.listStyleType = "none";
  newLi.innerHTML = `<div class="main-input-license-area">` +
    `<input type="text" placeholder="자격증 정보를 입력하세요" name="license">` +
    `<button type="button" class="delete-btn">취소</button>` +
    `</div>`;
  licenseArea.appendChild(newLi);
});

// 자격증 입력창 삭제
licenseArea.addEventListener('click', (e) => {
  console.log(e.target.classList);
  if (e.target.classList.value === 'delete-btn') {
    const listNode = e.target.parentNode.parentNode;
    console.log(listNode);
    listNode.remove();
  }
});


// 경력 입력창 추가
addCareerBtn.addEventListener('click', () => {
  let newLi = document.createElement('li');
  newLi.setAttribute("class", "li-input-career");
  newLi.style.listStyleType = "none";
  newLi.innerHTML = `<div class="main-input-career-area">` +
    `<input type="text" placeholder="경력 사항을 입력하세요" name="career">` +
    `<button type="button" class="delete-career-btn">취소</button>` +
    `</div>`;

  careerArea.appendChild(newLi);
});

// 경력 입력창 삭제
careerArea.addEventListener('click', (e) => {
  console.log(e.target.classList);
  if (e.target.classList.value === 'delete-career-btn') {
    const listNode = e.target.parentNode.parentNode;
    console.log(listNode);
    listNode.remove();
  }
});

// 자격증 입력 여부
function checkLicense() {
  const input = document.querySelectorAll(".main-input-license-area>input");
  let isTrue = false;

  input.forEach(input => {
    if (input.value.trim() != '') {
      isTrue = true;
    }
  });
  return isTrue;

}

// 경력 입력 여부
function checkCareer() {
  const input = document.querySelectorAll(".main-input-career-area>input");
  let isTrue = false;

  input.forEach(input => {
    if (input.value.trim() != '') {
      isTrue = true;
    }
  });
  return isTrue;
}

// 전문가 등록
submitBtn.addEventListener('click', () => {
  console.log(checkLicense.value);
  if (checkLicense() == "" && checkCareer() == "") {
    alert("자격증과 경력 중 적어도 하나는 작성되어야합니다.");
  } else {
    alert("등록이 완료되었습니다.");
    location.href = "./../../../app/admin/member/admin-expert-access-list.html";
  }
});

// 작성 취소
cancelBtn.addEventListener('click', () => {
  if (confirm("등록을 취소하시겠습니까?")) {
    alert("등록을 취소하셨습니다.");
    location.href = "./../../../app/admin/member/admin-expert-list.html";
  }
});
