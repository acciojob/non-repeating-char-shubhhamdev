function findFirstNonRepeatedChar() {
  const inputString = prompt("Enter a string:");

  const charCount = {};

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

const result = findFirstNonRepeatedChar();
alert(result);