var myButton = document.getElementById("check_button");

myButton.addEventListener("click", function () {
  var userInput = document.getElementById("input_text").value.trim();
  var userPassword = document.getElementById("password_text").value.trim();
  var regex = /^(?![0-9])(?=.*[A-Z])(.{8,})$/;

  if (
    userInput.length === 0 ||
    userPassword.length === 0 ||
    regex.test(userPassword) === false
  ) {
    window.alert("Bạn nhập sai .");
  } else {
    window.alert("Bạn nhập đúng .");
  }
});
