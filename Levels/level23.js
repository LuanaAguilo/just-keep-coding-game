export const level23 = [
  // --- LEVEL 23: INTRO TO FOR LOOPS (1–100) ---

  // BASIC LOOP STRUCTURE (1–20)
  `for (let i = 0; i < 3; i++) {
  console.log(i);
}`,

  `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,

  `for (let i = 1; i <= 3; i++) {
  console.log(i);
}`,

  `for (let i = 0; i < 4; i++) {
  console.log("Hello");
}`,

  `for (let i = 0; i < 2; i++) {
  console.log("{{name}}");
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Looping");
}`,

  `for (let i = 0; i < 5; i++) {
  console.log("Count");
}`,

  `for (let i = 0; i < 2; i++) {
  console.log("{{city}}");
}`,

  `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,

  `for (let i = 3; i < 6; i++) {
  console.log(i);
}`,

  `for (let i = 0; i <= 2; i++) {
  console.log("Test");
}`,

  `for (let i = 0; i < 4; i++) {
  console.log("Coding");
}`,

  `for (let i = 5; i < 8; i++) {
  console.log(i);
}`,

  `for (let i = 10; i < 13; i++) {
  console.log(i);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("{{job}}");
}`,

  `for (let i = 0; i < 4; i++) {
  console.log("{{country}}");
}`,

  `for (let i = 1; i <= 4; i++) {
  console.log(i);
}`,

  `for (let i = 2; i < 5; i++) {
  console.log(i);
}`,

  `for (let i = 0; i < 2; i++) {
  console.log("Repeat");
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Done");
}`,

  // LOOPS WITH ARRAY ACCESS (21–40)
  `const nums = [10, 20, 30];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}`,

  `const letters = ["A","B","C"];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}`,

  `const items = ["Pen","Book","Pad"];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}`,

  `const pets = ["Dog","Cat","Bird"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}`,

  `const cities = ["{{city}}","Berlin","Paris"];
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}`,

  `const names = ["{{name}}","Alex","Sam"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}`,

  `const scores = [5, 10, 15];
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}`,

  `const fruits = ["Apple","Banana","Pear"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`,

  `const jobs = ["{{job}}","Doctor","Engineer"];
for (let i = 0; i < jobs.length; i++) {
  console.log(jobs[i]);
}`,

  `const flags = ["USA","Japan","Brazil"];
for (let i = 0; i < flags.length; i++) {
  console.log(flags[i]);
}`,

  `const temps = [20, 25, 30];
for (let i = 0; i < temps.length; i++) {
  console.log(temps[i]);
}`,

  `const music = ["Rock","Pop","Jazz"];
for (let i = 0; i < music.length; i++) {
  console.log(music[i]);
}`,

  `const tasks = ["Code","Study","Rest"];
for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i]);
}`,

  `const brands = ["Nike","Adidas","Puma"];
for (let i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}`,

  `const drinks = ["Water","Tea","Coffee"];
for (let i = 0; i < drinks.length; i++) {
  console.log(drinks[i]);
}`,

  `const nums2 = [1, 2, 3, 4];
for (let i = 0; i < nums2.length; i++) {
  console.log(nums2[i]);
}`,

  `const team = ["A","B","C","D"];
for (let i = 0; i < team.length; i++) {
  console.log(team[i]);
}`,

  `const arr = ["One","Two","Three"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`,

  `const modes = ["Easy","Medium","Hard"];
for (let i = 0; i < modes.length; i++) {
  console.log(modes[i]);
}`,

  `const pos = ["Top","Middle","Bottom"];
for (let i = 0; i < pos.length; i++) {
  console.log(pos[i]);
}`,

  // LOOPS WITH MATH + STRINGS (41–60)
  `for (let i = 0; i < 3; i++) {
  console.log(i * 2);
}`,

  `for (let i = 1; i <= 3; i++) {
  console.log(i + 5);
}`,

  `for (let i = 0; i < 4; i++) {
  console.log("Hi " + i);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Loop " + i);
}`,

  `for (let i = 2; i < 5; i++) {
  console.log(i * i);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Num: " + i);
}`,

  `for (let i = 0; i < 4; i++) {
  console.log("Count " + i);
}`,

  `for (let i = 1; i <= 4; i++) {
  console.log(i * 10);
}`,

  `for (let i = 3; i < 6; i++) {
  console.log(i + "!");
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Repeat " + i);
}`,

  `for (let i = 1; i <= 3; i++) {
  console.log(i + " times");
}`,

  `for (let i = 5; i < 8; i++) {
  console.log("Val: " + i);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("{{country}}" + i);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("{{job}} " + i);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("{{name}} " + i);
}`,

  `for (let i = 2; i <= 4; i++) {
  console.log(i * 3);
}`,

  `for (let i = 10; i < 13; i++) {
  console.log(i - 5);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Step " + i);
}`,

  `for (let i = 4; i < 7; i++) {
  console.log(i);
}`,

  `for (let i = 1; i <= 3; i++) {
  console.log(i + " done");
}`,

  // LOOPS WITH UPDATED ARRAYS (61–80)
  `const nums3 = [1,2,3];
for (let i = 0; i < nums3.length; i++) {
  console.log(nums3[i] * 2);
}`,

  `const letters2 = ["A","B","C"];
for (let i = 0; i < letters2.length; i++) {
  console.log(letters2[i] + "!");
}`,

  `const temps2 = [10,20,30];
for (let i = 0; i < temps2.length; i++) {
  console.log(temps2[i] + 5);
}`,

  `const foods = ["Pizza","Sushi","Burger"];
for (let i = 0; i < foods.length; i++) {
  console.log("Food: " + foods[i]);
}`,

  `const animals = ["Dog","Cat","Bird"];
for (let i = 0; i < animals.length; i++) {
  console.log("Animal: " + animals[i]);
}`,

  `const mix = [1,"A",true];
for (let i = 0; i < mix.length; i++) {
  console.log(mix[i]);
}`,

  `const scores3 = [5,10,15];
for (let i = 0; i < scores3.length; i++) {
  console.log(scores3[i] + " points");
}`,

  `const trio = ["{{name}}","{{city}}","{{country}}"];
for (let i = 0; i < trio.length; i++) {
  console.log(trio[i]);
}`,

  `const nums4 = [2,4,6];
for (let i = 0; i < nums4.length; i++) {
  console.log(nums4[i] / 2);
}`,

  `const shapes = ["Circle","Square","Triangle"];
for (let i = 0; i < shapes.length; i++) {
  console.log("Shape: " + shapes[i]);
}`,

  `const types = ["Easy","Medium","Hard"];
for (let i = 0; i < types.length; i++) {
  console.log("Type: " + types[i]);
}`,

  `const books = ["1984","Dune","It"];
for (let i = 0; i < books.length; i++) {
  console.log("Book: " + books[i]);
}`,

  `const months = ["Jan","Feb","Mar"];
for (let i = 0; i < months.length; i++) {
  console.log(months[i]);
}`,

  `const seasons = ["Winter","Spring","Summer","Fall"];
for (let i = 0; i < seasons.length; i++) {
  console.log(seasons[i]);
}`,

  `const modes2 = ["Auto","On","Off"];
for (let i = 0; i < modes2.length; i++) {
  console.log(modes2[i]);
}`,

  `const arr2 = ["Hi","There","Friend"];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}`,

  `const duo = ["Left","Right"];
for (let i = 0; i < duo.length; i++) {
  console.log(duo[i]);
}`,

  `const travel = ["{{city}}","{{country}}"];
for (let i = 0; i < travel.length; i++) {
  console.log(travel[i]);
}`,

  `const repeat = [1,1,1];
for (let i = 0; i < repeat.length; i++) {
  console.log(repeat[i]);
}`,

  `const four = [10,20,30,40];
for (let i = 0; i < four.length; i++) {
  console.log(four[i]);
}`,

  // SMALL LOOP CHALLENGES (81–100)
  `for (let i = 0; i < 3; i++) {
  console.log("Loop " + i + " working");
}`,

  `for (let i = 1; i <= 3; i++) {
  console.log("Step " + i);
}`,

  `const greeting = ["Hi","There"];
for (let i = 0; i < greeting.length; i++) {
  console.log(greeting[i]);
}`,

  `const combined = ["{{name}}","{{job}}"];
for (let i = 0; i < combined.length; i++) {
  console.log(combined[i]);
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Counting: " + i);
}`,

  `for (let i = 5; i < 8; i++) {
  console.log("Num: " + i);
}`,

  `const join = ["Level","23","Complete"];
for (let i = 0; i < join.length; i++) {
  console.log(join[i]);
}`,

  `for (let i = 0; i < 2; i++) {
  console.log("Almost done");
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("Good work");
}`,

  `for (let i = 0; i < 3; i++) {
  console.log("End of Level 23");
}`,
];
