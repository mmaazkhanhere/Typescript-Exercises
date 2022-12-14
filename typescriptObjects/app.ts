//object is an instance which contains set of key value pairs.

const user={
    name:'Maaz',
    email:'mmaazkhan@outlook.com',
    born:1998
} //a user class which have three properties (name, email, and year born)

console.log(`User name: ${user.name}`) //prints the name of the user 

//Eventually, you will need to declare type of an object explicitly
type userType={
    name:string,
    email:string,
    born:number
}//declaring type of an object's properties. Also called type aliasing 

let userData:userType //assigning type ot an object
userData={
    name:'Maaz',
    email:'mmaazkhan@outlook.com',
    born:1998
}
console.log(userData) //display result

//The vaiable must have the object type's required properties
/*userData={ 
    name:"Khan",
    born:2022
} */ // this will give error because userType requires three properties while here only two are defined

//Also, if an object's property doesnt match. typescript will report a type error

/* userData={
    name:'Maaz',
    email:'mmaazkhan@outlook.com',
    born:'2022'
} */ //this will give syntax error because born property is expected to be a number not a string

/*typescript will report a type error if a variable is declared with an object type and its intial value */

//types can be nested

type writer={
    author:{
        firstName:string;
        secondName:string;
    }
    name:string;
} //nested types

const Writer:writer={
    author:{
        firstName:'William',
        secondName:'Shakespear'
    },
    name:'William Shakespear'
}
console.log(Writer)

/*typescript is structural. In structurallt typed languages, values are considered to be of
equivalent types if all of their component features are of the same type 
Consider the following example */

interface User{ //datatype for an object
    name:string,
    age:number,
    emailAddress:string
}

interface anotherUserInterface{ //data type for another object
    name:string,
    age:number,
    emailAddress:string,
    isPaid:boolean
}

let firstUser:User={ //creating an object with type assigned
    name:'Maaz',
    age:24,
    emailAddress:',,aazkhan@outlook.com'
}

let secondUser:anotherUserInterface={ //creating second object
    name:'Khan',
    age:5,
    emailAddress:'google@gmail.com',
    isPaid:false
}

let thirdUser:User=secondUser /* will not give error because all the properties of the right object is present
in the left object` */

let fourthUser:anotherUserInterface=firstUser //will give error because some properties are missing

firstUser={
    name:'Maaz',
    age:5,
    emailAddress:'mmaazkhan@outlook.com',
    isPaid:false
} //this will give error because an excess property has been assigned to the object

/*Types of an object can also be nested */

interface Poet{
    details:{
        name:string,
        age:number,
        emailAddress:string
    }, //nested type within an interface
    isFamous:boolean
}

let johnGreen:Poet={
    details:{
        name:'John Green',
        age:52,
        emailAddress:'johngreen@write.com'
    }, 
    isFamous:true
} //creating an object


//another way to do this
interface Detail{
    name:string,
    age:number,
    emailAddress:string
} //declaring type

interface Poet{
    details:Detail, //using a type making it nested type
    isFamous:boolean
} //declaring another type

let johnGreen:Poet={
    details:{
        name:'John Green',
        age:52,
        emailAddress:'johngreen@write.com'
    }, 
    isFamous:true
} //creating an object

//object properties can also be optional. You can make a property optional by including ? before the property

interface Book{
    author:string,
    pages?:number,
    genre:string
}

const book:Book={
    author:'Jennifer',
    genre:'Romance'
} // will not give error despite pages property missing


const anotherBook:Book={
    author:'Paulo Cohelo',
    pages:220,
    genre:'Fantasy'
}//also fine

//InferredObject-Type Unions

/*If a variable is given an initial value that could be one of multiple object
types, TypeScript will infer its type to be a union of object types. */

const poet=Math.random()>0.5
?{name:'The Double Image',page:7}// if true, this would be considered. The types are inferred

/*interface{
    name:string,
    page:number,
    rhyme?:boolen
} */
:{name:'Her Kind',ryhmes:true} //if false, this would be considered. The types are inferred

/*interface{
    name:string,
    page?:number,
    rhyme:boolen
} */

//Discriminated Union

interface pizza{
    __typeName:'pizza',
    topping:string[],
    crust:string,
    ketchup:boolean
} 

interface sandwhich{
    __typeName:'sandwhich',
    cheese:boolean,
    ketchup:boolean
} 

type Food= pizza | sandwhich //union of types

let myFood:Food={
    __typeName:'pizza', //here the compiler will consider the properties of pizza interface only
    cheese:true //error because cheese is the property of the sandwhich interface
}

let myFood:Food={
    __typeName:'sandwhich',
    crust:'soft' /*will give error because compiler consider it sandwhich interface and it doesnt have
    crust property despite being a union. This is discriminated union*/
}

let myFood:Food={
    __typeName:'sandwhich',
    cheese:false,
    ketchup:true
} //fine 

/*An intersection type is a type that merges several kinds into one. Allows you to combine many 
types to create a single type with all of the properties*/

interface Artwork{
    genre:string,
    name:string
}

interface Writing{
    pages:number,
    name:string
}

type writtenArt= Artwork & Writing; //written art will have the properties of both types
/* Equivalent to 
    writtenArt{
        genre:string,
        name:string,
        pages:number
    }
*/

let writer:writtenArt={
    genre:'Life Lesson',
    name:'12 Rules of Life',
    pages:550
} //have all the properties merged together