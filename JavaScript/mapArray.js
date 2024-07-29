// const oldArr = ['apple','banana','grapes','mango'];

// console.log(oldArr[1]);

// console.log(oldArr[2])

// const newArr = oldArr.map(function(cvalue , index){
//    return index + ":"+cvalue + ' fruit';
// })
// console.log(newArr);

const items = [
  { id: 1, name: "Apple", color: "red" },
  { id: 2, name: "Banana", color: "yellow" },
  { id: 3, name: "Cherry", color: "red" },
  { id: 4, name: "Date", color: "brown" },
  { id: 5, name: "Elderberry", color: "black" },
];

//   console.log(items[1].name)

const newItem = items.map((cvalue) => {
  return `My favourite fruit is ${cvalue.name}. The color of ${cvalue.name} is ${cvalue.color}`;
});
console.log(newItem);

document.getElementById('h').innerHTML=newItem;
