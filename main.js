const submitEmail = document.getElementById("submitEmail");
const userEmail = document.getElementById("userEmail");
const warningSVG = document.getElementById("warning");
const warningMsg = document.getElementById("warning-message");

submitEmail.addEventListener("click", () => {
    email();
});

userEmail.addEventListener("keyup", (e) => {
    if(e.keyCode === 13){
        email();
    }
});

function email(){
    if (userEmail.value !== "" && validateEmail(userEmail)) {
        userEmail.value = "";
        userEmail.placeholder = "Thanks, see you soon!";
        if (!warningSVG.classList.contains("hidden")) {
            toggleHidden();
        }
      } else {
        if (warningSVG.classList.contains("hidden")) {
          toggleHidden();
        }
      }
}

function validateEmail(el) {
  let validationString = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validationString.test(el.value.toLowerCase());
}

function toggleHidden(){
    warningSVG.classList.toggle("hidden");
    warningMsg.classList.toggle("hidden");
}