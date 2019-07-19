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

  it('1 is 11', () => {
    const sequence = "1";
    const result = lookAndSay.run(sequence);
    expect(result).to.equal("11");
  });

  it('11 is 21', () => {
    const sequence = "11";
    const result = lookAndSay.run(sequence);
    expect(result).to.equal("21");
  });

  it('21 is 1211', () => {
    const sequence = "21";
    const result = lookAndSay.run(sequence);
    expect(result).to.equal("1211");
  });
})
