//time complexity is amount of time taken by an algorithm 
//to run as a function of input size
//space complexity is the amount of memory
//Big-O describes complexity of an algorithm using algebraic terms
//O(n)-linear time complexity mostly associated with loops that iterate
//the below example is a O(n) linear complexityinput grows space also
const summation=(n)=>{
    let sum=0;
    for(i=1; i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(summation(4));
//O(1)constant complexity just runs once when executed constant space complexity
const Multiplier=(j)=>{
    return(j*(j+1)/2)
}
console.log(Multiplier(3))
//O(n^2)-quadratic if there are two nested loops
//O(n^3)-cubic if there are three nested loops
//O(logn)-logarithimic if input value reduces by a half space grows but not same as input
/*
Object-O
remove-O(1),
insert-O(1),
access-O(1),
search-O(n),
object.keys-O(n),
object.value-O(n),
object.entries-O(n)
*/
/*
array-O
insert/remove at end-O(1)
insert/remove at beginning-O(n)every index has to reset
push/pop-O(1)
slice/concat/shift/unshift/splice-O(n)
Foreach/filter/reduce/map-O(n)
*/
const Fibonacci=(k)=>{
    let fib=[0,1];
    for(i=2;i<=k;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib.slice(0,k)
}
console.log(Fibonacci(5))
//BigO from above is O(n)