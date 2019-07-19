const run = (sequence) => {
  if (!sequence) return "";

  let currentChar = null;
  let acc = 0;
  let result = []

  sequence.split(sequence).forEach((element, index) => {
    if(!currentChar){
      currentChar = element;
      acc = 1
    }

    if (index === sequence.length -1) {
      result.push(acc)
      result.push(currentChar)
    }
  });

  return result
}

module.exports = {
  run,
}
