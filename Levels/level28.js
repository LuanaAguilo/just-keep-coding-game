export const level28 = [
  // --- LEVEL 28: INTRO TO FOR LOOPS (1–100) ---

  // Counting loops (1–20)
  `for (let i = 0; i < 3; i++) {
  console.log(i);
}`,

  `for (let i = 1; i <= 3; i++) {
  console.log(i);
}`,

  `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,

  `for (let i = 2; i < 6; i++) {
  console.log(i);
}`,

  `for (let i = 5; i < 8; i++) {
  console.log(i);
}`,

  `for (let i = 0; i < 4; i++) {
  console.log("Loop");
}`,

  `for (let i = 1; i <= 4; i++) {
  console.log("Count:", i);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Step", i);
}`,

  `for (let i = 0; i < 2; i++) {
  console.log("Hi");
}`,

  `for (let i = 3; i < 6; i++) {
  console.log(i);
}`,

  `for (let i = 10; i < 13; i++) {
  console.log(i);
}`,

  `for (let i = 7; i < 10; i++) {
  console.log(i);
}`,

  `for (let i = 0; i < 6; i++) {
  console.log(i);
}`,

  `for (let i = 4; i < 7; i++) {
  console.log(i);
}`,

  `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,

  `for (let i = 2; i <= 6; i++) {
  console.log(i);
}`,

  `for (let i = 0; i < 8; i++) {
  console.log(i);
}`,

  `for (let i = 9; i < 12; i++) {
  console.log(i);
}`,

  `for (let i = 1; i < 4; i++) {
  console.log(i);
}`,

  `for (let i = 0; i < 5; i++) {
  console.log("Number:", i);
}`,

  // Looping through arrays (21–50)
  `const arr1 = ["A","B","C"];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}`,

  `const pets = ["Dog","Cat"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}`,

  `const nums = [1,2,3];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}`,

  `const colors = ["Red","Blue","Green"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}`,

  `const people = ["{{name}}","Alex"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}`,

  `const cities = ["{{city}}","Paris"];
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}`,

  `const list = ["X","Y","Z"];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}`,

  `const scores = [10,20,30];
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}`,

  `const items = ["Phone","Laptop"];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}`,

  `const drinks = ["Tea","Coffee","Juice"];
for (let i = 0; i < drinks.length; i++) {
  console.log(drinks[i]);
}`,

  `const letters = ["A","B"];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}`,

  `const temps = [20,21,22];
for (let i = 0; i < temps.length; i++) {
  console.log(temps[i]);
}`,

  `const friends = ["{{name}}","Sam","Anna"];
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}`,

  `const flags = ["USA","Japan","Brazil"];
for (let i = 0; i < flags.length; i++) {
  console.log(flags[i]);
}`,

  `const planets = ["Earth","Mars"];
for (let i = 0; i < planets.length; i++) {
  console.log(planets[i]);
}`,

  `const fruits = ["Apple","Banana","Pear"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`,

  `const vehicles = ["Car","Bike"];
for (let i = 0; i < vehicles.length; i++) {
  console.log(vehicles[i]);
}`,

  `const days = ["Mon","Tue","Wed"];
for (let i = 0; i < days.length; i++) {
  console.log(days[i]);
}`,

  `const toys = ["Ball","Doll","Car"];
for (let i = 0; i < toys.length; i++) {
  console.log(toys[i]);
}`,

  `const hobbies = ["Coding","Music"];
for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}`,

  // Looping with index usage (51–75)
  `const arr2 = ["A","B","C"];
for (let i = 0; i < arr2.length; i++) {
  console.log(i, arr2[i]);
}`,

  `const nums2 = [5,10,15];
for (let i = 0; i < nums2.length; i++) {
  console.log(i, nums2[i]);
}`,

  `const letters2 = ["X","Y","Z"];
for (let i = 0; i < letters2.length; i++) {
  console.log(i, letters2[i]);
}`,

  `const foods = ["Pizza","Pasta"];
for (let i = 0; i < foods.length; i++) {
  console.log(i, foods[i]);
}`,

  `const pair = ["{{name}}","{{city}}"];
for (let i = 0; i < pair.length; i++) {
  console.log(i, pair[i]);
}`,

  `const vals = [2,4,6];
for (let i = 0; i < vals.length; i++) {
  console.log(i, vals[i]);
}`,

  `const birds = ["Eagle","Sparrow"];
for (let i = 0; i < birds.length; i++) {
  console.log(i, birds[i]);
}`,

  `const temps2 = [30,32,33];
for (let i = 0; i < temps2.length; i++) {
  console.log(i, temps2[i]);
}`,

  `const aa = ["Red","Green"];
for (let i = 0; i < aa.length; i++) {
  console.log(i, aa[i]);
}`,

  `const bb = ["Dog","Cat"];
for (let i = 0; i < bb.length; i++) {
  console.log(i, bb[i]);
}`,

  `const cc = ["Sun","Moon","Star"];
for (let i = 0; i < cc.length; i++) {
  console.log(i, cc[i]);
}`,

  `const dd = ["Hot","Cold"];
for (let i = 0; i < dd.length; i++) {
  console.log(i, dd[i]);
}`,

  `const ee = ["One","Two"];
for (let i = 0; i < ee.length; i++) {
  console.log(i, ee[i]);
}`,

  `const ff = [10,20];
for (let i = 0; i < ff.length; i++) {
  console.log(i, ff[i]);
}`,

  `const gg = ["A","B","C"];
for (let i = 0; i < gg.length; i++) {
  console.log(i, gg[i]);
}`,

  // Looping with tiny transformations (76–100)
  `for (let i = 0; i < 3; i++) {
  console.log(i * 2);
}`,

  `for (let i = 1; i <= 3; i++) {
  console.log(i + 1);
}`,

  `for (let i = 0; i < 4; i++) {
  console.log(i * i);
}`,

  `for (let i = 2; i < 5; i++) {
  console.log(i + 10);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Loop:", i);
}`,

  `for (let i = 1; i <= 4; i++) {
  console.log("Value:", i * 3);
}`,

  `for (let i = 0; i < 5; i++) {
  console.log("Number", i + 2);
}`,

  `for (let i = 2; i <= 6; i++) {
  console.log(i - 1);
}`,

  `for (let i = 3; i < 6; i++) {
  console.log(i * 2);
}`,

  `for (let i = 0; i < 4; i++) {
  console.log(i + "!");
}`,

  `for (let i = 1; i < 4; i++) {
  console.log("Step", i * i);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log(i + 5);
}`,

  `for (let i = 5; i < 8; i++) {
  console.log(i - 2);
}`,

  `for (let i = 1; i <= 3; i++) {
  console.log(i * 10);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Index:", i);
}`,

  `for (let i = 2; i <= 4; i++) {
  console.log("Num:", i);
}`,

  `for (let i = 0; i < 4; i++) {
  console.log("Val:", i + 1);
}`,

  `for (let i = 3; i <= 5; i++) {
  console.log("Loop", i);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log(i * 3);
}`,

  `for (let i = 1; i <= 5; i++) {
  console.log("Done", i);
}`,
];
