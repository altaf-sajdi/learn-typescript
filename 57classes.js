// es6 interoduced classes .
// javascript classes are tempetes for javascript objects.
//..............classes.....................
class student {
    constructor(n, g, r) {
        this.name = n;
        this.gender = g;
        this.rollNo = r;
    }
    studentfanction() {
        return `studend name is ${this.name}, gender is ${this.gender}, roll number is ${this.rollNo}`;
    }
}
const student1 = new student("altaf", "male", 111);
const student2 = new student("kashif", "male", 112);
const student3 = new student("zahra", "female", 113);
let studentdata = [];
studentdata.push(student1);
studentdata.push(student2);
studentdata.push(student3);
student1.name = "rasheed";
console.log(studentdata);
export {};
