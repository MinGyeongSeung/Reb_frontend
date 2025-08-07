function editExpertFile() {

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