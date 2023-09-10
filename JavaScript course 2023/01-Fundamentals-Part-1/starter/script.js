/*
let js = 'amazing';
if (js === 'amazing') alert('JS is FUN!!');
console.log(42 - 411 + 31);

// let firstName = "Andres";
// console.log(firstName);

//  LECTURE: Values and Variables
let country = "Colombia";
let continent = "America";
let population = 51609000;
console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
let isIsland = false;
console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);

// LECTURE: let, const and var
const lenguage = "Spanish";
// lenguage = "English"; // ERROR. Assignment to constant variable

// Basic operators
const now = 2023;
const ageSebas = now - 1997;
const ageDana = now - 2000;
console.log(ageSebas, ageDana);
console.log(ageSebas * 2, ageDana / 2, 2 ** 3);
const firstName = "Andrés";
const lastName = "Azcarate";
console.log(firstName + ' ' + lastName);
// Assingment operators
let x = 10;
x += 10; // x = x+10 ... 20
x *= 10; // x = x*10 ... 200
x -= 10; // x = x-10 ... 190
x /= 10; // x = x/10 ... 19
x++;     // x = x+1 ... 20
x--;     // x = x-1 ... 19
console.log(x);
// Comparason operators
console.log(ageSebas > ageDana); // <, >, <=, >=

// LECTURE: Basic operators
console.log('Basic operators');
console.log((population / 2) / 2);
population++;
console.log(population);
const populationFinland = 6000000;
console.log(population > populationFinland);
console.log(33000000 > population);
let description = "Portugal is in Europe, and its 11 millions people speak portuguese";
console.log(description)

// CHALLENGE #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const markBMI = massMark / heightMark ** 2; // or massMark / (heightMark * heightMark)
console.log("Mark's BMI " + markBMI);
const johnBMI = massJohn / heightJohn ** 2;
console.log("John's BMI " + johnBMI);

const markHeigherBMI = markBMI > johnBMI;
console.log(markHeigherBMI);

// Strings and Template Literals
const firstName = "Sebas";
const job = "QA Automation";
const birthYear = 1997;
const year = 2023;
const sebas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + '!';
console.log(sebas);
const andres = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(andres);

let description = `Portugal is in Europe, and its 11 millions people speak portuguese`;
console.log(description);

// CHALLENGE #2
if(BMIMark>BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
}else{
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);

// Type conversion and coercion
console.log('9' - '5');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
*/
