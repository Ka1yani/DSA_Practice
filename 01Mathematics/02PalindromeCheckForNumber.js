let n = 78987
//let reverse = 0
const getReverseNumber = (number, reverse) => {
    if(number === 0) return reverse;
    reverse = reverse*10 + Math.floor(number % 10)
    return getReverseNumber(Math.floor(number / 10), reverse);
}
//console.log("Reverse Number is ", getReverseNumber(n,0));
if(getReverseNumber(n, 0) === n) console.log("Number is Palindrome")
else console.log("Number is not Palindrome")

