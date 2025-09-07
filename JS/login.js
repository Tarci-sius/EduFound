const emailInput = document.getElementById("email");
const pwdInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

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

