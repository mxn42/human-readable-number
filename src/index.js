const dXX = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
const dX0 = 'zero ten twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
const d10X = 'zero ten hundred thousand million billion trillion'.split(' ');

module.exports = function toReadable (number) {
  if (number < 20) return dXX[number];
  if (number < 100) return `${dX0[Math.floor(number / 10)]}${number % 10 ? ' ' + dXX[number % 10] : ''}`;
  if (number < 1000) return `${dXX[Math.floor(number / 100)]} hundred${ number % 100 ? ' ' + toReadable(number % 100) : '' }`;
  // TODO: 10_000, 100_000, 1_000_000, ...
  return number;
};
