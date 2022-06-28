function charset() {
  var numberA = (numberA => 8, numberA++ <= 128);
  var lowerCase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  var upperCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  var numeric = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  var specialch = ("!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~");

}
 var charset=  promptnumberA,confirmUpperCase,confirmLowerCase,confirmNumeric,confirmSpecialCh;
function promptnumberA() {
  var passwordText = prompt("Please enter character amount.(Min: 8 , Max: 128)");  
}
function confirmLowerCase() {
  var passwordText = window.confirm("Would you like to confirm lowercase characters?");

}
function confirmUpperCase(){
  var passwordText = window.confirm("Would you like to confirm uppercase characters?");
}
function confirmNumeric (){
  var passwordText = window.confirm("Would you like to add number?");   
}
function confirmSpecialCh () {
  var passwordText = window.confirm ( "Would you like to use special characters?")
  
}
promptnumberA();
confirmLowerCase();
confirmUpperCase();
confirmNumeric();
confirmSpecialCh();


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  function generatePassword() {
  
}

 

// Write password to the #password input
function writePassword() { 
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// passwordText = password=writePassword 