
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
  //positives if 3 of them true
  else if (lowerConfirm && upperConfirm && numeric) {
    choices = lowerCase.concat(upperCase, numeric);
  } else if (lowerConfirm && upperConfirm && specialConfirm) {
    choices = lowerCase.concat(upperCase, specialc);
  } else if (lowerConfirm && numberConfirm && specialc) {
    choices = lowerCase.concat( numeric, specialc);
  } else if (upperConfirm && numeric && specialc) {
    choices = upperCase.concat( numeric, specialc);
  }

  //if 2 of them true

  else if (lowerConfirm && numberConfirm) {
    choices =lowerCase.concat(numeric);
}
else if (lowerConfirm&&specialConfirm){
  choices=lowerCase.concat(specialc);
}
else if (lowerConfirm&&upperConfirm){
  choices=lowerCase.concat(upperCase);
}
else if( specialConfirm&&numberConfirm){
  choices=specialc.concat(numeric)
}
else if(specialConfirm&&upperConfirm){
  choices=specialc.concat}
  else if(upperConfirm&&numberConfirm){
    choices=upperCase.concat(numeric)
  }
  //if 1 of them true
  else if(lowerConfirm){
    choices=lowerCase
  }
  else if(upperConfirm){
    choices=upperCase
  }
  else if(numberConfirm){
    choices=numeric
  }
  else if(specialConfirm){
    choices=specialc
  }


  // using one character each time
password=[];

  for (let i = 0; i < numberofcharacters; i++) {
    totalchoices = choices[Math.floor(Math.random() * choices.length)];
    password.push (totalchoices);

    var strpsw= password.join("");

    return generatePassword
   

  }
}





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