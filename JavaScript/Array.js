let marks = [97, 86, 71, 99, 36, 88, 26, 54, 65, 38, 77, 88, 11];
console.log(marks);
console.log(marks.length);

let heroes = ["ironman", "thor", "hulk", "antman", "shaktiman", 'dr. starnge'];
console.log(heroes);

// Arrays indices

console.log(marks[6]);

// looping over an Array
//loops ----> iterable

for (let i = 0; i < marks.length; i++) {
  console.log(marks[6]);
}

for (let ii of marks) {
  console.log(marks[5]);
}
///////////////////////////////////////////

for (let el of heroes) {
  console.log(el.toUpperCase());
}
//

////////////////////////////////

////find average of marks

let sum = 0;
for (let val of marks) {
  sum = sum + val;
}
let avg = sum / marks.length;
console.log(sum);
console.log(`average marks of the class = ${avg}`);

///////////////////////////////////////

let price = [250, 645, 300, 900, 50];

//  let idx = 0;
// for(let val of price){
//     console.log(`value at index ${idx} = ${val}`);
//     let offer = val/10;
//     price[idx] = price[idx] - offer;
//     console.log(`value after offer =${price[idx]}`);
//     idx++;
// }

for (let val = 0; val < price.length; val++) {
  let offer = price[val] / 10;
  price[val] = price[val] - offer;
}
console.log(price);

//////////////////////////////////

let foodItems = ["potato",'apple','litchi','mango','banana'];
// let addItem = foodItems.push('chips','gouva');
// console.log(addItem);
// let deletedItem = foodItems.pop();
// console.log("deleted item = ",deletedItem);


console.log(foodItems.toString());
console.log(price.toString());


let dc_heroes = ['superman','batman'];

let marvelHeroes = heroes.concat(dc_heroes);
console.log(marvelHeroes);

//shift
let val = heroes.shift();
console.log("deleted = ",val);

//unshift
dc_heroes.unshift('shaktiman');
console.log(dc_heroes);

// // slice method
// console.log(heroes);
// console.log(heroes.slice(1,4));

// // splice method
let arr = [1,2,3,4,5,6,7,8,9,99,88,77,66,55,44,33,22,11,10];

// //splice
// // arr.splice(4,5,100,101,102,103,235);


// //only add element
// arr.splice(2,0,555);

//delete element
//arr.splice(3,2);

// replace element
arr.splice(3,1,1201);


let companies = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];

//companies.shift();
//companies.splice(2,1,'ola')
companies.push('Amazon');
