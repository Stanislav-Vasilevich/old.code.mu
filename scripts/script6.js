// Работа с %
/* 1
const a = 10;
const b = 5;

console.log(a % b);
 */

/* 2
const a = 11;
const b = 5;
const c = a % b;

if(c === 0) {
  console.log('Делится, остаток ' + c);
} else {
  console.log('Делится с остатком ' + c);
}
*/

// Работа со степенью и корнем
/* 1
const st = Math.pow(2, 10);
const newSt = 2 ** 10;

console.log(st);
console.log(newSt);
*/

/* 2
const sqrt = Math.sqrt(245);

console.log(sqrt);
*/

/* 3
const arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for(let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

console.log(Math.sqrt(sum));
*/

// Работа с функциями округления
/* 1
let num = 379;
let a = Math.sqrt(num);
const b = Math.round(a);
const c = a.toFixed(1);
const d = a.toFixed(2);

console.log('квадрат числа: ', a);
console.log('до целых: ', b);
console.log('до десятых: ', c);
console.log('до сотых: ', d);
*/

/* 2
const num = 587;
const sqr = Math.sqrt(num);
const a = Math.ceil(sqr);
const b = Math.floor(sqr);

const obj = {
  ceil: a,
  floor: b
}

console.log('квадрат числа: ', sqr);
console.log('округление в большую сторону: ', obj.ceil);
console.log('округление в меньшую сторону: ', obj.floor);
*/

// Нахождение максимального и минимального числа
/* 1
const arr = [4, -2, 5, 19, -130, 0, 10];
const a = Math.max.apply(null, arr);
const b = Math.min.apply(null, arr);

console.log(a);
console.log(b);
*/

// Работа с рандомом
/* 1
const num = Math.round(Math.random() * 100);

console.log(num);
*/

/* 2
let arr = [];

for(let i = 0; i < 10; i++) {
  arr[i] = Math.round(Math.random() * 10);
}

console.log(arr);
*/

// Работа с модулем
/* 1, 2
const a = 3;
const b = 5;
const c = Math.abs(a - b);

// Задачи
/* 1
const arr = [12, 15, 20, 25, 59, 79];
let num = 0;

for(let i = 0; i < arr.length; i++) {
  num = num + arr[i];
}
const length = arr.length;
const middle = num / length;

console.log(middle);
*/

/* 2
const num = 10;
let count = 1;

for(let i = 1; i <= num; i++) {
  count = count * i

}

console.log(count);
*/