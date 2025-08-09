const emailList = document.querySelector(".select-email");
const emailInput = document.querySelector(".input-email-end");

let id = document.querySelector("input[name='id']");
let pw = document.querySelector("input[name='pw']");
let birth = document.querySelector("input[name='birth']");
let addressBasic = document.querySelector("input[name='addressBasic']");
let addressAdd = document.querySelector("input[name='addressAdd']");
let name = document.querySelector("input[name='name']");
let nickName = document.querySelector("input[name='nickName']");

const buttonBasic = document.querySelector(".button-basic");

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