const d20 = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
const d1eX = 'zero ten twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');

function kilo(n) {
  if (n < 20) return d20[n];
  if (n < 100) return d1eX[n / 10 | 0] + (n % 10 ? ' ' + kilo(n % 10) : '');
  return kilo(n / 100 | 0) + ' hundred' + (n % 100 ? ' '  + kilo(n % 100) : '');
};

module.exports = kilo;
