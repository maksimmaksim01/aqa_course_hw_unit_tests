// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

const body = {
  userId: 1,
  title: 'ma test',
  completed: false,
};

createTodo(body);

async function createTodo(body) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const receivedData = await response.json();

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    } else {
      console.log(`data received: ${JSON.stringify(receivedData)}`);
    }

    for (let key in body) {
      if (body[key] !== receivedData[key]) {
        throw new Error('not equal');
      }
    }

    return receivedData;
  } catch (err) {
    console.log(err);
  } finally {
    console.log('done');
  }
}
