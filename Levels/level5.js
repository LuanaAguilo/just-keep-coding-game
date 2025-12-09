export const level5 = [
  // --- LEVEL 5: BASIC FOR LOOPS & ARRAY ITERATION (1–100) ---

  `for (let i = 0; i < 3; i++) {
  console.log(i);
}`,

  `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,

  `for (let i = 0; i < 4; i++) {
  console.log("Hi");
}`,

  `const nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}`,

  `const names = ["{{name}}", "Alex", "Sam"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}`,

  `for (let i = 0; i < 5; i++) {
  console.log("Loop");
}`,

  `const items = ["pen", "book", "paper"];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}`,

  `const ages = [{{age}}, 25, 40];
for (let i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}`,

  `for (let i = 2; i <= 6; i++) {
  console.log(i);
}`,

  `const pets = ["dog", "cat", "bird"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}`,

  // --- SIMPLE PATTERNS (11–20) ---

  `for (let i = 0; i < 3; i++) {
  console.log("Hello " + i);
}`,

  `for (let i = 5; i > 0; i--) {
  console.log(i);
}`,

  `for (let i = 1; i <= 3; i++) {
  console.log(i * 2);
}`,

  `const nums2 = [10, 20, 30];
for (let i = 0; i < nums2.length; i++) {
  console.log(nums2[i] / 10);
}`,

  `for (let i = 0; i < 4; i++) {
  console.log("Loop " + i);
}`,

  `const food = ["Pizza", "Burger", "Pasta"];
for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("{{name}}");
}`,

  `for (let i = 1; i <= 4; i++) {
  console.log(i + 1);
}`,

  `const set = ["{{city}}", "Berlin"];
for (let i = 0; i < set.length; i++) {
  console.log(set[i]);
}`,

  `for (let i = 3; i <= 6; i++) {
  console.log(i);
}`,

  // --- LOOPING OVER RANDOMIZED DATA (21–40) ---

  `const people = ["{{name}}", "Anna", "Mark"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}`,

  `const places = ["{{city}}", "{{country}}"];
for (let i = 0; i < places.length; i++) {
  console.log(places[i]);
}`,

  `const mix = ["{{name}}", {{age}}, "{{job}}"];
for (let i = 0; i < mix.length; i++) {
  console.log(mix[i]);
}`,

  `const arr = ["{{city}}", "Paris", "Tokyo"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`,

  `const stats = [{{age}}, 100, 200];
for (let i = 0; i < stats.length; i++) {
  console.log(stats[i]);
}`,

  `const data = ["{{job}}", "Engineer", "Artist"];
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}`,

  `const regions = ["Europe", "{{country}}"];
for (let i = 0; i < regions.length; i++) {
  console.log(regions[i]);
}`,

  `const combo = ["{{name}}", "{{city}}", "{{job}}"];
for (let i = 0; i < combo.length; i++) {
  console.log(combo[i]);
}`,

  `const triple = ["{{country}}", "{{city}}", {{age}}];
for (let i = 0; i < triple.length; i++) {
  console.log(triple[i]);
}`,

  `const three = ["x", "y", "z"];
for (let i = 0; i < three.length; i++) {
  console.log(three[i]);
}`,

  // --- LOOP VARIATIONS (41–60) ---

  `for (let i = 0; i < 3; i++) {
  console.log("Run");
}`,

  `for (let i = 1; i <= 3; i++) {
  console.log(i * i);
}`,

  `for (let i = 2; i < 8; i += 2) {
  console.log(i);
}`,

  `for (let i = 10; i >= 7; i--) {
  console.log(i);
}`,

  `const arrA = [1, 2];
for (let i = 0; i < arrA.length; i++) {
  console.log(arrA[i] * 2);
}`,

  `const arrB = ["a", "b", "c"];
for (let i = 0; i < arrB.length; i++) {
  console.log(arrB[i].toUpperCase());
}`,

  `for (let i = 0; i < 4; i++) {
  console.log(i + "!");
}`,

  `const small = ["one", "two"];
for (let i = 0; i < small.length; i++) {
  console.log(small[i]);
}`,

  `for (let i = 5; i < 10; i++) {
  console.log(i);
}`,

  `for (let i = 0; i <= 2; i++) {
  console.log(i * 10);
}`,

  // --- BEGINNER LOGIC INSIDE LOOPS (61–80) ---

  `const nums3 = [1, 2, 3, 4];
for (let i = 0; i < nums3.length; i++) {
  if (nums3[i] > 2) {
    console.log(nums3[i]);
  }
}`,

  `const scores = [50, 70, 90];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 70) {
    console.log("Pass");
  }
}`,

  `const ages2 = [10, 18, 25];
for (let i = 0; i < ages2.length; i++) {
  if (ages2[i] >= 18) {
    console.log("Adult");
  }
}`,

  `const numbers4 = [3, 8, 12];
for (let i = 0; i < numbers4.length; i++) {
  if (numbers4[i] > 5) {
    console.log(numbers4[i]);
  }
}`,

  `const list = ["short", "looooong", "mid"];
for (let i = 0; i < list.length; i++) {
  if (list[i].length > 4) {
    console.log(list[i]);
  }
}`,

  `const arrC = ["{{name}}", "A", "B"];
for (let i = 0; i < arrC.length; i++) {
  if (arrC[i] === "{{name}}") {
    console.log("Match");
  }
}`,

  `const range = [1, 5, 9];
for (let i = 0; i < range.length; i++) {
  if (range[i] < 5) {
    console.log("Low");
  }
}`,

  `const temps = [20, 30, 15];
for (let i = 0; i < temps.length; i++) {
  if (temps[i] >= 20) {
    console.log("Warm");
  }
}`,

  `const mix2 = [true, false, true];
for (let i = 0; i < mix2.length; i++) {
  if (mix2[i]) {
    console.log("True value");
  }
}`,

  `const letters3 = ["a", "B", "c"];
for (let i = 0; i < letters3.length; i++) {
  if (letters3[i] === letters3[i].toUpperCase()) {
    console.log("Uppercase");
  }
}`,

  // --- SLIGHTLY MORE ADVANCED BUT STILL BEGINNER FRIENDLY (81–100) ---

  `const nums5 = [2, 4, 6];
for (let i = 0; i < nums5.length; i++) {
  console.log(nums5[i] + 1);
}`,

  `const combo2 = ["{{name}}", "{{city}}", "{{country}}"];
for (let i = 0; i < combo2.length; i++) {
  console.log("Item: " + combo2[i]);
}`,

  `const sequence = [1, 3, 5];
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i] * 3);
}`,

  `const flags = ["🇺🇸", "🇩🇪", "🇨🇭"];
for (let i = 0; i < flags.length; i++) {
  console.log(flags[i]);
}`,

  `const base = [10, 20, 30];
for (let i = 0; i < base.length; i++) {
  console.log(base[i] - 5);
}`,

  `const repeat = ["hello"];
for (let i = 0; i < 3; i++) {
  console.log(repeat[0]);
}`,

  `const pair = ["x", "y"];
for (let i = 0; i < pair.length; i++) {
  console.log(pair[i] + pair[i]);
}`,

  `const check = ["{{job}}", "Doctor"];
for (let i = 0; i < check.length; i++) {
  if (check[i] === "{{job}}") {
    console.log("Found");
  }
}`,

  `const smallNums = [1, 2, 3];
for (let i = 0; i < smallNums.length; i++) {
  console.log(smallNums[i] * smallNums[i]);
}`,

  `const closing = ["End", "of", "Level", "5"];
for (let i = 0; i < closing.length; i++) {
  console.log(closing[i]);
}`,
];
