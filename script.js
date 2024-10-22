// TODO: Implement the password generation logic based on user input
const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]\\|;':\"<,>.?/";

     // TODO: Create a variable for the character set based on selected options
    let characterSet = "";
    if (options.uppercase) characterSet += uppercase;
    if (options.lowercase) characterSet += lowercase;
    if (options.numbers) characterSet += numbers;
    if (options.specialChars) characterSet += specialChars;
  
    
    if (!characterSet) {
      alert("Masukan setidaknya 1 entitas.");
      return; 
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      password += characterSet[randomIndex];
    }
  // TODO: Generate the password based on the selected criteria

    return password;
  };
  
  const generateButton = document.getElementById("generateBtn");
  const passwordOutput = document.getElementById("passwordOutput");
  const copyButton = document.getElementById("copyBtn");
  
  generateButton.addEventListener("click", () => {
    const length = parseInt(document.getElementById("length").value);
  
    // Ensure length is within valid range (8-128)
    if (length < 8 || length > 128) {
      alert("Password length must be between 8 and 128 characters.");
      return; // Exit the function if length is invalid
    }
  
    const options = {
      uppercase: document.getElementById("includeUppercase").checked,
      lowercase: document.getElementById("includeLowercase").checked,
      numbers: document.getElementById("includeNumbers").checked,
      specialChars: document.getElementById("includeSpecialChars").checked,
    };
  
    const password = generatePassword(length, options);
    passwordOutput.textContent = password;
  
    // Enable "Copy to Clipboard" button only after password is generated
    copyButton.disabled = false;
  });
  
  copyButton.addEventListener("click", () => {
    passwordOutput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
    // TODO: Add event listener to the button to call generatePassword and display the output

  
   // BONUS: Implement the copy to clipboard functionality
    copyButton.disabled = true;
  });
  document.getElementById('copyBtn').addEventListener('click', () => {
    const passwordOutput = document.getElementById('passwordOutput').textContent;
    if (passwordOutput) {
        navigator.clipboard.writeText(passwordOutput).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    } else {
        alert('No password to copy!');
    }
});
