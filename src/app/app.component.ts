import { Component } from '@angular/core';
import {Student} from "./shared/models/student";
import {Teacher} from "./shared/models/teacher";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-teacher';

  students:Student[]= [];

  teachers:Teacher[]=[];

  firstNames: string[] = ['Jake','Joe','Peter','Sam','Alice','Linda','Mary','Sally'];
  lastNames: string[] = ['Berg','McQuire','Smith','Tamm','Couch','Yeet','Lorenzo','Fallon','Ruq','Lala'];

  subjects: string[] = ['Maths','Economics','Programming','Sports','Dancing','Golf','Mining','Literature','Crafting','Knitting','Arts','Swimming','Cooking'];

  studentAges: number = Math.floor(Math.random() *(+30 - +16)) + +16;
  teacherAges: number= Math.floor(Math.random() *(+65 - +30)) + +30;

  addStudentToTable() {
    let studentFirstName = this.firstNames.at(Math.random()*this.firstNames.length);
    let studentLastName = this.lastNames.at(Math.random()*this.lastNames.length);
    let studentSubject = this.subjects.at(Math.random()*this.subjects.length);
    let studentAge = Math.floor(Math.random() *(+30 - +16)) + +16

    // @ts-ignore
    this.students.push(new Student(studentFirstName,studentLastName,studentAge,studentSubject));
  }

  newStudentAdder(){
    let studentFirstName = this.firstNames.at(Math.random()*this.firstNames.length);
    let studentLastName = this.lastNames.at(Math.random()*this.lastNames.length);
    let studentSubject = this.subjects.at(Math.random()*this.subjects.length);
    let studentAge = this.studentAges;
  let table: HTMLTableElement = <HTMLTableElement> document.getElementById("student-table");
  let row = table.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  // @ts-ignore
    cell1.innerHTML= studentFirstName;
    // @ts-ignore
    cell2.innerHTML = studentLastName;
    cell3.innerHTML = String(studentAge);
    // @ts-ignore
    cell4.innerHTML = studentSubject;
  }
  teacherAdder(){
    let teacherFirstName = this.firstNames.at(Math.random()*this.firstNames.length);
    let teacherLastName = this.lastNames.at(Math.random()*this.lastNames.length);
    let teacherSubject = this.subjects.at(Math.random()*this.subjects.length);
    let teacherAge = this.teacherAges;
    let table: HTMLTableElement = <HTMLTableElement> document.getElementById("teacher-table");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    // @ts-ignore
    cell1.innerHTML= teacherFirstName;
    // @ts-ignore
    cell2.innerHTML = teacherLastName;
    cell3.innerHTML = String(teacherAge);
    // @ts-ignore
    cell4.innerHTML = teacherSubject;
  }

  deleteTeacher(){
    // @ts-ignore
    let table: HTMLTableElement = <HTMLTableElement> document.getElementById("teacher-table").deleteRow(1);
  }
  deleteStudent(){
    // @ts-ignore
    let table: HTMLTableElement = <HTMLTableElement> document.getElementById("student-table").deleteRow(1);
  }
}
