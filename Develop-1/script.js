// creting arrays
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numeric = ["0123456789"];
var specialc = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];


// Assignment code here
function generatePassword() {
  var password = "";
  var pwdCases = "";
1  //creates prombts
 let passwordLength = prompt("How many character would you like to use in your password? (min:8 ,max:128!)")

  if (passwordLength < 8) {
    window.alert("Password can not be less than 7 characters.");
  };

  if (passwordLength > 128) 
    {window.alert("Password can not be more than 128 characters.")
};




  
  //true and false confirms
  let lowerCaseConfirm = confirm("Would you like to use LowerCase characters?");
  if (lowerCaseConfirm) {
    pwdCases += lowerCase;
  } ;
let upperCaseConfirm= confirm("Would you like to use UpperCase characters?");
 if (upperCaseConfirm ){
  pwdCases=+upperCase;
 }else{
  }
  
  ;
let numericConfirm= confirm("Would you like to see more numbers in your password?");
if(numericConfirm){
  pwdCases+=numeric;
}else{
  }
  ;
let specialcConfirm= confirm("would you like to add some special characters?")
if (specialcConfirm){
  pwdCases=specialc;
}else{
  } 

  
return password
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