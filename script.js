console.log("wela");
let     pswSet = false; 
const   confirmPassword = document.getElementById("password_confirm");
const   password = document.getElementById("password");

password.addEventListener("input",(e) => { 
    if(e.target.value == "" || e.target.value == null || e.target.value == undefined)
        confirmPassword.setAttribute("pattern","");
    else{
        if(password.validity.valid){
            console.log("password valida: " + e.target.value);
            confirmPassword.pattern = formatRegex(e.target.value);
            console.log(formatRegex(e.target.value));
        }
    }
});

function formatRegex(input){
    return input.replaceAll("$", "\\$").replaceAll("^","\\^");
}
