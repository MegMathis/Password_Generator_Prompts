// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // numbers, lowercase, uppercase, and special characters
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var specialChar = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "=",
    "+",
    "?",
    "/",
    ":",
    ";",
    "<",
    ">",
    "-",
    ",",
  ];
  var possibleCharacters = [];

  // 1. Prompt User for password criteria
  // a. password length 8 < 128
  var charNum = prompt(
    "How many characters do you want in your password?  Please choose between 8-128."
  );
  if (charNum < 8 || charNum > 128) {
    return "Please choose a number of characters.";
  } else if (isNaN(charNum)) {
    charNum = prompt("Please enter a valid number.");
  } else {
    alert("Your password will be " + charNum + " characters long.");
  }

  // validate and get input
  var containsLowerCase = confirm("Do you want lower case letters?");
  if (containsLowerCase) {
    alert("Your password will have lower case letters.");
    possibleCharacters = possibleCharacters.concat(lowerCase);
  } else {
    alert("Your password will NOT have lower case letters");
  }

  var containsUpperCase = confirm("Do you want upper case letters?");
  if (containsUpperCase) {
    alert("Your password will have upper case letters.");
    possibleCharacters = possibleCharacters.concat(upperCase);
  } else {
    alert("Your password will NOT have upper case letters.");
  }

  var containsNum = confirm("Do you want numbers?");
  if (containsNum) {
    alert("Your password will have numbers.");
    possibleCharacters = possibleCharacters.concat(nums);
  } else {
    alert("Your password will NOT have numbers.");
  }

  var containsSpecialChar = confirm("Do you want special characters?");
  if (containsSpecialChar) {
    alert("Your password will have special characters");
    possibleCharacters = possibleCharacters.concat(specialChar);
  } else {
    alert("Your password will NOT have special characters.");
  }

  if (
    containsLowerCase === false &&
    containsUpperCase === false &&
    containsNum === false &&
    containsSpecialChar === false
  ) {
    alert("Please choose at least one character type.");
  }

  // console.log(possibleCharacters);

  // pick random for length
  let finishedPassword = "";
  for (let i = 0; i < charNum; i++) {
    let randomNumberGenerator = [
      Math.floor(Math.random() * possibleCharacters.length),
    ];
    finishedPassword =
      finishedPassword + possibleCharacters[randomNumberGenerator];
  }

  return finishedPassword;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
