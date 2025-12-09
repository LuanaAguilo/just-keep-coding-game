export const level24 = [
  // --- LEVEL 24: INTERMEDIATE FOR LOOPS (1–100) ---

  // BASIC COUNTING (1–20)
  `for (let i = 0; i <= 5; i++) {
  console.log(i);
}`,

  `for (let i = 2; i <= 6; i++) {
  console.log(i);
}`,

  `for (let i = 5; i >= 1; i--) {
  console.log(i);
}`,

  `for (let i = 0; i < 4; i++) {
  console.log("Looping...");
}`,

  `for (let i = 1; i <= 4; i++) {
  console.log("Step " + i);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Hello " + i);
}`,

  `for (let i = 3; i < 7; i++) {
  console.log(i * 2);
}`,

  `for (let i = 1; i <= 3; i++) {
  console.log("Hi " + "{{name}}");
}`,

  `for (let i = 0; i < 4; i++) {
  console.log("City: " + "{{city}}");
}`,

  `for (let i = 1; i <= 5; i++) {
  console.log(i * i);
}`,

  `for (let i = 10; i >= 7; i--) {
  console.log(i);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Practice makes perfect");
}`,

  `for (let i = 2; i <= 4; i++) {
  console.log(i - 1);
}`,

  `for (let i = 0; i <= 3; i++) {
  console.log(i + 10);
}`,

  `for (let i = 5; i < 9; i++) {
  console.log(i + "!");
}`,

  `for (let i = 1; i <= 4; i++) {
  console.log(i + " loops");
}`,

  `for (let i = 0; i < 6; i++) {
  console.log("Count: " + i);
}`,

  `for (let i = 3; i <= 5; i++) {
  console.log(i + 3);
}`,

  `for (let i = 9; i > 6; i--) {
  console.log(i);
}`,

  `for (let i = 0; i < 4; i++) {
  console.log("Done");
}`,

  // ARRAY LOOPING (21–40)
  `const nums = [2,4,6,8];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}`,

  `const letters = ["X","Y","Z"];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}`,

  `const pets = ["Dog","Cat","Fish"];
for (let i = 0; i < pets.length; i++) {
  console.log("Pet: " + pets[i]);
}`,

  `const foods = ["Pizza","Soup","Rice"];
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}`,

  `const cities = ["{{city}}","London","Rome"];
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}`,

  `const names = ["{{name}}","Sam","Ella"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}`,

  `const points = [10,20,30];
for (let i = 0; i < points.length; i++) {
  console.log(points[i] * 2);
}`,

  `const jobs = ["{{job}}","Doctor","Pilot"];
for (let i = 0; i < jobs.length; i++) {
  console.log(jobs[i]);
}`,

  `const mix = ["A", 5, true];
for (let i = 0; i < mix.length; i++) {
  console.log(mix[i]);
}`,

  `const flags = ["USA","Japan","Brazil"];
for (let i = 0; i < flags.length; i++) {
  console.log(flags[i]);
}`,

  `const nums2 = [1,3,5,7];
for (let i = 0; i < nums2.length; i++) {
  console.log(nums2[i] + 1);
}`,

  `const trio = ["Red","Blue","Green"];
for (let i = 0; i < trio.length; i++) {
  console.log(trio[i]);
}`,

  `const cars = ["BMW","Audi","Tesla"];
for (let i = 0; i < cars.length; i++) {
  console.log("Car: " + cars[i]);
}`,

  `const temps = [20,15,30];
for (let i = 0; i < temps.length; i++) {
  console.log(temps[i] + "°C");
}`,

  `const sports = ["Tennis","Golf","Football"];
for (let i = 0; i < sports.length; i++) {
  console.log(sports[i]);
}`,

  `const drinks = ["Tea","Water","Juice"];
for (let i = 0; i < drinks.length; i++) {
  console.log(drinks[i]);
}`,

  `const arr = ["One","Two","Three"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`,

  `const trio2 = ["{{city}}","{{country}}","{{job}}"];
for (let i = 0; i < trio2.length; i++) {
  console.log(trio2[i]);
}`,

  `const five = [1,2,3,4,5];
for (let i = 0; i < five.length; i++) {
  console.log(five[i]);
}`,

  `const words = ["Loop","Practice","Win"];
for (let i = 0; i < words.length; i++) {
  console.log(words[i]);
}`,

  // OBJECT LOOPS (41–60)
  `const user = {
  name: "{{name}}",
  city: "{{city}}",
  job: "{{job}}"
};
for (let key in user) {
  console.log(key);
}`,

  `const profile = {
  age: {{age}},
  country: "{{country}}"
};
for (let key in profile) {
  console.log(profile[key]);
}`,

  `const book = {
  title: "Dune",
  pages: 400
};
for (let key in book) {
  console.log(key);
}`,

  `const movie = {
  name: "Inception",
  year: 2010
};
for (let key in movie) {
  console.log(movie[key]);
}`,

  `const person = {
  n: "{{name}}",
  c: "{{city}}",
  a: {{age}}
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}`,

  `const data = {x: 1, y: 2, z: 3};
for (let key in data) {
  console.log(data[key]);
}`,

  `const colors = {a: "Red", b: "Green", c: "Blue"};
for (let key in colors) {
  console.log(colors[key]);
}`,

  `const country = {
  name: "{{country}}",
  population: 100000
};
for (let key in country) {
  console.log(key);
}`,

  `const settings = {
  mode: "Dark",
  volume: 50
};
for (let key in settings) {
  console.log(settings[key]);
}`,

  `const laptop = {
  brand: "Apple",
  year: 2022
};
for (let key in laptop) {
  console.log(laptop[key]);
}`,

  `const team = {
  coach: "{{name}}",
  city: "{{city}}"
};
for (let key in team) {
  console.log(team[key]);
}`,

  `const shape = {type: "Circle", size: 15};
for (let key in shape) {
  console.log(shape[key]);
}`,

  `const info = {
  model: "X1",
  price: 300
};
for (let key in info) {
  console.log(key);
}`,

  `const profile2 = {
  n: "{{name}}",
  j: "{{job}}"
};
for (let key in profile2) {
  console.log(profile2[key]);
}`,

  `const stats = {hp: 10, mp: 20};
for (let key in stats) {
  console.log(key + " = " + stats[key]);
}`,

  // STRING BUILDING LOOPS (61–80)
  `let word = "";
for (let i = 0; i < 3; i++) {
  word += "A";
}
console.log(word);`,

  `let result = "";
for (let i = 0; i < 4; i++) {
  result += "Hi ";
}
console.log(result);`,

  `let s = "";
for (let i = 0; i < 3; i++) {
  s += i;
}
console.log(s);`,

  `let text = "";
for (let i = 0; i < 2; i++) {
  text += "{{city}} ";
}
console.log(text);`,

  `let nameStr = "";
for (let i = 0; i < 3; i++) {
  nameStr += "{{name}} ";
}
console.log(nameStr);`,

  `let stars = "";
for (let i = 0; i < 5; i++) {
  stars += "*";
}
console.log(stars);`,

  `let sum = 0;
for (let i = 1; i <= 3; i++) {
  sum += i;
}
console.log(sum);`,

  `let chain = "";
for (let i = 0; i < 4; i++) {
  chain += "Loop ";
}
console.log(chain);`,

  `let out = "";
for (let i = 0; i < 3; i++) {
  out += i + "-";
}
console.log(out);`,

  `let repeat = "";
for (let i = 0; i < 2; i++) {
  repeat += "{{job}} ";
}
console.log(repeat);`,

  `let hash = "";
for (let i = 0; i < 5; i++) {
  hash += "#";
}
console.log(hash);`,

  `let build = "";
for (let i = 0; i < 3; i++) {
  build += "{{country}} ";
}
console.log(build);`,

  `let finalStr = "";
for (let i = 0; i < 3; i++) {
  finalStr += "OK ";
}
console.log(finalStr);`,

  `let join = "";
for (let i = 0; i < 3; i++) {
  join += "Level24 ";
}
console.log(join);`,

  `let ex = "";
for (let i = 1; i <= 3; i++) {
  ex += i + " ";
}
console.log(ex);`,

  // LOOP CHALLENGES (81–100)
  `for (let i = 1; i <= 3; i++) {
  console.log("Round " + i);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Try " + i);
}`,

  `const list = ["Start","Middle","End"];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}`,

  `const people = ["{{name}}","Alex","Taylor"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}`,

  `for (let i = 0; i < 2; i++) {
  console.log("Good job");
}`,

  `for (let i = 3; i < 6; i++) {
  console.log("Num: " + i);
}`,

  `const group = ["A","B","C","D"];
for (let i = 0; i < group.length; i++) {
  console.log(group[i]);
}`,

  `for (let i = 0; i < 4; i++) {
  console.log("Working...");
}`,

  `for (let i = 1; i <= 4; i++) {
  console.log(i);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("End of Level 24");
}`,
];
