// Работа с массивами
/* 1
const arr = ['a', 'b', 'c'];

alert(arr);
*/

/* 2
const arr = ['a', 'b', 'c'];

console.log(arr[0], arr[1], arr[2]);
*/

/* 3
const arr = ['a', 'b', 'c', 'd'];

console.log("'" + arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3] + "'");
*/

/* 4
const arr = [2, 5, 3, 9];

const result = arr[0] * arr[1] + arr[2] * arr[3];

console.log(result);
*/

// Объекты (ассоциативные массивы)
/* 1
const obj = {a: 1, b: 2, c: 3};

console.log(obj.c, obj['c']);
*/

/* 2
const obj = {Коля: '1000', Вася: '500', Петя: '200'};

console.log(obj['Петя'], obj['Коля']);
*/

/* 3
const week = {
  '1': 'понедельник',
  '2': 'вторник',
  '3': 'среда',
  '4': 'четверг',
  '5': 'пятница',
  '6': 'суббота',
  '7': 'воскресенье',
}

console.log(week['3']);
*/

/* 4
const week = {
  '1': 'понедельник',
  '2': 'вторник',
  '3': 'среда',
  '4': 'четверг',
  '5': 'пятница',
  '6': 'суббота',
  '7': 'воскресенье',
}
const day = '3';

console.log(week[day]);
*/

// Многомерные массивы
/*
const arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];

console.log(arr[1][0]);
*/

/* 2
const obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};

console.log(obj.js[0]);
*/

/* 3
const langs = {
  ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
}

console.log(langs.ru[0]);
console.log(langs.en[2]);
*/

/* 5
const langs = {
  ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
}

const lang = 'ru';
const day = 4;

console.log(langs[lang][day]);
*/