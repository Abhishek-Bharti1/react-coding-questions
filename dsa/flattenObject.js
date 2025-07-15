let obj = {
  a: 1,
  b: { c: 2, d: { e: 3 } }
}

function flattenObject(obj, prefix = '', result = {}) {
  for (let key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flattenObject(obj[key], fullKey, result);
    } else {
      result[fullKey] = obj[key];
    }
  }

  return result;
}
console.log(flattenObject(obj)); 
//{ a: 1, 'b.c': 2, 'b.d.e': 3 }

// 1st level:
// prefix = "", key = "a" → fullKey = "a"

// 2nd level (entering b):
// prefix = "", key = "b" → fullKey = "b"

// obj[key] is object ⇒ recurse:

// prefix = "b" now

// 3rd level (inside b.c and b.d):
// key = "c" → fullKey = "b.c"

// key = "d" → fullKey = "b.d"

// 4th level (inside b.d.e):
// prefix = "b.d", key = "e" → fullKey = "b.d.e"