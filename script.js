// Assignment code here
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*_+-=";
var range = (9,128);
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generatePassword;
function generatePassword() {
for (var i=0; i<=range; i++) {
    var randomNumber= Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
}
  
document.getElementById("password").value = password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) ;
function Reset(){
  document.querySelector("Reset").Reset
}
