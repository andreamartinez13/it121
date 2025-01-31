    // Function to Validate Password
    const validatePassword = (myPassword) => {
        // check if password is 8 characters min
        if (myPassword.length<8){
            $("#message").html ("Password not Valid. Please include 1 upper case character, 1 lower case character, and 8 characters minimum.") 
            return false;
            //unreachable code
        }

        // check if password has 1 upper case
    var isuppercase = false;
    var islowercase = false;
    

      for (var i = 0; i < myPassword.length; i++) {
        letter = myPassword.charAt(i);
        charCode = myPassword.charCodeAt(i)
        //check if the letter of myPassword is an alphabetic character
        //and check for upper case and lowercase
        if( 
            (charCode >= 65 && charCode <= 90) || // check values of uppercase letters
            (charCode >= 97 && charCode <= 122)) { // check values of lowercase letters
                if (letter == letter.toUpperCase()){
                    isuppercase = true
                } 
                if (letter == letter.toLowerCase()){
                    islowercase = true
                }
        }

    }

    if(isuppercase == true && islowercase == true) {
        return true 
    } else { 
        return false
    }
}
  
// ValidateForm Function
  // validatePassword function here
  const validateForm = (myForm) => {
    let firstname = myForm.firstname.value; // get text of firstname field
    if (firstname.length == 0) {
        $("#message").html("Please Add your First Name")
    } 

    let lastname = myForm.lastname.value; 
    if (lastname.length == 0){
        $("#message").html("Please Add your Last Name")
        return false
    } 

    let password = myForm.password.value;
    if (password.length>0 && validatePassword(password) == true){
        $("#message").html("Thanks for filling all the fields")
    } else {
        $("#message").html ("Password not Valid. Please include 1 upper case character, 1 lower case character, and 8 characters minimum.")
    }

    /* Form validation code goes here
    */

    // use this syntax to update 'message' DIV with appropriate wording
    // $("#message").html("message");

    return false; // prevent page reload
  }
