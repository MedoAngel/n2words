const assert = require('assert');
const n2words = require('../n2words.js');

const testCasesCzech = [
  [0, 'nula'],
  [1, 'jedna'],
  [2, 'dva'],
  [3, 'tři'],
  [11, 'jedenáct'],
  [12, 'dvanáct'],
  [16, 'šestnáct'],
  [19, 'devatenáct'],
  [20, 'dvacet'],
  [21, 'dvacet jedna'],
  [26, 'dvacet šest'],
  [28, 'dvacet osm'],
  [30, 'třicet'],
  [31, 'třicet jedna'],
  [40, 'čtyřicet'],
  [44, 'čtyřicet čtyři'],
  [50, 'padesát'],
  [55, 'padesát pět'],
  [60, 'šedesát'],
  [67, 'šedesát sedm'],
  [70, 'sedmdesát'],
  [79, 'sedmdesát devět'],
  [89, 'osmdesát devět'],
  [95, 'devadesát pět'],
  [100, 'sto'],
  [101, 'sto jedna'],
  [199, 'sto devadesát devět'],
  [203, 'dvěstě tři'],
  [287, 'dvěstě osmdesát sedm'],
  [356, 'třista padesát šest'],
  [400, 'čtyřista'],
  [434, 'čtyřista třicet čtyři'],
  [578, 'pětset sedmdesát osm'],
  [689, 'šestset osmdesát devět'],
  [729, 'sedmset dvacet devět'],
  [894, 'osmset devadesát čtyři'],
  [999, 'devětset devadesát devět'],
  [1000, 'tisíc'],
  [1001, 'tisíc jedna'],
  [1097, 'tisíc devadesát sedm'],
  [1104, 'tisíc sto čtyři'],
  [1243, 'tisíc dvěstě čtyřicet tři'],
  [2385, 'dva tisíce třista osmdesát pět'],
  [3766, 'tři tisíce sedmset šedesát šest'],
  [4196, 'čtyři tisíce sto devadesát šest'],
  [5846, 'pět tisíc osmset čtyřicet šest'],
  [6459, 'šest tisíc čtyřista padesát devět'],
  [7232, 'sedm tisíc dvěstě třicet dva'],
  [8569, 'osm tisíc pětset šedesát devět'],
  [9539, 'devět tisíc pětset třicet devět'],
  [1000000, 'milion'],
  [1000001, 'milion jedna'],
  [4000000, 'čtyři miliony'],
  [10000000000000, 'deset bilionů'],
  [100000000000000, 'sto bilionů'],
  [1000000000000000000, 'trilion']
]


describe('Czech', function () {
  it('should convert numbers correctly (Czech)', function () {
    for (let i = 0; i < testCasesCzech.length; i++) {
      assert.equal(n2words(testCasesCzech[i][0], { lang: 'cz' }), testCasesCzech[i][1])
    }
  });
});