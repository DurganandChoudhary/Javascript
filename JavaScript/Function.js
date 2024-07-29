// function myFunction() {
//   console.log("Welcome to Iter");
//   console.log("We are learning in ITER");
// }
// myFunction();

////////////
function myFunction(msg, n) {
  //parameter--> input
  console.log(msg * 5);
}
myFunction("I love Javascript", 100); //argument //NaN Not a Number

// ////////////////////

function sum(x, y) {
  // console.log(x+y)
  s = x + y;
  return s;
}

let val = sum(3, 4);
console.log(val);

// ///////////////
// Arrow function

const arrowSum = (a, b) => {
  return a + b;
};

const arrowMul = (x, y) => {
  return x * y;
};

// /////
const printHello = () => {
  console.log("Hello");
};

// /////////////////////////////

// function vowelsCount(str) {
//     let count = 0;
//   for (const char of str) {
//     if(char === 'a'||char == 'e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U'){
//         count++;
//     }
//   }
//   console.log(count);
// }

// Using Arrow Functions

const countVowels = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u" ||
      char == "A" ||
      char == "E" ||
      char == "I" ||
      char == "O" ||
      char == "U"
    ) {
      count++;
    }
  }
  console.log(count);
};

console.log("_____________________________");

// forEach Loop in Array

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(function printVal(val) {
  console.log(val);
});

let arr1 = ["phone", "mobile", "telephone"];
arr1.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr1);
});

// Question square

let arr2 = [4, 5, 6, 7, 8, 9];
arr2.forEach((val) => {
  console.log(val * val);
});

// Map method

let newwArr = arr2.map((val) => {
  return val ** 2;
});

console.log(newwArr);

// Filter method

let arr3 = [
  2, 3, 4, 5, 6, 7, 8, 9, 99, 88, 77, 66, 55, 44, 33, 22, 24, 65, 67, 98,
];
let newArrr = arr3.filter((val) => {
  return val % 2 == 0;
});
console.log(newArrr);

// _______________________________
console.log("__________________Reduce method________________");
//___________________________________

let arr4 = [10,20,101,30,40];
const output = arr4.reduce((res,curr)=>{
    return res+curr;
})
console.log(output);   //100


// finding largest number

const output2 = arr4.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
})
console.log(output2);





//Practice question

let marks = [87,93,64,99,86,94];
let newMarks = marks.filter((val)=>{
    return val> 90;
})
console.log(newMarks);



/////////////////////////////////
let n = prompt("Enter a number : ");

let arr6 = [];
for(let l=0;l<=n;l++){
    arr6[l-1] = l;
}
console.log(arr6);

let summ = arr6.reduce((prev,curr)=>{
    return prev+curr;
})
console.log("sum = ",summ);

// ///
 
let product = arr6.reduce((prev,curr)=>{
    return prev*curr;
})
console.log('product = ',product);










