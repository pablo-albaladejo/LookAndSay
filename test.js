const expect = require('expect.js');
const lookAndSay = require('./look-and-say.js');

describe('isAString', () => {
  const sequence = "111221";
  it('is not null', () => {
      const result = lookAndSay.run(sequence);
      expect(result).to.not(null);
  });
})
