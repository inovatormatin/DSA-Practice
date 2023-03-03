// Maximum and minimum of an array using minimum number of comparisons

// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//               Maximum element is: 9

// Input: arr[] = {22, 14, 8, 17, 35, 3}
// Output:  Minimum element is: 3
//               Maximum element is: 35

let arr = [22, 14, 3, 17, 35, 8, 66, 0, 99, 23];

const getMinMax = (arr) => {
    let n = arr.length;
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i < n;i++){
        if(arr[i] < arr[i - 1] && arr[i] < min){
            min = arr[i]
        } else if(arr[i] > arr[i - 1] && arr[i] > max){
            max = arr[i]
        }
    }
    console.log("Minimum number is : ", min)
    console.log("Maximum number is : ", max)
}

getMinMax(arr);