export const level10 = [
  // --- LEVEL 10: INTERMEDIATE DATA + LOGIC (1–100) ---

  `function greet(name) {
  return "Hello " + name;
}
console.log(greet("{{name}}"));`,

  `function welcome(city) {
  return "Welcome to " + city;
}
console.log(welcome("{{city}}"));`,

  `function add(a, b) {
  return a + b;
}
console.log(add(4, 8));`,

  `function subtract(a, b) {
  return a - b;
}
console.log(subtract(10, 3));`,

  `function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 9));`,

  // --- ARRAY BASICS (6–15) ---

  `function first(arr) {
  return arr[0];
}
console.log(first(["a","b","c"]));`,

  `function last(arr) {
  return arr[arr.length - 1];
}
console.log(last([1,2,3]));`,

  `function contains(arr, value) {
  for (let a of arr) if (a === value) return true;
  return false;
}
console.log(contains(["x","y"], "y"));`,

  `function countItems(arr) {
  return arr.length;
}
console.log(countItems([1,5,8,10]));`,

  `function joinWords(arr) {
  return arr.join(" ");
}
console.log(joinWords(["Coding","is","fun"]));`,

  // --- STRING BASICS (16–30) ---

  `function upper(text) {
  return text.toUpperCase();
}
console.log(upper("hello"));`,

  `function lower(text) {
  return text.toLowerCase();
}
console.log(lower("HeLLo"));`,

  `function repeat(word, n) {
  let out = "";
  for (let i = 0; i < n; i++) out += word;
  return out;
}
console.log(repeat("Hi", 3));`,

  `function includes(text, letter) {
  return text.includes(letter);
}
console.log(includes("banana", "a"));`,

  `function trimIt(text) {
  return text.trim();
}
console.log(trimIt("  hi  "));`,

  // --- FILTERS + SEARCHES (31–50) ---

  `function onlyPositive(arr) {
  let out = [];
  for (let n of arr) if (n >= 0) out.push(n);
  return out;
}
console.log(onlyPositive([-3,5,0,-1]));`,

  `function onlyShortWords(arr) {
  let out = [];
  for (let w of arr) if (w.length <= 4) out.push(w);
  return out;
}
console.log(onlyShortWords(["hi","world","sun"]));`,

  `function findMatch(arr, target) {
  for (let item of arr) {
    if (item === target) return "Match found";
  }
  return "No match";
}
console.log(findMatch(["a","b","c"], "c"));`,

  `function onlyCountry(arr) {
  let out = [];
  for (let c of arr) if (c === "{{country}}") out.push(c);
  return out;
}
console.log(onlyCountry(["{{country}}","USA"]));`,

  `function onlyJob(arr) {
  let out = [];
  for (let j of arr) if (j === "{{job}}") out.push(j);
  return out;
}
console.log(onlyJob(["{{job}}","teacher"]));`,

  `function startsWith(arr, letter) {
  let out = [];
  for (let w of arr) if (w[0] === letter) out.push(w);
  return out;
}
console.log(startsWith(["apple","dog","air"], "a"));`,

  `function onlyEven(arr) {
  let out = [];
  for (let n of arr) if (n % 2 === 0) out.push(n);
  return out;
}
console.log(onlyEven([1,2,3,4,6]));`,

  `function aboveLimit(arr, limit) {
  let out = [];
  for (let n of arr) if (n > limit) out.push(n);
  return out;
}
console.log(aboveLimit([5,10,20], 8));`,

  `function search(arr, value) {
  for (let item of arr) if (item === value) return true;
  return false;
}
console.log(search([1,2,3], 2));`,

  `function countTrue(arr) {
  let count = 0;
  for (let v of arr) if (v === true) count++;
  return count;
}
console.log(countTrue([true,false,true,true]));`,

  // --- OBJECT BASICS (51–65) ---

  `function fullName(obj) {
  return obj.first + " " + obj.last;
}
console.log(fullName({ first:"{{name}}", last:"{{city}}" }));`,

  `function hasKey(obj, key) {
  return key in obj;
}
console.log(hasKey({ a:1, b:2 }, "b"));`,

  `function getKeys(obj) {
  return Object.keys(obj);
}
console.log(getKeys({ x:1, y:2 }));`,

  `function getValues(obj) {
  return Object.values(obj);
}
console.log(getValues({ a:10, b:20 }));`,

  `function addAge(obj) {
  obj.age = {{age}};
  return obj;
}
console.log(addAge({ name:"{{name}}" }));`,

  `function describe(obj) {
  return obj.name + " from " + obj.country;
}
console.log(describe({ name:"{{name}}", country:"{{country}}" }));`,

  `function rename(obj, newName) {
  obj.name = newName;
  return obj;
}
console.log(rename({ name:"Old" }, "{{name}}"));`,

  `function addJob(obj) {
  obj.job = "{{job}}";
  return obj;
}
console.log(addJob({ name:"{{name}}" }));`,

  `function removeKey(obj, key) {
  delete obj[key];
  return obj;
}
console.log(removeKey({ a:1, b:2 }, "a"));`,

  `function hasCountry(obj) {
  return obj.country === "{{country}}";
}
console.log(hasCountry({ country:"{{country}}" }));`,

  // --- STRING TRANSFORMATION (66–80) ---

  `function noVowels(text) {
  return text.replace(/[aeiou]/g, "");
}
console.log(noVowels("javascript"));`,

  `function reverse(text) {
  return text.split("").reverse().join("");
}
console.log(reverse("coding"));`,

  `function titleCase(text) {
  let words = text.split(" ");
  let out = [];
  for (let w of words) out.push(w[0].toUpperCase() + w.slice(1));
  return out.join(" ");
}
console.log(titleCase("welcome to {{city}}"));`,

  `function initials(name, city) {
  return name[0] + city[0];
}
console.log(initials("{{name}}", "{{city}}"));`,

  `function censor(text, letter) {
  return text.replaceAll(letter, "*");
}
console.log(censor("banana", "a"));`,

  `function snake(text) {
  return text.toLowerCase().replace(/ /g, "_");
}
console.log(snake("Hello World"));`,

  `function kebab(text) {
  return text.toLowerCase().replace(/ /g, "-");
}
console.log(kebab("Hello World"));`,

  `function pad(word, n) {
  let out = word;
  for (let i = 0; i < n; i++) out += "!";
  return out;
}
console.log(pad("Hi", 3));`,

  `function endsWith(word, letter) {
  return word[word.length - 1] === letter;
}
console.log(endsWith("hello","o"));`,

  `function starts(word, letter) {
  return word[0] === letter;
}
console.log(starts("hello","h"));`,

  // --- SMALL ALGORITHMS (81–100) ---

  `function sumDigits(n) {
  let digits = String(n).split("");
  let sum = 0;
  for (let d of digits) sum += Number(d);
  return sum;
}
console.log(sumDigits(1234));`,

  `function factorial(n) {
  let out = 1;
  for (let i = 1; i <= n; i++) out *= i;
  return out;
}
console.log(factorial(6));`,

  `function findMin(arr) {
  let min = arr[0];
  for (let n of arr) if (n < min) min = n;
  return min;
}
console.log(findMin([7,2,9]));`,

  `function findMax(arr) {
  let max = arr[0];
  for (let n of arr) if (n > max) max = n;
  return max;
}
console.log(findMax([1,8,3]));`,

  `function indexOf(arr, value) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === value) return i;
  return -1;
}
console.log(indexOf(["a","b","c"], "b"));`,

  `function noNull(arr) {
  let out = [];
  for (let x of arr) if (x !== null) out.push(x);
  return out;
}
console.log(noNull([1,null,2,null]));`,

  `function sum(arr) {
  let s = 0;
  for (let n of arr) s += n;
  return s;
}
console.log(sum([2,3,4]));`,

  `function everyOther(arr) {
  let out = [];
  for (let i = 0; i < arr.length; i += 2) out.push(arr[i]);
  return out;
}
console.log(everyOther([1,2,3,4,5]));`,

  `function multiplyAll(arr) {
  let product = 1;
  for (let n of arr) product *= n;
  return product;
}
console.log(multiplyAll([2,3,4]));`,

  `function end() {
  return "End of Level 10";
}
console.log(end());`,
];
