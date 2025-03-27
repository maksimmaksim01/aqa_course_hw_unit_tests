// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей.
//   Вывести на экран: имя, e-mail, телефон и название компании пользователя.
//   Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах.
//   Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий.
//   Для реализации трех запросов воспользоваться Promise.all().
//   (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId).
//       Пример:
//       1.  name: Leanne Graham
//           email: Sincere@april.biz
//           phone: 1-770-736-8031 x56442
//           company: Romaguera-Crona
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
//       __________________________________

//       2.  name: Ervin Howell
//           email: Shanna@melissa.tv
//           phone: 010-692-6593 x09125
//           company: Deckow-Crist
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)

getData();

async function getData() {
  try {
    const [usersResponse, albumsResponse, photosResponse] = await Promise.all([
      sendGetRequest('https://jsonplaceholder.typicode.com/users'),
      sendGetRequest('https://jsonplaceholder.typicode.com/albums'),
      sendGetRequest('https://jsonplaceholder.typicode.com/photos'),
    ]);

    usersResponse.forEach((user) => {
      console.log(
        `${user.id}.  name: ${user.name}\n    email: ${user.email}\n    phone: ${user.phone}\n    company: ${user.company.name}\n    albums:`,
      );

      const userAlbums = albumsResponse.filter((album) => album.userId === user.id);

      userAlbums.forEach((album) => {
        const albumPhotos = photosResponse.filter((photo) => photo.albumId === album.id);

        console.log(`        ${album.title} (${albumPhotos.length} photos)`);
      });
      console.log('____________________________________');
    });
  } catch (err) {
    console.log(err);
  } finally {
    console.log('done');
  }
}

async function sendGetRequest(url) {
  const response = await fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return await response.json();
}