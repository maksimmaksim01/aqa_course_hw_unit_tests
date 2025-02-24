/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];

let vowelsAndConsonantsResult = '';
let vowelsCounter = 0;
let wordArray = [];

for (let i = 0; i < word.length; i++) {
  wordArray.push(word.charAt(i));
}

wordArray.forEach((letter) => {
  vowels.forEach((vowel) => {
    if (letter.toUpperCase() === vowel.toUpperCase()) {
      vowelsCounter++;
    }
  });
});

let consonantCount = word.length - vowelsCounter;

vowelsAndConsonantsResult = `${word} contains ${vowelsCounter} vowels and ${consonantCount} consonants`;

export { vowelsAndConsonantsResult };
