// singUp function
const logIn = document.getElementById("loginBtn1");
const signUpBtn = document.getElementById("Singup");
const openPpup = document.getElementById("pp");
const loader = document.getElementById("loader");

// preloader
window.addEventListener("load", function () {
  loader.style.display = "none";
});

logIn.addEventListener("click", function name(params) {
  let bal = document.getElementById("email-1").value;
  let chal = document.getElementById("password-1").value;

  let i = localStorage.getItem("Email");
  let j = localStorage.getItem("Password");

  if (bal == i && chal == j) {
    // Redirect to the desired URL
    // window.location.href = "home.html";
    window.open("http://127.0.0.1:5500/home.html", "_blank");
  } else {
    alert("email and pass incorrect");
  }
});

signUpBtn.addEventListener("click", function () {
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let setEml = document.getElementById("setEml").value;
  let setPass = document.getElementById("setPass").value;
  let i = document.getElementById("pp");
  let okBtns = document.querySelector(".ok");

  localStorage.setItem("FirstName", fName);
  localStorage.setItem("LastName", lName);
  localStorage.setItem("Email", setEml);
  localStorage.setItem("Password", setPass);

  i.classList.add("pp-open");
  okBtns.addEventListener("click", function name(params) {
    i.classList.remove("pp-open");
  })

});