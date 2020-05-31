// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var specialChar = "!#$%&'()*+,-./:;<=>?@\[]^_`{|}~";
var numbers ="0123456789";
var passLength;
var lowerCheck;
var upperCheck;
var numberCheck;
var specialCheck;


function checkLength() {
  var userInput = prompt("please Enter the desiered length between 8 and 128")
  passLength = parseInt(userInput);
  if (passLength <8 || passLength >128 || passLength === NaN){
    alert("please enter a passowrd length between 8 and 128");
    checkLength();
  } else if (isNaN(passLength)) {
     alert ("please enter numerical value between 8 and 128");
     checkLength();
  } else {
    return passLength;
  }
}

function askUser(userInput) {
   userInput = userInput.toLowerCase();
  if (userInput ==="y") {
    return check = true;
    
  } else if (userInput ==="n") {
    return check = false;
  } else {
    alert ("please enter y for Yes, or no for No");
    askUser();
  }

}

 function askLower() {
 var userInput = prompt("Do you want lowercase characters in your password. Please enter Y for yes or N for no");
 lowerCheck = askUser(userInput);

 }

 function askUpper() {
  var userInput = prompt("Do you want uppercase characters in your password. Please enter Y for yes or N for no");
  upperCheck = askUser(userInput);
 }

function askNumber() {
  var userInput = prompt("Do you want numbers in your password. Please enter Y for yes or N for no");
  numberCheck = askUser(userInput);
}
  function askSpecial() {
  var userInput = prompt("Do you want special characters in your password. Please enter Y for yes or N for no");
 specialCheck = askUser(userInput);

}


function generatePassword() {
  checkLength();
  console.log(passLength);
  askLower();
  console.log(lowerCheck);
  askUpper();
  console.log(upperCheck);
  askNumber();
  console.log(numberCheck);
  askSpecial();
  console.log(specialCheck);
  
 
  var characters="";
  var password="";

  if (lowerCheck && upperCheck && numberCheck && specialCheck){
    characters += upperCase + lowerCase + numbers + specialChar;
    
  
   } else if (upperCheck && numberCheck && specialCheck) {
    characters += upperCase + numbers + specialChar; 
  
   } else if (lowerCheck  && numberCheck && specialCheck) {
     characters += lowerCase + numbers + specialChar;
  
   }else if (lowerCheck && upperCheck && specialCheck) {
     characters += upperCase + lowerCase + specialChar;
  
   } else if (lowerCheck && upperCheck && numberCheck){
     characters += upperCase + lowerCase + numbers;
  
   } else if (lowerCheck &&  numberCheck) {
     characters += lowerCase + numbers;
    
   } else if (lowerCheck && specialCheck) {
     characters += lowerCase + specialChar;
    
   } else if (upperCheck && numberCheck) {
     characters += upperCase + numbers ;
  
   } else if (upperCheck && specialCheck) {
     characters += upperCase + specialChar;
  
   }  else if (upperCheck && lowerCheck) {
     characters += upperCase + lowerCase;
  
   } else if (numberCheck && specialCheck) {
     characters += numbers + specialChar;
    
  } else if (lowerCheck) {
    characters = lowerCase;
    
  } else if (upperCheck) {
    characters = upperCase;

  } else if (numberCheck) {
    characters = numbers;

  } else if (specialCheck) {
    characters = specialChar;

  }  else {
    alert ("please choose at least one type of characters to create your password")
    generatePassword();
  }

  
    for ( var i = 0; i < passLength; i++) {
     
      password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
      return password;
    
    
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  