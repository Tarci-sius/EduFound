const registerBtn = document.getElementById("regBtn");
const fNameInp = document.getElementById("fName");
const emailInp = document.getElementById("email");
const phoneInp = document.getElementById("pNumber");
const pwdInp = document.getElementById("password");


const URL = "https://reqres.in/api/users/register"

registerBtn.addEventListener('click', function(event){
    event.preventDefault();

    const fNameVal = fNameInp.value.toLowerCase();
    const emailVal = emailInp.value.toLowerCase();
    const phoneVal = phoneInp.value.toLowerCase();
    const pwdVal = pwdInp.value;   

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
            }),
          
        });   

        if(!response.ok){
            throw Error('Enter valid details')
        };
    
        const data = await response.json();
    console.log(data);
        localStorage.setItem("token", data.token)

     window.location.href="/login.html";
    } catch(error){
        console.error('Invalid information')
    };
    
}registrationForm();



});


