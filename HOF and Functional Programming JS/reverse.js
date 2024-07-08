let input = "reverse the string"

reverseString = (String) => {
    return String.split('').reverse().join('');
}

delayedString = (String) => {
    setTimeout (() => {
        let reversed = reverseString(String);
        console.log('Reversed String: ' +reversed);
    }, 2000)
}

delayedString(input);
console.log(input);