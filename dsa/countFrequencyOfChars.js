let str = 'aabbaabbccdddbbbb';
function countFrequency(str) {
  const map = new Map();
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  return map;
}
console.log(countFrequency(str));