// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // // Arrays of Possible Character Choices
  characters = ""
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialc = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~"];


  while (characters === "") {
    if (window.confirm("Would you like to confirm lowercase characters?")) {
      characters += lowerCase
    }
    if (window.confirm("Would you like to confirm uppercase characters?")) {
      characters += upperCase
    }
    if (window.confirm("Would you like to add number?")) {
      characters += numeric
    }
    if (confirm("Would you like to use special characters?")) {
      characters += specialc
    }
  }


    var password = ""
    var numberofcharacters = 0
    while (numberofcharacters < 8 || numberofcharacters > 128) {
      numberofcharacters = Number(prompt("Choose  Password  8 to 128"))
    }
    for (let i = 0; i < numberofcharacters; i++) {
      var index = Math.floor(Math.random() * characters.length)
      password = + characters[index]
    
  }
  return password

}



// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



