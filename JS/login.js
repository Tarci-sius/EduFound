const emailInput = document.getElementById("email");
const pwdInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
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
    const emailValue = emailInput.value.trim();
    const passwordValue = pwdInput.value.trim();
    

     
    if(emailValue === ""){
        setError(email, "Email is required.");
    }else if(!isValidEmail(emailValue)){
        setError(email, "Provide a valid email address.");
    }else{
        setSuccess(email);
    }

    if(passwordValue === ""){
        setError(pwdInput, "Password is required.");
    }else if(passwordValue.length < 8){
        setError(pwdInput, "Password must be at least 8 characters.")
    }else{
        setSuccess(pwdInput)
    }

}





const URL = "https://reqres.in/api/users/login"

loginBtn.addEventListener("click", function(e){
    e.preventDefault();

    const emailValue = emailInput.value.toLowerCase();
    const pwdValue = pwdInput.value.toLowerCase();

    async function loginForm() {
        try{
            const response = await fetch(URL, {
                 method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "reqres-free-v1",
            },
            body:JSON.stringify({
                
                Email: emailValue,
               
                password: pwdValue,
            }),
             })

             if(!response.ok){
                throw Error("wrong email and password");
                
             }
             
             const data = await response.json();
             console.log(data);
             localStorage.getItem("token", data.token);
             window.location.href="/dashboard.html";
        }catch(error){
            console.error('invalid email or password')
        }
    } loginForm();
})

