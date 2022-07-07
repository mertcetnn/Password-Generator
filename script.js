
// Assignment code here

// creting arrays
allChars = [
  lowerCase = "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  upperCase = "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  numeric = 1, 2, 3, 4, 5, 6, 7, 8, 9,
  specialc = "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"

]
var choices;

window.onload = alert("Welcome! Please click 'Generate password' to start!");

var generatePassword = function () {
  //declare chars
  var allChars = [];
  var password = ""
  //adjsuting character number amount of password

  var numberofcharacters = 0
  while (numberofcharacters < 8 || numberofcharacters > 128) {
    numberofcharacters = Number(parseInt(prompt("How many characters? Choose between 8 to 128!")))

  }
  //true and false confirms
  var lowerConfirm = confirm("Would you like to use LowerCase characters?")
  var upperConfirm = confirm("Would you like to use UpperCase characters?")
  var numberConfirm = confirm("Would you like to see more numbers in your password?")
  var specialConfirm = confirm("would you like to add some special characters?")
  if (!lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {
    alert("At least you need to selecet at least one of them.")
    return generatePassword()
  }
  //posibilties
  //positives if 1 of them true
  else if (lowerConfirm && upperConfirm && numeric) {
    choices = lowerCase.concat(upperCase, numeric)
  } else if (lowerConfirm && upperConfirm && specialConfirm) {
    choices = lowerCase.concat(upperCase, specialc)
  } else if (lowerConfirm && numberConfirm && specialc) {
    choices = lowerCase.concat( numeric, specialc)
  } else if (upperConfirm && numeric && specialc) {
    choices = upperCase.concat( numeric, specialc)
  }

  //if 2 of them true

  else if (lowerConfirm && upperConfirm) {
    choices =

}





  // else if 1 one of them false
  else if (!lowerConfirm && upperConfirm && numberConfirm && specialConfirm) { //1
    choices = lowerCase.concat(upperCase, specialc, numberConfirm);
  }
  else if (!upperConfirm && lowerConfirm && numberConfirm && specialConfirm) {   //2
    choices = upperCase.concat(lowerCase, numeric, specialc);
  }
  else if (!numberConfirm && lowerConfirm && upperConfirm && specialConfirm) {//3
    choices = numeric.concat(lowerCase, upperCase, specialc);
  }
  else if (!specialConfirmz && lowerConfirm && upperConfirm && numberConfirm) {//4
    choices = specialc.concat(lowerCase, upperCase, numeric);
  }
  //else if 2 of them false
  else if (!lowerConfirm && !upperConfirm && numberConfirm && specialConfirm) {   //1-2
    choices = lowerCase, upperCase.concat(numeric, specialc);
  }
  else if (lowerConfirm && upperConfirm && !numberConfirm && !specialConfirm) {   //1-4
    choices = numeric, specialc.concat(lowerCase, upperCase);
  } else if (!lowerConfirm && upperConfirm && !numberConfirm && specialConfirm) {     //1-3
    choices = lowerCase, numeric.concat(upperCase, specialc);
  }
  else if (lowerConfirm && !upperConfirm && numberConfirm && !specialConfirm) { //2-4
    choices = upperCase, specialc.concat(lowerCase, numeric);
  }
  // else if 3 of them false

  else if (!lowerConfirm && !upperConfirm && !numberConfirm && specialConfirm) { // 1-2-3
    choices = lowerCase, upperCase, numberConfirm.concat(specialc);
  }
  else if (!lowerConfirm && !upperConfirm && numberConfirm && !specialConfirm) {//1-2-4
    choices = lowerCase, upperCase, specialc.concat();
  }
  else if (!lowerConfirm && upperConfirm && !numberConfirm && !specialConfirm) {//1-3-4
    choices = lowerCase, numeric, specialc.concat(upperCase);
  }
  else if (lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {//2-3-4
    choices = lowerCase.concat(upperCase, numeric, specialc);
  }
  else if (!lowerConfirm && !upperConfirm && numberConfirm && !specialConfirm) {//2-4-1
    choices = numberConfirm.concat(lowerCase, upperCase, specialc);
  }








  // using one character each time


  for (let i = 0; i < numberofcharacters; i++) {
    var index = Math.floor(Math.random() * allChars.length)
    password += allChars[random];

    return generatePassword


  }
}}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);