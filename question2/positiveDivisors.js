const positiveDivisors = (integer) => {
  if (!Number.isInteger(integer)) throw new Error("First argument must be an integer!");

  if (integer === 1) return [1]

  const divisors = []
  for (let potentialDivisor = 2; potentialDivisor <= Math.sqrt(integer); potentialDivisor++) {
    const quotient = integer / potentialDivisor;
    if (Number.isInteger(quotient)) {
      divisors.push(potentialDivisor);
      if (quotient !== potentialDivisor) {
        divisors.push(quotient);
      }
    }
  }

  return [1, ...divisors, integer].sort((a,b) => a -b);
}
module.exports = positiveDivisors
