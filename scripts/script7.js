// Работа с регистром символов
/* 1
const str = 'js';

console.log(str.toUpperCase());
*/

/* 2
const str = 'JS';

console.log(str.toLowerCase());
*/

// Работа с length, substr, substring, slice. Работа с indexOf
/* 1
const str = 'я учу javascript!';

console.log(str.length);
*/

/* 2
const str = 'я учу javascript!';

console.log(str.substr(2, 3));
console.log(str.substr(6, 10));
console.log(str.substring(2, 6));
console.log(str.substring(6, 16));
console.log(str.slice(2, 6));
console.log(str.slice(6, 16));
*/

/* 3
const str = 'я учу javascript!';

console.log(str.indexOf('учу'));
*/

/* 4
const str = 'hello bro!';
const n = 5;
let result;

if(str.length > n) {
  result = str.substr(0, n) + '...'
} else {
  result = str;
}

console.log(result);
*/

// Работа с replace
/* 1
const str = 'Я-учу-javascript!';
const result = str.replace(/-/g, '!');

console.log(result);
*/

// Работа с split
/* 1
const str = 'Я учу javascript!';

console.log(str.split(' '));
*/

/* 2
const str = 'Я учу javascript!';

console.log(str.split(''));
*/

/* 3
const date = '2025-12-31'; // '31.12.2025'
const arr = date.split('-');
const result = arr[2] + '.' + arr[1] + '.' + arr[0];

console.log(result);
*/

// Работа с join
/* 1
const arr = ['я', 'учу', 'javascript', '!'];
const result = arr.join('+');

console.log(result);
*/

// Задачи
/* 1
const str = 'world';
const firstLetter = str.substr(0, 1);
const result = firstLetter.toUpperCase() + str.substr(1);

console.log(result);
*/

/* 2
const str = 'hay, how are you?';
const arr = str.split(' ');
let result = '';

for(let i = 0; i < arr.length; i++) {
  const firstLetter = arr[i].substr(0, 1);
  const letterUpperCase = firstLetter.toUpperCase();
  const readyWord = letterUpperCase + arr[i].substr(1);

  result += readyWord + ' ';
}

console.log(result);
*/

/* 3
const str = 'var_test_text';
const arr = str.split('_');
let newArray = [];

for (let i = 0; i < arr.length; i++) {
  const firstLetterUpperCase = arr[i].substr(0, 1).toUpperCase();
  const word = firstLetterUpperCase + arr[i].substr(1);
  newArray.push(word);
}

const allWordsUpperCase = newArray.join('');
const firstLetterLowerCase = allWordsUpperCase.substr(0, 1).toLowerCase();
const result = firstLetterLowerCase + allWordsUpperCase.substr(1);

console.log(result);
*/