// Creative Password Creator


// the four categories of character
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '', ']', '^', '_', '`', '{', '|', '}', '~', '"', '']

// variable to store desired password length
var pwlength = []

// empty array for storing character categories after user answers "Y". these become the possible ingredients for the pw.
var ingredients = []

// sends password output to text box
var passwordOutput = document.querySelector("#password")

// assign var to button for easy recall
var generateBtn = document.querySelector("#generate");

// did best to house entire password generator inside single giant parent function with multiple child functions
function generatePassword() {
  // first step is to learn user's desire password length
  getLength()
  
  function getLength() {
    pwlength = prompt("Enter desired character length:")
    // allows user to abort function if cancel is clicked
    if (pwlength === null) { 
      return
    }
    // checks if input meets requirements
    if (isNaN(pwlength) || pwlength < 8 || pwlength > 128) {
      alert("Please enter a numeric value between 8 and 128.")
      getLength()
      // if requirements are met, next sub-function commences. if not, user is looped back to beginning of current subfunction.
    } else UcYN()
  }
  // the following three subfunctions follow same logical flow as getlength(), therefore comments will be fewer.
  
  // allows user to select if uppercase character are wanted
  function UcYN() {
    let wantUc = prompt("Do you want uppercase letters in your password? Y/N")
    if (wantUc ===null) {
      return
    }
    if (wantUc !== 'Y' && wantUc !== 'N' && wantUc !== 'y' && wantUc !== 'n') {
      alert("Please answer Y/N.")
      UcYN()
    } 
    if (wantUc === 'N' || wantUc === 'n') {
      LcYN()
      return
    } else if (wantUc === 'Y' || wantUc ==='y') 
    // sends uppercase bank to ingredients list before moving to next subfuction, if they are desired. if not, moves to next subfunction without adding to ingredients list.
    ingredients.push(...uppercase)
    LcYN()
  }
  
  // user wants lowercase?
  function LcYN() {
    let wantLc = prompt("Do you want lowercase letters in your password? Y/N")
    if (wantLc === null) {
      return
    }
    if (wantLc !== 'Y' && wantLc !== 'N' && wantLc !== 'y' && wantLc !== 'n') {
      alert("Please answer Y/N.")
      LcYN()
    }
    if (wantLc === 'N' || wantLc === 'n') {
      numYN()
      return
    } else if (wantLc === 'Y' || wantLc === 'y')
    ingredients.push(...lowercase)
    numYN()
  }
  
  // user wants numbers?
  function numYN() {
    let wantNum = prompt("Do you want numbers in your password? Y/N")
    if (wantNum === null) {
      return
    }
    if (wantNum !== 'Y' && wantNum !== 'N' && wantNum !== 'y' && wantNum !== 'n') {
      alert("Please answer Y/N.")
      numYN()
    }
    if (wantNum === 'N' || wantNum === 'n') {
      specYN()
      return
    } else if (wantNum === 'Y' || wantNum === 'y')
    ingredients.push(...numbers)
    specYN()
  }
  
  // user wants special characters?
  function specYN() {
    let wantSpec = prompt("Do you want special characters in your password? Y/N")
    if (wantSpec === null) {
      return
    }
    if (wantSpec !== 'Y' && wantSpec !== 'N' && wantSpec !== 'y' && wantSpec !== 'n') {
      alert("Please answer Y/N.")
      specYN()
    }
    if (wantSpec === 'N' || wantSpec === 'n') {
      // since this is the last user input function, user input is sent to checker() to make sure user has responded Y to at least one prompt
      checker()
      return
    } else if (wantSpec === 'Y' || wantSpec === 'y')
    ingredients.push(...special)
    cook() 
  }
  
  // checks if user has said Y to at least one prompt
  function checker() {
    // if answered N to all, there will be 0 objects in the ingredients array.
    if (ingredients.length === 0) {
      alert("You must select at least one category.")
      UcYN()
      return
    } else if (ingredients.length > 0) {
      cook()
      return
    }
  }
  
  // cook is where password is actually created
  function cook() {
    var password = []
    for (var i = 0; i < pwlength; i++) {
      // random ingredients are added until new array length equals desired password length.
      var randoIng = Math.floor(Math.random() * ingredients.length)
      password.push(ingredients[randoIng])
    }
    // uses .join to turn password array into a string, then inserts the generated password into the html
    passwordOutput.textContent = [password.join('')]
    return
  }
}

// all variables and functions have been declared, now click to start.
generateBtn.addEventListener("click", generatePassword)