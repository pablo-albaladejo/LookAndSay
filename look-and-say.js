

const run = (sequence) => {
  if (!sequence) return "";

  let currentChar = null;
  let acc = 0;
  let result = []

  sequence.split('').forEach((element, index) => {
    if ((element !== currentChar)) {
      currentChar = element;
      acc = 0
    }

    acc++;

    if (index === sequence.length - 1) {
      result.push(acc)
      result.push(currentChar)
    }
  });

  return result.join('')
}

module.exports = {
  run,
}
