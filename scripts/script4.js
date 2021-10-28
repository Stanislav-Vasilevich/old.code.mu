// Работа с if-else
/* 1
const a = -3;

if(a === 0) {
  console.log('Верно!');
} else {
  console.log('Не верно!');
}
*/

/* 2
const a = -3;

if(a > 0) {
  console.log('Верно!');
} else {
  console.log('Не верно!');
}
*/

/* 3
const a = 1;

if(a < 0) {
  console.log('Верно!');
} else {
  console.log('Не верно!');
}
*/

/* 4
const a = -3;

if(a >= 0) {
  console.log('Верно!');
} else {
  console.log('Не верно!');
}
*/

/* 5
const a = 1;

if(a <= 0) {
  console.log('Верно!');
} else {
  console.log('Не верно!');
}
*/

/* 6
const a = -3;

if(a !== 0) {
  console.log('Верно!');
} else {
  console.log('Не верно!');
}
*/

/* 7
const a = 3;

if(a === 'test') {
  console.log('Верно!');
} else {
  console.log('Не верно!');
}
*/

/* 8
const a = 3;

if(a === '1') {
  console.log('Верно!');
} else {
  console.log('Не верно!');
}
*/

// Работа с логическими переменными
/* 1
const test = false;

if(test) {
  console.log('Верно!');
} else {
  console.log('Не верно!');
}
*/

/* 2
const test = false;

if(test !== true) {
  console.log('Верно!');
} else {
  console.log('Не верно!');
}
*/

// Работа с && (и) и || (или)
/* 1
const a = 2;

if(a > 0 && a < 5) {
  console.log('Верно!');
} else {
  console.log('Не верно!');
}
*/

/* 2
const a = -3;

if(a === 0 || a === 5) {
  console.log(a + 7);
} else {
  console.log(a / 10);
}
*/

/* 3
const a = 3;
const b = 5;

if(a <= 1 && b >= 3) {
  console.log(a + b);
} else {
  console.log(a - b);
}
*/

/* 4
const a = 1;
const b = 7;

if(a > 2 && a < 11 || b >= 6 && b < 14) {
  console.log('Верно!');
} else {
  console.log('Не верно!');
}
*/

// На switch-case
/* 1
let num = 2;
let result;

switch(num) {
  case 1:
    result = 'зима';
    break;
  case 2:
    result = 'весна';
    break;
  case 3: 
    result = 'лето';
    break;
  case 4: 
    result = 'осень';
    break;
}

console.log(result);
*/

// Задачи

/* 1
let day = 34;

if(day === 0 || day >= 32) {
  day = 1;
}
if(day >= 1 && day <= 10) {
  console.log("Это первая декада месяца");
}
if(day >= 11 && day <= 20) {
  console.log("Это вторая декада месяца");
}
if(day >= 21 && day <= 31) {
  console.log("Это третья декада месяца");
}
*/

/* 2
let month = 44;

if(month === 0 || month >= 13) {
  month = 1;
}
if(month === 3 || month === 4 || month === 5) {
  console.log("Весна");
}
if(month === 6 || month === 7 || month === 8) {
  console.log("Лето");
}
if(month === 9 || month === 10 || month === 11) {
  console.log("Осень");
}
if(month === 1 || month === 2 || month === 12) {
  console.log("Зима");
}
*/

/* 3
const string =  'abcde';

if(string[0] === 'a') {
  console.log('да');
} else {
  console.log('нет');
}
*/

/* 4
const str = '12345';

if(str[0] == 1 || str[0] == 2 || str[0] == 3) {
  console.log('да');
} else {
  console.log('нет');
}
*/

/* 5
const str = '123';

console.log(+str[0] + +str[1] + +str[2]);
*/

/* 6
const str = '123456';

if(+str[0] + +str[1] + +str[2] === +str[3] + +str[4] + +str[5]) {
  console.log('да');
} else {
  console.log('нет');
}
*/