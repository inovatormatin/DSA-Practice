// Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo

// input: 
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2

let array = [0, 2, 1,3,1,9,7,5,8,2,3,0, 2, 0]

const sortArr = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr;
}
console.log(sortArr(array))