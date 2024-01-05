//let n = 9837496543;
let n = 354;

let count = 0;
//O(digitsin N)
//Iterative approach
while(n != 0) {
    n = Math.floor(n/10);
    count++;
}

console.log("Count is:", count);

//O(1)
n = 354;
let countUsingLog = Math.floor(Math.log10(n)+1);
console.log("countUsingLog:", countUsingLog);

//O(1)
n = 354
console.log(`CountUsingString is ${(""+n).length}`);

//Recursive approach
const countDigit = (number) => {
    if(number === 0) return 0;
    return 1+getReverseNumber(Math.floor(number/10));
}

console.log("Digits using Recursive approach is : ", getReverseNumber(354));