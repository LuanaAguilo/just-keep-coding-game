export const level6 = [
  // --- LEVEL 6: WRITE SIMPLE FUNCTIONS (1–100) ---

  `function greet() {
  return "Hello";
}
console.log(greet());`,

  `function welcome(name) {
  return "Welcome " + name;
}
console.log(welcome("{{name}}"));`,

  `function add(a, b) {
  return a + b;
}
console.log(add(2, 3));`,

  `function double(n) {
  return n * 2;
}
console.log(double(4));`,

  `function showCity() {
  return "{{city}}";
}
console.log(showCity());`,

  `function ageText(age) {
  return "Age: " + age;
}
console.log(ageText({{age}}));`,

  `function showJob() {
  return "{{job}}";
}
console.log(showJob());`,

  `function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 5));`,

  `function minus(a, b) {
  return a - b;
}
console.log(minus(10, 7));`,

  `function sayHi() {
  return "Hi!";
}
console.log(sayHi());`,

  // --- BASIC RETURNS (11–20) ---

  `function describe(name, city) {
  return name + " from " + city;
}
console.log(describe("{{name}}", "{{city}}"));`,

  `function welcomeBack(name) {
  return "Welcome back " + name;
}
console.log(welcomeBack("{{name}}"));`,

  `function square(n) {
  return n * n;
}
console.log(square(5));`,

  `function divide(a, b) {
  return a / b;
}
console.log(divide(20, 5));`,

  `function favoriteFood(food) {
  return "I like " + food;
}
console.log(favoriteFood("Pizza"));`,

  `function repeat(word) {
  return word + word;
}
console.log(repeat("Hi"));`,

  `function makeIntro(name, age) {
  return name + " is " + age + " years old";
}
console.log(makeIntro("{{name}}", {{age}}));`,

  `function showCountry() {
  return "{{country}}";
}
console.log(showCountry());`,

  `function triple(n) {
  return n * 3;
}
console.log(triple(3));`,

  `function upper(text) {
  return text.toUpperCase();
}
console.log(upper("hello"));`,

  // --- FUNCTIONS WITH STRINGS (21–40) ---

  `function fullName(a, b) {
  return a + " " + b;
}
console.log(fullName("{{name}}", "Smith"));`,

  `function say(word) {
  return word;
}
console.log(say("Hello there"));`,

  `function tagCity(city) {
  return "City: " + city;
}
console.log(tagCity("{{city}}"));`,

  `function phrase(a, b) {
  return a + " " + b;
}
console.log(phrase("Good", "Morning"));`,

  `function cheer(name) {
  return "Go " + name + "!";
}
console.log(cheer("{{name}}"));`,

  `function calm() {
  return "Relax";
}
console.log(calm());`,

  `function labelCountry(c) {
  return "Country: " + c;
}
console.log(labelCountry("{{country}}"));`,

  `function writeJob(job) {
  return "Job: " + job;
}
console.log(writeJob("{{job}}"));`,

  `function quote(text) {
  return '"' + text + '"';
}
console.log(quote("Hello"));`,

  `function emphasize(word) {
  return word + "!";
}
console.log(emphasize("Stop"));`,

  // --- NUMBERS & RETURNS (41–60) ---

  `function addFive(n) {
  return n + 5;
}
console.log(addFive(10));`,

  `function minusTwo(n) {
  return n - 2;
}
console.log(minusTwo(7));`,

  `function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(1, 2, 3));`,

  `function bigger(a, b) {
  return a > b;
}
console.log(bigger(5, 3));`,

  `function smaller(a, b) {
  return a < b;
}
console.log(smaller(3, 5));`,

  `function timesTen(n) {
  return n * 10;
}
console.log(timesTen(4));`,

  `function half(n) {
  return n / 2;
}
console.log(half(100));`,

  `function remainder(a, b) {
  return a % b;
}
console.log(remainder(10, 3));`,

  `function absolute(n) {
  return Math.abs(n);
}
console.log(absolute(-5));`,

  `function power(a, b) {
  return a ** b;
}
console.log(power(2, 3));`,

  // --- BASIC LOGIC INSIDE FUNCTIONS (61–80) ---

  `function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  }
  return "Minor";
}
console.log(isAdult({{age}}));`,

  `function isPositive(n) {
  if (n > 0) {
    return "Positive";
  }
  return "Not positive";
}
console.log(isPositive(3));`,

  `function checkWord(w) {
  if (w.length > 4) {
    return "Long word";
  }
  return "Short word";
}
console.log(checkWord("Hi"));`,

  `function even(n) {
  if (n % 2 === 0) {
    return "Even";
  }
  return "Odd";
}
console.log(even(4));`,

  `function same(a, b) {
  if (a === b) {
    return "Same";
  }
  return "Different";
}
console.log(same(1, 1));`,

  `function warm(temp) {
  if (temp >= 20) {
    return "Warm";
  }
  return "Cold";
}
console.log(warm(22));`,

  `function startsA(text) {
  if (text[0] === "A") {
    return "Starts with A";
  }
  return "No A";
}
console.log(startsA("Apple"));`,

  `function allowed(age) {
  if (age >= 21) {
    return "Allowed";
  }
  return "Not allowed";
}
console.log(allowed({{age}}));`,

  `function matchCountry(c) {
  if (c === "{{country}}") {
    return "Match";
  }
  return "No match";
}
console.log(matchCountry("{{country}}"));`,

  `function longOrShort(text) {
  if (text.length >= 6) {
    return "Long";
  }
  return "Short";
}
console.log(longOrShort("Hello"));`,

  // --- SLIGHTLY ADVANCED (81–100) ---

  `function describePerson(name, age, job) {
  return name + " (" + age + ") is a " + job;
}
console.log(describePerson("{{name}}", {{age}}, "{{job}}"));`,

  `function introLine(city, country) {
  return city + ", " + country;
}
console.log(introLine("{{city}}", "{{country}}"));`,

  `function makeTag(word) {
  return "[" + word + "]";
}
console.log(makeTag("note"));`,

  `function repeat3(word) {
  return word + word + word;
}
console.log(repeat3("Hi"));`,

  `function compare(a, b, c) {
  return a + b + c;
}
console.log(compare(1, 2, 3));`,

  `function reverse(text) {
  return text.split("").reverse().join("");
}
console.log(reverse("Hello"));`,

  `function temperature(t) {
  if (t > 30) return "Hot";
  if (t > 20) return "Warm";
  return "Cold";
}
console.log(temperature(25));`,

  `function scoreLevel(s) {
  if (s >= 90) return "Great";
  if (s >= 60) return "Good";
  return "Low";
}
console.log(scoreLevel(70));`,

  `function describePet(pet) {
  return "Pet: " + pet;
}
console.log(describePet("Dog"));`,

  `function end() {
  return "End of Level 6";
}
console.log(end());`,
];
