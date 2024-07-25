class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.courses = [];
  }

  enroll(course) {
    this.courses.push(course);
    console.log(`${this.name} has enrolled in ${course}.`);
  }

  showCourses() {
    console.log(`${this.name}'s enrolled courses are ${this.courses.join(", ")}`);
  }
}

class admission {
  constructor() {
    this.students = [];
  }

  enrollStudent(student) {
    this.students.push(student);
    console.log(`${student.name} has been enrolled.`);
  }

  assignCourse(student, course) {
    if (student instanceof Student && student.email && course) {
      student.enroll(course);
    } else {
      console.log("Invalid course or student information");
    }
  }

  showStudents() {
    console.log("Enrolled Students: ");
    this.students.forEach((student) => {
      console.log(`${student.name} (${student.email})`);
    });
  }
}

const admissionOffice = new admission();

const student1 = new Student('chirag', 'chirag@gmail.com');
const student2 = new Student('harshal', 'harshal@gmail.com');

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);

admissionOffice.assignCourse(student1,'Full Stack Web Development.');
admissionOffice.assignCourse(student2,'Data Science');

student1.showCourses();
student2.showCourses();

admissionOffice.showStudents();
