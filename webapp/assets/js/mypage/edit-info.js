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

const buttonUpdatePhoneNumber = document.querySelector("#button-update-phone-number");
const inputEditInfoPhoneNumber = document.querySelector("#input-edit-info-phone-number");

const buttonSendVerificationCode = document.querySelector("#button-send-verification-code");

const buttonCheckVerificationCode = document.querySelector("#button-check-verification-code");

const inputVerificationCode = document.querySelector("#input-verification-code");
let verificatioCode = "123456";

const buttonSearchAddress = document.querySelector("#button-search-address");
const editInfoAddressText = document.querySelector("#edit-info-address-text");
const buttonColor = "#f59d85";
const buttonDisabledColor = "#797979ff";

inputVerificationCode.addEventListener('focus',
    () => {
        inputVerificationCode.value = "";
        inputVerificationCode.style.color = "black";
    }
);

pwFirstInput.addEventListener('change',
    () => {
        checkPassword();
        compareEqualPassword();
    }
);

buttonSearchAddress.addEventListener('click', () => {
    editInfoAddressText.innerHTML = prompt("(API 대체 예정)주소 입력");
});

buttonUpdatePhoneNumber.addEventListener('click', () => {
    inputEditInfoPhoneNumber.removeAttribute("disabled");

    buttonUpdatePhoneNumber.removeAttribute("disabled");
    buttonUpdatePhoneNumber.style.backgroundColor = buttonColor;

    inputVerificationCode.setAttribute("disabled", true);

    buttonSendVerificationCode.removeAttribute("disabled");
    buttonSendVerificationCode.style.backgroundColor = buttonColor;

    buttonCheckVerificationCode.removeAttribute("disabled");
    buttonCheckVerificationCode.style.backgroundColor = buttonColor;
});

buttonSendVerificationCode.addEventListener('click', () => {
    inputEditInfoPhoneNumber.setAttribute("disabled", true);
    inputVerificationCode.removeAttribute("disabled");

    buttonSendVerificationCode.setAttribute("disabled", true);
    buttonSendVerificationCode.style.backgroundColor = buttonDisabledColor;

    alert("인증 번호를 전송하였습니다.");
});

buttonCheckVerificationCode.addEventListener('click', () => {
    if (verificatioCode === inputVerificationCode.value) {
        buttonCheckVerificationCode.setAttribute("disabled", true);
        buttonCheckVerificationCode.style.backgroundColor = buttonDisabledColor;

        inputVerificationCode.setAttribute("disabled", true);
        buttonSendVerificationCode.setAttribute("disabled", true);
        buttonSendVerificationCode.style.backgroundColor = buttonDisabledColor;
        alert("전화번호 변경을 성공하였습니다.");
    } else {
        inputVerificationCode.value = "발송한 인증번호와 다른 입력";
        inputVerificationCode.style.color = "red";
    }
});

pwReInput.addEventListener('change', compareEqualPassword);

function checkPassword() {
    if (pwFirstInput.value.length < 8) {
        pwFirstWarning.style.display = "inline";
    } else {
        pwFirstWarning.style.display = "none";
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

nicknameInput.addEventListener('input', () => {
    nicknameAlert.style.display = "none";
})

function checkAllInfo(){
    //필수 입력 값 확인
    return true;
}

function editCompleteUserInfo() {
    if(!checkAllInfo()){
        alert("모든 정보를 입력해주시길 바랍니다.");
        return;
    }

    if (confirm("개인정보를 수정하시겠습니까?")) {
        moveToPersonalInfo();
    }
}

function moveToPersonalInfo() {
    location.href = "personal-info.html";
}

function cacelEditUserInfo() {
    if (confirm("수정하신 내용이 사라집니다.\n정말 취소하시겠습니까?")) {
        moveToPersonalInfo();
    }
}

