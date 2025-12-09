export const level11 = [
  // --- LEVEL 11: LOGIC + DATA TRANSFORMATIONS (1–100) ---

  // SIMPLE VALIDATION (1–10)
  `function isAdult(age) {
  return age >= 18;
}
console.log(isAdult({{age}}));`,

  `function isLong(word) {
  return word.length > 5;
}
console.log(isLong("{{city}}"));`,

  `function isPositive(n) {
  return n > 0;
}
console.log(isPositive(5));`,

  `function isShort(text) {
  return text.length < 3;
}
console.log(isShort("Hi"));`,

  `function startsWithA(word) {
  return word[0] === "A";
}
console.log(startsWithA("Apple"));`,

  `function isEqual(a, b) {
  return a === b;
}
console.log(isEqual(5, 5));`,

  `function isCountry(c) {
  return c === "{{country}}";
}
console.log(isCountry("{{country}}"));`,

  `function isJob(j) {
  return j === "{{job}}";
}
console.log(isJob("{{job}}"));`,

  `function isEmpty(text) {
  return text.length === 0;
}
console.log(isEmpty(""));`,

  `function bothTrue(a, b) {
  return a && b;
}
console.log(bothTrue(true, true));`,

  // STRING TRANSFORMATIONS (11–25)
  `function reverse(text) {
  return text.split("").reverse().join("");
}
console.log(reverse("{{name}}"));`,

  `function removeSpaces(text) {
  return text.replace(/ /g, "");
}
console.log(removeSpaces("Hello World"));`,

  `function countLetters(text) {
  return text.length;
}
console.log(countLetters("{{city}}"));`,

  `function toSnake(text) {
  return text.toLowerCase().replace(/ /g, "_");
}
console.log(toSnake("Hello There"));`,

  `function toKebab(text) {
  return text.toLowerCase().replace(/ /g, "-");
}
console.log(toKebab("Hello There"));`,

  `function firstLetter(text) {
  return text[0];
}
console.log(firstLetter("{{country}}"));`,

  `function lastLetter(text) {
  return text[text.length - 1];
}
console.log(lastLetter("{{job}}"));`,

  `function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}
console.log(capitalize("hello"));`,

  `function shout(text) {
  return text.toUpperCase() + "!";
}
console.log(shout("stop"));`,

  `function hideVowels(text) {
  return text.replace(/[aeiou]/gi, "*");
}
console.log(hideVowels("javascript"));`,

  // ARRAY COUNTING + SEARCHING (26–40)
  `function countEven(arr) {
  let c = 0;
  for (let n of arr) if (n % 2 === 0) c++;
  return c;
}
console.log(countEven([1,2,3,4,6]));`,

  `function countOdd(arr) {
  let c = 0;
  for (let n of arr) if (n % 2 !== 0) c++;
  return c;
}
console.log(countOdd([1,2,3,4,5]));`,

  `function indexOf(arr, v) {
  for (let i = 0; i < arr.length; i++) if (arr[i] === v) return i;
  return -1;
}
console.log(indexOf(["a","b","c"], "b"));`,

  `function allCaps(arr) {
  let out = [];
  for (let w of arr) out.push(w.toUpperCase());
  return out;
}
console.log(allCaps(["a","b","c"]));`,

  `function total(arr) {
  let sum = 0;
  for (let n of arr) sum += n;
  return sum;
}
console.log(total([5,10,15]));`,

  `function greaterThan(arr, limit) {
  let out = [];
  for (let n of arr) if (n > limit) out.push(n);
  return out;
}
console.log(greaterThan([5,20,1,10], 8));`,

  `function contains(arr, v) {
  for (let x of arr) if (x === v) return true;
  return false;
}
console.log(contains(["x","y","z"], "y"));`,

  `function noNull(arr) {
  let out = [];
  for (let x of arr) if (x !== null) out.push(x);
  return out;
}
console.log(noNull([1,null,2,null]));`,

  `function allPositive(arr) {
  for (let n of arr) if (n < 0) return false;
  return true;
}
console.log(allPositive([1,2,3]));`,

  `function countMatches(arr, value) {
  let c = 0;
  for (let x of arr) if (x === value) c++;
  return c;
}
console.log(countMatches(["a","b","a","c"], "a"));`,

  // OBJECT TRANSFORMATION (41–55)
  `function addCountry(obj) {
  obj.country = "{{country}}";
  return obj;
}
console.log(addCountry({ name:"{{name}}" }));`,

  `function addJob(obj) {
  obj.job = "{{job}}";
  return obj;
}
console.log(addJob({ name:"{{name}}" }));`,

  `function describe(obj) {
  return obj.name + " from " + obj.city;
}
console.log(describe({ name:"{{name}}", city:"{{city}}" }));`,

  `function updateAge(obj, age) {
  obj.age = age;
  return obj;
}
console.log(updateAge({ name:"{{name}}" }, {{age}}));`,

  `function mergeObjects(a, b) {
  return { ...a, ...b };
}
console.log(mergeObjects({ name:"{{name}}" }, { city:"{{city}}" }));`,

  `function hasKey(obj, key) {
  return key in obj;
}
console.log(hasKey({ a:1, b:2 }, "b"));`,

  `function keyCount(obj) {
  return Object.keys(obj).length;
}
console.log(keyCount({ a:1, b:2, c:3 }));`,

  `function removeKey(obj, key) {
  delete obj[key];
  return obj;
}
console.log(removeKey({ a:1, b:2 }, "a"));`,

  `function cityMatch(obj) {
  return obj.city === "{{city}}";
}
console.log(cityMatch({ city:"{{city}}" }));`,

  `function jobMatch(obj) {
  return obj.job === "{{job}}";
}
console.log(jobMatch({ job:"{{job}}" }));`,

  // MINI ALGORITHMS (56–75)
  `function sumDigits(n) {
  let s = 0;
  for (let d of String(n)) s += Number(d);
  return s;
}
console.log(sumDigits(4321));`,

  `function productDigits(n) {
  let p = 1;
  for (let d of String(n)) p *= Number(d);
  return p;
}
console.log(productDigits(234));`,

  `function minValue(arr) {
  let m = arr[0];
  for (let n of arr) if (n < m) m = n;
  return m;
}
console.log(minValue([4,9,1,7]));`,

  `function maxValue(arr) {
  let m = arr[0];
  for (let n of arr) if (n > m) m = n;
  return m;
}
console.log(maxValue([4,9,1,7]));`,

  `function countAbove(arr, limit) {
  let c = 0;
  for (let n of arr) if (n > limit) c++;
  return c;
}
console.log(countAbove([1,5,10,15], 6));`,

  `function doubleAll(arr) {
  let out = [];
  for (let n of arr) out.push(n * 2);
  return out;
}
console.log(doubleAll([1,2,3]));`,

  `function halfAll(arr) {
  let out = [];
  for (let n of arr) out.push(n / 2);
  return out;
}
console.log(halfAll([10,20,30]));`,

  `function reverseArray(arr) {
  let out = [];
  for (let i = arr.length - 1; i >= 0; i--) out.push(arr[i]);
  return out;
}
console.log(reverseArray([1,2,3]));`,

  `function removeNegative(arr) {
  let out = [];
  for (let n of arr) if (n >= 0) out.push(n);
  return out;
}
console.log(removeNegative([-2,4,-1,5]));`,

  `function unique(arr) {
  let out = [];
  for (let n of arr) if (!out.includes(n)) out.push(n);
  return out;
}
console.log(unique([1,2,2,3,3]));`,

  // SMALL REAL-WORLD-ISH TASKS (76–95)
  `function fullIntro(name, age, city) {
  return name + " (" + age + ") from " + city;
}
console.log(fullIntro("{{name}}", {{age}}, "{{city}}"));`,

  `function priceWithTax(price) {
  return price * 1.19;
}
console.log(priceWithTax(100));`,

  `function discount(price, percent) {
  return price - price * (percent / 100);
}
console.log(discount(100, 20));`,

  `function loginCheck(user, pass) {
  return user === "{{name}}" && pass === "1234";
}
console.log(loginCheck("{{name}}", "1234"));`,

  `function roundDown(num) {
  return Math.floor(num);
}
console.log(roundDown(5.9));`,

  `function roundUp(num) {
  return Math.ceil(num);
}
console.log(roundUp(5.1));`,

  `function isBetween(n, min, max) {
  return n >= min && n <= max;
}
console.log(isBetween(5, 1, 10));`,

  `function tempStatus(t) {
  if (t > 30) return "Hot";
  if (t > 15) return "Warm";
  return "Cold";
}
console.log(tempStatus(20));`,

  `function greetTime(hour) {
  if (hour < 12) return "Morning";
  if (hour < 18) return "Afternoon";
  return "Evening";
}
console.log(greetTime(15));`,

  `function ageGroup(age) {
  if (age < 13) return "Child";
  if (age < 20) return "Teen";
  return "Adult";
}
console.log(ageGroup({{age}}));`,

  // END OF LEVEL (96–100)
  `function finalMessage() {
  return "Level 11 complete";
}
console.log(finalMessage());`,

  `function done() {
  return "Great progress!";
}
console.log(done());`,

  `function checkpoint() {
  return "Halfway through Phase 1";
}
console.log(checkpoint());`,

  `function keepGoing() {
  return "Keep practicing!";
}
console.log(keepGoing());`,

  `function end() {
  return "End of Level 11";
}
console.log(end());`,
];
