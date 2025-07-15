const arr = [1, 4, 5, 8, 9, 10];
const secondLargest = (arr) => {
    let max = 0;
    let seclargest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > seclargest && arr[i] !== max) {
            seclargest = arr[i];
        }
    }
    return seclargest;
}
console.log(secondLargest(arr));