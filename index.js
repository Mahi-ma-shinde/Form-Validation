let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let showPasswordBtn = document.querySelector(".btn");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessage = document.querySelectorAll(".empty-field");

let fnFlag, lnFlag, eFlag, pFlag;
let firstName, lastName, email, password;
let fnTarget, lnTarget, emailTarget, pwdTarget;
let field;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}
for(let emptyField of emptyFieldMessage){
    emptyField.classList.add("d-none");
}


formData.addEventListener("keyup", (e) => {
    e.preventDefault();
    field = e.target.dataset.key;
    switch(field){
        case "firstName":
            firstName = e.target.value;
            fnTarget = e.target;
            break;
        case "lastName":
            lastName = e.target.value;
            lnTarget = e.target;
            break;
        case "email":
            email = e.target.value;
            emailTarget = e.target;
            break;
        case "password":
            password = e.target.value;
            pwdTarget = e.target;
            break;
        default:
            firstName = lastName = email = password = "";
            break;
    }
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(fnTarget, lnTarget, emailTarget, pwdTarget);
    if(firstName){
        emptyFieldMessage[0].classList.add("d-none");
        if(!nameRegex.test(firstName)){
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
            fnFlag = false;
        }else{
            errorMessages[0].classList.add("d-none");
            fnTarget.classList.remove("error");
            fnFlag = true;
        }
    }else{
        emptyFieldMessage[0].classList.remove("d-none");
    }


    if(lastName){
        emptyFieldMessage[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
            lnTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none");
            lnFlag = false;
        }else{
            errorMessages[1].classList.add("d-none");
            lnTarget.classList.remove("error");
            lnFlag = true;
        }
    }else{
        emptyFieldMessage[1].classList.remove("d-none");
    }


    if(email){
        emptyFieldMessage[2].classList.add("d-none");
        if(!emailRegex.test(email)){
            emailTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none");
            eFlag = false;
        }else{
            errorMessages[2].classList.add("d-none");
            emailTarget.classList.remove("error");
            eFlag = true;
        }
    }else{
        emptyFieldMessage[2].classList.remove("d-none");
    }


    if(password){
        emptyFieldMessage[3].classList.add("d-none");
        if(!pwdRegex.test(password)){
            pwdTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none");
            pFlag = false;
        }else{
            errorMessages[3].classList.add("d-none");
            pwdTarget.classList.remove("error");
            pFlag = true;
        }
    }else{
        emptyFieldMessage[3].classList.remove("d-none");
    }

    if(fnFlag && lnFlag && eFlag && pFlag){
        fnTarget.value = lnTarget.value =   emailTarget.value = pwdTarget.value = "";
        window.location.href = "success.html";
    }
});

showPasswordBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (pwdTarget.getAttribute("type") === "text"){
     pwdTarget.setAttribute("type", "password");
    }else{
     pwdTarget.setAttribute("type", "text");
    }
});

