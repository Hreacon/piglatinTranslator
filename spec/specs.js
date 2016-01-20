describe("wordTranslator", function() {
  it("for words that start with a vowel, add 'ay' to the end", function() {
    expect(wordTranslator('average')).to.equal('averageay');
  });
});

describe("moveConsonants", function() {
  it("moves the first consonants to the end of the word", function() {
    expect(moveConsonants('smoking')).to.equal('okingsmay');
  });
});
