document.getElementById("main-form").addEventListener("submit", checkForm);

function checkForm(event) {
  event.preventDefault();
  let el = document.getElementById("main-form");

  let name = el.name.value;
  console.log("Name: " + name);
  let pass = el.pass.value;
  console.log("Password: " + pass);
  let repass = el.repass.value;
  console.log("Password check: " + repass);
  let state = el.state.value;
  console.log("Password: " + state);

  let fail = "";

  if (name == "" || pass == "" || state == "") {
    fail = "Fill in all the fields!";
  } else if (name.length <= 1 || name.length > 50) {
    fail = "Error name";
  } else if (pass != repass) {
    fail = "Passwords must be the same";
  } else if (pass.split("&").length > 1) {
    fail = "Incorrect password";
  }

  if (fail != "") {
    document.getElementById("error").innerHTML = fail;
  } else {
    alert("Data sent");
    window.location = "portfolio-devx.netlify.app";
  }
}
