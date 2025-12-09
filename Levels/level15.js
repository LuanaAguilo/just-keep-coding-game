export const level15 = [
  // --- LEVEL 15: ARRAYS OF OBJECTS & LOOPING (1–100) ---

  // BASIC ARRAY ACCESS (1–15)
  `const people = [
  { name: "{{name}}", age: {{age}} },
  { name: "Luca", age: 22 }
];
console.log(people[0].name);`,

  `const cities = [
  { city: "{{city}}", country: "{{country}}" },
  { city: "Paris", country: "France" }
];
console.log(cities[1].country);`,

  `const pets = [
  { type: "dog", name: "Rex" },
  { type: "cat", name: "{{name}}" }
];
console.log(pets[1].type);`,

  `const jobs = [
  { title: "{{job}}", salary: 50000 },
  { title: "designer", salary: 45000 }
];
console.log(jobs[0].salary);`,

  `const scores = [
  { value: 10 },
  { value: 20 }
];
console.log(scores[1].value);`,

  `const products = [
  { name: "Pen", price: 2 },
  { name: "Book", price: 10 }
];
console.log(products[0].price);`,

  `const mountains = [
  { name: "Everest", height: 8848 },
  { name: "Matterhorn", height: 4478 }
];
console.log(mountains[1].height);`,

  `const users = [
  { username: "{{name}}", active: true },
  { username: "Sarah", active: false }
];
console.log(users[0].active);`,

  `const teams = [
  { city: "{{city}}", wins: 5 },
  { city: "Berlin", wins: 3 }
];
console.log(teams[1].wins);`,

  `const meals = [
  { food: "Pizza", calories: 300 },
  { food: "Salad", calories: 150 }
];
console.log(meals[0].food);`,

  `const points = [
  { x: 3, y: 5 },
  { x: 10, y: 2 }
];
console.log(points[1].x);`,

  `const classes = [
  { teacher: "{{name}}", students: 20 },
  { teacher: "Anna", students: 25 }
];
console.log(classes[1].teacher);`,

  `const films = [
  { title: "Inception", year: 2010 },
  { title: "Avatar", year: 2009 }
];
console.log(films[0].year);`,

  `const countries = [
  { name: "{{country}}", population: 10000 },
  { name: "Spain", population: 47000 }
];
console.log(countries[0].name);`,

  `const flowers = [
  { name: "Rose", color: "Red" },
  { name: "Sunflower", color: "Yellow" }
];
console.log(flowers[1].color);`,

  // LOOPING WITH FOR...OF (16–35)
  `const nums = [
  { n: 1 },
  { n: 2 },
  { n: 3 }
];
for (const item of nums) {
  console.log(item.n);
}`,

  `const artists = [
  { name: "{{name}}" },
  { name: "Mila" },
  { name: "Jonas" }
];
for (const a of artists) {
  console.log(a.name);
}`,

  `const books = [
  { title: "Book A" },
  { title: "Book B" }
];
for (const b of books) {
  console.log(b.title);
}`,

  `const athletes = [
  { sport: "Football" },
  { sport: "Tennis" }
];
for (const a of athletes) {
  console.log(a.sport);
}`,

  `const grades = [
  { score: 90 },
  { score: 80 },
  { score: 70 }
];
for (const g of grades) {
  console.log(g.score);
}`,

  `const drinks = [
  { type: "Water" },
  { type: "Juice" }
];
for (const d of drinks) {
  console.log(d.type);
}`,

  `const houses = [
  { rooms: 3 },
  { rooms: 5 }
];
for (const h of houses) {
  console.log(h.rooms);
}`,

  `const computers = [
  { brand: "Apple" },
  { brand: "Dell" }
];
for (const c of computers) {
  console.log(c.brand);
}`,

  `const foods = [
  { name: "Pasta" },
  { name: "Rice" }
];
for (const f of foods) {
  console.log(f.name);
}`,

  `const accounts = [
  { balance: 100 },
  { balance: 200 }
];
for (const acc of accounts) {
  console.log(acc.balance);
}`,

  // FINDING VALUES IN LOOPS (36–55)
  `const items = [
  { name: "Gold" },
  { name: "Silver" },
  { name: "Bronze" }
];
let found = "";
for (const i of items) {
  if (i.name === "Silver") {
    found = i.name;
  }
}
console.log(found);`,

  `const dirs = [
  { direction: "north" },
  { direction: "south" }
];
let south = "";
for (const d of dirs) {
  if (d.direction === "south") {
    south = d.direction;
  }
}
console.log(south);`,

  `const temps = [
  { t: 15 },
  { t: 25 }
];
let warm = "";
for (const temp of temps) {
  if (temp.t > 20) warm = temp.t;
}
console.log(warm);`,

  `const persons = [
  { age: 10 },
  { age: 30 }
];
let adult = 0;
for (const p of persons) {
  if (p.age >= 18) adult = p.age;
}
console.log(adult);`,

  `const animals = [
  { sound: "meow" },
  { sound: "woof" }
];
let dog = "";
for (const a of animals) {
  if (a.sound === "woof") dog = a.sound;
}
console.log(dog);`,

  `const phones = [
  { battery: 10 },
  { battery: 80 }
];
let high = 0;
for (const ph of phones) {
  if (ph.battery > 50) high = ph.battery;
}
console.log(high);`,

  `const cars2 = [
  { speed: 50 },
  { speed: 120 }
];
let fast = 0;
for (const c of cars2) {
  if (c.speed > 100) fast = c.speed;
}
console.log(fast);`,

  `const towns = [
  { city: "Rome" },
  { city: "{{city}}" }
];
let mine = "";
for (const t of towns) {
  if (t.city === "{{city}}") mine = t.city;
}
console.log(mine);`,

  `const levels = [
  { lvl: 1 },
  { lvl: 3 }
];
let highLvl = 0;
for (const l of levels) {
  if (l.lvl > highLvl) highLvl = l.lvl;
}
console.log(highLvl);`,

  `const stocks = [
  { price: 10 },
  { price: 25 }
];
let expensive = 0;
for (const s of stocks) {
  if (s.price > 20) expensive = s.price;
}
console.log(expensive);`,

  // COUNTING & AGGREGATION (56–75)
  `const fruits2 = [
  { type: "apple" },
  { type: "banana" },
  { type: "apple" }
];
let apples = 0;
for (const f of fruits2) {
  if (f.type === "apple") apples++;
}
console.log(apples);`,

  `const voters = [
  { voted: true },
  { voted: false },
  { voted: true }
];
let totalVotes = 0;
for (const v of voters) {
  if (v.voted) totalVotes++;
}
console.log(totalVotes);`,

  `const stars = [
  { rating: 5 },
  { rating: 3 },
  { rating: 5 }
];
let fiveStars = 0;
for (const s of stars) {
  if (s.rating === 5) fiveStars++;
}
console.log(fiveStars);`,

  `const inbox = [
  { read: true },
  { read: false }
];
let unread = 0;
for (const msg of inbox) {
  if (!msg.read) unread++;
}
console.log(unread);`,

  `const shop = [
  { inStock: true },
  { inStock: true },
  { inStock: false }
];
let available = 0;
for (const item of shop) {
  if (item.inStock) available++;
}
console.log(available);`,

  `const bikes = [
  { speed: 10 },
  { speed: 20 }
];
let total = 0;
for (const b of bikes) {
  total += b.speed;
}
console.log(total);`,

  `const stores = [
  { sales: 100 },
  { sales: 200 }
];
let salesTotal = 0;
for (const st of stores) {
  salesTotal += st.sales;
}
console.log(salesTotal);`,

  `const exams = [
  { score: 40 },
  { score: 90 }
];
let best = 0;
for (const e of exams) {
  if (e.score > best) best = e.score;
}
console.log(best);`,

  `const children = [
  { age: 3 },
  { age: 7 },
  { age: 12 }
];
let young = 0;
for (const c of children) {
  if (c.age < 10) young++;
}
console.log(young);`,

  `const movies2 = [
  { year: 2020 },
  { year: 2010 }
];
let recent = 0;
for (const m of movies2) {
  if (m.year > recent) recent = m.year;
}
console.log(recent);`,

  // RETURNING VALUES FROM LOOPS (76–90)
  `const catalog = [
  { name: "Pen" },
  { name: "Book" }
];
function findBook() {
  for (const item of catalog) {
    if (item.name === "Book") return item.name;
  }
}
console.log(findBook());`,

  `const queue = [
  { id: 1 },
  { id: 3 }
];
function findThree() {
  for (const q of queue) {
    if (q.id === 3) return q.id;
  }
}
console.log(findThree());`,

  `const group = [
  { name: "A" },
  { name: "B" }
];
function findB() {
  for (const g of group) {
    if (g.name === "B") return g.name;
  }
}
console.log(findB());`,

  `const ages2 = [
  { a: 15 },
  { a: 20 }
];
function firstAdult() {
  for (const p of ages2) {
    if (p.a >= 18) return p.a;
  }
}
console.log(firstAdult());`,

  `const foods3 = [
  { type: "pasta" },
  { type: "rice" }
];
function findRice() {
  for (const f of foods3) {
    if (f.type === "rice") return f.type;
  }
}
console.log(findRice());`,

  `const shirts = [
  { size: "S" },
  { size: "M" }
];
function findMedium() {
  for (const s of shirts) {
    if (s.size === "M") return s.size;
  }
}
console.log(findMedium());`,

  `const clouds = [
  { level: 2 },
  { level: 5 }
];
function highestCloud() {
  let max = 0;
  for (const c of clouds) {
    if (c.level > max) max = c.level;
  }
  return max;
}
console.log(highestCloud());`,

  `const folders = [
  { files: 3 },
  { files: 7 }
];
function getFiles() {
  let total = 0;
  for (const f of folders) {
    total += f.files;
  }
  return total;
}
console.log(getFiles());`,

  `const oceans = [
  { depth: 200 },
  { depth: 700 }
];
function deepest() {
  let d = 0;
  for (const o of oceans) {
    if (o.depth > d) d = o.depth;
  }
  return d;
}
console.log(deepest());`,

  `const emails = [
  { read: false },
  { read: true }
];
function unreadCount() {
  let count = 0;
  for (const e of emails) {
    if (!e.read) count++;
  }
  return count;
}
console.log(unreadCount());`,

  // END OF LEVEL (91–100)
  `function checkpoint15() { return "Level 15 complete"; }
console.log(checkpoint15());`,

  `function celebrate15() { return "Great job working with arrays of objects"; }
console.log(celebrate15());`,

  `function ready15() { return "You’re ready for Level 16"; }
console.log(ready15());`,

  `function skills15() { return "Your data-handling skills just leveled up"; }
console.log(skills15());`,

  `function end15() { return "End of Level 15"; }
console.log(end15());`,
];
