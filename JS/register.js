const registerBtn = document.getElementById("regBtn");
const fNameInp = document.getElementById("fName");
const emailInp = document.getElementById("email");
const phoneInp = document.getElementById("pNumber");
const pwdInp = document.getElementById("password");
const pwdInp2 = document.getElementById("password2");
const form = document.getElementById("form");



form.addEventListener("click", (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const validateInputs = () => {
    const fNameValue = fNameInp.value.trim();
    const emailValue = emailInp.value.trim();
    const phoneValue = phoneInp.value.trim();
    const passwordValue = pwdInp.value.trim();
    const passwordValue2 = pwdInp2.value.trim();

    if(fNameValue === ""){
        setError(fNameInp, "Full name is required")
    }else{
        setSuccess(fNameInp)
    }
     
    if(emailValue === ""){
        setError(email, "Email is required.");
    }else if(!isValidEmail(emailValue)){
        setError(email, "Provide a valid email address.");
    }else{
        setSuccess(email);
    }

    if(passwordValue === ""){
        setError(pwdInp, "Password is required.");
    }else if(passwordValue.length < 8){
        setError(pwdInp, "Password must be at least 8 characters.")
    }else{
        setSuccess(pwdInp)
    }

    if(passwordValue2 === ""){
        setError(pwdInp2, "Please confirm password");
    }else if(passwordValue2 !== passwordValue){
        setError(pwdInp2, "Password doesn't match")
    }else{
        setSuccess(pwdInp2);
    }
}


const URL = "https://reqres.in/api/user/register"

registerBtn.addEventListener('click', function(event){
    event.preventDefault();

    const fNameVal = fNameInp.value.toLowerCase();
    const emailVal = emailInp.value.toLowerCase().trim();
    const phoneVal = phoneInp.value.toLowerCase().trim();
    const pwdVal = pwdInp.value.trim();
    const pwdVal2 = pwdInp2.value.trim();   

    async function registrationForm() {
    
    try{
        
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "reqres-free-v1",
            },
            body:JSON.stringify({
                'Full Name': fNameVal,
                Email: emailVal,
                'Phone Number': phoneVal,
                password: pwdVal,
                password2: pwdVal2,
            }),
          
        });   

        if(!response.ok){
            throw Error('Enter valid details')
        };
            console.log(response);
        const data = await response.json();
            console.log(data);
        
            // localStorage.setItem("token", data.token)

    //  window.location.href="/login.html";
    } catch(error){
        console.error('Invalid information')
    };
    
}registrationForm();

});


