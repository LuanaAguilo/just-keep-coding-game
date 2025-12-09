export const level12 = [
  // --- LEVEL 12: ARRAYS, FILTERING, SEARCHING, TRANSFORMATIONS (1–100) ---

  // BASIC ARRAY TRANSFORMATIONS (1–10)
  `function doubleAll(arr) {
  let out = [];
  for (let n of arr) out.push(n * 2);
  return out;
}
console.log(doubleAll([1,2,3]));`,

  `function addOne(arr) {
  let out = [];
  for (let n of arr) out.push(n + 1);
  return out;
}
console.log(addOne([1,2,3]));`,

  `function negatives(arr) {
  let out = [];
  for (let n of arr) out.push(-n);
  return out;
}
console.log(negatives([1,2,3]));`,

  `function squareAll(arr) {
  let out = [];
  for (let n of arr) out.push(n * n);
  return out;
}
console.log(squareAll([2,3,4]));`,

  `function lengthAll(arr) {
  let out = [];
  for (let w of arr) out.push(w.length);
  return out;
}
console.log(lengthAll(["Hi","Code","JS"]));`,

  `function upperAll(arr) {
  let out = [];
  for (let w of arr) out.push(w.toUpperCase());
  return out;
}
console.log(upperAll(["a","b","c"]));`,

  `function lowerAll(arr) {
  let out = [];
  for (let w of arr) out.push(w.toLowerCase());
  return out;
}
console.log(lowerAll(["HELLO","WORLD"]));`,

  `function addExclamations(arr) {
  let out = [];
  for (let w of arr) out.push(w + "!");
  return out;
}
console.log(addExclamations(["Hi","Bye"]));`,

  `function firstLetters(arr) {
  let out = [];
  for (let w of arr) out.push(w[0]);
  return out;
}
console.log(firstLetters(["Apple","Boat","Cat"]));`,

  `function lastLetters(arr) {
  let out = [];
  for (let w of arr) out.push(w[w.length - 1]);
  return out;
}
console.log(lastLetters(["Apple","Boat","Cat"]));`,

  // FILTERING (11–25)
  `function onlyEven(arr) {
  let out = [];
  for (let n of arr) if (n % 2 === 0) out.push(n);
  return out;
}
console.log(onlyEven([1,2,3,4,6]));`,

  `function onlyOdd(arr) {
  let out = [];
  for (let n of arr) if (n % 2 !== 0) out.push(n);
  return out;
}
console.log(onlyOdd([1,2,3,4,5]));`,

  `function onlyLong(arr) {
  let out = [];
  for (let w of arr) if (w.length > 4) out.push(w);
  return out;
}
console.log(onlyLong(["Hi","Hello","World"]));`,

  `function onlyShort(arr) {
  let out = [];
  for (let w of arr) if (w.length <= 3) out.push(w);
  return out;
}
console.log(onlyShort(["JS","Dog","Coding"]));`,

  `function onlyPositive(arr) {
  let out = [];
  for (let n of arr) if (n > 0) out.push(n);
  return out;
}
console.log(onlyPositive([-2,4,-1,5]));`,

  `function onlyNegative(arr) {
  let out = [];
  for (let n of arr) if (n < 0) out.push(n);
  return out;
}
console.log(onlyNegative([-5,10,-1]));`,

  `function onlyMatch(arr, value) {
  let out = [];
  for (let x of arr) if (x === value) out.push(x);
  return out;
}
console.log(onlyMatch(["a","b","a"], "a"));`,

  `function aboveLimit(arr, limit) {
  let out = [];
  for (let n of arr) if (n > limit) out.push(n);
  return out;
}
console.log(aboveLimit([1,10,5,20], 8));`,

  `function belowLimit(arr, limit) {
  let out = [];
  for (let n of arr) if (n < limit) out.push(n);
  return out;
}
console.log(belowLimit([1,10,5,20], 8));`,

  `function notEqual(arr, value) {
  let out = [];
  for (let x of arr) if (x !== value) out.push(x);
  return out;
}
console.log(notEqual(["x","y","x"], "x"));`,

  // SEARCHING + MATCHING (26–40)
  `function findFirst(arr, value) {
  for (let i = 0; i < arr.length; i++) if (arr[i] === value) return i;
  return -1;
}
console.log(findFirst(["a","b","c"], "b"));`,

  `function includes(arr, value) {
  for (let x of arr) if (x === value) return true;
  return false;
}
console.log(includes(["a","b","c"], "c"));`,

  `function count(arr, value) {
  let c = 0;
  for (let x of arr) if (x === value) c++;
  return c;
}
console.log(count(["a","b","a"], "a"));`,

  `function startsWith(arr, letter) {
  let out = [];
  for (let w of arr) if (w[0] === letter) out.push(w);
  return out;
}
console.log(startsWith(["Cat","Car","Dog"], "C"));`,

  `function endsWith(arr, letter) {
  let out = [];
  for (let w of arr) if (w[w.length - 1] === letter) out.push(w);
  return out;
}
console.log(endsWith(["Hello","Hi","Yo"], "o"));`,

  `function containsLetter(arr, letter) {
  let out = [];
  for (let w of arr) if (w.includes(letter)) out.push(w);
  return out;
}
console.log(containsLetter(["Cat","Tea","Car"], "a"));`,

  `function longerThan(arr, len) {
  let out = [];
  for (let w of arr) if (w.length > len) out.push(w);
  return out;
}
console.log(longerThan(["Hi","Hello","JS"], 2));`,

  `function shorterThan(arr, len) {
  let out = [];
  for (let w of arr) if (w.length < len) out.push(w);
  return out;
}
console.log(shorterThan(["Code","JS","Dog"], 4));`,

  `function matchCountry(arr) {
  let out = [];
  for (let c of arr) if (c === "{{country}}") out.push(c);
  return out;
}
console.log(matchCountry(["USA","{{country}}","France"]));`,

  `function matchCity(arr) {
  let out = [];
  for (let c of arr) if (c === "{{city}}") out.push(c);
  return out;
}
console.log(matchCity(["Paris","{{city}}","Rome"]));`,

  // DATA CLEANING (41–55)
  `function removeNull(arr) {
  let out = [];
  for (let x of arr) if (x !== null) out.push(x);
  return out;
}
console.log(removeNull([1,null,2,null]));`,

  `function removeUndefined(arr) {
  let out = [];
  for (let x of arr) if (x !== undefined) out.push(x);
  return out;
}
console.log(removeUndefined([1,undefined,2]));`,

  `function removeFalse(arr) {
  let out = [];
  for (let x of arr) if (x !== false) out.push(x);
  return out;
}
console.log(removeFalse([true,false,true]));`,

  `function removeEmptyStrings(arr) {
  let out = [];
  for (let x of arr) if (x !== "") out.push(x);
  return out;
}
console.log(removeEmptyStrings(["A","","B"]));`,

  `function removeZeros(arr) {
  let out = [];
  for (let x of arr) if (x !== 0) out.push(x);
  return out;
}
console.log(removeZeros([0,1,2,0]));`,

  `function keepStrings(arr) {
  let out = [];
  for (let x of arr) if (typeof x === "string") out.push(x);
  return out;
}
console.log(keepStrings(["A",1,"B",2]));`,

  `function keepNumbers(arr) {
  let out = [];
  for (let x of arr) if (typeof x === "number") out.push(x);
  return out;
}
console.log(keepNumbers(["A",1,"B",2]));`,

  `function keepBooleans(arr) {
  let out = [];
  for (let x of arr) if (typeof x === "boolean") out.push(x);
  return out;
}
console.log(keepBooleans([true,1,false]));`,

  `function keepLongStrings(arr) {
  let out = [];
  for (let x of arr) if (x.length > 3) out.push(x);
  return out;
}
console.log(keepLongStrings(["Hi","Hello","JS"]));`,

  `function keepShortStrings(arr) {
  let out = [];
  for (let x of arr) if (x.length <= 3) out.push(x);
  return out;
}
console.log(keepShortStrings(["JS","Dog","Code"]));`,

  // MINI-ALGORITHMS (56–75)
  `function sumAll(arr) {
  let s = 0;
  for (let n of arr) s += n;
  return s;
}
console.log(sumAll([1,2,3,4]));`,

  `function productAll(arr) {
  let p = 1;
  for (let n of arr) p *= n;
  return p;
}
console.log(productAll([1,2,3,4]));`,

  `function min(arr) {
  let m = arr[0];
  for (let n of arr) if (n < m) m = n;
  return m;
}
console.log(min([5,1,9]));`,

  `function max(arr) {
  let m = arr[0];
  for (let n of arr) if (n > m) m = n;
  return m;
}
console.log(max([5,1,9]));`,

  `function average(arr) {
  let s = 0;
  for (let n of arr) s += n;
  return s / arr.length;
}
console.log(average([10,20,30]));`,

  `function countPositive(arr) {
  let c = 0;
  for (let n of arr) if (n > 0) c++;
  return c;
}
console.log(countPositive([-1,5,10]));`,

  `function countNegative(arr) {
  let c = 0;
  for (let n of arr) if (n < 0) c++;
  return c;
}
console.log(countNegative([-5,3,-1]));`,

  `function reverse(arr) {
  let out = [];
  for (let i = arr.length - 1; i >= 0; i--) out.push(arr[i]);
  return out;
}
console.log(reverse([1,2,3]));`,

  `function duplicate(arr) {
  let out = [];
  for (let x of arr) {
    out.push(x);
    out.push(x);
  }
  return out;
}
console.log(duplicate([1,2,3]));`,

  `function expand(arr, times) {
  let out = [];
  for (let x of arr) for (let i = 0; i < times; i++) out.push(x);
  return out;
}
console.log(expand(["a","b"], 2));`,

  // DATA SHAPING + TRANSFORMATIONS (76–90)
  `function pairWithCity(name) {
  return { name: name, city: "{{city}}" };
}
console.log(pairWithCity("{{name}}"));`,

  `function pairWithCountry(name) {
  return { name: name, country: "{{country}}" };
}
console.log(pairWithCountry("{{name}}"));`,

  `function personRecord(name, city, age) {
  return { name, city, age };
}
console.log(personRecord("{{name}}","{{city}}",{{age}}));`,

  `function tagAll(arr, tag) {
  let out = [];
  for (let x of arr) out.push(tag + ": " + x);
  return out;
}
console.log(tagAll(["A","B"], "Item"));`,

  `function wrapAll(arr) {
  let out = [];
  for (let x of arr) out.push("[" + x + "]");
  return out;
}
console.log(wrapAll(["a","b","c"]));`,

  `function addPrefix(arr, prefix) {
  let out = [];
  for (let x of arr) out.push(prefix + x);
  return out;
}
console.log(addPrefix(["one","two"], "#"));`,

  `function addSuffix(arr, suffix) {
  let out = [];
  for (let x of arr) out.push(x + suffix);
  return out;
}
console.log(addSuffix(["one","two"], "!"));`,

  `function joinWithDash(arr) {
  return arr.join("-");
}
console.log(joinWithDash(["a","b","c"]));`,

  `function joinWithSpace(arr) {
  return arr.join(" ");
}
console.log(joinWithSpace(["Hello","World"]));`,

  `function joinWithComma(arr) {
  return arr.join(",");
}
console.log(joinWithComma(["a","b","c"]));`,

  // END OF LEVEL (91–100)
  `function levelMessage() {
  return "Level 12 complete";
}
console.log(levelMessage());`,

  `function checkpoint() {
  return "You’re progressing fast";
}
console.log(checkpoint());`,

  `function nearlyThere() {
  return "End of beginner array logic";
}
console.log(nearlyThere());`,

  `function nextUp() {
  return "Advanced logic coming soon";
}
console.log(nextUp());`,

  `function end() {
  return "End of Level 12";
}
console.log(end());`,
];
