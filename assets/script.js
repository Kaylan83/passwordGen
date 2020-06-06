// Assignment Code
var generateBtn = document.querySelector("#generate");
var charArray = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!#$%&'()*+,-./:;<=>?@\[]^_`{|}~"]

var passLength;
var lowerCheck;
var upperCheck;
var numberCheck;
var specialCheck;

// a function to check the password length desired by the user
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

//a function to check if a checkbox was selected or not
function askUser(userChoice) {
 
   var checkBox = document.getElementById(userChoice);
  if (checkBox.checked == true){
    return  true;
  } else {
    return false;
  }
}
// a function with a set of conditions to see what the user want to include in the password and concat it to one string
function generatePassword() {
  checkLength();
  lowerCheck = askUser("lowerCase");
  upperCheck = askUser("upperCase");
  numberCheck = askUser("numbers");
  specialCheck = askUser("specialChar");
  console.log(specialCheck);
  var characters="";
  var password="";
  var changeAtr = document.getElementById("characterTypes");

  if (lowerCheck && upperCheck && numberCheck && specialCheck){
    characters += charArray[0] + charArray[1] + charArray[2] + charArray[3];
    
  
   } else if (upperCheck && numberCheck && specialCheck) {
    characters += charArray[1] + charArray[2] + charArray[3]; 
  
   } else if (lowerCheck  && numberCheck && specialCheck) {
     characters += charArray[0] + charArray[2] + charArray[3];
  
   }else if (lowerCheck && upperCheck && specialCheck) {
     characters += charArray[0] + charArray[1] + charArray[3];
  
   } else if (lowerCheck && upperCheck && numberCheck){
     characters += charArray[0] + charArray[1] + charArray[2];
  
   } else if (upperCheck && lowerCheck) {
    characters += charArray[0] + charArray[1];
 
  } else if (lowerCheck &&  numberCheck) {
     characters += charArray[0] + charArray[2];
    
   } else if (lowerCheck && specialCheck) {
     characters += charArray[0] + charArray[3];
    
   } else if (upperCheck && numberCheck) {
     characters += charArray[1] + charArray[2] ;
  
   } else if (upperCheck && specialCheck) {
     characters += charArray[1] + charArray[3];
  
   }  else if (numberCheck && specialCheck) {
     characters += charArray[2] + charArray[3];
    
  } else if (lowerCheck) {
    characters = charArray[0];

  } else if (upperCheck) {
    characters = charArray[1];

  } else if (numberCheck) {
    characters = charArray[2];

  } else if (specialCheck) {
    characters = charArray[3];

  } 
   
  
  if (characters.length > 0){
    changeAtr.textContent = ("Please select the characters you want to include in your password:");
    changeAtr.setAttribute("style", "color: black");
    
  }  else {
    
    changeAtr.textContent=("please choose at least one type of characters to create your password:")
    changeAtr.setAttribute("style", "color: red");

   }  

    for ( var i = 0; i < passLength; i++) {
     
      password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

      return password;
  }

  // a function to rest the form after the information entered
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
  
  }else if (password !==""){
    passwordText.value = "Your Secured Password is:  " + password;
    resetForm();
  }
} 

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
