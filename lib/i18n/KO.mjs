import BaseLanguage from '../classes/BaseLanguage.mjs';

export class N2WordsKO extends BaseLanguage {
  constructor() {
    super({
      negativeWord: '마이너스',
      separatorWord: '점',
      zero: '영'
    },[
      [10000000000000000000000000000, '양'],
      [1000000000000000000000000, '자'],
      [100000000000000000000, '해'],
      [10000000000000000, '경'],
      [1000000000000, '조'],
      [100000000, '억'],
      [10000, '만'],
      [1000, '천'],
      [100, '백'],
      [10, '십'],
      [9, '구'],
      [8, '팔'],
      [7, '칠'],
      [6, '육'],
      [5, '오'],
      [4, '사'],
      [3, '삼'],
      [2, '이'],
      [1, '일'],
      [0, '영']
    ]);
  }

  merge(lPair, rPair) {
    const lText = Object.keys(lPair)[0];
    const rText = Object.keys(rPair)[0];
    const lNum = parseInt(Object.values(lPair)[0]);
    const rNum = parseInt(Object.values(rPair)[0]);
    if (lNum == 1 && rNum <= 10000) return { [rText]: rNum };
    else if (10000 > lNum && lNum > rNum) return { [`${lText}${rText}`]: lNum + rNum };
    else if (lNum >= 10000 && lNum > rNum) return { [`${lText} ${rText}`]: lNum + rNum };
    else return { [`${lText}${rText}`]: lNum * rNum };
  }
}

/**
 * Converts a value to cardinal (written) form.
 * @param {number|string} value Number to be convert.
 * @throws {Error} Value cannot be invalid.
 * @returns {string} Value in cardinal (written) format.
 */
export default function(value) {
  return new N2WordsKO().floatToCardinal(value);
}
