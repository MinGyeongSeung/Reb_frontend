const emailList = document.querySelector(".select-email");
const emailInput = document.querySelector(".input-email-end");

let id = document.querySelector("input[name='id']");
let pw = document.querySelector("input[name='pw']");
let birth = document.querySelector("input[name='birth']");
let addressBasic = document.querySelector("input[name='addressBasic']");
let addressAdd = document.querySelector("input[name='addressAdd']");
let name = document.querySelector("input[name='name']");
let nickName = document.querySelector("input[name='nickName']");

const buttonBasic = document.querySelector("button-basic");

emailList.addEventListener('change', (e) => {
    if (e.target.value != "choose") {
        emailInput.value = e.target.value
        emailInput.disabled = true
    } else {
        emailInput.value = ""
        emailInput.disabled = false
    }
})


// id.addEventListener('blur',(e)=>{
//     if(e.target.value===''){
        
//     }
// });