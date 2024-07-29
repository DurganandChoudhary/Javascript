// for loop

// for(let i = 0;i<=5;i++){
//     console.log("Javascript");
// }

//sum of 1 to 5

// let sum = 0;
// for(let i =1; i<=100;i++){
//     sum = sum+i;
// }

// console.log("sum = ",sum);

// for(let i=1 ; i<=6;i++){
//     console.log("i = ",i);
// }
// console.log(i)

//while loop
// let i = 1;
// while(i<=5){
//     console.log("Apna School");
//     i++;
// }

// do while loop
// let i = 1;
// do {
//   console.log("i = ", i);
//   i++;
// } while (i <= 5);

//for-of loop

// let str = "RahulKumar" ;
// for(let i of str){
//     console.log("i = ", i)
// }

// let str = 'javascript';
// let size = 0;
// for(let i of str){
//     console.log("i = ",i);
//     size++;
// }
// console.log("String size = ", size);

// for in loop

// let student = {
//   name: "Rahul Kumar",
//   age: 21,
//   cgpa: 8.5,
//   isPass: true,
// };
//  for(let key in student){
//     console.log("key = ",key, "value = ",student[key]);
//  }

// let data ={
//     name:"Rahul Kumar",
//     age:21,
//     cgp:8.5,
//     isPass:true
// };
// for(let key in data){
//     console.log("Key = ",key, "value =",data[key])
// }

//print all even number from 1 to 100

// for (let num = 0; num <= 100; num++) {
//   if (num % 2 == 0) {
//     console.log(num);
//   }
//   //console.log(num);
// }

//number guessing game

// let gameNum = 25;
// let userNum = prompt("Guess the game number");

// while(userNum != gameNum){
//     userNum = prompt("You entered wrong number. Guess again...");
// }
// console.log("Congratulations, you entered the right number");


// Strings in Javascript

// string is a sequence of character used to represent text

// let str = "Rahul kumar";

// console.log(str);
// console.log(str[3]);


//Template Literals in Javascript

// A way to have embedded expressions in strings
//`this is a template literals`

let obj = {
    item: "pen",
    price:12
};


let output = `the cost of ${obj.item} is ${obj.price} rupeeeees`;
console.log(output)

console.log("the cost of", obj.item, "is ",obj.price , "rupees");


let sentence = `This is a template literals`;
console.log(typeof sentence);



// String Interpolation
//To create string by doing substitution of placeholders

//`string text ${expression} string text`


//escape character
// let strr = "escape \ncharacter"'
// console.log("escape \ncharacter");
// console.log(strr.length);

// let str = '     abcd ABCD ';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.charAt(7));
// console.log(str.slice(4, 9))


// let userName = prompt('enter full name without spaces');
// console.log('@'+userName.toLowerCase()+userName.length)

//method 2

let fullName = prompt("enter your full name without spaces");
let userNamee = "@"+fullName+fullName.length;
console.log(userNamee);






















