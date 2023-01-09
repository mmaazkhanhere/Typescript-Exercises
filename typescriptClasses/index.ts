class User{ //classes are fundamental entities use to create reusable components
    name:string; //properties of the classes (class properties)
    email:string;

    constructor(name:string,email:string){ /*constructor is a funcition that is called
    whenever the object of a class is created. Constructor is an optional method*/
        this.name=name; //members of the class can only be accessed using this keyword
        this.email=email
        console.log(`Name: ${name}\nEmail: ${email}`)
    }
}

//class methods are same as standalone function but class methods are limited to the classes only
let user= new User('Maaz','khan@gmail.com') //object of a class is created using new keyword

class anotherUser {
    userData(name:string,email:string){ //class method
        console.log(`User Data\nName: ${name}\nEmail: ${email}`)
    }
}

let user1=new anotherUser() 
user1.userData('Khan','khan@gmail.com') //accessing the class method of class Another User

/*Typescript will check that each property declared should have a value unless declared
as undefined */

class Greetings{
    name:string; //will give error as it is not intialised nor assigned in constructor
    email:string|undefined; //no error because can also be undefined
    accepted:Boolean=true;
    people!:number; //strict initialisaiton check will not be applied now

    constructor(){
        this.email='khan@gail.com';
    }
}

let greet= new Greetings()
console.log(greet)

/*Optional properties are properties whose types is a union containing undefined. A 
property can be marked optional by putting ? after it. Strict intialisation check
will also not be applied to it */

class Courses{
    computerScience:boolean=true;
    fundamentalOfProgramming:boolean;
    economics?:boolean; //no error if not intialised or intiliased

    constructor(){
        this.fundamentalOfProgramming=true;
    }
}

let courses= new Courses();
console.log(courses)

/*Read-only properties can be accessed outside the class but their value cannot be 
changed */

class Employee{
    readonly idNumber:number;
    name:string;

    constructor(idNumber:number,name:string){
        this.idNumber=idNumber;
        this.name=name;
    }
}

let emp=new Employee(1,'Maaz');
let emp2=new Employee(2,'Khan');

emp2.name='Sam' //no error
emp.idNumber=5; // Error because cannot be changed as it is readonly property

/*If once intialised in one method of class, any attempt to change it in another method
of the class will be marked as error */

class Person{
    readonly name:string;
    age:number;

    constructor(){
        this.name='Maaz'
        this.age=5;
    }

    details(){
        name='Khan' //error because readonly property
    }
}

let person=new Person();

class Teacher {
    sayHello(){
        console.log('Take chances, make mistakes, get messy!')
    }
}

let teacher:Teacher=new Teacher();
teacher.sayHello();

/* Interface defines the syntax for class to follow. A class follows a specific interface
by using keyword 'implements' after the class name
*/

interface empInfo{
    id:number;
    name:string;
    salary:number;
} //interface for class

class employeeInformation implements empInfo{ /*Class using the interface. Implementing interface
is purely a safety check and doesnt copy any interface members onto the class */

    id: number; //class properties (not copied from the interface)
    name:string;
    salary:number;

    constructor(id:number,name:string,salary:number){ 
        this.id=id;
        this.name=name;
        this.salary=salary
        console.log(id,name,salary)
    }
}

let empinfo= new employeeInformation(1,'Khan',3000); //creating object of the class

Mulitple interface can also be used

interface Graded {
    grades:number[];
}
interface Reporter{
    report: ()=> string
}

class ReportCard implements Graded,Reporter{
    grades:number[];
    constructor(grades:number[]){
        this.grades=grades
        console.log(grades);
    }
    report(){
        return 'Result'
    }
}
let reportCard= new ReportCard([1,2,3]);
console.log(reportCard.report()
)

/*Inheritance is a method through which one class inherit properties and method from another
class and reuse it. Inheritance can be done using extend keyword*/

class parentClass{ 
    constructor(readonly firstName:string, readonly secondName:string){
        this.firstName=firstName;
        this.secondName=secondName;
    }
    describe():string{
        return `This is ${this.firstName} ${this.secondName}`
    }
}

class childClass extends parentClass{ //class which inherit properties is called child class 
 all properties and methods of parentClass has been inherited in this class
}

let childclass= new childClass('Maaz','Khan'); 
console.log(childclass.describe())/*despite of no code statement in the childClass, we are able
to print results.*/

class anotherChildClass extends parentClass{

    constructor(firstName:string,lastName:string,private jobTitle:string){/*Private class properties can
    only be accessed only by the class itself */

        console.log(`${firstName} ${lastName} ${jobTitle}`)
        super(firstName,lastName) //calls the constructor of the parentClass
    }
}

let anotherClass= new anotherChildClass('Maaz','Khan','Job title not yet decided')
console.log(anotherClass.describe());

/*Private class properties are only accessible within the class while public class properties are accessible by 
anyone anywhere*/

class userClass{
    private name:string; //cannot be accessible outside the class
    public email:string; //is accessible outside the class
    protected age:number=15; //allowed to be accessed only by the class itself and its subclasses

    constructor(name:string, email:string){
        this.name=name;
        this.email=email;
        console.log(`${name}\n${email}\n${this.age}`)
    }
}

class userClassChild extends userClass{
     all the properties would be accessed except the private properties
     age=25; //no error because accessible within the class and also its subclasses (child classes)
}
const user2= new userClass('maaz','maaz@emial.com')
console.log(user2);
console.log(user2.email) //ok, prints email
console.log(user2.name) //error because private property of class so not accessible outside the class
console.log(user2.age) //will also give error because not accessible outside the class

const user3= new userClassChild('maaz','maaz@emial.com')
console.log(user3);

/*Abstract classes are base classes from which other classes are derived. Object of an abstract class
cannot be created. It act likes interface. However, unlike an interface, an abstract class may contain
implementation for its members*/

abstract class School{
    
    constructor(readonly name: string){
        this.name=name;
    }
    getStudentTypes():string[]{ //a function implementation which is not possible in interface
        return ['school']
    }
    abstract studentId():number[]; //this function can not be implemented here but to be in derived class
}

class PreSchool extends School{
    studentId(){
        return [1]
    } //abstract function implemented here
}


let school= new School() //cannot be created because its an abstract class
let preschool= new PreSchool('APS'); //object of derived class
console.log(preschool)
console.log(preschool.studentId())//abstract function can be accessed