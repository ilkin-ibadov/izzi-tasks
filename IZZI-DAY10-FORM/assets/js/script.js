const email = document.getElementById("email");
const password = document.getElementById("password");
const signIn = document.getElementById("signIn");
const inputs = document.getElementById("inputs");

signIn.addEventListener("click", () => {
  
  
  if (email.value.includes("@")) {
    
    var x = email.value;

    email.value = "";
    
  } else {
    const errorMsgEmail = document.createElement("span");
    errorMsgEmail.innerText = "Please enter a valid email";
    errorMsgEmail.setAttribute("id", "errorMsg");
    inputs.insertBefore(errorMsgEmail, email);
  }

  if (
    password.value.includes("@") ||
    password.value.includes("#") ||
    password.value.includes("$") ||
    password.value.includes("_")
  ) {
    var user = {
      correctEmail: x,
      correctPassword: password.value,
    };

    password.value = "";
    
  } else {
    const errorMsgPass = document.createElement("span");
    errorMsgPass.innerText =
      "Password must contain one of these symbols: @, #, $, &";
    errorMsgPass.setAttribute("id", "errorMsg");
    inputs.insertBefore(errorMsgPass, password);
  }

  console.log(user);
});
