export const level49 = [
  // --- REPETITION SECTION (1–40) ---

  `const city = "{{city}}";
console.log(city);`,

  `const name = "{{name}}";
console.log(name);`,

  `let age = {{age}};
console.log(age);`,

  `let job = "{{job}}";
console.log(job);`,

  `let country = "{{country}}";
console.log(country);`,

  `function sayHello() {
  console.log("Hello");
}
sayHello();`,

  `function showName() {
  console.log("{{name}}");
}
showName();`,

  `function showAge() {
  console.log({{age}});
}
showAge();`,

  `function showCity() {
  console.log("{{city}}");
}
showCity();`,

  `let x = 3;
let y = 5;
console.log(x + y);`,

  `let a = 10;
let b = 4;
console.log(a - b);`,

  `let c = 6;
let d = 7;
console.log(c * d);`,

  `let t = 20;
let u = 5;
console.log(t / u);`,

  `const colors = ["red","blue","green"];
console.log(colors[2]);`,

  `const pets = ["dog","cat","fish"];
console.log(pets[1]);`,

  `let food = "Pasta";
console.log(food);`,

  `let drink = "Tea";
console.log(drink);`,

  `let phrase = "Keep learning";
console.log(phrase);`,

  `let message = "Hello {{name}}";
console.log(message);`,

  `const nums = [1,2,3,4];
console.log(nums[0]);`,

  `const fruits = ["apple","banana","mango"];
console.log(fruits[2]);`,

  `let weather = "Cloudy";
console.log(weather);`,

  `let hobby = "Coding";
console.log(hobby);`,

  `let motto = "Stay focused";
console.log(motto);`,

  `const items = ["pen","book","phone"];
console.log(items[1]);`,

  `let car = "BMW";
console.log(car);`,

  `let state = "California";
console.log(state);`,

  `let pet = "Dog";
console.log(pet);`,

  `const user = {
  name: "{{name}}",
  city: "{{city}}"
};
console.log(user.name);`,

  `const profile = {
  age: {{age}},
  job: "{{job}}"
};
console.log(profile.job);`,

  `function greetPerson(n) {
  console.log("Hello " + n);
}
greetPerson("{{name}}");`,

  `let base = "I live in ";
let town = "{{city}}";
console.log(base + town);`,

  `let first = "Hi";
let second = "{{name}}";
console.log(first + " " + second);`,

  `let q = 8;
let w = 2;
console.log(q * w);`,

  `function double(n) {
  console.log(n * 2);
}
double(10);`,

  `function triple(n) {
  console.log(n * 3);
}
triple(4);`,

  `function showCountry() {
  console.log("{{country}}");
}
showCountry();`,

  `let levelNote = "Level 49 practice";
console.log(levelNote);`,

  `let endNote = "End of repetition section";
console.log(endNote);`,

  // --- MEDIUM SECTION (41–70) ---

  `function intro(name, city) {
  console.log(name + " lives in " + city);
}
intro("{{name}}","{{city}}");`,

  `function add(a,b) {
  return a + b;
}
console.log(add(5,8));`,

  `const book = {
  title: "1984",
  author: "George Orwell"
};
console.log(book.title);`,

  `const device = {
  brand: "Apple",
  type: "Laptop"
};
console.log(device.type);`,

  `function describePlace(place) {
  return place + " is great";
}
console.log(describePlace("{{country}}"));`,

  `let h1 = 9;
let h2 = 3;
console.log(h1 - h2);`,

  `const products = ["shoes","shirt","hat"];
console.log(products[1]);`,

  `function repeat(word) {
  return word + " " + word;
}
console.log(repeat("Hello"));`,

  `const scores = [10,20,30];
console.log(scores[2]);`,

  `const classroom = {
  teacher: "{{name}}",
  students: 18
};
console.log(classroom.students);`,

  `function multiply(a,b) {
  return a * b;
}
console.log(multiply(7,6));`,

  `function format(name, age) {
  return name + " (" + age + ")";
}
console.log(format("{{name}}",{{age}}));`,

  `const settings = {
  mode: "Dark",
  version: 3
};
console.log(settings.mode);`,

  `function printSum(a,b,c) {
  console.log(a + b + c);
}
printSum(2,3,4);`,

  `let news = "Almost done with level 49";
console.log(news);`,

  `let finalMsg = "End of medium section";
console.log(finalMsg);`,

  `const car2 = {
  brand: "Audi",
  year: 2020
};
console.log(car2.year);`,

  `const bag = ["wallet","keys","phone"];
console.log(bag[0]);`,

  `function showJob(j) {
  console.log("Job: " + j);
}
showJob("{{job}}");`,

  `function subtract(a,b) {
  return a - b;
}
console.log(subtract(15,6));`,

  `const laptop = {
  model: "MacBook Pro",
  storage: "512GB"
};
console.log(laptop.storage);`,

  `let alertMsg = "Moving to logic soon";
console.log(alertMsg);`,

  `let note = "Stay focused";
console.log(note);`,

  `const mix = [1,"two",3];
console.log(mix[1]);`,

  `const movie = {
  name: "Inception",
  rating: 10
};
console.log(movie.rating);`,

  `function joinWords(a,b) {
  return a + " " + b;
}
console.log(joinWords("Good","Morning"));`,

  `let finish = "End of medium section for level 49";
console.log(finish);`,

  // --- LOGIC SECTION (71–100) ---

  `function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}
console.log(isAdult({{age}}));`,

  `function bigger(a,b) {
  if (a > b) return a;
  return b;
}
console.log(bigger(9,4));`,

  `function checkNumber(n) {
  if (n > 0) return "Positive";
  if (n < 0) return "Negative";
  return "Zero";
}
console.log(checkNumber(5));`,

  `let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log(total);`,

  `function countDown(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}
countDown(5);`,

  `function evenOrOdd(n) {
  if (n % 2 === 0) return "Even";
  return "Odd";
}
console.log(evenOrOdd(11));`,

  `function multiplyAll(arr) {
  let result = 1;
  for (let num of arr) {
    result *= num;
  }
  return result;
}
console.log(multiplyAll([2,3,4]));`,

  `function findLargest(arr) {
  let largest = arr[0];
  for (let n of arr) {
    if (n > largest) largest = n;
  }
  return largest;
}
console.log(findLargest([3,9,7]));`,

  `let sum = 0;
for (let n of [1,2,3,4]) {
  sum += n;
}
console.log(sum);`,

  `function greetTimes(word, times) {
  for (let i = 0; i < times; i++) {
    console.log(word);
  }
}
greetTimes("Hi", 3);`,

  `function showArray(arr) {
  for (let item of arr) {
    console.log(item);
  }
}
showArray(["a","b","c"]);`,

  `function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("Code"));`,

  `function min(a,b) {
  if (a < b) return a;
  return b;
}
console.log(min(4,9));`,

  `let counter = 0;
while (counter < 4) {
  console.log("Loop: " + counter);
  counter++;
}`,

  `function countChars(str) {
  return str.length;
}
console.log(countChars("Hello"));`,

  `function sumArray(arr) {
  let t = 0;
  for (let n of arr) {
    t += n;
  }
  return t;
}
console.log(sumArray([5,5,5]));`,

  `function includesX(arr, x) {
  for (let item of arr) {
    if (item === x) return true;
  }
  return false;
}
console.log(includesX(["a","b","c"], "b"));`,

  `let n1 = 7;
let n2 = 14;
if (n2 % n1 === 0) {
  console.log("Divisible");
} else {
  console.log("Not divisible");
}`,

  `function countdownFrom(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}
countdownFrom(3);`,

  `let finishMsg = "End of Level 49";
console.log(finishMsg);`,
];
