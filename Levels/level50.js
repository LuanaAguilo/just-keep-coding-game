export const level50 = [
  // --- LEVEL 50: FINAL BOSS (1–100) ---
  // Small functions (1–20)

  `function greet(n) {
  return "Hello " + n;
}
console.log(greet("{{name}}"));`,

  `function add(a, b) {
  return a + b;
}
console.log(add(3, 7));`,

  `function double(n) {
  return n * 2;
}
console.log(double(12));`,

  `function square(n) {
  return n * n;
}
console.log(square(5));`,

  `function first(arr) {
  return arr[0];
}
console.log(first(["a","b","c"]));`,

  `function last(arr) {
  return arr[arr.length - 1];
}
console.log(last([10,20,30]));`,

  `function fullIntro(name, city) {
  return name + " lives in " + city;
}
console.log(fullIntro("{{name}}","{{city}}"));`,

  `function isAdult(age) {
  return age >= 18;
}
console.log(isAdult({{age}}));`,

  `function upper(x) {
  return x.toUpperCase();
}
console.log(upper("hello"));`,

  `function lower(x) {
  return x.toLowerCase();
}
console.log(lower("WORLD"));`,

  `function combine(a,b) {
  return a + " " + b;
}
console.log(combine("Hello","World"));`,

  `function repeatWord(w) {
  return w + w;
}
console.log(repeatWord("Hi"));`,

  `function getAge(obj) {
  return obj.age;
}
console.log(getAge({ age: {{age}} }));`,

  `function hi() {
  return "Hi there";
}
console.log(hi());`,

  `function addTen(n) {
  return n + 10;
}
console.log(addTen(20));`,

  `function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(6));`,

  `function area(w,h) {
  return w * h;
}
console.log(area(3,8));`,

  `function tag(n) {
  return "#" + n;
}
console.log(tag("code"));`,

  `function wrap(x) {
  return "[" + x + "]";
}
console.log(wrap("ok"));`,

  `function reverse(s) {
  return s.split("").reverse().join("");
}
console.log(reverse("hey"));`,

  // Loops (21–40)

  `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,

  `const nums = [1,2,3];
for (let n of nums) {
  console.log(n);
}`,

  `const letters = ["a","b","c"];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}`,

  `for (let i = 1; i <= 4; i++) {
  console.log(i * 2);
}`,

  `const arr = [2,4,6,8];
for (let n of arr) {
  console.log(n / 2);
}`,

  `const mix = ["hi","yo","hey"];
for (let w of mix) {
  console.log(w.toUpperCase());
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Loop");
}`,

  `const items = [10,20,30];
for (let i = 0; i < items.length; i++) {
  console.log(items[i] + 1);
}`,

  `const pets = ["dog","cat","bird"];
for (let p of pets) {
  console.log(p);
}`,

  `for (let i = 5; i <= 9; i++) {
  console.log(i);
}`,

  `const values = [3,6,9];
for (let v of values) {
  console.log(v * 3);
}`,

  `for (let x = 0; x < 4; x++) {
  console.log("Step", x);
}`,

  `const duo = ["A","B"];
for (let d of duo) {
  console.log(d + d);
}`,

  `const ages = [10,20,30];
for (let a of ages) {
  console.log(a >= 18);
}`,

  `for (let n = 1; n <= 3; n++) {
  console.log(n * n);
}`,

  `const words = ["one","two","three"];
for (let w of words) {
  console.log(w.length);
}`,

  `const prices = [5,10,15];
for (let p of prices) {
  console.log(p - 2);
}`,

  `for (let i = 0; i < 2; i++) {
  console.log("Run");
}`,

  `const tasks = ["eat","code","sleep"];
for (let t of tasks) {
  console.log(t);
}`,

  `for (let i = 2; i <= 6; i += 2) {
  console.log(i);
}`,

  // Arrays / objects manipulation (41–60)

  `const numbers = [1,2,3];
console.log(numbers.map(n => n * 2));`,

  `const nums2 = [5,10,15];
console.log(nums2.filter(n => n > 7));`,

  `const names2 = ["a","b","c"];
console.log(names2.includes("b"));`,

  `const arr2 = [10,20,30];
console.log(arr2.indexOf(20));`,

  `const data = ["x","y","z"];
console.log(data.reverse());`,

  `const vals = [2,4,6];
console.log(vals.reduce((t,n) => t + n, 0));`,

  `const city = "{{city}}";
console.log(city.length);`,

  `const person = {
  name: "{{name}}",
  age: {{age}}
};
console.log(person.name);`,

  `const obj = { a: 3, b: 7 };
console.log(obj.b);`,

  `const mix2 = ["hi","yo"];
console.log(mix2.join("-"));`,

  `const scores = [1,2,3,4];
console.log(scores.slice(1,3));`,

  `const nums3 = [3,6,9];
console.log(nums3.map(n => n / 3));`,

  `const letters2 = ["a","b","c"];
console.log(letters2[2]);`,

  `const tools = ["hammer","saw"];
console.log(tools[0].toUpperCase());`,

  `const pets2 = ["dog","cat"];
console.log(pets2.length);`,

  `const ageObj = { value: {{age}} };
console.log(ageObj.value + 1);`,

  `const food = { type: "Pizza", size: "Large" };
console.log(food.type);`,

  `const places = ["{{city}}","Berlin"];
console.log(places.includes("Berlin"));`,

  `const arr3 = [4,8,12];
console.log(arr3.map(n => n + 1));`,

  `const obj2 = { job: "{{job}}", country: "{{country}}" };
console.log(obj2.country);`,

  // Conditional logic (61–80)

  `if ({{age}} > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`,

  `if ("{{city}}" === "{{city}}") {
  console.log("Match");
}`,

  `const x = 10;
if (x < 20) {
  console.log("Small");
}`,

  `const temp = 30;
if (temp > 25) {
  console.log("Warm");
}`,

  `const score = 50;
if (score === 50) {
  console.log("Perfect");
}`,

  `const raining = false;
if (!raining) {
  console.log("Dry");
}`,

  `const n = 5;
if (n % 2 === 1) {
  console.log("Odd");
}`,

  `const ready = true;
if (ready) {
  console.log("Start");
}`,

  `const count = 3;
if (count !== 5) {
  console.log("Not five");
}`,

  `const speed = 90;
if (speed > 80) {
  console.log("Fast");
}`,

  `const value = 7;
if (value > 5) {
  console.log("High");
}`,

  `const rain2 = false;
if (!rain2) {
  console.log("Clear");
}`,

  `const heat = 35;
if (heat > 30) {
  console.log("Hot");
}`,

  `const hour = 11;
if (hour < 12) {
  console.log("Morning");
}`,

  `const seats = 2;
if (seats > 0) {
  console.log("Available");
}`,

  `const battery = 15;
if (battery < 20) {
  console.log("Low");
}`,

  `const flag = true;
if (flag) {
  console.log("On");
}`,

  `const fruit = "Apple";
if (fruit === "Apple") {
  console.log("Yes");
}`,

  `const grade = "A";
if (grade === "A") {
  console.log("Excellent");
}`,

  `const done = true;
if (done) {
  console.log("Completed");
}`,

  // Multi-line mini challenges (81–100)

  `const a = 3;
const b = 7;
console.log(a + b);`,

  `const msg = "Hello " + "{{name}}";
console.log(msg);`,

  `const u = {
  name: "{{name}}",
  city: "{{city}}"
};
console.log(u.city);`,

  `const arr4 = [1,2,3];
for (let n of arr4) {
  console.log(n * 2);
}`,

  `function intro(n,c) {
  return n + " from " + c;
}
console.log(intro("{{name}}","{{city}}"));`,

  `const prices2 = [5,10,20];
console.log(prices2.filter(p => p > 8));`,

  `function full(n,a) {
  return n + " (" + a + ")";
}
console.log(full("{{name}}",{{age}}));`,

  `const city2 = "{{city}}";
console.log(city2.toUpperCase());`,

  `function tiny(w) {
  return w.toLowerCase();
}
console.log(tiny("HELLO"));`,

  `const arr5 = [3,6,9];
console.log(arr5.reduce((t,n) => t + n, 0));`,

  `const z = 12;
if (z > 10) {
  console.log("Big");
}`,

  `const obj3 = {
  job: "{{job}}",
  age: {{age}}
};
console.log(obj3.job);`,

  `const vals5 = [10,20,30];
for (let v of vals5) {
  console.log(v - 5);
}`,

  `function sum(a,b) {
  return a + b;
}
console.log(sum(20,5));`,

  `const word = "code";
console.log(word.length);`,

  `const pets3 = ["dog","cat","fish"];
console.log(pets3[1]);`,

  `const h = 15;
if (h < 20) {
  console.log("Small");
}`,

  `function triple(n) {
  return n * 3;
}
console.log(triple(9));`,

  `const tag2 = "#" + "{{city}}";
console.log(tag2);`,

  `const nums9 = [2,4,6];
console.log(nums9.map(n => n / 2));`,
];
