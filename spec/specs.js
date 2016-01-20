describe("wordTranslator", function() {
  it("for words that start with a vowel, add 'ay' to the end", function() {
    expect(wordTranslator('average')).to.equal('averageay');
  });
});
