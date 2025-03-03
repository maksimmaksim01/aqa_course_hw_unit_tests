/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  const stringOfNumbers = number.toString();
  const numbersArray = stringOfNumbers.split('');
  let totalAmount = 0;

  if (numbersArray.length === 1) {
    return number;
  }

  numbersArray.forEach((number) => {
    totalAmount += parseInt(number);
  });

  if (totalAmount > 9) {
    return digitalRoot(totalAmount);
  }

  return totalAmount;
}

export { digitalRoot };
