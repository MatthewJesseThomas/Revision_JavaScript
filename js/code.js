// ======Math Methods====== //
// console.log("sqrt():",Math.sqrt(36));
// =====Return a middle element(s)======= //
// let data = [9,3,1,"Peter",5,10];
// data.splice(3,1);
// let onlyNumbers = data.filter( item => {
//     if( typeof item != 'string')
//         return item;
// });
// console.log("Max:",Math.max(...onlyNumbers));
// let size =data.length-1;
// console.log("Array size:",size);
// console.log("Element:",data[size]);
// console.log("at():",data.at(-1));
// let middleIndex = Math.trunc((data.length -1)/2);
// console.log("middleIndex:",middleIndex);
// console.log("middle Element:",data.slice(middleIndex, middleIndex +2));
// let middleIndex = Math.trunc((data.length -1)/2);
// if (middleIndex % 2 == 0) {
//     console.log(data.slice(middleIndex, middleIndex +2));
// }else {
//     console.log(data.middleIndex);
// }
// ===========================================================================
// Date //
// let myDate = new Date();
// console.log("date: ",myDate);
// console.log("My date: ",myDate.toLocaleDateString());
// console.log("My time: ",myDate.toLocaleTimeString());
// console.log("The Month: ",myDate.getMonth());
// console.log("The Date: ",myDate.getDate());
// console.log("Hours: ",myDate.getHours());
// console.log("Minutes: ",myDate.getMinutes());
// console.log("Seconds: ",myDate.getSeconds());
// ===========================================================================
// Add 5Days to Date and  //
// ===========================================================================
// If-Statements //
// let magic = "Tier6";
// if( magic > "Tier6") {
//     console.log("You are Mage");
// }else {
//     console.log("You are not Mage");
// }
// ===========================================================================
// Nested If-Statements //
// let age = 22;
// let salary = 4990;
// if(age > 21) {
//     if(salary >= 5000) {
//         console.log("Well Done Amigo");
//     }else{
//         console.log("Present The Second Payslip");
//     }
// }else {
//     console.log("You are Not Qualified");
// }
// ===========================================================================
// Correct way Of writing an If-Statement //
// let age = 22;
// let salary = 50000;
// if((age >17) && (salary >=5000)) {
//     console.log("Well Done");
// }else {
//     console.log("Thank you, for coming.");
// }
// ===========================================================================
// Switch-Case Statements //
// let monthInt = 1;
// switch(monthInt) {
//     case 1:
//         console.log("January");
//     break;
//     case 2:
//         console.log("February");
//     break;
// }
// Second Approach //
// let grade = 75;
// switch(true) {
//     case grade == 100:
//         console.log("You're awesome");
//     break;
//     case (grade >= 90) && (grade <= 99):
//         console.log("Well done");
//     break;
//     case (grade >= 75) && (grade <= 89):
//         console.log("Distinction");
//     break;
//     case (grade >= 50) && (grade <= 74):
//         console.log("Pass");
//     break;
//     case (grade <=49) && (Math.sign(grade) !=-1 ):
//         console.log("Fail");
//     break;
//     default:
//         console.log("Out of range");
// }
// ===========================================================================
// AddEventListeners //
// let grandParent = document.querySelector(".grandparent") 
// let parent = document.querySelector(".parent") 
// let child = document.querySelector(".child") 

// grandParent.addEventListener('click', e => {
//     console.table(e)
// })
// ===========================================================================
// ======String Methods====== //
// let sentence = "I Love Programming, I Love Cooking, I Love Swimming";
// console.log(sentence);
// console.log(sentence[0]);
// console.log(sentence.toLowerCase());
// console.log(sentence.split(', '));
// console.log(sentence.concat("and Malware Coding"));
// ===========================================================================
/* Loops
-forIn
-forOf
-for(; ;)
-while
-doWhile
-forEach
 */
// let numbers = [8, 9, 3, 12, 34];
// let people = {
//     name: 'Matt',
//     surname: 'Thomas',
//     email: 'matt@example.com'
// }
// To Target/Read properties an index of the Array //
// for(let numb in numbers) {
//     console.log(numb);
// } 
// console.table(numbers);
// for(let p in people) {
//     console.log(`${p} => ${people[p]}`);
// }
// To display the elements of an Array for-of //
// for(let numb of numbers) {
//     console.log(numb);
// }
// for(let p of people) {
//     console.log(people);
// }
// for(;;)-InfiniteLoop //
// for(;;) {
//     console.log("Lets find out");
// }
// for(let i = 0; i<5; i++) {
//     console.log("Silim Hubur");
// }
// While-Loop (Infinite loop) //
// let cnt = 0;
// while(cnt < 10) {
//     console.log(`Step:${cnt}`);
// }
// let cnt = 0;
// while(cnt < 10) {
//     console.log(`Step:${cnt}`);
// cnt
// }
// ===========================================================================
// Functions-How to write a normal Function(function (param) {  }) //
// function addition(numb1, numb2) {
//     console.log("Sum is: ",numb1 + numb2);
// }
// addition(4,5);
// addition(5,7);
// addition(9,23);
// Arrow-Function //
// let addition = (num1, num2)=> {
//     console.log("Sum of num1,num2: ",num1 + num2);
// }
//  addition(5,5);
//Example of Subtraction //
// let subtraction = (num1,num2) =>{
//     return num1 - num2;
//     // return num2 - num1;
// }
// console.log('Difference is:', subtraction(5,4));
// Arrow-Function 2nd Approach //
// ((numb1, numb2)=>{
//     console.log(numb1 + numb2);
// })(8, 2);
// ===========================================================================
// Factory-Function //

// ===========================================================================
// Constructor-Function //
// function Person(...details) { 
//     this.firstName = details[0];
//     this.lastName = details[1];
//     this.email = details.at(-1);
//  }
//  let person1 = new Person("Darius", "Baine", "dariusbaine@exapmle.com")
//  console.log(person1);
//  console.table(person1);
// ===========================================================================
// Ternary Operators //
// let age = 17;
// console.log( age >17 ? "You are Qualified" : "You not Qualified");
// Rest-Operator //
// function sumOf(...args) {
//     return args.reduce( (a, b)=>{
//         return a + b
//     })
// }
// console.log(sumOf(1, 2, 3));
// ===========================================================================
//  Onclick //

// ===========================================================================
// Unary Operator
function add(){
    let x = document.getElementById('first')
    .value != undefined ? document.getElementById('first').value : 10;
    let y = document.getElementById('second').value != undefined ? document.getElementById('second').value : 9;
    console.log( +x + +y);
}