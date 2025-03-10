/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/
const arr = [2, 3, 4, 5];

function findMissingNumber(numbers) {
  const sortedNumbers = numbers.toSorted((a, b) => a - b);
  if (sortedNumbers[0] !== 1) return 1;

  return (
    sortedNumbers.find((value, index, array) => {
      return array[index] + 1 !== array[index + 1];
    }) + 1
  );
}

export { findMissingNumber };
