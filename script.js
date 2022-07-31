var notifyBtn = document.getElementById("submitBtn");
var email = document.getElementById("emailAddressText");
var notifyContainer = document.getElementsByClassName("notify");
var errMessage = document.querySelector("main p[class='error']");

/* Click events */
/* notify button */
notifyBtn.addEventListener("click", function(){
    console.log("addEventListener invoked")
    checkMailFormat(email);
    
});

function checkMailFormat(textArea){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

    if(textArea.value.match(mailformat)){
        deleteInputError();
        alert("Subscribed, we will notify you soon.")
        if (alert) {
            textArea.value = "";
        }
    }
    else{
        console.log("empty email field");
        errMessage.classList.add("showErr");
        email.classList.add("errorBorder");
    }
    
}
/* input element */
email.addEventListener("click", function(){
deleteInputError()
})

function deleteInputError(){
    email.classList.remove("errorBorder");
    errMessage.classList.remove("showErr");
}