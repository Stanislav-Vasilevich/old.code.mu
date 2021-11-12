// Отработка циклов
/* 1
for(let i = 0; i <= 100; i++) {
  console.log(i);
}
*/

/* 2
for(let i = 100; i >= 1; i--) {
  console.log(i);
}
*/

/* 3
for(let i = 2; i <= 100; i += 2) {
  console.log(i);
}
*/

/* 4
const arr = [];

for(let i = 0; i < 10; i++) {
  arr.push('X');
}

console.log(arr)
*/

/* 5
const arr = [];

for(let i = 0; i < 10; i++) {
  arr[i] = i;
}

console.log(arr);
*/

/* 6
const arr = [];

for(let i = 0; i < 10; i++) {
  let random = Math.random().toFixed(2);

  arr[i] = random;
}
console.log(arr);
*/

/* 7
const arr = [];
for(let i = 0; i < 10; i++) {
  let random = Math.round(Math.random() * 10);

  arr[i] = random;
}

console.log(arr);

*/

/* 8
const arr = [11, 3, 8, 22, 56];
const newArr = [];

for(let i = 0; i < arr.length; i++) {
  if(arr[i] > 0 && arr[i] < 10) {
    newArr[i] = arr[i];
  }
}

console.log(newArr);
*/

/* 9
const arr = [66, 43, 23, 9, 5, 5];

for(let i = 0; i < arr.length; i++) {
  if(arr[i] === 5) {
    console.log('Есть');
    break;
  }
}
*/

/* 10
const arr = [5, 2, 1, 0];
let sum = 0;

for(let i = 0; i < arr.length; i++) {
  sum += + arr[i];
}

console.log(sum);
*/

/* 11
const arr = [2, 2];
let sum = 0;

for(let i = 0; i < arr.length; i++) {
  sum += Math.pow(arr[i], 2);
}

console.log(sum);
*/

/* 12
const arr = [20, 10];
let middle = 0;

for(let i = 0; i < arr.length; i++) {
  middle += arr[i] / 2;
}

console.log(middle);
*/