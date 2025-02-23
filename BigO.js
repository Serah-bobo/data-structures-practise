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
//A hash table, also known as a hash map, is a data structure that pairs keys with values. 
//It's efficient for operations like insertion, deletion, and look-up because it uses a hash function to compute an index in an array, where the value is stored.
class Hashtable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    //hash function converts input value into hash code  then outputs it in unique index
    //converting key/value to numeric value
    hash(key){
        let total=0//this will hold sum ofcharacter values
        //the for loop goes through each character in the key string
        for(let i=0; i<key.length;i++){
            total+=key.charCodeAt(i);//charcodeat gets the unicode(numeric) for each charachter i
            //adds the charcter code to total so total is sum of the codes
        }
        return total%this.size//ensures the character codes are within the range 0to-1
    }
    //set adds a key-value pair in hash table
    set(key, value) {
        const index = this.hash(key); // calculate index where key-value will be stored
        let  bucket = this.table[index]; // get the bucket at the calculated index
    
        if (!bucket) {
            bucket = [[key, value]]; // initialize the bucket if it doesn't exist
          this.table[index]=bucket
        } else {
            const findItem = bucket.find(item => item[0] === key); // find if the key already exists
            if (findItem) {
                findItem[1] = value; // update value if key is found
            } else {
                bucket.push([key, value]); // push new key-value pair if key is not found
            }
        }
    }
    

    
    //get is used to retrieve a value with given key
    get(key){
        const index=this.hash(key)//find index of key using hash function
        let bucket=this.hash[index]
        if(bucket){
            const findItem = bucket.find(item => item[0] === key); 
            if(findItem){
                return findItem[1]
            }
        }
        return undefined
    }
    //delete removes a key-value pair
    delete(key){
        const index=this.hash(key)//check index
        let bucket=this.hash[index]
        if(bucket){
            const findItem = bucket.find(item => item[0] === key);
            bucket.splice(bucket.indexOf(findItem),1)
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}
const hash=new Hashtable(50)
hash.set("name","Moh")
hash.set("age","23")
hash.set("name","Bobo")
hash.set('id',"4002259")
hash.delete("age")
hash.display()
//binary tree is a tree containing att most 2 children
//a binary search tree is a binary tree where left cildren is left tan parent node and right is greater than parent node
//it has two nodes left and right
class binaryNodes{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
//bst class
class binarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
       const bNode=new binaryNodes(value)
       if(this.isEmpty()){
        this.root=bNode
       }else{
        return this.insertNode(this.root,bNode)
       }
    }
    //insernode function
    insertNode(root,bNode){
        if(bNode.value<root.value){
            if(root.left===null){
                root.left=bNode
            }else{
                return this.insertNode(root.left,bNode)
            }
        }else{
            
                if(root.right===null){
                    root.right=bNode
                }else{
                    return this.insertNode(root.right,bNode)
                
            }
        }
    }
    search(root,value){
        if(root===null){
            return false;
        }else if(value===root.value){
        return true
        }
        else if(value<root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
    //deep first search is trasversal method
    //preorder starts at root then left then right
    preOrder(root){
        if(!root)return;
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        
    }
    //inorder is left-root-right
    inorder(root){
        if(!root)return
        this.inorder(root.left)
        console.log(root.value)
        this.inorder(root.right)
    }
    //postorder left-right-root
    postorder(root){
        if(!root)return
        this.inorder(root.left)
        this.inorder(root.right)
        console.log(root.value)
    }
    //breadth first searchgoes level by level
    //implemented using queues
    Bfs(){
        if(!this.root)return;
        const Queue=[]//create queue to hold nodes
        Queue.push(this.root)//initially the queue contains root node
        while(Queue.length > 0){
            const node=Queue.shift()//removes first element in queue and assigns itto node varaible dequeue front element
            console.log(node.value)//print the dequeued value
            if(node.left)Queue.push(node.left)//if left node exists enqueue left
            if(node.right)Queue.push(node.right)
    }
}
//min and max
min(root){
    if(!root){
        return null
    }
    if(!root.left){
        return root.value
    }else{
        return this.min(root.left)
    }
}
max(root){
    if(!root){
        return null
    }
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
}
//deletion
//use recursion
delete(value){
    this.root=this.deleterac(this.root,value)
}
deleterac(root,value){
    if(root===null){
        return root//it will return null since its empty
    }
    if(value<root.value){
        root.left=this.deleterac(root.left,value)//if less trasverse to left
    }else if(value>root.value){
        root.right=this.deleterac(root.right,value)//trasverse to right
    }else{//if value found
        if(!root.left&&!root.right){
            return null//if no child nodes delete leaf
        }
        if(!root.left){
            return root.right//if one  children delete
        } else if(!root.right){
            return root.left
        }
        root.value=this.min(root.right)//when deleting node with to children use inorder successor
        root.right=this.deleterac(root.right,root.value)//inorder is the minimum value in righ subtree
    }
    return root
}


}

const bst=new binarySearchTree()
bst.insert(20)
bst.insert(25)
bst.insert(15)
bst.insert(10)
bst.insert(26)

//console.log(bst.search(bst.root,29))
//bst.preOrder(bst.root)
//bst.inorder(bst.root)
//bst.postorder(bst.root)
//bst.Bfs()
//bst.min()
//bst.max()
bst.delete(25)
bst.preOrder(bst.root)
//graph is a non-linear dst containing infinite vertices connected by edges
//either directional or undirectional
//adjacency matrix represents the row and column in a matrix
const matrix=[
    [0,1,1],
    [1,0,0],
    [1,,0,0]
]
console.log(matrix[0][1])//0 is first row 1 is second column
//adjacency list is map like dst where each vertices strores a list of adjacent vertices
const adjacencyList={
    "A":["B"],
    "B":["A","B"],
    "C":["A"]
}
console.log(adjacencyList["B"])
//adding edges and vertices
class Graph{
    constructor(){
        this.adjacencylisting={}
    }
    //adding vertex
    addVertex(vertex){
        if(!this.adjacencylisting[vertex]){//check if vertex exissts
            this.adjacencylisting[vertex]=new Set()//if not  add it as a key in adjacency list and initialize as empty set

        }
    }
    //adding edges
    addedges(v1,v2){
        if(!this.adjacencylisting[v1]){//check if vertex 1 and 2 exist
            this.addVertex(v1)//if not add them
        }
        if(!this.adjacencylisting[v2]){
            this.addVertex(v2)
        }
        this.adjacencylisting[v1].add(v2)//add v2 to neighboring of v1
        this.adjacencylisting[v2].add(v1)
    }
    //dispaly
    display(){
        for(let vertex in this.adjacencylisting){
            console.log(vertex +'->'+[...this.adjacencylisting[vertex]])
        }
    }
    //remove edge
    removeEdge(v1,v2){
        this.adjacencylisting[v1].delete(v2)
         this.adjacencylisting[v2].delete(v1)
    }
    removeVertex(vertex){
        if(!this.adjacencylisting[vertex]){
            return
        }
        for(let adjacentvertex in this.adjacencylisting){
            this.removeEdge(vertex,adjacentvertex)
        }
       delete this.adjacencylisting[vertex]
    }
}
const addve=new Graph()
addve.addVertex("D")
addve.addVertex("E")
addve.addVertex("F")
addve.addedges("D","E")
addve.addedges("E","F")
addve.removeEdge("D","E")
addve.removeVertex("D")
addve.display()
