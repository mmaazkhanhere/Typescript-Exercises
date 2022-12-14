// function is a chunk of code that you can use over and over again, rather than writing it out multiple times
//consider the following function
// function sing(song){
//     console.log(`Singing: ${song}`);
// }
/*now the compiler doesn't know what type of value be input. We, humans, know a song will be a string but the
computer doesnt know that. By specifying type, we tell the compiler that the input value has to be string not
anything else */
function sing(song) {
    console.log("Singing: ".concat(song));
}
sing('Love is not dying'); //passing more than one parameter will give error
var addNumbers = function (num1, num2) {
    return num1 + num2;
}; //another way to declare a function. Here the function is returning a value
var returnValue = addNumbers(5, 6); //the value returned by the function is stored in variable returnValue
console.log(returnValue);
function data(name, age, isAdult) {
    if (isAdult === void 0) { isAdult = true; }
    console.log("Name: ".concat(name, " \nAge: ").concat(age, " \nAdult: ").concat(isAdult));
} //here the parameter isAdult will have default value of true. If no value is passed, true will be displayed
data('Sam', 25); //It will not give error even if the third parameter is not passed
data('Khan', 10, false);
function announceSong(song, singer) {
    console.log("Song: ".concat(song));
    if (singer) { //if the singer parameter is added, it will be included. Otherwise, it can be ignored
        console.log("Singer: ".concat(singer));
    }
}
announceSong('loveisnotdying'); //ok. Song: loveisnotdying
announceSong('honest', 'chainsmokers'); //ok Song: honest Singer: Chainsmoker
function isFive(num) {
    if (num1 === 5) {
        return 5;
    }
    return 'not 5';
} /*if a function contains multiple return statements with different values, typescript will infer the
return type to be a union of all possible returned types. Here it is the union of number and string. However,
if the return type is explicitly mentioned then return values other than that type will show error
*/
var num1 = 5;
console.log(isFive(num1)); //ok 5
num1 = 2;
console.log(isFive(num1)); // ok not 5
//void function is one which doesnt return any value
function display() {
    console.log('Hello World');
} //doesnt return any valye
