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
//merge sort O(logn)
//cartesian product O(n*m)
const cartesianProduct=(arr1,arr2)=>{
    let result=[]
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            result.push([arr1[i],arr2[j]])
        }
    }
    return result;
}
const A=[1,2]
const B=[3,4,5]
console.log(cartesianProduct(A,B))
//GCD using Eucliddean O(logn)
const Gcd=(a,b)=>{
    while(b!==0){
        let temp=b;
        b=a%b
        a=temp;
    }
    return a
}
console.log(Gcd(48,18))
//data structures is way to store and organize data so as to be used efficiently

const obj={
    name:"Moh",
    age:25,
    sayMyName:function(){
        console.log(this.name)
    }
    
}
console.log(obj.age)
obj.sayMyName()
//set
const set=new Set([1,2,3])
set.add(4)
set.delete(1)
console.log(set.has(1))
console.log(set.size)
for(const item of set){
    console.log(item)
}
//map
const map=new Map([["a",1],["b",2]])
map.set("c",4)
map.delete("c")
console.log(map.size)
    for([key,value] of map){
        console.log(`${key}:${value}`)
    }
 //stack is a sequential collection of elements that follows last in first out(LIFO)
//QUEUE FIRS IN FIRST OUT the dequeue is O(n)
class Queue{
    constructor(){
        this.items=[20,30,40]
    }
    //add item to end
    enqueue(element){
        this.items.push(element)
    }
    //remove first item
    dequeue(){
        return this.items.shift()
    }
    isempty(){
        return this.items.length===0
    }
    //get value of first item
    peek(){
        if(!this.isempty){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}
const queue=new Queue()
queue.enqueue(50)
queue.print()
console.log(queue.size())
console.log(queue.dequeue())
//queue as a object O(1)
class QUEUE{
    constructor(){
        this.items={}
        this.front=0//pointer to front if queue
        this.rear=0//pointer to back of queue
    }
    //adding element at the end
    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }
    //remove element at the front of queue
    dequeue(){
        const item=this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    isEmpty(){
        return this.rear-this.front===0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear-this.front
    }
    print(){
        console.log(this.items)
    }
}
const qUeue=new QUEUE()
qUeue.enqueue(20)
qUeue.enqueue(30)
qUeue.enqueue(40)
qUeue.enqueue(50)
console.log(qUeue.print())
console.log(qUeue.dequeue())
console.log(qUeue.size())
console.log(qUeue.peek())
//a circular queue the last position is connected to first position forming a circle
//this alllows us to reuse  empty spaces created by dequeue memory-efficient
class circulaQueue{
    constructor(capacity){
        this.items=new Array(capacity)//array holding the items
        this.capacity=capacity//maximum no of the queue
        this.currentLength=0//queue starts at zero
        this.rear=-1
        this.front=-1//queue is empty
    }
    isFull(){
        return this.currentLength===this.capacity
    }
    isEmpty(){
        return this.currentLength===0
    }
    enqueue(element){
        if(!this.isFull){
            this.items[this.rear]=element
            this.rear++
            this.currentLength++
            if(this.front===-1){
                this.frot=this.rear
            }
        }
    }
    print(){
        return console.log(this.items)
    }
}
const circular=new circulaQueue(4)
circular.enqueue(45)
circular.print()
//linked list nodes are stored in a sequence itcontains a value and pointer to next node
//this class defines a single node
//the value is the value stored in node
//next is a  next pointer whic is null since there is no linked node yet
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
//the head is a pointer to which is null
//heasd first pointer
class linkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const newNode=new Node(value)//create new node
        // if list is empty
        if(this.isEmpty()){
            this.head=newNode//if empty new node becomes  the head
        }else{
            newNode.next=this.head//if not empty we link new node to the head
            this.head=newNode//we make the new node the head
        }
        this.size++//increment length
    }
    //adding element at end of  list
    append(value){
        const newnode=new Node(value)
        if(this.isEmpty()){
            this.head=newnode//if empty the new node becomes head
        }else{
            let current=this.head//start at head
            while(current.next!==null){
                current=current.next//move to next node
            }
            current.next=newnode//link newnode to last node
        }
        this.size++
    }
    delete(value){
        if(this.isEmpty()){
            return null//if empty return null
        }
        if(this.head.value===value){
            this.head=this.head.next//if tatget is at head delete then make next node to be head
            this.size--//decrement size
          
        }
        let current = this.head;//start at head
        //trasverse till next pointer is null
        while (current.next !== null) {
            if (current.next.value=== value) {
                current.next = current.next.next;//if target is found delete then point to next value
                return;
            }
            current = current.next;
        }
    }
    search(value) {
        let current = this.head;  // Start at the head of the list
        
        // Traverse the list until we either find the value or reach the end of the list
        while (current !== null) {
            if (current.value === value) {  // If we find the value
                return current;              // Return the node containing the value
            }
            current = current.next;  // Move to the next node in the list
        }
        
        return null;  // Return null if the value is not found
    }
    reverse(){
        let previous=null
        let current=this.head
        let next=null
        while(current!==null){
            next=current.next
            current.next=previous
            previous=current
            current=next
        }
        this.head=previous
    }
    print(value) {
        let current = this.head;//start at head
        const elements = [];//store in empty array
        //while not empty
        while (current !== null) {
            elements.push(current.value);//push value to the array
            current = current.next;//move to next node
        }
        console.log(elements.join(' -> '));
    }
}
const list=new linkedList()
console.log(list.getSize())
list.append(40)
list.append(15)
list.prepend(12)
list.prepend(87)
list.delete(87)
list.delete(40)
list.prepend(34)
list.append(17)

console.log(list.search(15))
list.print()
list.reverse()
list.print()

