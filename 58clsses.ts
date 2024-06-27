// classes in typescript .

//..............school class......
class school{
    name:string;

    studens:student[]=[];
    tecahers:teacher[]=[];

    addStudent(stdObj:student){
         this.students.push(stdObj)
    }

    addTeacher(teachObj:teacher){
        this.tecahers.push(teachObj)
    }

    constructor(name:string){
        this.name=name
    }
}

// ........student class ........

class student{
    name:string;
    age:number;
    schoolName:string;

    constructor(name:string,age:number,rooNo:number,schoolName:string){
        this.name=name;
        this.age=age;
        this.schoolName=schoolName;
    }
}


// ..............class teacher ..........

class teacher extends student {}

//............schools..............

let school1 =new school("govenore hause");
let school2 = new school("youtube");

//............students ..........

let st1 = new student("altaf", 34, school1.name)     
let st2= new student ("hammad", 23,school1.name)
let st3 = new student ("alishba",25, school2.name)

// ...............teachers ...................
let tea1 =new teacher("sir hammza",25,school1.name)
let tea2 =new teacher("sir hammza",25,school1.name)
let tea3 =new teacher("sir sir alim",25,school2.name)

//............add students

school1.addStudent(st1)
school2.addStudent(st2)
school2.addStudent(st3)

//..............add teacher ..............

school1.addTeacher(tea1)
school1.addTeacher(tea2)

// ...............console.log( school1 and school2)
console.log(school1)
console.log(school2)