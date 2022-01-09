// https://www.codewars.com/kata/counting-in-english-one-two-three-dot-dot-dot-to-2-quadrillion-2-000-000-000-000-000

//           0    1   2   3     4    5    6   7     8     9    10  11     12     13       14       15      16      17        18       19
const d20 = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
//            0    10  20     30     40    50    60    70      80     90
const d1eX = 'zero ten twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
//         1e0  1e3      1e6     1e9     1e12     1e15        1e18        1e21       1e24       1e27      1e30      1e33      1e36        1e39         1e42         1e45              1e48          1e51         1e54            1e57          1e60           1e63
const d1e3X = ' thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion decillion undecillion duodecillion tredecillion quattuordecillion quindecillion sexdecillion septendecillion octodecillion novemdecillion vigintillion'.split(' ');
const dNamed = {100: 'googol', 303: 'centillion'};

function kilo(n) {
  if (n < 20) return d20[n];
  if (n < 100) return d1eX[n / 10 | 0] + (n % 10 ? '-' + kilo(n % 10) : '');
  return kilo(n / 100 | 0) + ' hundred' + (n % 100 ? ' and ' + kilo(n % 100) : '');
};

function numberToEnglish(number) {
  if (number === Infinity) return 'infinity';
  if (number === -Infinity) return 'negative infinity';
  let num = String(number).trim(), rest = '';
  if (!/^\-?\d+(\.\d+)?$/.test(num)) throw Error();
  if (num.includes('.'))
    [num, rest] = num.split('.');
  const negative = num.startsWith('-');
  let parts = [];
  for (num = num.replace(/^-/, ''), e3 = 0; num !== ''; num = num.slice(0, -3), ++e3) {
    const n = +num.slice(-3);
    if (n) parts.unshift((num.length > 3 && ((e3 === 0 && n < 100))? 'and ' : '') + (n || !e3 ? kilo(n) : '') + (e3 ? ' ' + d1e3X[e3] : ''));
  }
  if (!parts.length) parts = ['zero'];
  return (negative ? 'negative ' : '') + parts.join(' ') + (rest ? ' point ' + [...rest].map(kilo).join(' ') : '');
};


const test = () => {
  console.log(`[${numberToEnglish(0)}]`)
  console.log(`[${numberToEnglish('00')}]`)
  console.log(`[${numberToEnglish(5)}]`)
  console.log(`[${numberToEnglish(10)}]`)
  console.log(`[${numberToEnglish(19)}]`)
  console.log(`[${numberToEnglish(35)}]`)
  console.log(`[${numberToEnglish(97)}]`)
  console.log(`[${numberToEnglish(100)}]`)
  console.log(`[${numberToEnglish(104)}]`)
  console.log(`[${numberToEnglish(128)}]`)
  console.log(`[${numberToEnglish(256)}]`)
  console.log(`[${numberToEnglish(256_426_011)}]`)
  
  // one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety-nine
  console.log(`[${numberToEnglish(1_234_567_899)}]`)
  
  // negative fifty
  console.log(`[${numberToEnglish(-50)}]`)
  
  // three point one four one five nine
  console.log(`[${numberToEnglish(3.14159)}]`)
  
  // one thousand
  console.log(`[${numberToEnglish(1000)}]`)
  
  // one million
  console.log(`[${numberToEnglish(1_000_000)}]`)
  
  // two thousand and one
  console.log(`[${numberToEnglish(2_001)}]`)
  
  // one million and one
  console.log(`[${numberToEnglish(1_000_001)}]`)
  
  // one million one hundred and one thousand one hundred and one
  console.log(`[${numberToEnglish(1_101_101)}]`)
  
  // one million eleven thousand and eleven
  console.log(`[${numberToEnglish(1_011_011)}]`)
  
  // negative twelve billion six million one hundred and fifty-one thousand nine hundred and fifty
  console.log(`[${numberToEnglish(-12_006_151_950)}]`)
  
  // negative forty-four billion three hundred and seven million three thousand four hundred and sixty-seven
  console.log(`[${numberToEnglish(-44_307_003_467)}]`)
  
  // seventy-six billion three hundred and seventy-three million one thousand six hundred and sixty-two
  console.log(`[${numberToEnglish(76_373_001_662)}]`)  
}
