//let n = 9837496543;
let n = 354;

let count = 0;

while(n != 0) {
    n = Math.floor(n/10);
    count++;
}

console.log("Count is:", count);

n = 354;
let countUsingLog = Math.floor(Math.log10(n)+1);
console.log("countUsingLog:", countUsingLog);

n = 354
console.log(`CountUsingString is ${(""+n).length}`);