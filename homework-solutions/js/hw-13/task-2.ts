// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true,
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

validatePassword('              aA!');

function validatePassword(password: string): boolean {
  const symbolArray: string[] = password.split('');

  if (
    symbolArray.some((el) => /[A-Z]/.test(el)) &&
    symbolArray.some((el) => /[a-z]/.test(el)) &&
    symbolArray.some((el) => /[0-9]/.test(el)) &&
    symbolArray.length > 8 &&
    password.trim().length > 0
  ) {
    console.log('Password is valid');
    return true;
  } else {
    console.log('пупупу');
    return false;
  }
}
