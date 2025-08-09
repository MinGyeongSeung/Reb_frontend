function loadFile(e){
    const inputExpireFile = document.querySelector('#input-expert-file');

    fileName = e.target.files[0].name;
    file = e.target.files[0];
    
    inputExpireFile.value = fileName;
}

let fileName;
let file;

function saveFile(){
    closeModal();
}