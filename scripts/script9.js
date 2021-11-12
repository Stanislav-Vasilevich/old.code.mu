// Отработка стандартных функций JavaScript
/* 1
const str = 'hello, how are you?';

const firstLetter = str[0].toUpperCase();
const result = firstLetter + str.slice(1);

console.log(result);
*/

/* 1.1
const str = 'hello, how are you?';
const firstLetter = str.substr(0, 1).toUpperCase();
const remains = str.substr(1);
const result = firstLetter + remains;

console.log(result);
*/

/* 2
const str = '123456';
const arr = str.split('');

const revers = arr.reverse();
const result = revers.join('');

console.log(result);
*/

/* 3
const str = 'http://';

if(str === 'http://') {
  console.log("правильно, строка начинается с 'http://'");
} else {
  console.log("не правильно, строка не начинается с 'http://'");
}
*/

/* 4
const str = '.html';
const result = str.includes('.html');

console.log(result);
*/