// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
delayTwoSeconds();

function delayTwoSeconds() {
  setTimeout(() => console.log(`works`), 2000);
}

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
const newVar = new Promise((resolve) => {
  resolve(1);
});

newVar.then((result) => console.log(result));

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
const secVar = new Promise((resolve, reject) => {
  reject('Promise failed');
});

secVar.catch((reject) => console.log(reject));

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
function promiseNumber(number) {
  return new Promise((resolve, reject) => {
    if (typeof number === 'number') {
      resolve(number);
    } else {
      reject('parameter must be a number');
    }
  });
}

console.log(promiseNumber(19));

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then(([first, second, third]) => {
  console.log(first);
  console.log(second);
  console.log(third);
});

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3), promiseNumber('sad')]).then(
  ([first, second, third, asd]) => {
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(asd);
  },
);

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function newFunctionAllAsync() {
  try {
    const [first, second, third, asd] = await Promise.all([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
      promiseNumber('asd'),
    ]);
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(asd);
  } catch (err) {
    console.log(err);
  }
}

async function newFunctionAllSettledAsync() {
  try {
    const [first, second, third, asd] = await Promise.allSettled([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
      promiseNumber('asd'),
    ]);
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(asd);
  } catch (err) {
    console.log(err);
  }
}

newFunctionAllAsync();
newFunctionAllSettledAsync();
