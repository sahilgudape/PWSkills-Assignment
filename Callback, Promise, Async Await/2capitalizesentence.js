function manipulateString(a, fn){
    console.log(a);
    fn(a.toUpperCase())
}
manipulateString('hello, world!', logString)

function logString(n){
    console.log('The manipulated string is: ',n);
}
