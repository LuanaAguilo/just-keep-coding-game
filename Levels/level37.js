export const level37 = [
  // --- LEVEL 37: FILTERING ARRAYS OF OBJECTS (1–100) ---

  // Keep only adults (1–10)
  `const people = [
  { name: "{{name}}", age: {{age}} },
  { name: "Alex", age: 12 },
  { name: "Sam", age: 30 }
];
let adults = [];
for (let i = 0; i < people.length; i++) {
  if (people[i].age >= 18) {
    adults.push(people[i]);
  }
}
console.log(adults);`,

  `const users = [
  { age: 10 },
  { age: 20 },
  { age: 17 }
];
let out = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    out.push(users[i]);
  }
}
console.log(out);`,

  `const list = [
  { age: 5 },
  { age: 40 }
];
let adults2 = [];
for (let i = 0; i < list.length; i++) {
  if (list[i].age >= 18) {
    adults2.push(list[i]);
  }
}
console.log(adults2);`,

  `const members = [
  { age: 7 },
  { age: {{age}} }
];
let allowed = [];
for (let i = 0; i < members.length; i++) {
  if (members[i].age >= 18) {
    allowed.push(members[i]);
  }
}
console.log(allowed);`,

  `const kids = [
  { age: 2 },
  { age: 9 },
  { age: 25 }
];
let grown = [];
for (let i = 0; i < kids.length; i++) {
  if (kids[i].age >= 18) {
    grown.push(kids[i]);
  }
}
console.log(grown);`,

  // Filter by job (11–20)
  `const workers = [
  { job: "{{job}}" },
  { job: "chef" },
  { job: "developer" }
];
let selected = [];
for (let i = 0; i < workers.length; i++) {
  if (workers[i].job === "{{job}}") {
    selected.push(workers[i]);
  }
}
console.log(selected);`,

  `const team = [
  { job: "pilot" },
  { job: "teacher" },
  { job: "pilot" }
];
let pilots = [];
for (let i = 0; i < team.length; i++) {
  if (team[i].job === "pilot") {
    pilots.push(team[i]);
  }
}
console.log(pilots);`,

  `const group = [
  { job: "driver" },
  { job: "lawyer" }
];
let lawyers = [];
for (let i = 0; i < group.length; i++) {
  if (group[i].job === "lawyer") {
    lawyers.push(group[i]);
  }
}
console.log(lawyers);`,

  `const staff = [
  { job: "designer" },
  { job: "chef" },
  { job: "designer" }
];
let designers = [];
for (let i = 0; i < staff.length; i++) {
  if (staff[i].job === "designer") {
    designers.push(staff[i]);
  }
}
console.log(designers);`,

  `const persons = [
  { job: "{{job}}" },
  { job: "nurse" }
];
let match = [];
for (let i = 0; i < persons.length; i++) {
  if (persons[i].job === "{{job}}") {
    match.push(persons[i]);
  }
}
console.log(match);`,

  // Filter numbers inside object properties (21–30)
  `const nums = [
  { value: 10 },
  { value: 3 },
  { value: 40 }
];
let big = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i].value > 10) {
    big.push(nums[i]);
  }
}
console.log(big);`,

  `const scores = [
  { score: 5 },
  { score: 20 }
];
let high = [];
for (let i = 0; i < scores.length; i++) {
  if (scores[i].score >= 10) {
    high.push(scores[i]);
  }
}
console.log(high);`,

  `const list2 = [
  { num: 1 },
  { num: 2 },
  { num: 10 }
];
let filtered = [];
for (let i = 0; i < list2.length; i++) {
  if (list2[i].num > 2) {
    filtered.push(list2[i]);
  }
}
console.log(filtered);`,

  `const items = [
  { height: 50 },
  { height: 120 }
];
let tall = [];
for (let i = 0; i < items.length; i++) {
  if (items[i].height > 100) {
    tall.push(items[i]);
  }
}
console.log(tall);`,

  `const objects = [
  { count: 0 },
  { count: 3 }
];
let nonZero = [];
for (let i = 0; i < objects.length; i++) {
  if (objects[i].count !== 0) {
    nonZero.push(objects[i]);
  }
}
console.log(nonZero);`,

  // Filter strings by length (31–40)
  `const words = [
  { text: "Hi" },
  { text: "Hello" },
  { text: "Hey" }
];
let long = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].text.length > 2) {
    long.push(words[i]);
  }
}
console.log(long);`,

  `const labels = [
  { tag: "A" },
  { tag: "ABC" }
];
let out2 = [];
for (let i = 0; i < labels.length; i++) {
  if (labels[i].tag.length >= 2) {
    out2.push(labels[i]);
  }
}
console.log(out2);`,

  `const items2 = [
  { word: "Dog" },
  { word: "Cat" },
  { word: "Bird" }
];
let chosen = [];
for (let i = 0; i < items2.length; i++) {
  if (items2[i].word.length > 3) {
    chosen.push(items2[i]);
  }
}
console.log(chosen);`,

  `const names = [
  { name: "{{name}}" },
  { name: "Al" }
];
let filtered2 = [];
for (let i = 0; i < names.length; i++) {
  if (names[i].name.length > 2) {
    filtered2.push(names[i]);
  }
}
console.log(filtered2);`,

  `const pets2 = [
  { type: "dog" },
  { type: "fish" }
];
let longNames = [];
for (let i = 0; i < pets2.length; i++) {
  if (pets2[i].type.length > 3) {
    longNames.push(pets2[i]);
  }
}
console.log(longNames);`,

  // Mixed logic (41–70)
  `const arrA = [
  { age: {{age}} },
  { age: 5 },
  { age: 70 }
];
let bucket = [];
for (let i = 0; i < arrA.length; i++) {
  if (arrA[i].age < 18) {
    bucket.push(arrA[i]);
  }
}
console.log(bucket);`,

  `const arrB = [
  { temp: 30 },
  { temp: 15 }
];
let warm = [];
for (let i = 0; i < arrB.length; i++) {
  if (arrB[i].temp > 20) {
    warm.push(arrB[i]);
  }
}
console.log(warm);`,

  `const arrC = [
  { n: 3 },
  { n: 9 }
];
let even = [];
for (let i = 0; i < arrC.length; i++) {
  if (arrC[i].n % 2 === 0) {
    even.push(arrC[i]);
  }
}
console.log(even);`,

  `const arrD = [
  { word: "Hello" },
  { word: "Ok" }
];
let bigWords = [];
for (let i = 0; i < arrD.length; i++) {
  if (arrD[i].word.length > 3) {
    bigWords.push(arrD[i]);
  }
}
console.log(bigWords);`,

  `const arrE = [
  { value: 2 },
  { value: 10 }
];
let small = [];
for (let i = 0; i < arrE.length; i++) {
  if (arrE[i].value < 5) {
    small.push(arrE[i]);
  }
}
console.log(small);`,

  // Harder filters with multiple conditions (71–90)
  `const cars = [
  { speed: 100, brand: "BMW" },
  { speed: 40, brand: "Toyota" }
];
let fastCars = [];
for (let i = 0; i < cars.length; i++) {
  if (cars[i].speed > 60) {
    fastCars.push(cars[i]);
  }
}
console.log(fastCars);`,

  `const people2 = [
  { name: "{{name}}", age: {{age}} },
  { name: "Alex", age: 10 }
];
let minors = [];
for (let i = 0; i < people2.length; i++) {
  if (people2[i].age < 18) {
    minors.push(people2[i]);
  }
}
console.log(minors);`,

  `const objs = [
  { x: 3, y: 6 },
  { x: 10, y: 2 }
];
let selected3 = [];
for (let i = 0; i < objs.length; i++) {
  if (objs[i].x > objs[i].y) {
    selected3.push(objs[i]);
  }
}
console.log(selected3);`,

  `const accounts = [
  { balance: 0 },
  { balance: 50 },
  { balance: 200 }
];
let nonEmpty = [];
for (let i = 0; i < accounts.length; i++) {
  if (accounts[i].balance > 0) {
    nonEmpty.push(accounts[i]);
  }
}
console.log(nonEmpty);`,

  `const items3 = [
  { price: 5 },
  { price: 20 }
];
let cheap = [];
for (let i = 0; i < items3.length; i++) {
  if (items3[i].price < 10) {
    cheap.push(items3[i]);
  }
}
console.log(cheap);`,

  // Final set (91–100)
  `const arrX = [
  { city: "{{city}}" },
  { city: "Rome" }
];
let filtered3 = [];
for (let i = 0; i < arrX.length; i++) {
  if (arrX[i].city !== "Rome") {
    filtered3.push(arrX[i]);
  }
}
console.log(filtered3);`,

  `const arrY = [
  { n: 1 },
  { n: 2 },
  { n: 7 }
];
let bigNums = [];
for (let i = 0; i < arrY.length; i++) {
  if (arrY[i].n > 2) {
    bigNums.push(arrY[i]);
  }
}
console.log(bigNums);`,

  `const arrZ = [
  { job: "{{job}}" },
  { job: "chef" }
];
let others = [];
for (let i = 0; i < arrZ.length; i++) {
  if (arrZ[i].job !== "chef") {
    others.push(arrZ[i]);
  }
}
console.log(others);`,

  `const arrW = [
  { age: 15 },
  { age: 50 }
];
let senior = [];
for (let i = 0; i < arrW.length; i++) {
  if (arrW[i].age >= 40) {
    senior.push(arrW[i]);
  }
}
console.log(senior);`,

  `const arrQ = [
  { text: "Hello" },
  { text: "Yo" }
];
let longOnes = [];
for (let i = 0; i < arrQ.length; i++) {
  if (arrQ[i].text.length > 2) {
    longOnes.push(arrQ[i]);
  }
}
console.log(longOnes);`,
];
