// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  // lowercase, uppercase, numbers, and special characters
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var specialChar = ['~', '`', '!', '@', '#', '$', '%', '^', '&','*','(', ')', '=', '+', '?', '/', ':', ';', '<', '>', '-', ',']

// validate and get input
charNum = prompt ("How many characters do you want in your password?  Please choose between 8-128.");
  if (charNum < 9 || charNum > 128) {
      return "Please choose a number of characters.";
  } else if (isNaN(charNum)) {
      charNum = prompt ("Please enter a valid number.");
  }
  else {
    alert ("Your password will be " + charNum + " characters long.")
  }
  
  
  
  
  console.log ("Button was Clicked")

    // 1. Prompt User for password criteria
        // a. password length 8 < 128
        
    // 2. Validate the input
    // 3. Generate password
    
    
    
    
    // 4. Display the validated password on page
  return "Password Will Go Here"

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
