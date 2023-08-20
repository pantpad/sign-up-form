console.log("wela");
let     pswSet = false; 
const   confirmPassword = document.getElementById("pswConfirm");
const   password = document.getElementById("password");
const   criteriaContainer = document.querySelectorAll('.criteria p');

const   criteriaList = [
    /\d/,        //8 chars
    /.{8,}/,        //1 uppercase letter
    /[A-Z]/,           //1 digit
    /[^a-zA-Z\d]/   //1 special character
]

password.addEventListener("input",(e) => { 
    if(e.target.value == "" || e.target.value == null || e.target.value == undefined)
        confirmPassword.setAttribute("pattern","");
    else{
        if(password.validity.valid){
            console.log("password valida: " + e.target.value);
            confirmPassword.pattern = formatRegex(e.target.value);
            console.log(formatRegex(e.target.value));
        }else{
            criteriaList.forEach((criteria,index) => {
                if(criteria.test(e.target.value)){
                    criteriaContainer[index].style.color = "green";
                }
            });
        }
    }
});

function formatRegex(input){
    return input.replaceAll("$", "\\$").replaceAll("^","\\^");
}
