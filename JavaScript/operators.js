//Arithmetic Operators

let a=10
let b=5
//let c=a+b
console.log("a+b", a+b)
console.log("a-b", a-b)
console.log("a*b", a*b)
console.log("a/b", a/b)
console.log("a%b", a%b)
console.log("a**b", a**b)

//Unary Operator

a=a+1;
console.log("a=",a)

b++
console.log("b=",b)

++a;
console.log("a=",a)

--a;
console.log("a=",a)


//comparision operator


let d=15;
let e="13";
console.log("15 == 13",d == e)
console.log("15 != 13",d != e)



console.log("strict version of operator")

let f = 7
let g = "7"
console.log("f === g ", f === g)
console.log("f !== g", f!==g)

//

// alert("hello") // display one time alert 

// let name = prompt("Hiiiii")
// console.log(name);



// let num = prompt("Enter a number: ");
// if(num%5==0){
//     console.log(num," is multiple of 5 ");
// }
// else{
//     console.log(num," is not multiple of 5");
// }


let score = prompt("Enter your score: ");
let grade;

if(score>=80 && score<=100 ){
    grade="A";
}
else if(score>= 70&& score<=79 )
{
grade="B";
}
else if(score>= 60&& score<= 69){
grade="C";
}
else if(score>=50 && score<=59 )
{
grade="D";
}
else if(score>= 0&& score<= 49)
{
    grade="F";
}
else{
    console.log("Invalid score");
}
console.log(grade);