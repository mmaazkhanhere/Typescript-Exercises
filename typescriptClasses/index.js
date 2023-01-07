"use strict";
// class User{ //classes are fundamental entities use to create reusable components
//     name:string; //properties of the classes (class properties)
//     email:string;
Object.defineProperty(exports, "__esModule", { value: true });
class employeeInformation {
    id;
    name;
    salary;
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        console.log(id, name, salary);
    }
}
let empinfo = new employeeInformation(1, 'Khan', 3000);
