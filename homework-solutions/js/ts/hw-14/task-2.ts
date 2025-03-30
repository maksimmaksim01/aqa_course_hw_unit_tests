// Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы.
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив,
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]

const arr = [1, 2, 3, 4, 5];
console.log(arr.map((el, index) => el * index));

function customMap<T>(arr: T[], callback: (el: T, index: number, arr: T[]) => T): T[] {
  const newArr: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

console.log(customMap([1, 2, 3, 4, 5], (el, index) => el * index));
