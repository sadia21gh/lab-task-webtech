document.getElementById("checkBtn").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  // Get values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;
  const zip = document.getElementById("zipCode").value;
  const dob = document.getElementById("dob").value;
  const checkBox = document.getElementById("checkBox");

  // Get error elements
  const fullNameError = document.getElementById("fullNameError");
  const emailError = document.getElementById("emailError");
  const password1Error = document.getElementById("password1Error");
  const password2Error = document.getElementById("password2Error");
  const zipCodeError = document.getElementById("zipCodeError");
  const dobError = document.getElementById("dobError");
  const checkBoxError = document.getElementById("checkBoxError");

  // Clear all errors
  fullNameError.textContent = "";
  emailError.textContent = "";
  password1Error.textContent = "";
  password2Error.textContent = "";
  zipCodeError.textContent = "";
  dobError.textContent = "";
  checkBoxError.textContent = "";

  // Validation
  const specialCharPattern = /[^a-zA-Z0-9 .]/;
  const dotCount = (fullName.match(/\./g) || []).length;

  if (specialCharPattern.test(fullName)) {
    fullNameError.textContent = "Special character detected in full name!";
    return;
  }
  if (dotCount > 1) {
    fullNameError.textContent = "Full name cannot contain more than one dot.";
    return;
  }

  const emailPattern = /^\d{2}-\d{5}-\d@student\.aiub\.edu$/;
  if (!emailPattern.test(email)) {
    emailError.textContent =
      "Email must be in the format: xx-xxxxx-x@student.aiub.edu";
    return;
  }

  if (password1.length < 8) {
    password1Error.textContent = "Password must be at least 8 characters long.";
    return;
  }

  if (password1 !== password2) {
    password2Error.textContent = "Passwords do not match.";
    return;
  }

  if (zip.length < 4) {
    zipCodeError.textContent = "Zip code must be at least 4 characters long.";
    return;
  }

  if (!dob) {
    dobError.textContent = "Date of Birth is required.";
    return;
  }

  const dobDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - dobDate.getFullYear();
  const monthDiff = today.getMonth() - dobDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
    age--;
  }

  if (age < 18) {
    dobError.textContent = "You must be at least 18 years old.";
    return;
  }

  if (!checkBox.checked) {
    checkBoxError.textContent = "You must agree to the Terms and Conditions.";
    return;
  }

  alert("Form Submitted Successfully");
  document.querySelector("form").reset();
});
