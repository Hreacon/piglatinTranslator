describe("sentenceTranslator", function () {
  it("for sentence 'this is pig latin yes einsteinium squash' expect 'isthay isay igpay atinlay esyay einteiniumay ashsquay'", function() {
    expect(sentenceTranslator('this is pig latin yes einsteinium squash')).to.equal('isthay isay igpay atinlay esyay einsteiniumay ashsquay');
  });
});


describe("wordTranslator", function() {
  it("for words that start with a vowel, add 'ay' to the end", function() {
    expect(wordTranslator('average')).to.equal('averageay');
  });
  it("for words that begin with consonants(including y) move all of the first consecutive consonants to the end and add ay", function() {
    expect(wordTranslator('ytterbic')).to.equal('erbicyttay');
  });
});

describe("moveConsonants", function() {
  it("moves the first consonants to the end of the word", function() {
    expect(moveConsonants('smoking')).to.equal('okingsm');
  });
  it("moves qu before any other vowels", function() {
    expect(moveConsonants('squeal')).to.equal('ealsqu');
  });
  it("move y like a consonant", function() {
    expect(moveConsonants('ytterbic')).to.equal('erbicytt');
  });
});
