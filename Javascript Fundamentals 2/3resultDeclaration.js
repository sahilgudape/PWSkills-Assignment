const students = [
    {
        name: 'Mithun',
        marks: 95,
    },
    {
        name: 'Prabir',
        marks: 75,
    },
    {
        name: 'Alka',
        marks: 75,
    },
    {
        name: 'Shivam',
        marks: 75,
    },
    {
        name: 'Hazel',
        marks: 75,
    },
]

const hasClearedExam = (name) => {
    for (let student of students){
    if (student.name===name){
        return student.marks>90
        ? console.log(`Congratulations ${student.name}! You have cleared the exam.`)
     : 
        console.log(`Unfortunately ${student.name}, you have failed the exam.`);
    }
}
console.log('invalid user!!');
}

hasClearedExam("Mithun");
hasClearedExam('Hazel');
hasClearedExam('Augustus');