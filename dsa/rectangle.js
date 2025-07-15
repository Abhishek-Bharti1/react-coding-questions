// Q: Print a solid rectangle of n rows and m columns.
// Input: n = 3, m = 5  
// Output:
// *****
// *****
// *****

function rectangle(n, m) {
     let beg = '';
    for (let i = 0; i < n; i++) {
       for (let j = 0; j < m; j++) {
            beg += '*'
        }
        beg += '\n'
    }
        return beg;
}
console.log(rectangle(3, 5));

// Q: Print a hollow rectangle of n rows and m columns.
// Input: n = 4, m = 5  
// Output:
// *****
// *   *
// *   *
// *****

function hollowRectangle(n, m) {
     let beg = '';
    for (let i = 0; i < n; i++) {
       for (let j = 0; j < m; j++) {
            if(i===0 || i===n-1 || j===0 || j===m-1){
                beg += '*'
            }else{
                beg+=' '
            }
        }
        beg += '\n'
    }
        return beg;
}
console.log(hollowRectangle(4, 5));