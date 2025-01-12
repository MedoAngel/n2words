import BaseLanguage from '../classes/BaseLanguage.mjs';

export class N2WordsTR extends BaseLanguage {
  constructor(options) {
    super({
      negativeWord: 'eksi',
      separatorWord: 'virgül',
      zero: 'sıfır',
      spaceSeparator: (options.dropSpaces === true ? '' : ' '),
    },[
      [1000000000000000000, 'kentilyon'],
      [1000000000000000, 'katrilyon'],
      [1000000000000, 'trilyon'],
      [1000000000, 'milyar'],
      [1000000, 'milyon'],
      [1000, 'bin'],
      [100, 'yüz'],
      [90, 'doksan'],
      [80, 'seksen'],
      [70, 'yetmiş'],
      [60, 'altmış'],
      [50, 'elli'],
      [40, 'kırk'],
      [30, 'otuz'],
      [20, 'yirmi'],
      [10, 'on'],
      [9, 'dokuz'],
      [8, 'sekiz'],
      [7, 'yedi'],
      [6, 'altı'],
      [5, 'beş'],
      [4, 'dört'],
      [3, 'üç'],
      [2, 'iki'],
      [1, 'bir'],
      [0, 'sıfır']
    ]);
  }

  merge(lPair, rPair) {
    const lText = Object.keys(lPair)[0];
    const rText = Object.keys(rPair)[0];
    const lNum = parseInt(Object.values(lPair)[0]);
    const rNum = parseInt(Object.values(rPair)[0]);
    if (lNum == 1 && (rNum <= 100 || rNum == 1000)) {
      return { [rText]: rNum };
    } else if (rNum > lNum) {
      return { [`${lText}${this.spaceSeparator}${rText}`]: lNum * rNum };
    } else {
      return { [`${lText}${this.spaceSeparator}${rText}`]: lNum + rNum };
    }
  }
}

/**
 * Converts a value to cardinal (written) form.
 * @param {number|string} value Number to be convert.
 * @param {object} options Options for class.
 * @throws {Error} Value cannot be invalid.
 * @returns {string} Value in cardinal (written) format.
 */
export default function(value, options = {}) {
  return new N2WordsTR(options).floatToCardinal(value);
}
