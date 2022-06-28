// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // // Arrays of Possible Character Choices
  var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
  var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numeric = ["0123456789"];
  var specialc = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
  var characters=""


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
  

  var password = ""

  while (numberofcharacters < 8 || numberofcharacters > 128) {
    numberofcharacters = Number(prompt("Choose  Password  8 to 128"))
  }
  for (let i = 0; i < generatePassword; i++) {
    var index = Math.floor(Math.random() * generatePassword.length)
    password +=  characters[i]


  }
  return password

}
}


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



