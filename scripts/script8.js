// Работа с concat
/* 1
const arr = [1, 2, 3];
const newArr = arr.concat(4, 5, 6);

console.log(newArr);
*/

// Работа с reverse
/* 1
const arr = [1, 2, 3];
const newArr = arr.unshift(4, 5, 6);

console.log(arr);
*/

// Работа с push, unshift
/* 1
const arr = ['js', 'css', 'jq'];

console.log(arr[0]);
*/

/* 2
const arr = ['js', 'css', 'jq'];

console.log(arr[arr.length - 1]);
*/

// Работа с shift, pop
/* 1
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(0, 3);

console.log(arr);
console.log(newArr);
*/

/* 2
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(3, 5);

console.log(arr);
console.log(newArr);
*/

// Работа с slice
/* 1
const arr = [1, 2, 3, 4, 5];
const newArr = arr.splice(1, 4, 4, 5);

console.log(arr);
console.log(newArr);
*/

/* 2
const arr = [1, 2, 3, 4, 5];
const newArr = arr.splice(1, 3);

console.log(arr);
console.log(newArr);
*/

/* 3
const arr = [1, 2, 3, 4, 5];
const newArr = arr.splice(3, 0, 'a', 'b', 'c');

console.log(arr);
*/

/* 4
const arr = [1, 2, 3, 4, 5];
const newArr = arr.splice(1, 0, 'a', 'b');
const newArr2 = arr.splice(6, 0, 'c');
const result = arr.splice(8, 0, 'e');

console.log(arr);
*/

// Работа с sort
/* 1
const arr = [3, 4, 1, 2, 7];

console.log(arr.sort());
*/

// Работа с Object.keys
/* 1
const obj = {js:'test', jq: 'hello', css: 'world'};
const arr = Object.keys(obj);

console.log(arr);
*/