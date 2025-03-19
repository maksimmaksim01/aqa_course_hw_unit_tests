/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter({ name, age }) {
  if (!name || !age) throw new Error('error');
  characters.push({ name, age });
}

function getCharacter(name) {
  return characters.find((character) => character.name === name);
}

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number') throw new Error('error');
  return characters.filter((character) => character.age >= minAge);
}

function updateCharacter(name, newCharacter) {
  const charToUpdate = getCharacter(name);
  const { name, age } = newCharacter;
  charToUpdate.name = name ?? charToUpdate.name;
  charToUpdate.age = age ?? charToUpdate.age;
}

function removeCharacter(name) {
  const index = characters.findIndex((char) => char.name === name);
  if (index >= 0) {
    characters.splice(index, 1);
  } else {
    throw new Error('error');
  }
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
