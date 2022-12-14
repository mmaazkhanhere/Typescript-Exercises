/* Typescript is the superset of javascript. It do what javascript does but in a more precise manner so that
your code faces less error at runtime.
Typescript is all about type safety */

let a = 2 + '2' //In javascript, this code will add type number with type string, which is wrong and odd.

let a = null + 2
/* In javascript, the value of variable a would be 2, which is completely wrong. Typescript saves you from
making the above mistake*/

let a: number = null + 2 //Here we have declared variable a of type number
console.log(a) // this will give error that addition cannot be applied to types null and number

/* Another feature typescript is static checking. The entire syntax of the language is constantly being 
analyzed by the IDE, pointing out an error even before the code is run. In javascript, error is thrown only
when the code is run.*/
console.blog('Hello world') //it will underline the blog indicating an error has been made

//Syntax for declaring variable: let variableName:type=value
//There are other ways of declaring variables

let numb: number = 5;
console.log(`Item stored: ${numb}  Its type: ${typeof numb}`);
let myName: string = 'Maaz';
console.log(`Item stored: ${myName}  Its type: ${typeof myName}`);
