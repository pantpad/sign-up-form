console.log("wela");
let     pswSet = false; 
const   confirmPassword = document.getElementById("pswConfirm");
const   password = document.getElementById("password");
const   criteriaContainer = document.querySelectorAll('.criteria p');
const   criteriaContainerArray = Array.from(criteriaContainer);
const   passwordMeter = document.getElementById("psw-strength");

const   criteriaList = [
    /\d/,           //1 digit
    /.{8,}/,        //8 chars
    /[A-Z]/,        //1 maiusc
    /[^a-zA-Z\d]/,  //1 special char
]

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

password.addEventListener('keyup',(e) => {
    criteriaList.forEach((criteria,index) => {
        if(criteria.test(e.target.value)){
            criteriaContainer[index].style.color = "green";
            criteriaContainer[index].previousElementSibling.classList = "fa-solid fa-check";
            criteriaContainer[index].previousElementSibling.style.color = "green";
        }else{
            criteriaContainer[index].style.color = "red";
            criteriaContainer[index].previousElementSibling.classList = "fa-solid fa-xmark";
            criteriaContainer[index].previousElementSibling.style.color = "red";
        }
    });
    passwordMeter.value = (countMatchedCriteria() * 25);
});

function formatRegex(input){
    return input.replaceAll("$", "\\$").replaceAll("^","\\^");
}

function countMatchedCriteria(){
    return criteriaContainerArray.filter(criteria => criteria.style.color == "green").length;
}
