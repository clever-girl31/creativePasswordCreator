// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var special = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '', ']', '^', '_', '`', '{', '|', '}', '~', '"', '']
  
  var input = []

  function getLength() {
    var pwlength = prompt("Please enter the number of characters you would like in your very creative new password.")             
      if (isNaN(pwlength) || pwlength < 8 || pwlength > 128) {
      alert("Wrong! Enter a numerical value between 8 and 128."),
      getLength()
    } else input.push(pwlength)
      UcYN()
    }

  getLength()

  function UcYN() {
    var wantUc = prompt("Do you want uppercase letters? Y/N")
    if (wantUc === 'Y' || wantUc === 'N' || wantUc === 'y' || wantUc === 'n') {
    console.log(wantUc)
    } else alert("Seriously, Y or N."), UcYN()
}
  // why is it triggering alert even if condistions are satisfied???

  // prompt --> do they want uppercase letters?
  // prompt --> do they want lowercase letters?
  // prompt --> do they want numbers?
  // prompt --> do they want special characters?
  // Validate that the user has chosen at least one character set --> if not, either have them start over or recursively call the function that prompts for the character sets.
  // With each prompt, need an Array of the options of character types.
    // There needs to be at least one of each selected character type included in the password
    // Randomly generate a character from each character set as it's chosen and asddd it tot the end of the password that you're building. [ .push() for an array or .concat() for a string ]
    // for loop;
      // for (var i = password.length - 1; i < passwordLength; i++)
    // EITHER keeps the character sets separate OR combine them to a mega-array to pull the rest of the characters from
      //  IF keeping the character sets separate, randomly generate a number to tell which array youre pulling from, then randomly genreate a number to pull the character fromthe array ( character will be array{number})
      // IF pushing to a mega-array, randomly generate a number to pull a character from the array
      // If pushing to a mega-array, remember to set the array bak to an empty array at the start of the process 
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
