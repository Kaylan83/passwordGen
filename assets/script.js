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

  var changeAtr = document.getElementById("passLengthLabel");
   var userInput = document.getElementById("passwordLength");
  
  passLength = parseInt(userInput.value);
  
    if (passLength < 8 || passLength >128 ) {
     
      changeAtr.setAttribute("style", "color: red");
                  
    } else if (isNaN(passLength)) {
      changeAtr.textContent=("Please enter a Numerical value between 8 and 128")
      changeAtr.setAttribute("style", "color: red");
      
    } else {
      changeAtr.textContent=("Please enter your desired password length between 8 and 128:")
      changeAtr.setAttribute("style", "color: black")
      return passLength;
    }
  
}

function askUser(userChoice) {
 
   var checkBox = document.getElementById(userChoice);
  if (checkBox.checked == true){
    return  true;
  } else {
    return false;
  }
}

function generatePassword() {
  checkLength();
  console.log(passLength);

  lowerCheck = askUser("lowerCase");
  console.log(lowerCheck);
  upperCheck = askUser("upperCase");
  console.log(upperCheck);
  numberCheck = askUser("numbers");
  console.log(numberCheck);
  specialCheck = askUser("specialChar");
  console.log(specialCheck);
  var characters="";
  var password="";
  var changeAtr = document.getElementById("characterTypes");

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

  }  

    for ( var i = 0; i < passLength; i++) {
     
      password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    if (characters.length > 0){
      changeAtr.textContent = ("Please select the characters you want to include in your password:");
      changeAtr.setAttribute("style", "color: black");
    }  else {
      console.log(characters.length)
      changeAtr.textContent=("please choose at least one type of characters to create your password:")
      changeAtr.setAttribute("style", "color: red");

    }  
      return password;

  }

  function resetForm() {
    document.getElementById("passForm").reset();
  }

  function resetTitles (){
    
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (passLength < 8 || passLength >128 || isNaN(passLength)){
  
  resetForm();
  
  }else {
    passwordText.value = "Your Secured Password is:  " + password;
    resetForm();
  }
} 

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
