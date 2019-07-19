

const run = (sequence) => {
  if (!sequence) return "";

  let currentChar = null;
  let acc = 0;
  let result = []

  sequence.split('').forEach((element, index) => {
    acc++;
    if (!currentChar) currentChar = element;


    if ((element !== currentChar) || (index === sequence.length - 1)) {

      result.push(acc)
      result.push(currentChar)

      currentChar = element;
      acc = 0
    }


  });

  return result.join('')
}

module.exports = {
  run,
}
