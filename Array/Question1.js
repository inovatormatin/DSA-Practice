// Reverse the array

// Approach 1

let arr = [4, 5, 9,1, 2]
let n = arr.length

const reverseArr1 = (array, start, end) => {
    while(start < end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
    return array;
}

console.log(arr);
console.log("After reversing ...");
console.log(reverseArr1(arr, 0, n - 1));

// Approach 2

const reverseArray2 = (array, start, end) => {
    let temp = array[start]
    array[start] = array[end]
    array[end] = temp
    // recursive function Calling
    if(start < end){
        reverseArray2(array, start + 1, end - 1)
    }
    return array
}

console.log(arr)
console.log("After reversing ...");
console.log(reverseArray2(arr, 0, n-1))