// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // // Arrays of Possible Character Choices

  let values
   lowerCase = ["abcdefghijklmnopqrstuvwxyz"],
   upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
   numeric = ["0123456789"],
   specialc = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
   let password ="";


   for (var i =0; i<=complexity; i++){
    password=password + values.chartAt(Math.floor(Math.random()*Math.floor(value.length-1)));
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





// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



