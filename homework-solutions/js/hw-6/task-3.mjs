/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/
let unique;

let evenNumbers = [];
let oddNumbers = [];
let tenSequentialNumbers = [];

for (let i = 1; i <= 10; i++) {
  tenSequentialNumbers.push(i);

  if (i % 2 === 0) {
    evenNumbers.push(i);
  } else {
    oddNumbers.push(i);
  }
}

const testArray = [...tenSequentialNumbers, ...evenNumbers, ...oddNumbers];

testArray.forEach((value) => {
  if (testArray.indexOf(value) !== testArray.lastIndexOf(value)) {
    testArray.splice(testArray.lastIndexOf(value), 1);
  }
});

unique = testArray;

export { unique };
