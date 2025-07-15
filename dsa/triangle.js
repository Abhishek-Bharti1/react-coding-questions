// Q: Print a left-aligned triangle with n rows.
// Input: n = 4  
// Output:
// *
// **
// ***
// ****

function leftAlignedTri(n){
    let beg = '';
    for(let i=0;i<n;i++){
        for(let j=0;j<i+1;j++){
            beg += '*';
        }
        beg += '\n';
    }
    return beg;
}
console.log(leftAlignedTri(4));

// Q: Print an inverted left-aligned triangle with n rows.
// Input: n = 4  
// Output:
// ****
// ***
// **
// *
function leftAlignedTriInverted(n){
    let beg = '';
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i;j++){
            beg += '*';
        }
        beg += '\n';
    }
    return beg;
}
console.log(leftAlignedTriInverted(4));

// Q: Print a right-aligned triangle with n rows.
// Input: n = 4  
// Output:
//    *
//   **
//  ***
// ****
function rightAlignedTri(n) {
    let beg = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            beg += ' ';
        }
        for (let k = 0; k <= i; k++) {
            beg += '*';
        }
        beg += '\n';
    }
    return beg;
}

console.log(rightAlignedTri(4));

// Q: Print an inverted right-aligned triangle.
// Input: n = 4  
// Output:
// ****
//  ***
//   **
//    *
function rightAlignedTriInverted(n) {
    let beg = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            beg += ' ';
            
        }
        for (let k = 0; k <= i; k++) {
            beg += '*';
        }
        beg += '\n';
    }
    return beg;
}

console.log(rightAlignedTriInverted(4));
