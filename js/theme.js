

const email = document.getElementById('mail');
const checkbox = document.getElementById('trueCheckbox');
var errorMessage = document.getElementById('errorMessage');

function validationCheck(){
    
    if(email.value === ""){
        errorMessage.innerHTML = "Email address is required";
    }
    else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorMessage.innerHTML = "Please provide a valid e-mail address";
    }
    else if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][co]{2}$/)){
        errorMessage.innerHTML = "We are not accepting subscriptions from Colombia emails";
    } 
    else if(!checkbox.checked){
        errorMessage.innerHTML = "You must accept the terms and conditions";
    }
    else{
        return true;
    }
    email.style.borderColor = "rgba(184, 8, 8, 1)";
    return false;
};



function emailValidation(){

    if(errorMessage.textContent =='Email address is required' && !email.value == ''){
    }
    else if(errorMessage.textContent =='Please provide a valid e-mail address' && email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    }
    else if(errorMessage.textContent =='We are not accepting subscriptions from Colombia emails' && !email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][co]{2}$/)){
    }
    else{
        return;
    } 
    email.style.borderColor = "rgb(228, 227, 227)";
    email.style.borderLeftColor = "rgba(64, 102, 165, 1)";
    errorMessage.innerHTML = "";
};

function checkboxValidation(){
    if(errorMessage.textContent =='You must accept the terms and conditions'){
        email.style.borderColor = "rgb(228, 227, 227)";
        email.style.borderLeftColor = "rgba(64, 102, 165, 1)";
        errorMessage.innerHTML = "";
    }
};