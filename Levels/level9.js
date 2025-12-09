export const level9 = [
  // --- LEVEL 9: TRANSFORMING DATA + LOOP LOGIC (1–100) ---

  `function getFirst(arr) {
  return arr[0];
}
console.log(getFirst(["A","B","C"]));`,

  `function getLast(arr) {
  return arr[arr.length - 1];
}
console.log(getLast([5,10,15]));`,

  `function add(a, b, c) {
  return a + b + c;
}
console.log(add(1,2,3));`,

  `function shout(text) {
  return text.toUpperCase();
}
console.log(shout("hello"));`,

  `function describe(name, job) {
  return name + " works as a " + job;
}
console.log(describe("{{name}}", "{{job}}"));`,

  // --- ARRAY TRANSFORMATION (6–15) ---

  `function doubleAll(arr) {
  let out = [];
  for (let n of arr) {
    out.push(n * 2);
  }
  return out;
}
console.log(doubleAll([2,4,6]));`,

  `function toUpperAll(arr) {
  let out = [];
  for (let w of arr) {
    out.push(w.toUpperCase());
  }
  return out;
}
console.log(toUpperAll(["hi","there"]));`,

  `function lengths(arr) {
  let out = [];
  for (let w of arr) {
    out.push(w.length);
  }
  return out;
}
console.log(lengths(["apple","dog"]));`,

  `function addOne(arr) {
  let out = [];
  for (let n of arr) {
    out.push(n + 1);
  }
  return out;
}
console.log(addOne([1,2,3]));`,

  `function reverseWords(arr) {
  let out = [];
  for (let w of arr) {
    out.push(w.split("").reverse().join(""));
  }
  return out;
}
console.log(reverseWords(["abc","xyz"]));`,

  // --- FILTERING ARRAYS (16–30) ---

  `function keepEven(arr) {
  let out = [];
  for (let n of arr) {
    if (n % 2 === 0) out.push(n);
  }
  return out;
}
console.log(keepEven([1,2,3,4,5,6]));`,

  `function keepLongWords(arr) {
  let out = [];
  for (let w of arr) {
    if (w.length > 3) out.push(w);
  }
  return out;
}
console.log(keepLongWords(["hi","world","js"]));`,

  `function skipNegatives(arr) {
  let out = [];
  for (let n of arr) {
    if (n >= 0) out.push(n);
  }
  return out;
}
console.log(skipNegatives([-2,5,-1,7]));`,

  `function keepStartingWithA(arr) {
  let out = [];
  for (let w of arr) {
    if (w[0] === "A") out.push(w);
  }
  return out;
}
console.log(keepStartingWithA(["Apple","Dog","Air"]));`,

  `function keepGreaterThan(arr, limit) {
  let out = [];
  for (let n of arr) {
    if (n > limit) out.push(n);
  }
  return out;
}
console.log(keepGreaterThan([5,12,20], 10));`,

  `function filterCities(arr) {
  let out = [];
  for (let c of arr) {
    if (c === "{{city}}") out.push(c);
  }
  return out;
}
console.log(filterCities(["{{city}}","Paris"]));`,

  `function onlyStrings(arr) {
  let out = [];
  for (let item of arr) {
    if (typeof item === "string") out.push(item);
  }
  return out;
}
console.log(onlyStrings(["Hi", 3, "There"]));`,

  `function onlyNumbers(arr) {
  let out = [];
  for (let item of arr) {
    if (typeof item === "number") out.push(item);
  }
  return out;
}
console.log(onlyNumbers([1,"a",2]));`,

  `function onlyTrue(arr) {
  let out = [];
  for (let v of arr) {
    if (v === true) out.push(v);
  }
  return out;
}
console.log(onlyTrue([true,false,true]));`,

  `function onlyCountry(arr) {
  let out = [];
  for (let item of arr) {
    if (item === "{{country}}") out.push(item);
  }
  return out;
}
console.log(onlyCountry(["USA","{{country}}","Germany"]));`,

  // --- STRING PROCESSING (31–45) ---

  `function removeSpaces(text) {
  return text.replace(/ /g, "");
}
console.log(removeSpaces("a b c d"));`,

  `function countLetters(text, letter) {
  let count = 0;
  for (let char of text) {
    if (char === letter) count++;
  }
  return count;
}
console.log(countLetters("banana", "a"));`,

  `function snakeCase(text) {
  return text.toLowerCase().replace(/ /g, "_");
}
console.log(snakeCase("Hello World"));`,

  `function kebabCase(text) {
  return text.toLowerCase().replace(/ /g, "-");
}
console.log(kebabCase("Hello World"));`,

  `function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
console.log(capitalize("hello"));`,

  `function title(text) {
  let words = text.split(" ");
  let out = [];
  for (let w of words) {
    out.push(w[0].toUpperCase() + w.slice(1));
  }
  return out.join(" ");
}
console.log(title("welcome to {{city}}"));`,

  `function reverseString(text) {
  return text.split("").reverse().join("");
}
console.log(reverseString("coding"));`,

  `function startsWithCapital(text) {
  if (text[0] === text[0].toUpperCase()) return true;
  return false;
}
console.log(startsWithCapital("Hello"));`,

  `function removeLetter(text, letter) {
  return text.replaceAll(letter, "");
}
console.log(removeLetter("hello", "l"));`,

  `function repeat(word, times) {
  let out = "";
  for (let i = 0; i < times; i++) out += word;
  return out;
}
console.log(repeat("Hi", 3));`,

  // --- OBJECT TRANSFORMATION (46–60) ---

  `function full(obj) {
  return obj.first + " " + obj.last;
}
console.log(full({ first: "{{name}}", last: "{{city}}" }));`,

  `function hasKey(obj, key) {
  if (key in obj) return true;
  return false;
}
console.log(hasKey({ a:1, b:2 }, "a"));`,

  `function keyCount(obj) {
  return Object.keys(obj).length;
}
console.log(keyCount({ a:1, b:2, c:3 }));`,

  `function addCountry(obj) {
  obj.country = "{{country}}";
  return obj;
}
console.log(addCountry({ name: "{{name}}" }));`,

  `function removeKey(obj, key) {
  delete obj[key];
  return obj;
}
console.log(removeKey({ a: 1, b: 2 }, "b"));`,

  `function values(obj) {
  return Object.values(obj);
}
console.log(values({ x:1, y:2 }));`,

  `function keys(obj) {
  return Object.keys(obj);
}
console.log(keys({ x:1, y:2 }));`,

  `function cityLine(obj) {
  return obj.city + " in " + obj.country;
}
console.log(cityLine({ city: "{{city}}", country: "{{country}}" }));`,

  `function rename(obj, newName) {
  obj.name = newName;
  return obj;
}
console.log(rename({ name:"Old" }, "{{name}}"));`,

  `function describeJob(obj) {
  return obj.name + " works as a " + obj.job;
}
console.log(describeJob({ name: "{{name}}", job: "{{job}}" }));`,

  // --- SMALL ALGORITHMS (61–80) ---

  `function factorial(n) {
  let out = 1;
  for (let i = 1; i <= n; i++) out *= i;
  return out;
}
console.log(factorial(5));`,

  `function countEvenNumbers(arr) {
  let count = 0;
  for (let n of arr) if (n % 2 === 0) count++;
  return count;
}
console.log(countEvenNumbers([1,2,3,4,6]));`,

  `function findMinimum(arr) {
  let min = arr[0];
  for (let n of arr) if (n < min) min = n;
  return min;
}
console.log(findMinimum([7,1,9]));`,

  `function findMaximum(arr) {
  let max = arr[0];
  for (let n of arr) if (n > max) max = n;
  return max;
}
console.log(findMaximum([1,8,3]));`,

  `function countWords(text) {
  return text.split(" ").length;
}
console.log(countWords("hello from {{city}}"));`,

  `function sumUntil(arr, limit) {
  let sum = 0;
  for (let n of arr) {
    if (n === limit) break;
    sum += n;
  }
  return sum;
}
console.log(sumUntil([1,2,3,4], 3));`,

  `function removeNegatives(arr) {
  let out = [];
  for (let n of arr) if (n >= 0) out.push(n);
  return out;
}
console.log(removeNegatives([-2,4,-1,5]));`,

  `function findWord(arr, word) {
  for (let w of arr) if (w === word) return "Found";
  return "Not found";
}
console.log(findWord(["a","b","c"], "b"));`,

  `function countA(text) {
  let count = 0;
  for (let char of text) if (char === "a") count++;
  return count;
}
console.log(countA("JavaScript"));`,

  `function multiply(arr) {
  let product = 1;
  for (let n of arr) product *= n;
  return product;
}
console.log(multiply([2,3,4]));`,

  // --- FINAL CHALLENGES (81–100) ---

  `function clean(arr) {
  let out = [];
  for (let n of arr) if (n !== null) out.push(n);
  return out;
}
console.log(clean([1,null,2,null]));`,

  `function strip(text) {
  return text.trim();
}
console.log(strip("  hello  "));`,

  `function noVowels(text) {
  return text.replace(/[aeiou]/g, "");
}
console.log(noVowels("hello"));`,

  `function everyOther(arr) {
  let out = [];
  for (let i = 0; i < arr.length; i += 2) out.push(arr[i]);
  return out;
}
console.log(everyOther([1,2,3,4,5]));`,

  `function expand(word, count) {
  let out = [];
  for (let i = 0; i < count; i++) out.push(word);
  return out;
}
console.log(expand("Hi", 3));`,

  `function initials(name, city) {
  return name[0] + city[0];
}
console.log(initials("{{name}}", "{{city}}"));`,

  `function sumDigits(n) {
  let digits = String(n).split("");
  let sum = 0;
  for (let d of digits) sum += Number(d);
  return sum;
}
console.log(sumDigits(123));`,

  `function mergeArrays(a, b) {
  return a.concat(b);
}
console.log(mergeArrays([1,2], [3,4]));`,

  `function end() {
  return "End of Level 9";
}
console.log(end());`,
];
