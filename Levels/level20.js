export const level20 = [
  // --- LEVEL 20: FUNCTION PRACTICE (1–100) ---

  // BASIC FUNCTIONS (1–20)
  `function greet() {
  console.log("Hello");
}
greet();`,

  `function showName() {
  console.log("{{name}}");
}
showName();`,

  `function showCity() {
  console.log("{{city}}");
}
showCity();`,

  `function showAge() {
  console.log({{age}});
}
showAge();`,

  `function welcome() {
  return "Welcome!";
}
console.log(welcome());`,

  `function getCountry() {
  return "{{country}}";
}
console.log(getCountry());`,

  `function getJob() {
  return "{{job}}";
}
console.log(getJob());`,

  `function sayHi() {
  console.log("Hi there");
}
sayHi();`,

  `function printNumber() {
  console.log(42);
}
printNumber();`,

  `function getMessage() {
  return "Keep going!";
}
console.log(getMessage());`,

  `function basicMath() {
  return 5 + 3;
}
console.log(basicMath());`,

  `function doubleTen() {
  return 10 * 2;
}
console.log(doubleTen());`,

  `function subtract() {
  return 20 - 7;
}
console.log(subtract());`,

  `function showVariable() {
  let x = 12;
  console.log(x);
}
showVariable();`,

  `function showGreeting() {
  let g = "Hello {{name}}";
  console.log(g);
}
showGreeting();`,

  `function concatWords() {
  let a = "Keep";
  let b = "coding";
  console.log(a + " " + b);
}
concatWords();`,

  `function showBoolean() {
  console.log(true);
}
showBoolean();`,

  `function showList() {
  console.log(["A","B","C"]);
}
showList();`,

  `function showObject() {
  console.log({ city: "{{city}}" });
}
showObject();`,

  `function showPhrase() {
  return "End of section 1";
}
console.log(showPhrase());`,

  // FUNCTIONS WITH PARAMETERS (21–40)
  `function greetPerson(n) {
  console.log("Hello " + n);
}
greetPerson("{{name}}");`,

  `function showX(x) {
  console.log(x);
}
showX(100);`,

  `function showDouble(n) {
  console.log(n * 2);
}
showDouble(8);`,

  `function showTriple(n) {
  console.log(n * 3);
}
showTriple(5);`,

  `function combine(a, b) {
  console.log(a + " " + b);
}
combine("Hello", "{{city}}");`,

  `function add(a, b) {
  return a + b;
}
console.log(add(3, 4));`,

  `function multiply(a, b) {
  return a * b;
}
console.log(multiply(6, 7));`,

  `function subtractTwo(a, b) {
  return a - b;
}
console.log(subtractTwo(12, 5));`,

  `function checkAge(a) {
  console.log("Age: " + a);
}
checkAge({{age}});`,

  `function showJob(job) {
  console.log("Job: " + job);
}
showJob("{{job}}");`,

  `function nameCity(name, city) {
  console.log(name + " in " + city);
}
nameCity("{{name}}", "{{city}}");`,

  `function repeat(word) {
  console.log(word + word);
}
repeat("Hi");`,

  `function greetFull(first, last) {
  console.log(first + " " + last);
}
greetFull("John", "Doe");`,

  `function power(a, b) {
  return a ** b;
}
console.log(power(2, 3));`,

  `function showTemp(t) {
  console.log(t + "°C");
}
showTemp(25);`,

  `function favorite(f) {
  console.log("Favorite: " + f);
}
favorite("Pizza");`,

  `function numberInfo(n) {
  console.log("Number is " + n);
}
numberInfo(9);`,

  `function combine3(a,b,c) {
  console.log(a + b + c);
}
combine3("A","B","C");`,

  `function agePlus(a) {
  return a + 10;
}
console.log(agePlus({{age}}));`,

  `function echo(x) {
  return x;
}
console.log(echo("Done"));`,

  // FUNCTIONS RETURNING VALUES (41–60)
  `function getDouble(n) {
  return n * 2;
}
console.log(getDouble(12));`,

  `function getTriple(n) {
  return n * 3;
}
console.log(getTriple(7));`,

  `function returnName() {
  return "{{name}}";
}
console.log(returnName());`,

  `function returnCity() {
  return "{{city}}";
}
console.log(returnCity());`,

  `function buildPhrase() {
  return "Hello from " + "{{city}}";
}
console.log(buildPhrase());`,

  `function numberString(n) {
  return "Value: " + n;
}
console.log(numberString(50));`,

  `function area(w, h) {
  return w * h;
}
console.log(area(4, 6));`,

  `function volume(a, b, c) {
  return a * b * c;
}
console.log(volume(2, 3, 4));`,

  `function decorated(text) {
  return "[" + text + "]";
}
console.log(decorated("Hello"));`,

  `function boolText(x) {
  return x ? "True" : "False";
}
console.log(boolText(true));`,

  `function yearPlus(year) {
  return year + 1;
}
console.log(yearPlus(2024));`,

  `function formatted(name, job) {
  return name + " is a " + job;
}
console.log(formatted("{{name}}","{{job}}"));`,

  `function tag(word) {
  return "<" + word + ">";
}
console.log(tag("code"));`,

  `function sumUpTo(n) {
  return n + n;
}
console.log(sumUpTo(10));`,

  `function line(a,b,c) {
  return a + "-" + b + "-" + c;
}
console.log(line(1,2,3));`,

  `function message() {
  return "Practice makes progress";
}
console.log(message());`,

  `function combineReturn(a,b) {
  return a + " " + b;
}
console.log(combineReturn("Learning","Functions"));`,

  `function nextAge(a) {
  return a + 1;
}
console.log(nextAge({{age}}));`,

  `function greeting(name) {
  return "Good day, " + name;
}
console.log(greeting("{{name}}"));`,

  `function reward() {
  return "Great job!";
}
console.log(reward());`,

  // FUNCTIONS WITH SIMPLE LOGIC (61–80)
  `function isAdult(a) {
  if (a >= 18) console.log("Adult");
}
isAdult({{age}});`,

  `function compare(a, b) {
  if (a > b) console.log("A is bigger");
}
compare(10, 5);`,

  `function checkZero(n) {
  if (n === 0) console.log("Zero");
}
checkZero(0);`,

  `function checkPositive(n) {
  if (n > 0) console.log("Positive");
}
checkPositive(12);`,

  `function checkNegative(n) {
  if (n < 0) console.log("Negative");
}
checkNegative(-3);`,

  `function showIfEven(n) {
  if (n % 2 === 0) console.log("Even");
}
showIfEven(4);`,

  `function showIfOdd(n) {
  if (n % 2 !== 0) console.log("Odd");
}
showIfOdd(7);`,

  `function tempCheck(temp) {
  if (temp > 25) console.log("Warm");
}
tempCheck(30);`,

  `function isMatch(a, b) {
  if (a === b) console.log("Match");
}
isMatch("A","A");`,

  `function longer(word) {
  if (word.length > 3) console.log("Long");
}
longer("Hello");`,

  `function ratingCheck(n) {
  if (n >= 5) console.log("High");
}
ratingCheck(8);`,

  `function startsWithA(word) {
  if (word[0] === "A") console.log("Starts with A");
}
startsWithA("Apple");`,

  `function endsWithX(word) {
  if (word[word.length - 1] === "x") console.log("Ends with x");
}
endsWithX("Box");`,

  `function checkTemp(t) {
  if (t < 0) console.log("Freezing");
}
checkTemp(-1);`,

  `function isTrue(x) {
  if (x) console.log("True value");
}
isTrue(true);`,

  `function nameCheck(n) {
  if (n === "{{name}}") console.log("Correct");
}
nameCheck("{{name}}");`,

  `function bigger(a, b) {
  if (a > b) console.log(a);
}
bigger(9,2);`,

  `function checkJob(j) {
  if (j === "{{job}}") console.log("Job matched");
}
checkJob("{{job}}");`,

  `function checkCountry(c) {
  if (c === "{{country}}") console.log("Country matched");
}
checkCountry("{{country}}");`,

  `function greetLevel() {
  console.log("Level 20 logic section done");
}
greetLevel();`,

  // END CELEBRATION (81–100)
  `function celebrate20() { return "Level 20 complete"; }
console.log(celebrate20());`,

  `function message20() { return "Function skills upgraded"; }
console.log(message20());`,

  `function finish20() { return "You’re doing amazing"; }
console.log(finish20());`,

  `function close20() { return "Ready for Level 21"; }
console.log(close20());`,

  `console.log("Practice creates clarity");`,
  `console.log("Functions are becoming natural to you");`,
  `console.log("Great progress today");`,
  `console.log("Level 21 incoming");`,
  `console.log("End of Level 20");`,
  `console.log("You are unstoppable");`,
  `console.log("Coding power increasing");`,
  `console.log("Consistency wins");`,
  `console.log("On to the next adventure");`,
  `console.log("End of practice set");`,
  `console.log("Well done finishing Level 20");`,
  `console.log("Your skills are growing fast");`,
  `console.log("Strong finish to this level");`,
  `console.log("See you in Level 21");`,
];
