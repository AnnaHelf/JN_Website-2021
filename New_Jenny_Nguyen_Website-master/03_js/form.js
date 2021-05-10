document.querySelector("#submit").addEventListener("click", validateForm);

function validateForm(e) {
  e.preventDefault();
  console.log("message is on it's way !");

  // Input Data:
  let data = {};

  // Error Messages
  let validationErrors = {};

  // Create properties for data object
  data.firstName = document.querySelector("#first_name").value;
  data.lastName = document.querySelector("#last_name").value;
  data.email = document.querySelector("#email").value;
  data.message = document.querySelector("#message").value;

  console.log(data);

  // 1. Was the First Name inputed

  if (!data.firstName) {
    console.error("No first Name");
    validationErrors.firstName = "Please enter your first name";
  } else {
    console.info("First Name: ", data.firstName);
  }

  // 2. Was the Last Name inputed

  if (!data.lastName) {
    console.error("No last Name");
    validationErrors.lastName = "Please enter your last name";
  } else {
    console.info("Last Name: ", data.lastName);
  }

  // 3. Was the email inputed

  if (!data.email) {
    console.error("No email");
    validationErrors.email = "PLease enter your email address";
  } else {
    console.info("Email: ", data.email);
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(data.email)) {
      //email is not a match
      validationErrors.email =
        "Your email is not valid (example: example@example.com)";
      console.error("Email is not valid");
    } else {
      console.info("Email is valid");
    }
  }

  // 4. Does it have more than 10 characters.

  if (!data.message) {
    console.error("No Message");
    validationErrors.message = "No message provided";
  } else {
    console.info("Message: ", data.message);

    if (data.message.length < 10) {
      console.error("No enough characters (must be 10)");
      validationErrors.message = "The message is to short (must have 10 chars)";
    }
  }

  if (Object.keys(validationErrors).length > 0) {
    displayErrors(validationErrors);
  } else {
    console.log("sending data");
    document.querySelector(".contact_me").innerHTML =
      '<h1 class="message_sent" >Your message has been sent !</h1><br><a href="#">Close</a>';
  }
}

function displayErrors(validationErrors) {
  if (validationErrors.firstName) {
    const errorContainer = document.createElement("span");
    errorContainer.innerHTML = validationErrors.firstName;
    document.querySelector("#first_name").after(errorContainer);
  }

  if (validationErrors.lastName) {
    const errorContainer = document.createElement("span");
    errorContainer.innerHTML = validationErrors.lastName;
    document.querySelector("#last_name").after(errorContainer);
  }

  if (validationErrors.email) {
    const errorContainer = document.createElement("span");
    errorContainer.innerHTML = validationErrors.email;
    document.querySelector("#email").after(errorContainer);
  }

  if (validationErrors.message) {
    const errorContainer = document.createElement("span");
    errorContainer.innerHTML = validationErrors.message;
    document.querySelector("#message").after(errorContainer);
  }
}

document.querySelector("textarea").addEventListener("input", (e) => {
  if (!document.querySelector(".counterBox")) {
    const counterBox = document.createElement("span");
    counterBox.classList.add("counterBox");
    counterBox.innerHTML = e.target.textLength;
    e.target.after(counterBox);
  } else {
    document.querySelector(".counterBox").innerHTML = e.target.textLength;
  }
});
