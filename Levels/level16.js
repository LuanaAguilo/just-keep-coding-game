export const level16 = [
  // --- LEVEL 16: MAP, FILTER, REDUCE (1–100) ---

  // BASIC MAP (1–20)
  `const nums = [1, 2, 3];
const doubled = nums.map(function(n) {
  return n * 2;
});
console.log(doubled);`,

  `const ages = [10, 20, 30];
const plusOne = ages.map(function(a) {
  return a + 1;
});
console.log(plusOne);`,

  `const names = ["{{name}}", "Sara"];
const lengths = names.map(function(n) {
  return n.length;
});
console.log(lengths);`,

  `const cities = ["{{city}}", "Paris"];
const upper = cities.map(function(c) {
  return c.toUpperCase();
});
console.log(upper);`,

  `const vals = [2, 4, 6];
const half = vals.map(function(v) {
  return v / 2;
});
console.log(half);`,

  `const nums2 = [3, 6];
const triple = nums2.map(function(n) {
  return n * 3;
});
console.log(triple);`,

  `const greetings = ["Hi", "Hello"];
const excited = greetings.map(function(g) {
  return g + "!";
});
console.log(excited);`,

  `const words = ["code", "learn"];
const caps = words.map(function(w) {
  return w.toUpperCase();
});
console.log(caps);`,

  `const temps = [15, 20, 25];
const fahrenheit = temps.map(function(t) {
  return t * 2;
});
console.log(fahrenheit);`,

  `const nums3 = [1, 5, 9];
const squared = nums3.map(function(n) {
  return n * n;
});
console.log(squared);`,

  `const lengths2 = ["a", "bb", "ccc"];
const count = lengths2.map(function(x) {
  return x.length;
});
console.log(count);`,

  `const pets = ["dog", "cat"];
const tagged = pets.map(function(p) {
  return "Pet: " + p;
});
console.log(tagged);`,

  `const money = [10, 20, 30];
const dollars = money.map(function(m) {
  return "$" + m;
});
console.log(dollars);`,

  `const fruit = ["apple", "pear"];
const upperFruit = fruit.map(function(f) {
  return f.toUpperCase();
});
console.log(upperFruit);`,

  `const nums4 = [2, 8];
const minusOne = nums4.map(function(n) {
  return n - 1;
});
console.log(minusOne);`,

  `const arr = ["one", "two"];
const prefix = arr.map(function(x) {
  return "Item: " + x;
});
console.log(prefix);`,

  `const players = ["A", "B"];
const shout = players.map(function(p) {
  return p + "!";
});
console.log(shout);`,

  `const meters = [100, 200];
const km = meters.map(function(m) {
  return m / 1000;
});
console.log(km);`,

  `const foods = ["pasta", "rice"];
const labeled = foods.map(function(f) {
  return "Food: " + f;
});
console.log(labeled);`,

  `const arr2 = [4, 7];
const doubled2 = arr2.map(function(v) {
  return v * 2;
});
console.log(doubled2);`,

  // BASIC FILTER (21–40)
  `const nums5 = [1, 2, 3, 4];
const evens = nums5.filter(function(n) {
  return n % 2 === 0;
});
console.log(evens);`,

  `const ages2 = [12, 19, 30];
const adults = ages2.filter(function(a) {
  return a >= 18;
});
console.log(adults);`,

  `const words2 = ["apple", "hi", "banana"];
const longWords = words2.filter(function(w) {
  return w.length > 3;
});
console.log(longWords);`,

  `const numbers = [5, 10, 15];
const aboveTen = numbers.filter(function(n) {
  return n > 10;
});
console.log(aboveTen);`,

  `const pets2 = ["dog", "cat", "parrot"];
const hasO = pets2.filter(function(p) {
  return p.includes("o");
});
console.log(hasO);`,

  `const items = [0, 1, 2, 0];
const nonZero = items.filter(function(i) {
  return i !== 0;
});
console.log(nonZero);`,

  `const temps2 = [10, 25, 5];
const warm = temps2.filter(function(t) {
  return t > 20;
});
console.log(warm);`,

  `const arr3 = ["blue", "red"];
const reds = arr3.filter(function(c) {
  return c === "red";
});
console.log(reds);`,

  `const nums6 = [5, 9, 12];
const big = nums6.filter(function(n) {
  return n > 8;
});
console.log(big);`,

  `const letters = ["a", "bb", "ccc"];
const twoOrMore = letters.filter(function(l) {
  return l.length >= 2;
});
console.log(twoOrMore);`,

  `const foods2 = ["cake", "pie", "tea"];
const sweets = foods2.filter(function(f) {
  return f.length > 3;
});
console.log(sweets);`,

  `const heights = [150, 180, 140];
const tall = heights.filter(function(h) {
  return h > 160;
});
console.log(tall);`,

  `const nums7 = [2, 7, 7, 3];
const sevens = nums7.filter(function(n) {
  return n === 7;
});
console.log(sevens);`,

  `const places = ["{{city}}", "Berlin"];
const realCity = places.filter(function(p) {
  return p === "{{city}}";
});
console.log(realCity);`,

  `const currencies = ["USD", "EUR"];
const euros = currencies.filter(function(c) {
  return c === "EUR";
});
console.log(euros);`,

  `const vals2 = [3, 9, 2];
const highVals = vals2.filter(function(v) {
  return v > 5;
});
console.log(highVals);`,

  `const arr4 = ["a", "b", "c"];
const bs = arr4.filter(function(x) {
  return x === "b";
});
console.log(bs);`,

  `const toys = ["ball", "car"];
const withA = toys.filter(function(t) {
  return t.includes("a");
});
console.log(withA);`,

  `const arr5 = [10, 20, 30];
const over10 = arr5.filter(function(n) {
  return n > 10;
});
console.log(over10);`,

  `const sizes = [1, 2, 3];
const bigSizes = sizes.filter(function(s) {
  return s >= 2;
});
console.log(bigSizes);`,

  // BASIC REDUCE (41–60)
  `const arr6 = [1, 2, 3];
const sum = arr6.reduce(function(acc, n) {
  return acc + n;
}, 0);
console.log(sum);`,

  `const values = [5, 5, 5];
const total = values.reduce(function(acc, v) {
  return acc + v;
}, 0);
console.log(total);`,

  `const lengths3 = ["hi", "hello"].reduce(function(acc, word) {
  return acc + word.length;
}, 0);
console.log(lengths3);`,

  `const nums8 = [3, 7];
const product = nums8.reduce(function(acc, v) {
  return acc * v;
}, 1);
console.log(product);`,

  `const arr7 = [10, 20];
const total2 = arr7.reduce(function(sum, x) {
  return sum + x;
}, 0);
console.log(total2);`,

  `const nums9 = [2, 4, 6];
const add = nums9.reduce(function(s, n) {
  return s + n;
}, 0);
console.log(add);`,

  `const coins = [1, 1, 1];
const money = coins.reduce(function(a, c) {
  return a + c;
}, 0);
console.log(money);`,

  `const pages = [100, 200];
const totalPages = pages.reduce(function(a, p) {
  return a + p;
}, 0);
console.log(totalPages);`,

  `const temps3 = [10, 20];
const sumTemps = temps3.reduce(function(a, t) {
  return a + t;
}, 0);
console.log(sumTemps);`,

  `const nums10 = [4, 9];
const sum10 = nums10.reduce(function(a, n) {
  return a + n;
}, 0);
console.log(sum10);`,

  `const arr8 = [1, 3, 5];
const combined = arr8.reduce(function(a, n) {
  return a + n;
}, 0);
console.log(combined);`,

  `const profits = [20, 30];
const totalProfit = profits.reduce(function(a, p) {
  return a + p;
}, 0);
console.log(totalProfit);`,

  `const values3 = [2, 2, 2];
const sumVal = values3.reduce(function(a, v) {
  return a + v;
}, 0);
console.log(sumVal);`,

  `const arr9 = [5, 5];
const sum9 = arr9.reduce(function(a, n) {
  return a + n;
}, 0);
console.log(sum9);`,

  `const nums11 = [3, 3];
const total11 = nums11.reduce(function(a, n) {
  return a + n;
}, 0);
console.log(total11);`,

  `const arr10 = [7, 8];
const sumArr10 = arr10.reduce(function(a, n) {
  return a + n;
}, 0);
console.log(sumArr10);`,

  `const values4 = [9, 1];
const reduceVal = values4.reduce(function(a, v) {
  return a + v;
}, 0);
console.log(reduceVal);`,

  `const arr11 = [6, 4];
const sum11 = arr11.reduce(function(a, n) {
  return a + n;
}, 0);
console.log(sum11);`,

  `const vals3 = [2, 8];
const sumVals3 = vals3.reduce(function(a, n) {
  return a + n;
}, 0);
console.log(sumVals3);`,

  `const nums12 = [10, 10];
const combined12 = nums12.reduce(function(a, n) {
  return a + n;
}, 0);
console.log(combined12);`,

  // COMBINED TRANSFORMATIONS (61–90)
  `const arr12 = [1, 2, 3, 4];
const doubledFiltered = arr12
  .map(function(n) { return n * 2; })
  .filter(function(n) { return n > 4; });
console.log(doubledFiltered);`,

  `const words3 = ["apple", "pear", "banana"];
const lengthsFiltered = words3
  .map(function(w) { return w.length; })
  .filter(function(len) { return len > 4; });
console.log(lengthsFiltered);`,

  `const nums13 = [2, 3, 5];
const result = nums13
  .map(function(n) { return n * 2; })
  .reduce(function(a, c) { return a + c; }, 0);
console.log(result);`,

  `const temps4 = [10, 25, 30];
const warmSum = temps4
  .filter(function(t) { return t > 20; })
  .reduce(function(a, c) { return a + c; }, 0);
console.log(warmSum);`,

  `const arr13 = [1, 5, 9];
const final = arr13
  .filter(function(n) { return n > 3; })
  .map(function(n) { return n * 2; });
console.log(final);`,

  `const sizes2 = ["S", "M", "L"];
const longSizes = sizes2
  .map(function(s) { return s.length; })
  .filter(function(len) { return len >= 1; });
console.log(longSizes);`,

  `const nums14 = [4, 8];
const processed = nums14
  .map(function(n) { return n + 2; })
  .reduce(function(a, c) { return a + c; }, 0);
console.log(processed);`,

  `const food3 = ["rice", "tea", "pasta"];
const bigOnes = food3
  .filter(function(f) { return f.length > 3; })
  .map(function(f) { return f.toUpperCase(); });
console.log(bigOnes);`,

  `const arr14 = [2, 4, 6];
const sumLarge = arr14
  .map(function(n) { return n * 10; })
  .reduce(function(a, c) { return a + c; }, 0);
console.log(sumLarge);`,

  `const vals4 = [1, 2, 3];
const evenTimesTen = vals4
  .filter(function(n) { return n % 2 === 0; })
  .map(function(n) { return n * 10; });
console.log(evenTimesTen);`,

  // END OF LEVEL (91–100)
  `function checkpoint16() { return "Level 16 complete"; }
console.log(checkpoint16());`,

  `function celebrate16() { return "Great job learning map, filter, reduce"; }
console.log(celebrate16());`,

  `function ready16() { return "You’re ready for Level 17"; }
console.log(ready16());`,

  `function skills16() { return "Your array skills just leveled up"; }
console.log(skills16());`,

  `function end16() { return "End of Level 16"; }
console.log(end16());`,
];
