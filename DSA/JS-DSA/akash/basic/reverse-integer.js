var reverse = function (x) {
  const INT_MIN = -(2 ** 31); // -2147483648
  const INT_MAX = 2 ** 31 - 1; // 2147483647
  let store = Math.abs(x);
  let reversed = 0;

  while (store > 0) {
    reversed = 10 * reversed + (store % 10);
    store = Math.floor(store / 10);
  }

  let res = x < 0 ? -reversed : reversed;

  if (res < INT_MIN || res > INT_MAX) {
    return 0;
  }
  return res;
};

var reverseOptimized = function (x) {
  const INT_MIN = -(2 ** 31); // -2147483648
  const INT_MAX = 2 ** 31 - 1; // 2147483647
  let reversed = 0;

  while (x !== 0) {
    const digit = x % 10;
    x = (x / 10) | 0; // Use bitwise OR to truncate toward zero (faster than `Math.floor`)

    // Check for overflow/underflow before updating `reversed`
    if (
      reversed > Math.floor(INT_MAX / 10) ||
      (reversed === Math.floor(INT_MAX / 10) && digit > 7)
    ) {
      return 0;
    }
    if (
      reversed < Math.ceil(INT_MIN / 10) ||
      (reversed === Math.ceil(INT_MIN / 10) && digit < -8)
    ) {
      return 0;
    }

    reversed = reversed * 10 + digit;
  }

  return reversed;
};
