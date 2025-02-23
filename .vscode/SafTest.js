//two sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map={};// hash map to store indices
    for(i=0;i<nums.length;i++){//loop through array
        let compliment=target-nums[i];//find number to reach target
        if(map.hasOwnProperty(compliment)){
            //found the pair, return indices
            return[map[compliment],i]
        }
        map[nums[i]]=i//store current nums with indices
    }
    return[];//if no solution found
    
};

//cyclic rotation 
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    let n=A.length;
    K=K % n;
    return[...A.slice(n-K), ...A.slice(0,n-K)]
}
//odd occurrence
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    return A.reduce((acc,num)=>acc ^ num,0)
}
//frog jump 
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // Implement your solution here
    return Math.ceil((Y-X) /D)
}
//missing element
function solution(A) {
    let N = A.length + 1; // Because one number is missing
    let expectedSum = (N * (N + 1)) / 2; // Sum formula
    let actualSum = A.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}
//total sum
function solution(A) {
    let totalSum = A.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;
    let minDiff = Infinity;

    for (let P = 0; P < A.length - 1; P++) {
        leftSum += A[P];
        let rightSum = totalSum - leftSum;
        let diff = Math.abs(leftSum - rightSum);
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}

// Example Test Case
console.log(solution([3, 1, 2, 4, 3])); // Output: 1

//binary
function solution(N) {
    let binaryStr = N.toString(2); // Convert to binary
    let maxGap = 0;
    let currentGap = 0;
    let foundOne = false; // Track if we've seen a '1' to start counting gaps

    for (let char of binaryStr) {
        if (char === '1') {
            if (foundOne) {
                maxGap = Math.max(maxGap, currentGap); // Update max gap
            }
            foundOne = true; // Start tracking gaps after first '1'
            currentGap = 0;  // Reset gap count
        } else {
            if (foundOne) {
                currentGap++; // Count zeros only after first '1'
            }
        }
    }

    return maxGap;
}

//greedy
function solution(A, B) {
    let N = A.length;
    if (N === 0) return 0;

    let count = 1; // At least one segment is selected
    let lastEnd = B[0]; // First segment's end

    for (let i = 1; i < N; i++) {
        if (A[i] > lastEnd) { // If non-overlapping
            count++;
            lastEnd = B[i]; // Update last selected segment's end
        }
    }

    return count;
}
//2rope
function solution(K, A) {
    let count = 0;
    let currentLength = 0;

    for (let i = 0; i < A.length; i++) {
        currentLength += A[i]; // Accumulate adjacent ropes

        if (currentLength >= K) {
            count++;          // Count a valid rope
            currentLength = 0; // Reset for the next segment
        }
    }

    return count;
}


