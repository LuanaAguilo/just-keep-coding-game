export const level8 = [
  // --- LEVEL 8: INTERMEDIATE LOGIC + ARRAYS + OBJECTS (1–100) ---

  `function countItems(arr) {
  return arr.length;
}
console.log(countItems([1, 2, 3]));`,

  `function firstItem(arr) {
  return arr[0];
}
console.log(firstItem(["a", "b", "c"]));`,

  `function lastItem(arr) {
  return arr[arr.length - 1];
}
console.log(lastItem([10, 20, 30]));`,

  `function sumTwo(a, b) {
  return a + b;
}
console.log(sumTwo(5, 7));`,

  `function toUpper(text) {
  return text.toUpperCase();
}
console.log(toUpper("hello"));`,

  `function isMatch(a, b) {
  if (a === b) return "Match";
  return "No match";
}
console.log(isMatch("{{name}}", "{{name}}"));`,

  `function contains(arr, value) {
  if (arr.includes(value)) return "Found";
  return "Not found";
}
console.log(contains(["red", "blue"], "blue"));`,

  `function describePerson(obj) {
  return obj.name + " lives in " + obj.city;
}
console.log(describePerson({ name: "{{name}}", city: "{{city}}" }));`,

  `function doubleArray(arr) {
  return arr.map(n => n * 2);
}
console.log(doubleArray([1, 2, 3]));`,

  `function greetUser(name) {
  return "Hello " + name;
}
console.log(greetUser("{{name}}"));`,

  // --- ARRAY SEARCH / LOOP BASICS (11–20) ---

  `function findIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}
console.log(findIndex([10, 20, 30], 20));`,

  `function countGreater(arr, limit) {
  let count = 0;
  for (let n of arr) {
    if (n > limit) count++;
  }
  return count;
}
console.log(countGreater([5, 12, 20, 3], 10));`,

  `function hasNegative(arr) {
  for (let n of arr) {
    if (n < 0) return true;
  }
  return false;
}
console.log(hasNegative([3, -1, 4]));`,

  `function concatWords(a, b, c) {
  return a + " " + b + " " + c;
}
console.log(concatWords("I", "love", "coding"));`,

  `function highest(arr) {
  let max = arr[0];
  for (let n of arr) {
    if (n > max) max = n;
  }
  return max;
}
console.log(highest([1, 7, 3]));`,

  `function lowest(arr) {
  let min = arr[0];
  for (let n of arr) {
    if (n < min) min = n;
  }
  return min;
}
console.log(lowest([4, 1, 8]));`,

  `function matchCity(obj) {
  if (obj.city === "{{city}}") return "Correct";
  return "Incorrect";
}
console.log(matchCity({ city: "{{city}}" }));`,

  `function startsWithA(text) {
  if (text[0] === "A") return "Starts with A";
  return "No";
}
console.log(startsWithA("Apple"));`,

  `function reverse(arr) {
  return arr.reverse();
}
console.log(reverse([1, 2, 3]));`,

  `function double(n) {
  return n * 2;
}
console.log(double(12));`,

  // --- OBJECT CHECKS (21–35) ---

  `function hasAge(person) {
  if ("age" in person) return true;
  return false;
}
console.log(hasAge({ name: "{{name}}", age: {{age}} }));`,

  `function fullName(obj) {
  return obj.first + " " + obj.last;
}
console.log(fullName({ first: "{{name}}", last: "{{city}}" }));`,

  `function isFromCountry(obj) {
  if (obj.country === "{{country}}") return "Yes";
  return "No";
}
console.log(isFromCountry({ country: "{{country}}" }));`,

  `function jobLine(job) {
  return "Job: " + job;
}
console.log(jobLine("{{job}}"));`,

  `function nameLength(name) {
  return name.length;
}
console.log(nameLength("{{name}}"));`,

  `function addAge(obj, extra) {
  return obj.age + extra;
}
console.log(addAge({ age: {{age}} }, 5));`,

  `function objectKeys(obj) {
  return Object.keys(obj);
}
console.log(objectKeys({ a: 1, b: 2 }));`,

  `function objectValues(obj) {
  return Object.values(obj);
}
console.log(objectValues({ a: 1, b: 2 }));`,

  `function hasJob(obj) {
  if (obj.job) return "Has job";
  return "No job";
}
console.log(hasJob({ job: "{{job}}" }));`,

  `function cityUpper(obj) {
  return obj.city.toUpperCase();
}
console.log(cityUpper({ city: "{{city}}" }));`,

  // --- MORE LOGIC PATTERNS (36–55) ---

  `function biggerNumber(a, b, c) {
  if (a > b && a > c) return "A biggest";
  if (b > c) return "B biggest";
  return "C biggest";
}
console.log(biggerNumber(10, 4, 3));`,

  `function stringCheck(text) {
  if (text.includes("a")) return "Has a";
  return "No a";
}
console.log(stringCheck("banana"));`,

  `function checkLength(text) {
  if (text.length > 10) return "Long";
  if (text.length > 5) return "Medium";
  return "Short";
}
console.log(checkLength("Hello"));`,

  `function tempStatus(t) {
  if (t > 30) return "Hot";
  if (t >= 20) return "Warm";
  return "Cold";
}
console.log(tempStatus(25));`,

  `function countLetters(text) {
  let count = 0;
  for (let char of text) {
    if (char === "a") count++;
  }
  return count;
}
console.log(countLetters("JavaScript"));`,

  `function total(arr) {
  let sum = 0;
  for (let n of arr) sum += n;
  return sum;
}
console.log(total([1, 2, 3]));`,

  `function evenNumbers(arr) {
  let out = [];
  for (let n of arr) {
    if (n % 2 === 0) out.push(n);
  }
  return out;
}
console.log(evenNumbers([1,2,3,4,5,6]));`,

  `function nameCheck(n) {
  if (n === "{{name}}") return "Correct";
  return "Wrong";
}
console.log(nameCheck("{{name}}"));`,

  `function ageGroup(age) {
  if (age < 10) return "Child";
  if (age < 18) return "Teen";
  return "Adult";
}
console.log(ageGroup({{age}}));`,

  `function join(arr) {
  return arr.join(", ");
}
console.log(join(["a","b","c"]));`,

  // --- LOOP + LOGIC MIX PRACTICE (56–75) ---

  `function findSmallest(arr) {
  let min = arr[0];
  for (let n of arr) {
    if (n < min) min = n;
  }
  return min;
}
console.log(findSmallest([9, 2, 7]));`,

  `function findBiggest(arr) {
  let max = arr[0];
  for (let n of arr) {
    if (n > max) max = n;
  }
  return max;
}
console.log(findBiggest([1,4,2]));`,

  `function countEven(arr) {
  let count = 0;
  for (let n of arr) {
    if (n % 2 === 0) count++;
  }
  return count;
}
console.log(countEven([1,2,3,4,6]));`,

  `function startsWith(text, letter) {
  if (text[0] === letter) return true;
  return false;
}
console.log(startsWith("Hello", "H"));`,

  `function wordCount(arr) {
  return arr.length;
}
console.log(wordCount(["hi","there"]));`,

  `function greetCity(c) {
  return "Welcome to " + c;
}
console.log(greetCity("{{city}}"));`,

  `function countTrue(arr) {
  let count = 0;
  for (let v of arr) {
    if (v === true) count++;
  }
  return count;
}
console.log(countTrue([true, false, true]));`,

  `function flip(bool) {
  return !bool;
}
console.log(flip(true));`,

  `function square(n) {
  return n * n;
}
console.log(square(5));`,

  `function product(arr) {
  let total = 1;
  for (let n of arr) total *= n;
  return total;
}
console.log(product([2, 3, 4]));`,

  // --- FINAL CHALLENGES (76–100) ---

  `function repeat(text, times) {
  let out = "";
  for (let i = 0; i < times; i++) out += text;
  return out;
}
console.log(repeat("Hi", 3));`,

  `function unique(arr) {
  let out = [];
  for (let n of arr) {
    if (!out.includes(n)) out.push(n);
  }
  return out;
}
console.log(unique([1,1,2,3,3]));`,

  `function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
console.log(capitalize("hello"));`,

  `function removeA(text) {
  return text.replace(/a/g, "");
}
console.log(removeA("banana"));`,

  `function average(arr) {
  let sum = 0;
  for (let n of arr) sum += n;
  return sum / arr.length;
}
console.log(average([10, 20, 30]));`,

  `function describe(obj) {
  return obj.name + " is from " + obj.country;
}
console.log(describe({ name: "{{name}}", country: "{{country}}" }));`,

  `function countSpaces(text) {
  let count = 0;
  for (let char of text) {
    if (char === " ") count++;
  }
  return count;
}
console.log(countSpaces("a b c d"));`,

  `function removeFirst(arr) {
  arr.shift();
  return arr;
}
console.log(removeFirst([1, 2, 3]));`,

  `function addLast(arr, value) {
  arr.push(value);
  return arr;
}
console.log(addLast([1,2], 3));`,

  `function end() {
  return "End of Level 8";
}
console.log(end());`,
];
