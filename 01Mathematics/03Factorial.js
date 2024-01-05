const fact = (n) => {
    let result= n;
    for( let i = n; i > 1; i--) {
        result*= i-1;
    }
    return result;
}

console.log("factorial is", fact(5) );


const factRec = (n) => {
    if( n === 0 ) return 1;
    return n*factRec(n-1);
}

console.log("Factorial using recursion is :", factRec(5));