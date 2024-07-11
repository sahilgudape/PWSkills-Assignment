function reverseString(input) {
    return input.split('').reverse().join('','');
  }
  
  const originalString = "Hello, world!";
  console.log('original string: ',originalString);
  const reversedString = reverseString(originalString);
  console.log('reversed string: ',reversedString);
  