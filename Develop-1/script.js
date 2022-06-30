

// Assignment code here
function generatePassword(password) {
// creting arrays
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var specialc = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var character=""

while(character === ""){ 
  //true and false confirms
  if (confirm("Would you like to use LowerCase characters?"))
   character+= lowerCase;}
if (!lowerCase){alert("You must chose at least one")};
 
  if (confirm("Would you like to use UpperCase characters?")){
    character += upperCase; };
  if(!upperCase){ alert("You must chose at least one")}



 if(confirm("Would you like to see more numbers in your password?"));{
    character += numeric;};
    if(!numericConfirm){ alert("You must chose at least one")}


    
 if( confirm("would you like to add some special characters?")) {
    character += specialc;};
    if (!specialcConfirm){alert("You must chose at least one")}
  
  
  }

  var passwordS= ""
  var numberofcharacters=0

  while(numberofcharacters<8 || numberofcharacters>128){
    numberofcharacters=Number(parseInt(prompt("number of characters? Choose between 8 to 128!")))
  }
  for (let i=0; i<numberofcharacters; i++){
    var index =Math.floor(Math.random()*character.length)
    passwordS += character[index]

  return password;

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