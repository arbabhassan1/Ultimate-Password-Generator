function generateStrongPassword(input: String) {
  const specialChars = ["@", "#", "$", "%", "^", "&", "*", "!", "?"];
  const numbers = "0123456789";
  let password = input;

  // Calculate the number of characters needed to meet minimum length of 8
  let charactersToAdd = Math.max(0, 8 - password.length);

  // Add random characters to meet minimum length
  while (charactersToAdd > 0) {
    const randomChoice = Math.random();
    if (randomChoice < 0.5) {
      password += specialChars[Math.floor(Math.random() * specialChars.length)];
    } else {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    charactersToAdd--;
  }

  // If password length is still less than 11, add more characters
  while (password.length < 11) {
    const randomChoice = Math.random();
    if (randomChoice < 0.5) {
      password += specialChars[Math.floor(Math.random() * specialChars.length)];
    } else {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }
  }

  return password;
}

export { generateStrongPassword };
