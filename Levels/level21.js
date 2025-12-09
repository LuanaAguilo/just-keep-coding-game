export const level21 = [
  // --- LEVEL 21: REPETITION / MUSCLE MEMORY (1–100) ---

  // VARIABLES (1–20)
  `let name = "{{name}}";
console.log(name);`,

  `let city = "{{city}}";
console.log(city);`,

  `let age = {{age}};
console.log(age);`,

  `let job = "{{job}}";
console.log(job);`,

  `let country = "{{country}}";
console.log(country);`,

  `let x = 5;
console.log(x);`,

  `let y = 12;
console.log(y);`,

  `let z = x + y;
console.log(z);`,

  `let text = "Hello World";
console.log(text);`,

  `let greeting = "Hi " + "{{name}}";
console.log(greeting);`,

  `let first = "Coding";
console.log(first);`,

  `let second = "Practice";
console.log(second);`,

  `let phrase = first + " " + second;
console.log(phrase);`,

  `let fruit = "Apple";
console.log(fruit);`,

  `let temp = 24;
console.log(temp);`,

  `let num = 100;
console.log(num);`,

  `let label = "Level 21";
console.log(label);`,

  `let points = 30;
console.log(points);`,

  `let score = 90;
console.log(score);`,

  `let level = "Repetition";
console.log(level);`,

  // ARRAYS (21–40)
  `const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);`,

  `const colors = ["Red", "Blue", "Green"];
console.log(colors[1]);`,

  `const pets = ["Dog", "Cat", "Bird"];
console.log(pets[2]);`,

  `const nums = [1,2,3];
console.log(nums[0]);`,

  `const cities = ["{{city}}", "Paris", "Berlin"];
console.log(cities[0]);`,

  `const list = ["A", "B", "C"];
console.log(list[1]);`,

  `const values = [10,20,30];
console.log(values[2]);`,

  `const animals = ["Lion","Tiger","Bear"];
console.log(animals[1]);`,

  `const drinks = ["Tea","Coffee","Juice"];
console.log(drinks[0]);`,

  `const cars = ["BMW","Audi","Tesla"];
console.log(cars[2]);`,

  `const scores = [50,60,70];
console.log(scores[0]);`,

  `const flags = ["USA","Japan","Brazil"];
console.log(flags[1]);`,

  `const langs = ["JS","Python","Java"];
console.log(langs[0]);`,

  `const devices = ["Phone","Laptop","Tablet"];
console.log(devices[2]);`,

  `const bags = ["Backpack","Purse","Suitcase"];
console.log(bags[1]);`,

  `const foods = ["Pizza","Sushi","Burger"];
console.log(foods[0]);`,

  `const flowers = ["Rose","Lily","Tulip"];
console.log(flowers[2]);`,

  `const toys = ["Car","Doll","Ball"];
console.log(toys[1]);`,

  `const shirts = ["Small","Medium","Large"];
console.log(shirts[2]);`,

  `const movies = ["Avatar","Matrix","Inception"];
console.log(movies[0]);`,

  // OBJECTS (41–60)
  `const user = {
  name: "{{name}}",
  age: {{age}}
};
console.log(user.name);`,

  `const profile = {
  city: "{{city}}",
  country: "{{country}}"
};
console.log(profile.city);`,

  `const item = {
  title: "Book",
  price: 20
};
console.log(item.price);`,

  `const car = {
  brand: "Audi",
  model: "A4"
};
console.log(car.brand);`,

  `const pet = {
  type: "Dog",
  age: 3
};
console.log(pet.age);`,

  `const person = {
  name: "{{name}}",
  job: "{{job}}"
};
console.log(person.job);`,

  `const device = {
  brand: "Apple",
  year: 2024
};
console.log(device.year);`,

  `const house = {
  rooms: 4,
  city: "{{city}}"
};
console.log(house.rooms);`,

  `const company = {
  name: "{{country}} Corp",
  employees: 200
};
console.log(company.name);`,

  `const school = {
  students: 500,
  teachers: 40
};
console.log(school.teachers);`,

  `const laptop = {
  brand: "Dell",
  size: 15
};
console.log(laptop.size);`,

  `const phone = {
  brand: "Samsung",
  color: "Black"
};
console.log(phone.color);`,

  `const jobInfo = {
  role: "{{job}}",
  salary: 60000
};
console.log(jobInfo.role);`,

  `const language = {
  name: "JavaScript",
  difficulty: 2
};
console.log(language.name);`,

  `const weather = {
  temp: 25,
  condition: "Sunny"
};
console.log(weather.temp);`,

  `const book = {
  title: "1984",
  pages: 350
};
console.log(book.pages);`,

  `const toy = {
  type: "Ball",
  size: "M"
};
console.log(toy.type);`,

  `const room = {
  name: "Living Room",
  size: 20
};
console.log(room.size);`,

  `const travel = {
  country: "{{country}}",
  city: "{{city}}"
};
console.log(travel.country);`,

  `const artist = {
  name: "{{name}}",
  genre: "Modern"
};
console.log(artist.genre);`,

  // FUNCTIONS (61–80)
  `function show() {
  console.log("Hello");
}
show();`,

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

  `function printJob() {
  console.log("{{job}}");
}
printJob();`,

  `function add() {
  console.log(2 + 3);
}
add();`,

  `function multiply() {
  console.log(4 * 5);
}
multiply();`,

  `function phrase() {
  console.log("Just keep coding");
}
phrase();`,

  `function welcome() {
  return "Welcome back";
}
console.log(welcome());`,

  `function greetPerson(n) {
  console.log("Hello " + n);
}
greetPerson("{{name}}");`,

  `function displayCountry(c) {
  console.log(c);
}
displayCountry("{{country}}");`,

  `function showColor() {
  let color = "Blue";
  console.log(color);
}
showColor();`,

  `function double(n) {
  console.log(n * 2);
}
double(6);`,

  `function triple(n) {
  console.log(n * 3);
}
triple(4);`,

  `function combine(a,b) {
  console.log(a + " " + b);
}
combine("Keep","Going");`,

  `function logNumber() {
  console.log(100);
}
logNumber();`,

  `function sayHi() {
  console.log("Hi");
}
sayHi();`,

  `function done() {
  return "End of functions";
}
console.log(done());`,

  `function state(level) {
  console.log("Current level: " + level);
}
state(21);`,

  `function fin() {
  console.log("Section complete");
}
fin();`,

  // ENDING (81–100)
  `console.log("Level 21 almost done");`,
  `console.log("Repetition helps build instinct");`,
  `console.log("Clean code is consistent code");`,
  `console.log("You are improving every day");`,
  `console.log("These basics are your foundation");`,
  `console.log("Coding requires muscle memory");`,
  `console.log("Your fundamentals are strong");`,
  `console.log("Ready for harder challenges");`,
  `console.log("One line at a time");`,
  `console.log("Practice leads to mastery");`,
  `console.log("Repetition = Confidence");`,
  `console.log("You're doing amazing");`,
  `console.log("Level 21 complete");`,
  `console.log("Moving to Level 22 next");`,
  `console.log("Your journey continues");`,
  `console.log("Strong finish to this level");`,
  `console.log("Lets keep going");`,
  `console.log("Onward to Level 22");`,
  `console.log("End of Level 21");`,
  `console.log("Great work today");`,
];
