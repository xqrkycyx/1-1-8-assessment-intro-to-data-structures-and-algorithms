/**
 * Write a function named gcd1 that implements algorithm 1 here
 */
function gcd1(a, b) {
  // if a is equal to 0 then the GCD of a and b is b, so return b
  if (a === 0) {
    return b;
  }

  // if b is equal to 0 then the GCD of a and b is a, so return a
  if (b === 0) {
    return a;
  }

  while (b !== 0) {
    // let r be the remainder of dividing a by b
    const r = a % b;
    a = b;
    b = r;
  }

  return a;
}

/**
 * Write a function named gcd2 that implements algorithm 2 here
 */

module.exports = { gcd1, gcd2 };
