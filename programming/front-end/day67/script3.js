function generatePassword() {
    let password = "";
    for (let i = 0; i < 5; i++) {
        password += Math.floor(Math.random() * 10); // generates a random number from 0 to 9
    }
    return password;
}

const password = generatePassword();
console.log("Generated Password:", password);