// Assignment Code


var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '', ']', '^', '_', '`', '{', '|', '}', '~', '"', '']
var pwlength = []
var ingredients = []

var generateBtn = document.querySelector("#generate");


function generatePassword() {
  getLength()
  
  function getLength() {
    pwlength = prompt("Please enter the number of characters you would like in your very creative new password.")
    if (pwlength === null) {
      return
    }
    if (isNaN(pwlength) || pwlength < 8 || pwlength > 128) {
      alert("Enter a numerical value between 8 and 128.")
      getLength()
    } else UcYN()
  }
  
  function UcYN() {
    let wantUc = prompt("Do you want uppercase letters in your password?")
    if (wantUc ===null) {
      return
    }
    if (wantUc !== 'Y' && wantUc !== 'N' && wantUc !== 'y' && wantUc !== 'n') {
      alert("try again")
      UcYN()
    } 
    if (wantUc === 'N' || wantUc === 'n') {
      LcYN()
      return
    } else if (wantUc === 'Y' || wantUc ==='y') 
    ingredients.push(...uppercase)
    LcYN()
  }
  
  function LcYN() {
    let wantLc = prompt("Do you want lowercase letters in your password?")
    if (wantLc === null) {
      return
    }
    if (wantLc !== 'Y' && wantLc !== 'N' && wantLc !== 'y' && wantLc !== 'n') {
      alert("try again")
      LcYN()
    }
    if (wantLc === 'N' || wantLc === 'n') {
      numYN()
      return
    } else if (wantLc === 'Y' || wantLc === 'y')
    ingredients.push(...lowercase)
    numYN()
  }
  
  function numYN() {
    let wantNum = prompt("Do you want numbers in your password?")
    if (wantNum === null) {
      return
    }
    if (wantNum !== 'Y' && wantNum !== 'N' && wantNum !== 'y' && wantNum !== 'n') {
      alert("try again")
      numYN()
    }
    if (wantNum === 'N' || wantNum === 'n') {
      specYN()
      return
    } else if (wantNum === 'Y' || wantNum === 'y')
    ingredients.push(...numbers)
    specYN()
  }
  
  function specYN() {
    let wantSpec = prompt("Do you want special characters in your password?")
    if (wantSpec === null) {
      return
    }
    if (wantSpec !== 'Y' && wantSpec !== 'N' && wantSpec !== 'y' && wantSpec !== 'n') {
      alert("try again")
      specYN()
    }
    if (wantSpec === 'N' || wantSpec === 'n') {
      cook()
      return
    } else if (wantSpec === 'Y' || wantSpec === 'y')
    ingredients.push(...special)
    cook()
  }
  
  function cook() {
    var password = []
    for (var i = 0; i < pwlength; i++) {
      var randoIng = Math.floor(Math.random() * ingredients.length)
      password += ingredients[randoIng]
    }
  }
  var passwordOutput = document.querySelector("#password")
  passwordOutput.value = "hello world"
}

generateBtn.addEventListener("click", generatePassword)

// var password = generatePassword();
// var passwordText = document.querySelector("#password");
// passwordText.value = password;

// function getLength() {
  // var pwlength = prompt("Please enter the number of characters you would like in your very creative new password.")
  // if (isNaN(pwlength) || pwlength < 8 || pwlength > 128) {
    // alert("Wrong! Enter a numerical value between 8 and 128."),
    // getLength()
  // } else input.push(pwlength)
  // UcYN()