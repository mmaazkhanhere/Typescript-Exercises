// function is a chunk of code that you can use over and over again, rather than writing it out multiple times
//consider the following function

function sing(song){
     console.log(`Singing: ${song}`);
}

/*now the compiler doesn't know what type of value be input. We, humans, know a song will be a string but the
computer doesnt know that. By specifying type, we tell the compiler that the input value has to be string not
anything else */

function sing(song:string){ //here song is a parameter that will be passed to the function sing
    console.log(`Singing: ${song}`);
}
sing('Love is not dying') //passing more than one parameter will give error

//Functions that return value

let addNumbers=(num1:number,num2:number):number=>{ //it tells the compiler that the function will return a number
    return num1+num2;
} //another way to declare a function. Here the function is returning a value

let returnValue=addNumbers(5,6); //the value returned by the function is stored in variable returnValue
console.log(returnValue)

//Parameters with default value

function data(name:string,age:number,isAdult:boolean=true){
    console.log(`Name: ${name} \nAge: ${age} \nAdult: ${isAdult}`)
} //here the parameter isAdult will have default value of true. If no value is passed, true will be displayed

data('Sam',25) //It will not give error even if the third parameter is not passed
data('Khan',10,false);

//Optional Parameters

function announceSong(song:string, singer?:string){ //the question mark means that singer parameter is optional
    console.log(`Song: ${song}`);
    if(singer){ //if the singer parameter is added, it will be included. Otherwise, it can be ignored
        console.log(`Singer: ${singer}`)
    }
}
announceSong('loveisnotdying'); //ok. Song: loveisnotdying
announceSong('honest','chainsmokers'); //ok Song: honest Singer: Chainsmoker

function isFive(num:number){
    if(num1===5){
        return 5
    }
    return 'not 5'
} /*if a function contains multiple return statements with different values, typescript will infer the
return type to be a union of all possible returned types. Here it is the union of number and string. However,
if the return type is explicitly mentioned then return values other than that type will show error
*/

//Void Functions

let num1=5;
console.log(isFive(num1)); //ok 5
num1=2;
console.log(isFive(num1)); // ok not 5

//void function is one which doesnt return any value

function display():void{
    console.log('Hello World')
} //doesnt return any value. Void is default return type of a function

/* Function Types

TypeScript function types that allow you to define types for functions. 
Syntax: variableName: (parameter: type, parameter:type,...) => return type*/

let addition: (para1:number,para2:number) => number /* function type declaration */

addition=function (num1:number,num2:number){ //function declaration
    return num1+num2;
}

let returnValue=addition(5,6) //calling function

/*Function Overloading
Function overloading is the feature of OOP programming where two or more functions can have the
same name but different parameters */

function sum(num1:string, num2:string):string; //function with two string parameters and return string

function sum(para1:number, para2:number): number; //function with two number parameters and return number

function sum(a: any, b:any): any { //function implementation
    return a + b;
}

console.log(sum(1,5));
console.log(sum('1','5'));

/*function overloading with different number of parameters and types with same name is not
supported */

function display (a:string, b:string):void{ //Error duplicate function implementation
    console.log(a+b)
}
function display(a:number,b:number):void{
    console.log(a+b)
}