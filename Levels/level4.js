export const level4 = [
  // --- LEVEL 4: ARRAYS, INDEXING, BASIC MANIPULATION (1–100) ---

  `const nums = [1, 2, 3];
console.log(nums[0]);`,

  `const cities = ["{{city}}", "Berlin", "Tokyo"];
console.log(cities[2]);`,

  `const ages = [{{age}}, 30, 40];
console.log(ages[1]);`,

  `const items = ["pen", "book", "paper"];
console.log(items[0]);`,

  `const fruits = ["apple", "banana", "pear"];
console.log(fruits[2]);`,

  `const pets = ["dog", "cat", "bird"];
console.log(pets[1]);`,

  `const values = [10, 20, 30];
console.log(values[2]);`,

  `const cars = ["BMW", "Audi", "Tesla"];
console.log(cars[0]);`,

  `const people = ["{{name}}", "Alex", "Sam"];
console.log(people[0]);`,

  `const numbers = [3, 6, 9];
console.log(numbers[1]);`,

  `const arr = ["a", "b", "c"];
console.log(arr[2]);`,

  `const days = ["Mon", "Tue", "Wed"];
console.log(days[1]);`,

  `const points = [5, 10, 15];
console.log(points[0]);`,

  `const toys = ["ball", "car", "doll"];
console.log(toys[2]);`,

  `const group = ["{{name}}", "{{city}}", "{{country}}"];
console.log(group[1]);`,

  `const brands = ["Nike", "Adidas", "Puma"];
console.log(brands[0]);`,

  `const letters = ["X", "Y", "Z"];
console.log(letters[2]);`,

  `const temps = [20, 25, 30];
console.log(temps[1]);`,

  `const foods = ["Pizza", "Burger", "Pasta"];
console.log(foods[0]);`,

  `const shades = ["red", "blue", "green"];
console.log(shades[1]);`,

  // --- ARRAYS WITH RANDOM DATA (21–40) ---

  `const user = ["{{name}}", {{age}}, "{{city}}"];
console.log(user[0]);`,

  `const location = ["{{city}}", "{{country}}"];
console.log(location[1]);`,

  `const work = ["{{job}}", "{{name}}"];
console.log(work[0]);`,

  `const info = ["{{name}}", "{{country}}"];
console.log(info[1]);`,

  `const trio = ["{{name}}", "{{job}}", "{{city}}"];
console.log(trio[2]);`,

  `const data = ["{{country}}", {{age}}, "{{city}}"];
console.log(data[0]);`,

  `const set = ["{{job}}", "Engineer", "Designer"];
console.log(set[2]);`,

  `const profile = ["{{name}}", "{{city}}"];
console.log(profile[0]);`,

  `const stats = [{{age}}, 100, 200];
console.log(stats[2]);`,

  `const mix = ["{{city}}", 1, 2];
console.log(mix[0]);`,

  `const triple = ["{{job}}", "{{country}}", "{{city}}"];
console.log(triple[1]);`,

  `const cool = [true, false, true];
console.log(cool[1]);`,

  `const numbers2 = [2, 4, 6, 8];
console.log(numbers2[3]);`,

  `const views = ["sea", "mountain", "city"];
console.log(views[2]);`,

  `const random = ["{{name}}", "{{country}}", {{age}}];
console.log(random[0]);`,

  `const region = ["Europe", "{{country}}"];
console.log(region[1]);`,

  `const combo = ["{{city}}", "{{job}}", "{{name}}"];
console.log(combo[2]);`,

  `const indexTest = ["first", "second", "third"];
console.log(indexTest[0]);`,

  `const people2 = ["Anna", "{{name}}", "Mark"];
console.log(people2[1]);`,

  `const signs = ["+", "-", "*"];
console.log(signs[2]);`,

  // --- BASIC ARRAY OPERATIONS (41–70) ---

  `const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);`,

  `const arr2 = ["a", "b"];
arr2.push("c");
console.log(arr2[2]);`,

  `const arr3 = ["{{name}}"];
arr3.push("Alex");
console.log(arr3);`,

  `const arr4 = [10];
arr4.push(20);
console.log(arr4[1]);`,

  `const arr5 = ["x", "y"];
arr5.push("z");
console.log(arr5);`,

  `const arr6 = ["{{city}}"];
arr6.push("Berlin");
console.log(arr6[1]);`,

  `const arr7 = [5, 10];
arr7.push(15);
console.log(arr7[2]);`,

  `const arr8 = ["car"];
arr8.push("bike");
console.log(arr8);`,

  `const arr9 = ["{{country}}"];
arr9.push("Canada");
console.log(arr9);`,

  `const arr10 = ["Hello"];
arr10.push("World");
console.log(arr10[1]);`,

  `const test = [1, 2, 3];
console.log(test.length);`,

  `const letters2 = ["A", "B", "C"];
console.log(letters2.length);`,

  `const sizes = ["S", "M", "L"];
console.log(sizes.length);`,

  `const bag = ["book", "pen"];
console.log(bag.length);`,

  `const set2 = ["apple", "banana", "pear"];
console.log(set2.length);`,

  `const level = [10, 20, 30, 40];
console.log(level.length);`,

  `const words = ["This", "is", "fun"];
console.log(words.length);`,

  `const pair = ["left", "right"];
console.log(pair.length);`,

  `const mood = ["happy"];
console.log(mood.length);`,

  `const simple = ["{{name}}", "{{city}}"];
console.log(simple.length);`,

  // --- SLIGHTLY MORE ADVANCED ARRAY WORK (71–100) ---

  `const letters3 = ["a", "b", "c"];
console.log(letters3[letters3.length - 1]);`,

  `const nums3 = [10, 20, 30, 40];
console.log(nums3[nums3.length - 2]);`,

  `const paths = ["north", "south", "east", "west"];
console.log(paths[0]);`,

  `const colors2 = ["red", "green", "blue"];
console.log(colors2[colors2.length - 1]);`,

  `const logs = [1, 2, 3];
console.log(logs[0] + logs[1]);`,

  `const temperatures = [20, 22, 25];
console.log(temperatures[1] - temperatures[0]);`,

  `const nums4 = [2, 4, 6];
console.log(nums4[0] * nums4[2]);`,

  `const cityList = ["{{city}}", "Paris", "Rome"];
console.log(cityList[0] === "{{city}}");`,

  `const compare = [{{age}}, 30];
console.log(compare[0] > compare[1]);`,

  `const rating = [4, 5];
console.log(rating[0] < rating[1]);`,

  `const double = [1, 2];
console.log(double[0] * 2);`,

  `const distance = [5, 10];
console.log(distance[1] - distance[0]);`,

  `const order = ["start", "middle", "end"];
console.log(order[1]);`,

  `const hello = ["H", "e", "y"];
console.log(hello.join(""));`,

  `const splitName = "{{name}}".split("");
console.log(splitName[0]);`,

  `const merge = ["{{name}}", "{{city}}"].join(", ");
console.log(merge);`,

  `const mix2 = ["a", "b", "c"];
mix2[1] = "X";
console.log(mix2);`,

  `const swap = ["first", "second"];
const temp = swap[0];
swap[0] = swap[1];
swap[1] = temp;
console.log(swap);`,

  `const repeat = ["hello"];
console.log(repeat[0] + repeat[0]);`,

  `const catalog = ["book", "pen", "bag"];
console.log(catalog.includes("pen"));`,
];
