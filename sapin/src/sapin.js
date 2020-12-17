/**
 * create sapin
 * @param {number} size size of the sapin
 * @return {string}
 */
function sapin(size) {
  const sapin = [];

  for(let i = 0; i <= size + 1; i++) {
    const space = ' '.repeat(size - i + 1);

    if(i === 0) {
      sapin.push(`${space}+`);
    }

    if(i > 0) {
      const stars = '*'.repeat((i - 1) * 2 + 1);
      sapin.push(`${space}/${stars}\\`);
    }
  }

  return sapin.join("\n");
}

module.exports = sapin;