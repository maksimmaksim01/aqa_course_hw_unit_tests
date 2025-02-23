/**
 * Создать строку с числами от 1 до 100.
 * Если число делится на 3 – добавить строку `"число - делится на 3"`.
 * Если число делится на 5 – добавить строку `"число - делится на 5"`.
 * Если число делится и на 3, и на 5 – добавить строку `"число - делится и на 3 и на 5"`.
 * Каждая следующая строчка начинается с новой строки.
 * Переменная `fizzBuzzResult` уже создана и содержит пустую строку.
 * Ожидаемый результат (фрагмент):
 * 1
 * 2
 * 3 - делится на 3
 * 4
 * 5 - делится на 5
 * ...
 * 15 - делится и на 3 и на 5
 * ...
 * 100 - делится на 5
 */
let fizzBuzzResult = '';
let numbers = [];

for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}

numbers.forEach((number) => {
  if (number % 5 === 0 && number % 3 === 0) {
    fizzBuzzResult = fizzBuzzResult.concat(`${number} - делится и на 3 и на 5\n`);
  } else if (number % 3 === 0) {
    fizzBuzzResult = fizzBuzzResult.concat(`${number} - делится на 3\n`);
  } else if (number % 5 === 0 && number != 100) {
    fizzBuzzResult = fizzBuzzResult.concat(`${number} - делится на 5\n`);
  } else if (number === 100) {
    fizzBuzzResult = fizzBuzzResult.concat(`${number} - делится на 5`);
  } else {
    fizzBuzzResult = fizzBuzzResult.concat(`${number}\n`);
  }
});

console.log(fizzBuzzResult);

export { fizzBuzzResult };
