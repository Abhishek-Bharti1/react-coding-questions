
function flattenArray(arr){
let flat = [];
for(let el=0;el<arr.length;el++){
    if(Array.isArray(arr[el])){
        flat.push(...flattenArray(arr[el]))
    }
    else{
        flat.push(arr[el]);
    }
}
return flat;
}
console.log(flattenArray([1, [2, [3, [4]]]])); //[ 1, 2, 3, 4 ]