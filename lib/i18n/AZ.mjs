import BaseLanguage from '../classes/BaseLanguage.mjs';

export class N2WordsAZ extends BaseLanguage {
  constructor() {
    super({
      negativeWord: 'mənfi',
      separatorWord: 'nöqtə',
      zero: 'sıfır'
    },[
      [1000000000000000000, 'kentilyon'],
      [1000000000000000, 'katrilyon'],
      [1000000000000, 'trilyon'],
      [1000000000, 'milyar'],
      [1000000, 'milyon'],
      [1000, 'min'],
      [100, 'yüz'],
      [90, 'doxsan'],
      [80, 'səksən'],
      [70, 'yetmiş'],
      [60, 'altmış'],
      [50, 'əlli'],
      [40, 'qırx'],
      [30, 'otuz'],
      [20, 'iyirmi'],
      [10, 'on'],
      [9, 'doqquz'],
      [8, 'səkkiz'],
      [7, 'yeddi'],
      [6, 'altı'],
      [5, 'beş'],
      [4, 'dörd'],
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
 * @throws {Error} Value cannot be invalid.
 * @returns {string} Value in cardinal (written) format.
 */
export default function(value) {
  return new N2WordsAZ().floatToCardinal(value);
}
