/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/

function mergeArrays(...arrays) {
  let result = [];
  for (const array of arrays) {
    for (const el of array) {
      result.push(el);
    }
  }
  return result;
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */

function devideBy(sentence) {
  const sentenceWords = sentence.split(' ');

  deleteEmptyValues();

  function deleteEmptyValues() {
    if (sentenceWords.indexOf('') !== -1) {
      for (let i = 0; i < sentenceWords.length; i++) {
        if (sentenceWords[i] === '') {
          sentenceWords.splice(i, 1);
        }
      }
      deleteEmptyValues();
    }
  }

  for (let i = 0; i < sentenceWords.length; i++) {
    const letterArray = sentenceWords[i].split('');

    if (i === 0) {
      for (let j = 0; j < letterArray.length; j++) {
        letterArray[j] = letterArray[j].toLowerCase();
      }
    } else {
      for (let j = 0; j < letterArray.length; j++) {
        letterArray[j] = letterArray[j].toLowerCase();
        letterArray[0] = letterArray[0].toUpperCase();
      }
    }

    sentenceWords[i] = '';

    for (const letter of letterArray) {
      sentenceWords[i] += letter;
    }

    sentenceWords[i] = sentenceWords[i].toString();
  }

  return sentenceWords.join('_');
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */

function fibonacci(n, arr = [0, 1]) {
  if (n === 0 || n === 1) {
    return n;
  } else if (arr.length !== n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    fibonacci(n, arr);
  }

  return arr[arr.length - 1] + arr[arr.length - 2];
}

export { mergeArrays, fibonacci, devideBy };
