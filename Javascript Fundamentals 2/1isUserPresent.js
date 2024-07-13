const allUsers = [
    'Sahil', 'Ghochya', 'Lalla', 'Pratik', 'Shree', 'Onkar', 'Shantanu'
]

function isUserPresent(yes) {
    if (allUsers.includes(yes)) {
        console.log(`${yes} is a valid user`);
        return true;
    } else {
        console.log(`${yes} is not a valid user`);
        return true;
    }
}

isUserPresent('Sahil');
isUserPresent('Prashant');