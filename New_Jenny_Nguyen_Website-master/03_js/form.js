.prettierignore

document.querySelector("#submit").addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  console.log("wow");
}

let data = {};
let submitErrors = {};

data.firstName = document.querySelector("#first_name").value;
data.lasttName = document.querySelector("#last_name").value;
data.email = document.querySelector("#email").value;
data.message = document.querySelector("#message").value;

/* checking if everything is inputed */

!data.firstName? submitErrors.firstName : console.info("First name: ", data.firstName);
!data.lastName? submitErrors.lastName : console.info("Last name: ", data.lastName);

/* email check */
  if (!data.email) {
    validationErrors.email
  } else {
    console.info("Email: ", data.email);
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // Test if email is an email
    if (!emailRegex.test(data.email)) {
      //email is not a match
      validationErrors.email
      console.error("Email is not valid");
    } else {
      console.info("Email is valid");
    }
  }
