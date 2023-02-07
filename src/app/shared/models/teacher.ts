export class Teacher {
  fName: string;
  lName: string;

  age: number;

  subject: string;


  constructor(fName: string, lName: string, age: number, subject: string) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.subject = subject;
  }
}
