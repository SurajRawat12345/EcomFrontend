/* --------------- FOR LOGIN PAGE ---------------- */

const login = document.getElementById('Login');

login.onclick = () => {
    const email = document.getElementById('emailId');
    const pass = document.getElementById('Password');  
    const password = Number.parseInt(pass.value); 
    if(email.value === "admin@admin.com" && password === 123456){
        alert('Successful Login');
    }
    else{
        alert('Incorrect Email or Password');
    }
    
}
