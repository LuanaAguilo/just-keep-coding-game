export const level19 = [
  // --- LEVEL 19: ARRAYS OF OBJECTS (1–100) ---

  // READING ARRAY OF OBJECTS (1–20)
  `const users = [
  { name: "{{name}}", age: {{age}} },
  { name: "Mia", age: 22 }
];
console.log(users[0].name);`,

  `const cities = [
  { city: "{{city}}", country: "{{country}}" },
  { city: "Berlin", country: "Germany" }
];
console.log(cities[1].city);`,

  `const cars = [
  { brand: "Tesla", model: "S" },
  { brand: "BMW", model: "X5" }
];
console.log(cars[0].model);`,

  `const pets = [
  { type: "dog", age: 4 },
  { type: "cat", age: 2 }
];
console.log(pets[1].type);`,

  `const items = [
  { name: "Phone", price: 999 },
  { name: "Laptop", price: 1500 }
];
console.log(items[1].price);`,

  `const books = [
  { title: "Book A", pages: 200 },
  { title: "Book B", pages: 300 }
];
console.log(books[0].pages);`,

  `const movies = [
  { title: "Avatar", rating: 9 },
  { title: "Inception", rating: 10 }
];
console.log(movies[1].rating);`,

  `const profiles = [
  { name: "{{name}}", job: "{{job}}" },
  { name: "Anna", job: "Designer" }
];
console.log(profiles[0].job);`,

  `const people = [
  { name: "{{name}}", city: "{{city}}" },
  { name: "Jonas", city: "Oslo" }
];
console.log(people[1].city);`,

  `const laptops = [
  { brand: "Apple", size: 13 },
  { brand: "Dell", size: 15 }
];
console.log(laptops[0].brand);`,

  `const drinks = [
  { type: "Tea", hot: true },
  { type: "Soda", hot: false }
];
console.log(drinks[1].hot);`,

  `const teams = [
  { city: "{{city}}", level: 1 },
  { city: "Paris", level: 2 }
];
console.log(teams[0].level);`,

  `const foods = [
  { name: "Pizza", calories: 500 },
  { name: "Salad", calories: 150 }
];
console.log(foods[1].calories);`,

  `const stores = [
  { name: "Shop A", open: true },
  { name: "Shop B", open: false }
];
console.log(stores[0].open);`,

  `const lessons = [
  { topic: "Variables", difficulty: 1 },
  { topic: "Functions", difficulty: 2 }
];
console.log(lessons[1].topic);`,

  `const phones = [
  { brand: "Apple", year: 2023 },
  { brand: "Samsung", year: 2024 }
];
console.log(phones[1].year);`,

  `const rooms = [
  { name: "Kitchen", size: 12 },
  { name: "Living Room", size: 20 }
];
console.log(rooms[0].size);`,

  `const authors = [
  { name: "{{name}}", books: 3 },
  { name: "Emily", books: 5 }
];
console.log(authors[1].books);`,

  `const pets2 = [
  { type: "parrot", color: "green" },
  { type: "fish", color: "blue" }
];
console.log(pets2[0].color);`,

  `const jobList = [
  { title: "{{job}}", salary: 50000 },
  { title: "Engineer", salary: 70000 }
];
console.log(jobList[1].salary);`,

  // LOOP THROUGH ARRAY (21–40)
  `const arr1 = [
  { name: "{{name}}" },
  { name: "Mia" },
  { name: "Jonas" }
];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i].name);
}`,

  `const arr2 = [
  { city: "{{city}}" },
  { city: "Berlin" },
  { city: "Tokyo" }
];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i].city);
}`,

  `const arr3 = [
  { age: {{age}} },
  { age: 20 },
  { age: 30 }
];
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i].age);
}`,

  `const arr4 = [
  { type: "cat" },
  { type: "dog" },
  { type: "bird" }
];
for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i].type);
}`,

  `const arr5 = [
  { brand: "Tesla" },
  { brand: "BMW" },
  { brand: "Audi" }
];
for (let i = 0; i < arr5.length; i++) {
  console.log(arr5[i].brand);
}`,

  `const arr6 = [
  { score: 10 },
  { score: 20 },
  { score: 30 }
];
for (let i = 0; i < arr6.length; i++) {
  console.log(arr6[i].score);
}`,

  `const arr7 = [
  { active: true },
  { active: false },
  { active: true }
];
for (let i = 0; i < arr7.length; i++) {
  console.log(arr7[i].active);
}`,

  `const arr8 = [
  { year: 2020 },
  { year: 2021 },
  { year: 2022 }
];
for (let i = 0; i < arr8.length; i++) {
  console.log(arr8[i].year);
}`,

  `const arr9 = [
  { name: "A" },
  { name: "B" },
  { name: "C" }
];
for (let i = 0; i < arr9.length; i++) {
  console.log(arr9[i].name);
}`,

  `const arr10 = [
  { temp: 15 },
  { temp: 20 },
  { temp: 25 }
];
for (let i = 0; i < arr10.length; i++) {
  console.log(arr10[i].temp);
}`,

  `const arr11 = [
  { pages: 50 },
  { pages: 100 },
  { pages: 200 }
];
for (let i = 0; i < arr11.length; i++) {
  console.log(arr11[i].pages);
}`,

  `const arr12 = [
  { rating: 3 },
  { rating: 4 },
  { rating: 5 }
];
for (let i = 0; i < arr12.length; i++) {
  console.log(arr12[i].rating);
}`,

  `const arr13 = [
  { level: 1 },
  { level: 2 },
  { level: 3 }
];
for (let i = 0; i < arr13.length; i++) {
  console.log(arr13[i].level);
}`,

  `const arr14 = [
  { open: true },
  { open: false },
  { open: true }
];
for (let i = 0; i < arr14.length; i++) {
  console.log(arr14[i].open);
}`,

  `const arr15 = [
  { weight: 10 },
  { weight: 20 },
  { weight: 30 }
];
for (let i = 0; i < arr15.length; i++) {
  console.log(arr15[i].weight);
}`,

  `const arr16 = [
  { height: 150 },
  { height: 160 },
  { height: 170 }
];
for (let i = 0; i < arr16.length; i++) {
  console.log(arr16[i].height);
}`,

  `const arr17 = [
  { price: 5 },
  { price: 10 },
  { price: 15 }
];
for (let i = 0; i < arr17.length; i++) {
  console.log(arr17[i].price);
}`,

  `const arr18 = [
  { color: "red" },
  { color: "blue" },
  { color: "green" }
];
for (let i = 0; i < arr18.length; i++) {
  console.log(arr18[i].color);
}`,

  `const arr19 = [
  { power: 100 },
  { power: 150 },
  { power: 200 }
];
for (let i = 0; i < arr19.length; i++) {
  console.log(arr19[i].power);
}`,

  `const arr20 = [
  { age: 18 },
  { age: 25 },
  { age: 30 }
];
for (let i = 0; i < arr20.length; i++) {
  console.log(arr20[i].age);
}`,

  // FIND ITEM WITH SIMPLE LOGIC (41–60)
  `const group1 = [
  { name: "{{name}}", age: {{age}} },
  { name: "Mia", age: 22 }
];
for (let i = 0; i < group1.length; i++) {
  if (group1[i].name === "Mia") console.log(group1[i].age);
}`,

  `const group2 = [
  { city: "{{city}}" },
  { city: "Paris" }
];
for (let i = 0; i < group2.length; i++) {
  if (group2[i].city === "Paris") console.log("Found");
}`,

  `const group3 = [
  { age: 18 },
  { age: 30 }
];
for (let i = 0; i < group3.length; i++) {
  if (group3[i].age > 20) console.log(group3[i].age);
}`,

  `const group4 = [
  { type: "dog" },
  { type: "cat" }
];
for (let i = 0; i < group4.length; i++) {
  if (group4[i].type === "cat") console.log("Cat found");
}`,

  `const group5 = [
  { price: 5 },
  { price: 15 }
];
for (let i = 0; i < group5.length; i++) {
  if (group5[i].price > 10) console.log("Expensive");
}`,

  `const group6 = [
  { score: 40 },
  { score: 90 }
];
for (let i = 0; i < group6.length; i++) {
  if (group6[i].score >= 50) console.log(group6[i].score);
}`,

  `const group7 = [
  { job: "{{job}}" },
  { job: "Teacher" }
];
for (let i = 0; i < group7.length; i++) {
  if (group7[i].job === "Teacher") console.log("Match");
}`,

  `const group8 = [
  { active: false },
  { active: true }
];
for (let i = 0; i < group8.length; i++) {
  if (group8[i].active) console.log("Active user");
}`,

  `const group9 = [
  { year: 2022 },
  { year: 2024 }
];
for (let i = 0; i < group9.length; i++) {
  if (group9[i].year > 2022) console.log(group9[i].year);
}`,

  `const group10 = [
  { pages: 200 },
  { pages: 120 }
];
for (let i = 0; i < group10.length; i++) {
  if (group10[i].pages < 150) console.log(group10[i].pages);
}`,

  // NESTED OBJECTS INSIDE ARRAYS (61–80)
  `const data1 = [
  { person: { name: "{{name}}", age: {{age}} } },
  { person: { name: "Liam", age: 30 } }
];
console.log(data1[1].person.name);`,

  `const data2 = [
  { city: { name: "{{city}}", zip: 12345 } },
  { city: { name: "Paris", zip: 54321 } }
];
console.log(data2[0].city.zip);`,

  `const data3 = [
  { stats: { score: 50 } },
  { stats: { score: 90 } }
];
console.log(data3[1].stats.score);`,

  `const data4 = [
  { details: { color: "red" } },
  { details: { color: "blue" } }
];
console.log(data4[0].details.color);`,

  `const data5 = [
  { profile: { job: "{{job}}" } },
  { profile: { job: "Engineer" } }
];
console.log(data5[1].profile.job);`,

  `const data6 = [
  { book: { title: "A", pages: 100 } },
  { book: { title: "B", pages: 200 } }
];
console.log(data6[0].book.title);`,

  `const data7 = [
  { pet: { type: "dog", age: 4 } },
  { pet: { type: "cat", age: 2 } }
];
console.log(data7[1].pet.age);`,

  `const data8 = [
  { device: { brand: "Sony" } },
  { device: { brand: "Apple" } }
];
console.log(data8[1].device.brand);`,

  `const data9 = [
  { user: { name: "{{name}}", city: "{{city}}" } },
  { user: { name: "Jonas", city: "Oslo" } }
];
console.log(data9[0].user.city);`,

  `const data10 = [
  { value: { number: 10 } },
  { value: { number: 20 } }
];
console.log(data10[1].value.number);`,

  // ENDING (81–100)
  `function checkpoint19() { return "Level 19 complete"; }
console.log(checkpoint19());`,

  `function celebrate19() { return "Great job reading arrays of objects"; }
console.log(celebrate19());`,

  `function ready19() { return "You’re ready for Level 20"; }
console.log(ready19());`,

  `function skills19() { return "Your array skills are improving fast"; }
console.log(skills19());`,

  `function end19() { return "End of Level 19"; }
console.log(end19());`,

  // FILLER CELEBRATION LINES (96–100)
  `console.log("Arrays of objects are now easy for you");`,
  `console.log("Clean code comes with clean data");`,
  `console.log("Looping through data is now familiar");`,
  `console.log("Great work — Level 20 awaits");`,
  `console.log("End of practice for Level 19");`,
];
