const person = 
    {
        firstName: 'Samsung',
        lastName: 'S21 FE',
        age: 2
    }


function ageInDays(a, fn){
    let fullName = a.firstName+' '+a.lastName;
    let ageInDays = a.age*365;
    fn(fullName,ageInDays);
}

ageInDays(person, logResult)

function logResult(fullName, ageInDays){
    console.log(`The person's full name is ${fullName} and his age in days is ${ageInDays} days`);
}