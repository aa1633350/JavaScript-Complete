const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validate();
});
const sendData = (usernameVal,sRate,count) =>{
    if(sRate === count){
        alert("Registration Successful " + usernameVal);
    }
    else{
        alert(usernameVal +" Registration Un-Successful");
    }
}

const SuccessMsg = (usernameVal) =>{
    let formcon = document.getElementsByClassName('form-control');
    // console.log(formcon.length);
    var count = formcon.length - 1;
    var sRate;
    for(var i = 0; i<formcon.length; i++){
        console.log(i);
        if(formcon[i].className === 'form-control success'){
            sRate = i;
        }
        else{
            sendData(usernameVal,sRate,count);
            return false;
        }
    }
    sendData(usernameVal,sRate,count);
}
const validate = () =>{
    // trim pehle aur baad ka white space delete kr deta hai 
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const mobileVal = mobile.value.trim();
    const passwordVal = password.value.trim();
    const confirm_passwordVal = confirm_password.value.trim();
    
    if (usernameVal === ""){
        setErrorMsg(username,'username cannot be blank');
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username,'username min 3 characters');
    }
    else{
        setSuccessMsg(username);
    }
    
    if (emailVal === ""){
        setErrorMsg(email,'email cannot be blank');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email,'Not a valid Email');
    }
    else{
        setSuccessMsg(email);
    }
    
    if (mobileVal === ""){
        setErrorMsg(mobile,'Mobile cannot be blank');
    }
    else if(mobileVal.length != 10){
        setErrorMsg(mobile,'Not a valid Number');
    }
    else{
        setSuccessMsg(mobile);
    }

    if (passwordVal === ""){
        setErrorMsg(password,'Password cannot be blank');
    }
    else if(passwordVal.length <= 5){
        setErrorMsg(password,'Min 6 characters required');
    }
    else{
        setSuccessMsg(password);
    }
    
    if (confirm_passwordVal === ""){
        setErrorMsg(confirm_password,'Password cannot be blank');
    }
    else if(confirm_passwordVal!=passwordVal){
        setErrorMsg(confirm_password,'Passwords do not match');
    }
    else{
        setSuccessMsg(confirm_password);
    }
    
    SuccessMsg(usernameVal);
}

const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol<1){
        return false;
    }
    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 2)
        return false;
    if(dot === emailVal.length - 1)
        return false;

    return true;
}


function setErrorMsg(input,errorMsg){
    const parent = input.parentElement;
    const small = parent.querySelector('small');
    parent.className = 'form-control error';  //agar error hai tho hum element ke parent (yani div) mai class add kr rahe hai
    small.innerText = errorMsg;
}

function setSuccessMsg(input){
    const parent = input.parentElement;
    parent.className = 'form-control success'
}