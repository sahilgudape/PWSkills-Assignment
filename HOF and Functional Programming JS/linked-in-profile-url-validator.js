const linkedinProfileUrlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

function isValidURL(input) {
    return linkedinProfileUrlPattern.test(input)
}

const url = 'https://www.linkedin.com/in/sahil-g-27m4167/'

if (isValidURL(url)){
    console.log(`${url} is a valid linkedin url`);
} else {
    console.log(`${url} is not a valid linkedin url`);
}