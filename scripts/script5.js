// Циклы while и for
/* 1
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
*/

/* 2
for (let i = 11; i <= 33; i++) {
  console.log(i);
}
*/

/* 3
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}
*/

/* 4
let result = 0;

for (let i = 1; i <= 100; i++) {
  result += i
}

console.log('result: ', result);
*/

// Работа с for для массивов
/* 1
const arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
*/

/* 2
const arr = [1, 2, 3, 4, 5];
let result = 0;

for(let i = 0; i < arr.length; i++) {
  result = result + arr[i];
}

console.log(result);
*/

// Работа с for-in
/* 1
let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};

for(key in obj) {
  console.log(key + ':' + "'" + obj[key] + "'");
}
*/

/* 2
const obj = {
  'Коля': 200,
  'Вася': 300,
  'Петя': 400,
}

for (key in obj) {
  console.log(key + ' - зарплата ' + obj[key] + ' долларов.');
}
*/

// Задачи
/* 1
const arr = [2, 5, 9, 15, 0, 4];

for(let i = 0; i < arr.length; i++) {
  if(arr[i] > 3 && arr[i] < 10) {
    console.log(arr[i]);
  }
}
*/

/* 2
const arr = [3, -8, 4, 8];
let result = 0;

for(let i = 0; i < arr.length; i++) {
  if(arr[i] > 0) {
    result += arr[i];
  }
}

console.log(result);
*/ 

/* 3
const arr = [1, 2, 5, 9, 4, 13, 4, 10];

for(let i = 0; i < arr.length; i++) {
  if(arr[i] === 4) {
    console.log('Есть!');
    break;
  }
}
*/

/* 4
const arr = [10, 20, 30, 50, 235, 3000];

for(let i = 0; i < arr.length; i++) {
  let str = arr[i] + '';
  // console.log(str[0]);
  if(str[0] === '1' || str[0] === '2' || str[0] === '5') {
    console.log(str);
  }
}
*/

/* 5
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = '-';

for(let i = 0; i < arr.length; i++) {
  result = result + arr[i] + '-';
}

console.log(result);
*/

/* 6
const arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let week = '';

for(let i = 0; i < arr.length; i++) {
  if(i >= 0 && i < 5) {
    console.log(arr[i]);
    document.write(' ' + arr[i])
  }
  if(i >= 5) {
    console.log(arr[i]);
    document.write(' <b>' + arr[i] + '</b>')
  }
}
*/

/* 7
const arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

for(let i = 0; i < arr.length; i++) {
  
  if(i < 4) {
    console.log(arr[i]);
  }
  if(arr[i] === 'пт') {
    console.log('курсив: ', arr[i]);
  }
  if(i > 4 && i <= 7) {
    console.log(arr[i]);
  }
}
*/

/* 8
for (let num = 0, n = 1000; n >= 50; num++, n /= 2) {
  console.log(num, n);
}
*/