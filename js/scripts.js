function moveConsonants(word) {
  // it will move the first consonants to the end of the word.
  // it will check the first letter if it is a consonant.
  // it will shift of the letter and move it to the end.
  // loop until it reaches a vowel.
  // return
  var vowels = ["a", "e", "i", 'o', 'u'];
  // word=average
  // vowels.indexof(a)
  // 0 < 0 - false
  // this
  // vowels.indexof(t)
  // -1 < 0 - true
  if(new RegExp(vowels.join('|')).test(word)) {
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
  }
  return word;
}

function wordTranslator(word) {
  // it will add "ay" to the end of word.
  // wrord = this
  // return "isth" + "ay"
  var punctuation = ["'",'"',"!",".",",",";",":","?"];
  var wordPunc = '';
  var wordPuncFront = '';
  var isPunc = punctuation.indexOf(word[word.length-1]);
  if( isPunc > 0) {// if the word contains punctuation
    wordPunc = word[word.length-1];
    word = word.substring(0,word.length-1);
    if( punctuation.indexOf(word[0]) > 0 ) { // check for starting quote
      // grab starting punctuation
      wordPuncFront = word[0];
      word = word.substring(1);
    }
  }
  return wordPuncFront + moveConsonants(word) + "ay" + wordPunc;
}

function sentenceTranslator(sentence) {
  // run the words in the sentence through wordTranslator
  var sentenceOut = [];
  // this is a, sentence
  sentence = sentence.split(' ');
  // ['this', 'is', 'a,', 'sentence']
  sentence.forEach(function(word) {
    var wordOut = '';
    // check and see if word is a number
    // ignore numbers, and words that start with numbers
    if( isNaN( parseInt( word )) ) {// test for numbers and words that start with numbers
      // check for punctuation
      // take punctuation off, and re add after translation
      wordOut = wordTranslator(word);
    } else {
      wordOut = word+'ay';
    }
    sentenceOut.push(wordOut);
  });
  return sentenceOut.join(' ');
}

$(document).ready(function() {
  $('form').submit(function(event){
    // gather the input from the user
    // in the little form box that they entered
    var sentence = $('input#sentence').val();
    // pass sentence to sentenceTranslater than output
    $('.output').text(sentenceTranslator(sentence));//
    event.preventDefault();
  });
});
