/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];

  const wordsWithVowelCount = wordsArr.map((word) => {
    let vowelsCounter = 0;

    for (let letter of word) {
      if (vowels.includes(letter.toUpperCase())) {
        vowelsCounter++;
      }
    }
    return { word, letterQty: vowelsCounter };
  });

  wordsWithVowelCount.sort((a, b) => a.letterQty - b.letterQty);

  return wordsWithVowelCount.map((obj) => obj.word);
}

export { sortedByVowels };
