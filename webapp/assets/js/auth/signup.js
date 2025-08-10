const emailList = document.querySelector(".select-email");
const emailInput = document.querySelector(".input-email-end");

let dupliButton = document.querySelector(".button-no-duplication"); 
let noDupliP = document.querySelector(".p-no-duplication");
let dupliP = document.querySelector(".p-duplication");
let id = document.querySelector("input[name='id']");
let pw = document.querySelector("input[name='pw']");
let birth = document.querySelector("input[name='birth']");
let addressBasic = document.querySelector("input[name='addressBasic']");
let addressAdd = document.querySelector("input[name='addressAdd']");
let userName = document.querySelector("input[name='name']");
let nickName = document.querySelector("input[name='nickName']");
let gender = document.querySelector("input[name='gender']")
let phoneNumber = document.querySelector("input[name='phoneNumber']");
const buttonSignUp = document.querySelector(".button-signup");
const idRegex = /^[a-z0-9]{5,19}$/;
const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$])[A-Za-z\d!@#$]{8,20}$/;



emailList.addEventListener('change', (e) => {
    if (e.target.value != "choose") {
        emailInput.value = e.target.value
        emailInput.disabled = true
    } else {
        emailInput.value = ""
        emailInput.disabled = false
    }
})


id.addEventListener('blur',()=>{
    let nearWarning = id.closest(".div-signup");
    let warning = nearWarning.querySelector(".p-warning");
    if(!idRegex.test(id.value)){
        warning.style.display = "block";
    }
    else{
        warning.style.display = "none";
    }
});
pw.addEventListener('blur',()=>{
    let nearWarning = pw.closest(".div-signup");
    let warning = nearWarning.querySelector(".p-warning");
    if(!pwRegex.test(pw.value)){
        warning.style.display = "block";
    }
    else{
        warning.style.display = "none";
    }
});
birth.addEventListener('blur',()=>{
    let nearWarning = birth.closest(".div-signup");
    let warning = nearWarning.querySelector(".p-warning");
    if(!birth.value){
        warning.style.display = "block";
    }
    else{
        warning.style.display = "none";
    }
});
addressBasic.addEventListener('blur',()=>{
    let nearWarning = addressBasic.closest(".div-signup");
    let warning = nearWarning.querySelector(".p-warning");
    if(!addressBasic.value){
        warning.style.display = "block";
    }
    else{
        warning.style.display = "none";
    }
});

userName.addEventListener('blur',()=>{
    let nearWarning = userName.closest(".div-signup");
    let warning = nearWarning.querySelector(".p-warning");
    if(!userName.value){
        warning.style.display = "block";
    }
    else{
        warning.style.display = "none";
    }
});

gender.addEventListener('blur',()=>{
    let nearWarning = gender.closest(".div-signup");
    let warning = nearWarning.querySelector(".p-warning");
    if(!gender.value){
        warning.style.display = "block";
    }
    else{
        warning.style.display = "none";
    }
});

nickName.addEventListener('blur',()=>{
    let nearWarning = nickName.closest(".div-signup");
    let warning = nearWarning.querySelector(".p-warning");
    if(!nickName.value){
        warning.style.display = "block";
    }
    else{
        warning.style.display = "none";
    }
});

phoneNumber.addEventListener('blur',()=>{
    let nearWarning = phoneNumber.closest(".div-signup");
    let warning = nearWarning.querySelector(".p-warning");
    if(!phoneNumber.value){
        warning.style.display = "block";
    }
    else{
        warning.style.display = "none";
    }
});

buttonSignUp.addEventListener('click',(e)=>{
    let warnings = document.querySelectorAll(".p-warning");
    let check = true;
    for(let i=0;i<warnings.length;i++){
        if(warnings[i].style.display === "block"){
            check = false;
        }        
    }
    if(check === false){
        alert("필수 입력 확인해주세요");
         e.preventDefault();
    }
});

dupliButton.addEventListener('click',()=>{
    if(nickName.value === '가나다'){
        noDupliP.style.display = 'none';
        dupliP.style.display = 'block';
    }
    else{
        noDupliP.style.display = 'block';
        dupliP.style.display = 'none';
    }
});