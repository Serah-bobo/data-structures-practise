//time complexity is amount of time taken by an algorithm 
//to run as a function of input size
//space complexity is the amount of memory
//Big-O describes complexity of an algorithm using algebraic terms
//O(n)-linear time complexity mostly associated with loops that iterate
//the below example is a O(n) linear complexity input grows space also
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
//js algorithms
//linear search Big O(n)
const searchAlg=(arr,target)=>{
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1;
}
const numbers=[3,6,20,50,80,3000];
console.log(searchAlg(numbers,8))
//binary search algorithm,works by halving it is O(logn)
const BinarySearch=(arr,target)=>{
    let leftIndex=0;
    let rightIndex=arr.length-1;

    while(leftIndex<=rightIndex){
        let midIndex=Math.floor((leftIndex+rightIndex)/2)
        if(target===arr[midIndex]){
            return midIndex
        }
        if(target<arr[midIndex]){
            rightIndex=midIndex-1;
        }else{
            leftIndex=midIndex+1
        }
    }
    return -1
}
const arrayNumbers=[2,5,15,10,4,8,11,13]
console.log(BinarySearch(arrayNumbers,11))
//recursive binary search BigO(logn)
const recursiveBinary=(arr,target)=>{
return Search(arr,target,0,arr.length-1)
}
const Search=(arr,target,leftIndex,rightIndex)=>{
    if(leftIndex>rightIndex){
        return-1
    }
    let midIndex=Math.floor((leftIndex+rightIndex)/2)
        if(target===arr[midIndex]){
            return midIndex
        }
        if(target<arr[midIndex]){
            return Search(arr,target,leftIndex,midIndex-1)
        }else{
            return Search(arr,target,midIndex+1,rightIndex)
        }
}
console.log (recursiveBinary([2,4,6,7,9,20,24],7))
//Sorting algorithm
//1.Bubble sort,BigO(n^2)
const bubbleSort=(arr)=>{
    let swapped;
    do{
         swapped=false;
        for(let i=0; i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swapped=true
            }
        }
    }
    while(swapped)
}
const arr=[2,6,9,10,5,1,7,3,8,4]
bubbleSort(arr)
console.log(arr)
//insertion sort algorithm BigO(n^2)
const Insertion=(arr)=>{
for(let i=0;i<arr.length;i++){
    let current=arr[i];
    let j=i-1;
    while(j>=0 && arr[j]>current){
        arr[j+1]=arr[j]
        j--;
    }
    arr[j+1]=current;
}
return arr;
}
const arry=[2,6,9,10,5,1,7,3,8,4]
Insertion(arry)
console.log(arry)
//quick sort algorithm BigO(n)
const quickSort=(arr)=>{
    if(arr.length<=1){
        return arr
    }
    let left=[];
    let right=[];
    let pivot=arr[arr.length-1];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return[...quickSort(left),pivot,...quickSort(right)]
}
const qarr=[-6,20,-2,3]

console.log(quickSort(qarr))