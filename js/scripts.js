function moveConsonants(word) {
  // it will move the first consonants to the end of the word.
  // it will check the first letter if it is a consonant.
  // it will shift of the letter and move it to the end.
  // loop until it reaches a vowel.
  // return

  // Vowels array defines the vowels we look for (ie NOT consonants)
  var vowels = ["a", "e", "i", 'o', 'u'];

  // example of following while loop logic
  // word=average
  // vowels.indexof(a)
  // 0 < 0 - false
  // this
  // vowels.indexof(t)
  // -1 < 0 - true

  // RegExp vowels.join('|') === a|e|i|o|u .test(word) < test the word for vowels
  if(new RegExp(vowels.join('|')).test(word)) { // make sure there are vowels in the word
    while (vowels.indexOf(word[0]) < 0) {//an "if loop" that checks if the following is true.
      // if first letter is q and the second letter is u
      if (word[0]==='q' && word[1]==='u') {
        // move them both. Substring starts at index(2) and returns the rest of the word.
        word = word.substring(2) + 'qu';
      } else { // else, the first letter is not q, move the first consonant to the end of the string
        // word=foo word.substring(1) === oo
        word = word.substring(1) + word[0];
      } // end else
    } // end while
  } // end if(make sure vowel exists)
  return word;
}

function wordTranslator(word) {

  // define punctuation array to define the punctuation we want to check for
  var punctuation = ["'",'"',"!",".",",",";",":","?"];
  var wordPuncFront = ''; // empty variable to store the punctuation found at the beginning of the word
  var wordPuncEnd = ''; // empty variable to store the punctuation found at the end of the word
  var output = ''; // output variable, better than multiple return statements
  if(word.trim().length>0) { // if the length of the word, minus the extra whitespace on the sides(trim), is >0 there is at least one character in the word

    // while(true) { do this }
    // like an if statement, but a loop. VERY EASY TO BREAK INTO INFINITE LOOP.

    // array.indexOf(argument) looks for the argument in the provided array, and returns the index number if found. Else returns -1
    // string[index] - bracket notation. Returns the character at position index. starts at 0.
    // to find the last character use string.length (the length of the string) -1 because length starts counting at one and index starts at 0
    while( punctuation.indexOf(word[word.length-1]) > 0 ) {// if the word contains punctuation at the end

      // store the punctuation in the wordPuncEnd variable
      wordPuncEnd = word[word.length-1] + wordPuncEnd;
      // substring here, starts at 0 and goes for the length of the word -1 to not count the last character
      word = word.substring(0,word.length-1);
    }
    while( punctuation.indexOf(word[0]) > 0 ) { // check for starting quote
      // grab starting punctuation
      wordPuncFront += word[0];
      word = word.substring(1);
    }
    // set the output to the punctuation saved off the front of the word, plus the translated word, and the punctuation saved from the end of the word
    output = wordPuncFront + moveConsonants(word) + "ay" + wordPuncEnd;
  } else { // there is nothing but whitespace in the string given
    output = word; // set the output to the input, cause keep double spaces
  }
  return output;
}

function sentenceTranslator(sentence) {
  // run the words in the sentence through wordTranslator
  var sentenceOut = [];
  // this is a, sentence
  // test to make sure the input is not blank and not just whitespace

  sentence = sentence.trim().split(' ');
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
