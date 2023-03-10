// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  console.log ("Hey! You clicked the button")

    // 1. Prompt User for password criteria
        // a. password length 8 < 128
        // b. lowercase, uppercase, numbers, and special characters
    // 2. Validate the input
    // 3. Diplay the validated password on page



  return "Generated password will go here"

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
