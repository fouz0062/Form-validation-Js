let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let gender = document.getElementsByName("gender");
let dob = document.getElementById("dob");
let mail = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("CPassword");
let img = document.getElementById("avatar");
let send = document.getElementById("send");
let error = document.getElementById("Error");
//err
let fNameErr = document.getElementById("fnameError");
let lNameErr = document.getElementById("lnameError");
let genderErr = document.getElementById("genderError");
let dobErr = document.getElementById("bdayError");
let mailErr = document.getElementById("emailError");
let pwErr = document.getElementById("pwordError");
let confirmErr = document.getElementById("confirmError");

send.addEventListener("click", (e) => {
  //FirstName
  if (fName.value === "" || fName.value === null || fName.value.match(/\d/gi)) {
    fNameErr.innerHTML = "Please Fill Valid First Name";
  }
  //LastName
  if (lName.value === "" || lName.value === null || lName.value.match(/\d/gi)) {
    lNameErr.innerHTML = "Please Fill Valid Last Name";
  }
  //Gender
  let valid = false;
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) valid = true;
    break;
  }
  if (valid == false) {
    genderErr.innerHTML = "please select valid gender";
  }
  //Dob
  if (dob.value == "" || dob.value == null) {
    dobErr.innerHTML = "DOB is required";
  } else {
    let d = new Date();
    let a = new Date(dob.value);
    let monthDiff = Date.now() - a.getTime();
    let newDate = new Date(monthDiff);
    let newYear = newDate.getFullYear();
    var age = Math.abs(newYear - 1970);

    if (age < 18) {
      dobErr.innerHTML = "You Are Not Eligible";
    }
  }
  //email
  let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
  if (!mail.value.match(pattern)) {
    mailErr.innerHTML = "Enter Valid Email";
  }

  //passWord and confirm password
  if (password.value.length < 8) {
    pwErr.innerHTML = "Password Length Must Have Atlease 8 Characters";
  } else if (password.value.search(/[0-9]/g) === -1) {
    pwErr.innerHTML = "Password  Must Have Atlease 1 Number";
  } else if (password.value.search(/[a-z]/g) === -1) {
    pwErr.innerHTML = "Password  Must Have Atlease 1 Lower Case Letter";
  } else if (password.value.search(/[A-Z]/g) === -1) {
    pwErr.innerHTML = "Password  Must Have Atlease 1 upper Case Letter";
  } else if (
    password.value.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\.\,\;\:\'\"]/g) === -1
  ) {
    pwErr.innerHTML = "Password  Must Have Atlease 1 Special Character";
  }

  if (password.value !== confirmPassword.value) {
    confirmErr.innerHTML = "Password And Confirm Password are Not The Same";
  }
  e.preventDefault();
});
