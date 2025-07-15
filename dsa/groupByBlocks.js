//Q.1 = Group each by block

const block = ["red", "red", "green", "yellow", "gray", "gray", "violet"];


function groupByBlocks(blocks) {
    let group = [];  //intialize empty to collect each block
    let map = null;  //it is a current block
    for (let block of blocks) {
        if (map === null || map.color !== block) {
            map = { color: block, count: 1 } //if block doesn't exists
            group.push(map); //push it to group

        }else{
         //if exists increase the count
            map.count++;
        }
    }
    return group;

}
console.log(groupByBlocks(block));

// [
//   { color: 'red', count: 2 },
//   { color: 'green', count: 1 },
//   { color: 'yellow', count: 1 },
//   { color: 'gray', count: 2 },
//   { color: 'violet', count: 1 }
// ]