const expertStatusText = document.querySelector("#personal-info-expert-status");

if(expertStatusText.innerHTML === "반려"){
    expertStatusText.style.cursor = "pointer";
    expertStatusText.style.textDecoration = "underline";
    expertStatusText.addEventListener('click', ()=>{
        openModal("expertRejectionReason");
    })
}

function editUserInfo() {
    location.href = "edit-info.html";
    location.replace(link);
}

function deleteUserInfo() {
    if (confirm("정말 탈퇴하시겠습니까?")) {
        location.href = "account-deletion.html";
        location.replace(link);
    }
}