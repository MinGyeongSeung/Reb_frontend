function loadImage(e){
    const inputProfilePic = document.querySelector('#input-profile-pic-file');

    imgFileName = e.target.files[0].name;
    imgFile = e.target.files[0];
    
    inputProfilePic.value = imgFileName;
}

let imgFileName;
let imgFile;

function saveImage(){
    const fReader = new FileReader();
    fReader.readAsDataURL(imgFile);

    fReader.onloadend = function(event){
        const profilePic = document.querySelector('#img-edit-profile-pic');

        const path = event.target.result;
        profilePic.src = path;
    }

    closeModal();
}