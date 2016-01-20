function moveConsonants(word) {
  // it will move the first consonants to the end of the word.
  // it will check the first letter if it is a consonant.
  // it will shift of the letter and move it to the end.
  // loop until it reaches a vowel.
  // return
  var vowels = ["a", "e", "i", 'o', 'u'];

  while (vowels.indexOf(word[0]) < 0) {//an "if loop" that checks if the following is true.
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
  return moveConsonants(word) + "ay";
}

function sentenceTranslator(sentence) {
  // run the words in the sentence through wordTranslator
  var output = [];
  // this is a, sentence
  sentence = sentence.split(' ');
  // ['this', 'is', 'a,', 'sentence']
  sentence.forEach(function(word) {
    output.push(wordTranslator(word));
  });
  return output.join(' ');
}
