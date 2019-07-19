const expect = require('expect.js');
const lookAndSay = require('./look-and-say.js');

describe('is valid output', () => {
  const sequence = null;
  it('is not null', () => {
    const result = lookAndSay.run(sequence);
    expect(result).to.not.equal(null);
  });
})


describe('sum continuous numbers', () => {

  it('11111 is 51', () => {
    const sequence = "11111";
    const result = lookAndSay.run(sequence);
    expect(result).to.equal("51");
  });
})
