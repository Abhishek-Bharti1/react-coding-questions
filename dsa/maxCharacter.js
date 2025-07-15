//Q.2 maximum occurence of character

function maxCharacter(str){
let maxChar = '';
let maxCount = 0;
let map = {};
for(let char of str){
    map[char] = (map[char] || 0) + 1;
    if(map[char] > maxCount){
    maxCount = map[char];
    maxChar = char;
}
}

return maxChar;
}

console.log(maxCharacter("javascript rocks")); // a