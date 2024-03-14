


const nums = [1, 4, 6, 7, 9, 8, 10, 14, 25, 23]

for (let i = 0; i < nums; i++) {
    if (i % 2 === 0) {
        console.log(i + "is odd")
    } else {
        console.log(i + "is even")
    }
}



const num= [1, 4, 6, 7, 9, 8, 10, 14, 25, 23];
const odd = [];
const even = [];

for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
        even.push(nums[i]);
    } else {
        odd.push(nums[i]);
    }
}

console.log(odd);
console.log(even);




const numbers = [];
let sum = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
        numbers.push(i);
        sum += i;
    }
}

console.log("Numbers:", numbers);
console.log("Sum:", sum);



// const numberss=[]

// for( let i=0;i<10;i++){
//     const number=Number(prompt("enter num : "))
//     numberss.push(number)
//     sum +=
// }
let x=Number(prompt("how many tickets do u want ? : "))
const tkt=[]
for (let i=0;i<x;i++){
    const name=prompt("your name :")
    const age=Number(prompt("ur age : "))

}

function Ticket(code){
    this.code=code
}

for (let i = 0; i < 5; i++) {
    code += Math.floor(Math.random() * 10)}



tkt.push(code)