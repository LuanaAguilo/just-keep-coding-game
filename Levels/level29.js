export const level29 = [
  // --- LEVEL 29: FOR LOOPS + CONDITIONS (1–100) ---

  // Basic loop + if (1–20)
  `for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log(i);
  }
}`,

  `for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Match");
  }
}`,

  `for (let i = 0; i < 4; i++) {
  if (i > 1) {
    console.log(i);
  }
}`,

  `for (let i = 2; i < 6; i++) {
  if (i < 4) {
    console.log(i);
  }
}`,

  `for (let i = 0; i < 5; i++) {
  if (i !== 3) {
    console.log(i);
  }
}`,

  `for (let i = 1; i <= 5; i++) {
  if (i >= 4) {
    console.log(i);
  }
}`,

  `for (let i = 0; i < 6; i++) {
  if (i === 0) {
    console.log("Start");
  }
}`,

  `for (let i = 1; i <= 4; i++) {
  if (i === 1) {
    console.log("First");
  }
}`,

  `for (let i = 0; i < 5; i++) {
  if (i === 4) {
    console.log("Last");
  }
}`,

  `for (let i = 0; i < 3; i++) {
  if (i < 2) {
    console.log(i);
  }
}`,

  `for (let i = 2; i <= 5; i++) {
  if (i > 3) {
    console.log(i);
  }
}`,

  `for (let i = 0; i < 4; i++) {
  if (i === 1) {
    console.log("Hit");
  }
}`,

  `for (let i = 1; i < 4; i++) {
  if (i !== 2) {
    console.log(i);
  }
}`,

  `for (let i = 0; i < 6; i++) {
  if (i <= 2) {
    console.log(i);
  }
}`,

  `for (let i = 3; i < 7; i++) {
  if (i === 5) {
    console.log(i);
  }
}`,

  `for (let i = 1; i < 5; i++) {
  if (i > 1) {
    console.log(i);
  }
}`,

  `for (let i = 0; i < 5; i++) {
  if (i === 0) {
    console.log("Zero");
  }
}`,

  `for (let i = 2; i < 6; i++) {
  if (i < 5) {
    console.log(i);
  }
}`,

  `for (let i = 0; i < 3; i++) {
  if (i === 2) {
    console.log("Two");
  }
}`,

  `for (let i = 1; i <= 4; i++) {
  if (i >= 3) {
    console.log(i);
  }
}`,

  // Filtering arrays (21–50)
  `const nums = [1,2,3,4];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 2) {
    console.log(nums[i]);
  }
}`,

  `const values = [10,5,2];
for (let i = 0; i < values.length; i++) {
  if (values[i] < 10) {
    console.log(values[i]);
  }
}`,

  `const arr = ["A","B","C"];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "B") {
    console.log(arr[i]);
  }
}`,

  `const pets = ["Dog","Cat","Dog"];
for (let i = 0; i < pets.length; i++) {
  if (pets[i] === "Dog") {
    console.log("Found Dog");
  }
}`,

  `const ages = [12,18,25];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    console.log("Adult");
  }
}`,

  `const fruits = ["Apple","Banana"];
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Apple") {
    console.log("Apple");
  }
}`,

  `const cities = ["{{city}}","Paris","Rome"];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "{{city}}") {
    console.log(cities[i]);
  }
}`,

  `const nums2 = [3,6,9];
for (let i = 0; i < nums2.length; i++) {
  if (nums2[i] > 5) {
    console.log(nums2[i]);
  }
}`,

  `const letters = ["A","B","C"];
for (let i = 0; i < letters.length; i++) {
  if (letters[i] !== "A") {
    console.log(letters[i]);
  }
}`,

  `const list = ["X","Y","Z"];
for (let i = 0; i < list.length; i++) {
  if (list[i] === "Z") {
    console.log("Last item");
  }
}`,

  `const temps = [20,25,30];
for (let i = 0; i < temps.length; i++) {
  if (temps[i] >= 25) {
    console.log(temps[i]);
  }
}`,

  `const people = ["{{name}}","Alex"];
for (let i = 0; i < people.length; i++) {
  if (people[i] === "{{name}}") {
    console.log("Match");
  }
}`,

  `const flags = ["USA","Japan","Brazil"];
for (let i = 0; i < flags.length; i++) {
  if (flags[i] === "Japan") {
    console.log("Found");
  }
}`,

  `const cars = ["BMW","Audi","Tesla"];
for (let i = 0; i < cars.length; i++) {
  if (cars[i] !== "Audi") {
    console.log(cars[i]);
  }
}`,

  `const arr2 = [2,4,6,8];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    console.log(arr2[i]);
  }
}`,

  // Using modulo (51–75)
  `for (let i = 0; i < 6; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}`,

  `for (let i = 1; i <= 7; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}`,

  `for (let i = 0; i < 10; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}`,

  `for (let i = 1; i <= 9; i++) {
  if (i % 3 !== 0) {
    console.log(i);
  }
}`,

  `const nums3 = [3,5,6,9];
for (let i = 0; i < nums3.length; i++) {
  if (nums3[i] % 3 === 0) {
    console.log(nums3[i]);
  }
}`,

  `for (let i = 0; i < 12; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}`,

  `for (let i = 3; i < 15; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}`,

  `for (let i = 1; i < 8; i++) {
  if (i % 4 !== 0) {
    console.log(i);
  }
}`,

  `const arr3 = [2,7,10,14];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 7 === 0) {
    console.log(arr3[i]);
  }
}`,

  `for (let i = 1; i <= 5; i++) {
  if (i % 1 === 0) {
    console.log(i);
  }
}`,

  `for (let i = 0; i < 5; i++) {
  if (i % 5 === 0) {
    console.log("Zero or Five");
  }
}`,

  `const bb = [10,15,20];
for (let i = 0; i < bb.length; i++) {
  if (bb[i] % 10 === 0) {
    console.log(bb[i]);
  }
}`,

  `for (let i = 2; i < 10; i++) {
  if (i % 2 === 0) {
    console.log("Even", i);
  }
}`,

  `for (let i = 3; i < 10; i++) {
  if (i % 3 === 0) {
    console.log("Divisible", i);
  }
}`,

  `const cc = [1,4,7];
for (let i = 0; i < cc.length; i++) {
  if (cc[i] % 2 !== 0) {
    console.log(cc[i]);
  }
}`,

  // Slightly more abstract thinking (76–100)
  `for (let i = 0; i < 4; i++) {
  if (i + 2 === 3) {
    console.log(i);
  }
}`,

  `for (let i = 1; i <= 4; i++) {
  if (i * 2 === 4) {
    console.log("Yes");
  }
}`,

  `for (let i = 0; i < 5; i++) {
  if (i + 1 === 3) {
    console.log(3);
  }
}`,

  `for (let i = 2; i < 7; i++) {
  if (i - 1 === 3) {
    console.log(i);
  }
}`,

  `const arr4 = [1,2,3];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] + 1 === 3) {
    console.log(arr4[i]);
  }
}`,

  `const names = ["{{name}}","Max","Lia"];
for (let i = 0; i < names.length; i++) {
  if (names[i].length > 3) {
    console.log(names[i]);
  }
}`,

  `const countries = ["USA","{{country}}"];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length >= 3) {
    console.log(countries[i]);
  }
}`,

  `const list2 = ["A","BB","CCC"];
for (let i = 0; i < list2.length; i++) {
  if (list2[i].length === 2) {
    console.log(list2[i]);
  }
}`,

  `const nums4 = [3,8,12];
for (let i = 0; i < nums4.length; i++) {
  if (nums4[i] > 7) {
    console.log(nums4[i]);
  }
}`,

  `for (let i = 0; i < 3; i++) {
  if (i * i === 1) {
    console.log(i);
  }
}`,

  `const aa = ["Cat","Dog"];
for (let i = 0; i < aa.length; i++) {
  if (aa[i][0] === "C") {
    console.log(aa[i]);
  }
}`,

  `const bb2 = ["Red","Blue"];
for (let i = 0; i < bb2.length; i++) {
  if (bb2[i][0] !== "R") {
    console.log(bb2[i]);
  }
}`,

  `const arr5 = [10,20,30];
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] / 10 === 2) {
    console.log(arr5[i]);
  }
}`,

  `const foods = ["Pie","Cake","Tea"];
for (let i = 0; i < foods.length; i++) {
  if (foods[i].includes("a") || foods[i].includes("A")) {
    console.log(foods[i]);
  }
}`,

  `for (let i = 0; i < 4; i++) {
  if (i + i === 4) {
    console.log("Hit");
  }
}`,
];
