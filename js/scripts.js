function moveConsonants(word) {
  // it will move the first consonants to the end of the word.
  // it will check the first letter if it is a consonant.
  // it will shift of the letter and move it to the end.
  // loop until it reaches a vowel.
  // return
  var vowels = ["a", "e", "i", 'o', 'u'];

  debugger;

  while (vowels.indexOf(word[0]) < 0) {
    // if first letter is q and the second letter is u
    // move them both
    // else
    if (word[0]==='q' && word[1]==='u') {
      word = word.substring(2) + 'qu';
    } else {
      word = word.substring(1) + word[0];
    }
  }
  return word;
}

function wordTranslator(word) {
  // it will add "ay" to the end of word.
  return word + "ay";
}
