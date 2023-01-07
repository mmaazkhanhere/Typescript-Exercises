// class User{ //classes are fundamental entities use to create reusable components
//     name:string; //properties of the classes (class properties)
//     email:string;

//     constructor(name:string,email:string){ /*constructor is a funcition that is called
//     whenever the object of a class is created. Constructor is an optional method*/
//         this.name=name; //members of the class can only be accessed using this keyword
//         this.email=email
//         console.log(`Name: ${name}\nEmail: ${email}`)
//     }
// }

// //class methods are same as standalone function but class methods are limited to the classes only
// let user= new User('Maaz','khan@gmail.com') //object of a class is created using new keyword

// class anotherUser {
//     userData(name:string,email:string){ //class method
//         console.log(`User Data\nName: ${name}\nEmail: ${email}`)
//     }
// }

// let user1=new anotherUser() 
// user1.userData('Khan','khan@gmail.com') //accessing the class method of class Another User

// /*Typescript will check that each property declared should have a value unless declared
// as undefined */

// class Greetings{
//     name:string; //will give error as it is not intialised nor assigned in constructor
//     email:string|undefined; //no error because can also be undefined
//     accepted:Boolean=true;
//     people!:number; //strict initialisaiton check will not be applied now

//     constructor(){
//         this.email='khan@gail.com';
//     }
// }

// let greet= new Greetings()
// console.log(greet)

// /*Optional properties are properties whose types is a union containing undefined. A 
// property can be marked optional by putting ? after it. Strict intialisation check
// will also not be applied to it */

// class Courses{
//     computerScience:boolean=true;
//     fundamentalOfProgramming:boolean;
//     economics?:boolean; //no error if not intialised or intiliased

//     constructor(){
//         this.fundamentalOfProgramming=true;
//     }
// }

// let courses= new Courses();
// console.log(courses)

// /*Read-only properties can be accessed outside the class but their value cannot be 
// changed */

// class Employee{
//     readonly idNumber:number;
//     name:string;

//     constructor(idNumber:number,name:string){
//         this.idNumber=idNumber;
//         this.name=name;
//     }
// }

// let emp=new Employee(1,'Maaz');
// let emp2=new Employee(2,'Khan');

// emp2.name='Sam' //no error
// emp.idNumber=5; // Error because cannot be changed as it is readonly property

/*If once intialised in one method of class, any attempt to change it in another method
of the class will be marked as error */

// class Person{
//     readonly name:string;
//     age:number;

//     constructor(){
//         this.name='Maaz'
//         this.age=5;
//     }

//     details(){
//         name='Khan' //error because readonly property
//     }
// }

// let person=new Person();

// class Teacher {
//     sayHello(){
//         console.log('Take chances, make mistakes, get messy!')
//     }
// }

// let teacher:Teacher=new Teacher();
// teacher.sayHello();

/* Interface defines the syntax for class to follow. A class follows a specific interface
by using keyword 'implements' after the class name
*/

interface empInfo{
    id:number;
    name:string;
    salary:number;
}

class employeeInformation implements empInfo{
    id: number;
    name:string;
    salary:number;

    constructor(id:number,name:string,salary:number){
        this.id=id;
        this.name=name;
        this.salary=salary
        console.log(id,name,salary)
    }
}

let empinfo= new employeeInformation(1,'Khan',3000);