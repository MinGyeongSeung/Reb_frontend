const pwWarning = document.querySelector(".edit-info-pw-warning");

const pwFirstWarning = document.querySelector("#edit-info-pw-first-warning");
const pwReInputWarning = document.querySelector("#edit-info-pw-re-warning");

const pwFirstInput = document.querySelector("#input-password-first");
const pwReInput = document.querySelector("#input-password-re");

const nicknameInput = document.querySelector("#input-edit-info-nickname");
const nicknameAlert = document.querySelector("#possible-nickname-text");

const nicknameInputOriginalColor = nicknameInput.style.color;
const nicknameInputOriginalText = nicknameInput.placeholder;
const buttonEditNickname = document.querySelector("#button-edit-info-nickname");

pwFirstInput.addEventListener('change',
    () => {
        checkPassword();
        compareEqualPassword();
    }
)


pwReInput.addEventListener('change', compareEqualPassword);

function checkPassword() {
    if (pwFirstInput.value.length < 8) {
        pwFirstWarning.style.display = "inline";
    } else {
        pwReInputWarning.style.display = "none";
    }
}

function compareEqualPassword() {
    if (pwFirstInput.value === pwReInput.value) {
        pwReInputWarning.style.display = "none";
    }
    else if (pwReInput.value != "") {
        pwReInputWarning.style.display = "inline";
    }
}

const nicknamelist = ['보라도리', '보라돌이', '보라'];

buttonEditNickname.addEventListener('click', () => {
    if (nicknamelist.indexOf(nicknameInput.value) === -1) {
        nicknameAlert.style.display = "block";
    } else {
        nicknameAlert.style.display = "none";
        nicknameInput.value = "존재하는 닉네임입니다";
        nicknameInput.style.color = "red";
    }
}
);

nicknameInput.addEventListener('focus', () => {
    if (nicknameInput.style.color === "red") {
        nicknameInput.value = "";
        nicknameInput.style.color = nicknameInputOriginalColor;
    }
})

function editCompleteUserInfo() {
    if (confirm("개인정보를 수정하시겠습니까?")) {
        moveToPersonalInfo();
    }
}

function moveToPersonalInfo() {
    location.href = "personal-info.html";
    location.replace(link);
}

function cacelEditUserInfo() {
    if (confirm("정말 취소하시겠습니까?")) {
        moveToPersonalInfo();
    }
}

