document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm()) {
    alert("Form is valid!");
  } else {
    alert("Form is not valid!");
  }
});

function validateForm() {
  var accountType = document.querySelector('input[name="type"]:checked').value;
  var vat = document.getElementById("vat").value;
  var pin = document.getElementById("pin").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var acceptTerms = document.getElementById("accept_terms").checked;
  var acceptPrivacy = document.getElementById("accept_privacy").checked;

  if (accountType === "company" && vat === "") {
    document.getElementById("vat").classList.add("error");
    var vatFlag = false;
    //   return false;
    const errorMessage = document.createElement("span");
    errorMessage.innerHTML = "VAT number is required for company accounts.";
    document.getElementById("vatDiv").appendChild(errorMessage);
  }

  if (accountType === "individual" && pin === "") {
    document.getElementById("pin").classList.add("error");
    var pinFlag = false;
    //   return false;
    const errorMessage = document.createElement("span");
    errorMessage.innerHTML = "PIN is required for individual accounts.";
    document.getElementById("pinDiv").appendChild(errorMessage);
  }

  if (email === "") {
    document.getElementById("email").classList.add("error");
    var emailFlag = false;
    //   return false;
    const errorMessage = document.createElement("span");
    errorMessage.innerHTML = "Email is required.";
    document.getElementById("emailDiv").appendChild(errorMessage);
  }

  const phoneRegex = /^\+44 ?\(\d{2,3}\) ?\d{4} ?\d{4}$/;
  if (phone === "" || !phoneRegex.test(phone)) {
    document.getElementById("phone").classList.add("error");
    var phoneFlag = false;
    //   return false;
    const errorMessage = document.createElement("span");
    errorMessage.innerHTML =
      "Phone number is required and must be in the format: +44 (xx) xxxx xxxx.";
    document.getElementById("phoneDiv").appendChild(errorMessage);
  }

  if (!acceptTerms || !acceptPrivacy) {
    var termsPrivacyFlag = false;
    //   return false;
    const errorMessage = document.createElement("span");
    errorMessage.innerHTML =
      "You must accept the Terms and Conditions and Privacy Policy.";
    document.getElementById("conditionsDiv").appendChild(errorMessage);
  }

  if (!vatFlag || !pinFlag || !emailFlag || !phoneFlag || !termsPrivacyFlag) {
    return false;
  } else {
    return true;
  }
}
