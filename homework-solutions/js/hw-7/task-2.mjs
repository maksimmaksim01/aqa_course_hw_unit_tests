/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word === 'string') {
    const lettersArray = word.split('');

    for (let i = 0; i < lettersArray.length / 2; i++) {
      if (lettersArray[i].toLowerCase() !== lettersArray[lettersArray.length - (i + 1)].toLowerCase()) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  let biggestWords = [];

  if (typeof sentence === 'string' && sentence) {
    const wordArray = sentence.split(' ');

    let maxLength = 0;

    wordArray.forEach((word) => {
      if (word.length > maxLength) {
        maxLength = word.length;
      }
    });

    wordArray.forEach((word) => {
      if (word.length === maxLength) {
        biggestWords.push(word);
      }
    });
  }
  return biggestWords;
}

export { isPalindrom, findLongestWords };
