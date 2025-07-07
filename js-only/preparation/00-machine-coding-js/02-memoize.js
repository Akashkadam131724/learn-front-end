function memoize(fn) {
  const cache = {};
  return function (n) {
    if (cache[n]) {
      console.log("cached");
      return cache[n];
    }
    cache[n] = fn(n);
    return cache[n];
  };
}

const factorial = memoize((n) => (n <= 1 ? 1 : n * factorial(n - 1)));
console.log(factorial(5)); // 120
console.log(factorial(5)); // 120
console.log(factorial(5)); // 120
