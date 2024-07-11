const student = {
    Name: 'ABC',
    Age: '17',
    Grade: 'B'
}

console.log(student);

function updateGrade(newGrade) {
    student.Grade = newGrade;
}

updateGrade('A');
console.log(student);