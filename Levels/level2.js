export const level2 = [
  // --- LEVEL 2: FUNCTIONS, OBJECTS, ARRAYS, RETURNS (1–100) ---

  `function greet(name) {
  return "Hello " + name;
}
console.log(greet("{{name}}"));`,

  `function describeCity(city) {
  return city + " is amazing!";
}
console.log(describeCity("{{city}}"));`,

  `const person = {
  name: "{{name}}",
  age: {{age}}
};
console.log(person.age);`,

  `const place = {
  city: "{{city}}",
  country: "{{country}}"
};
console.log(place.country);`,

  `function add(a, b) {
  return a + b;
}
console.log(add(2, 3));`,

  `function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5));`,

  `const colors = ["red", "green", "blue"];
console.log(colors[1]);`,

  `const pets = ["dog", "cat", "bird"];
console.log(pets[0]);`,

  `function makeIntro(name, city) {
  return name + " lives in " + city;
}
console.log(makeIntro("{{name}}", "{{city}}"));`,

  `const user = {
  name: "{{name}}",
  job: "{{job}}",
  city: "{{city}}"
};
console.log(user.job);`,

  `function ageText(age) {
  return "Age: " + age;
}
console.log(ageText({{age}}));`,

  `const nums = [5, 10, 15];
console.log(nums[2]);`,

  `function double(n) {
  return n * 2;
}
console.log(double(6));`,

  `function intro(name, age) {
  return name + " is " + age + " years old";
}
console.log(intro("{{name}}", {{age}}));`,

  `const movie = {
  title: "Inception",
  year: 2010
};
console.log(movie.year);`,

  `const profile = {
  name: "{{name}}",
  country: "{{country}}",
  job: "{{job}}"
};
console.log(profile.country);`,

  `function first(arr) {
  return arr[0];
}
console.log(first(["a", "b", "c"]));`,

  `const values = [1, 2, 3, 4];
console.log(values[3]);`,

  `function square(n) {
  return n * n;
}
console.log(square(5));`,

  `function welcome(name) {
  return "Welcome, " + name;
}
console.log(welcome("{{name}}"));`,

  `function detail(name, city) {
  return name + " is from " + city;
}
console.log(detail("{{name}}", "{{city}}"));`,

  `const student = {
  name: "{{name}}",
  grade: "A"
};
console.log(student.grade);`,

  `const book = {
  title: "1984",
  author: "George Orwell"
};
console.log(book.author);`,

  `function subtract(a, b) {
  return a - b;
}
console.log(subtract(10, 4));`,

  `const foods = ["Pizza", "Burger", "Sushi"];
console.log(foods[0]);`,

  `function sayHi() {
  return "Hi!";
}
console.log(sayHi());`,

  `function echo(x) {
  return x;
}
console.log(echo("Hello"));`,

  `const team = {
  coach: "{{name}}",
  city: "{{city}}"
};
console.log(team.city);`,

  `function joinWords(a, b) {
  return a + " " + b;
}
console.log(joinWords("Hello", "There"));`,

  `const laptop = {
  brand: "Apple",
  model: "MacBook Pro"
};
console.log(laptop.brand);`,

  `function describeJob(job) {
  return "Job: " + job;
}
console.log(describeJob("{{job}}"));`,

  `const trio = ["one", "two", "three"];
console.log(trio[2]);`,

  `function countryLine(c) {
  return "Country: " + c;
}
console.log(countryLine("{{country}}"));`,

  `function area(w, h) {
  return w * h;
}
console.log(area(3, 5));`,

  `const artist = {
  name: "{{name}}",
  style: "Modern"
};
console.log(artist.name);`,

  `function favColor(c) {
  return "Favorite color: " + c;
}
console.log(favColor("Blue"));`,

  `const agesArr = [22, 35, 40];
console.log(agesArr[1]);`,

  `function triple(n) {
  return n * 3;
}
console.log(triple(6));`,

  `function makeUser(name, city) {
  return {
    name: name,
    city: city
  };
}
console.log(makeUser("{{name}}", "{{city}}").name);`,

  `const movie2 = {
  title: "Avatar",
  year: 2009
};
console.log(movie2.title);`,

  `function greeting(name) {
  return "Good day, " + name;
}
console.log(greeting("{{name}}"));`,

  `const fruit = ["Mango", "Apple", "Banana"];
console.log(fruit[1]);`,

  `function calc(a, b) {
  return a * b + 1;
}
console.log(calc(2, 4));`,

  `const account = {
  owner: "{{name}}",
  balance: 500
};
console.log(account.owner);`,

  `function showMovie(title) {
  return "Movie: " + title;
}
console.log(showMovie("Interstellar"));`,

  `const points = [20, 40, 60];
console.log(points[0]);`,

  `function userInfo(name, age) {
  return name + " (" + age + ")";
}
console.log(userInfo("{{name}}", {{age}}));`,

  `function product(a, b) {
  return a * b;
}
console.log(product(7, 8));`,

  `const house = {
  rooms: 4,
  city: "{{city}}"
};
console.log(house.city);`,

  `function temperature(c) {
  return c + "°C";
}
console.log(temperature(24));`,

  `function feeling(x) {
  return "I feel " + x;
}
console.log(feeling("excited"));`,

  `const letters = ["A", "B", "C"];
console.log(letters[1]);`,

  `function bio(name, job) {
  return name + " is a " + job;
}
console.log(bio("{{name}}", "{{job}}"));`,

  `const box = {
  size: "Large",
  color: "Blue"
};
console.log(box.size);`,

  `function printDouble(n) {
  return n * 2;
}
console.log(printDouble(12));`,

  `const music = {
  genre: "Rock",
  artist: "{{name}}"
};
console.log(music.artist);`,

  `function wrap(x) {
  return "[" + x + "]";
}
console.log(wrap("Done"));`,

  `const weekdays = ["Mon", "Tue", "Wed"];
console.log(weekdays[0]);`,

  `function reverse(text) {
  return text.split("").reverse().join("");
}
console.log(reverse("Hey"));`,

  `const info = {
  city: "{{city}}",
  population: 800000
};
console.log(info.population);`,

  `function shout(word) {
  return word.toUpperCase();
}
console.log(shout("hello"));`,

  `function foodLine(f) {
  return "I like " + f;
}
console.log(foodLine("Pasta"));`,

  `const ocean = {
  name: "Pacific",
  depth: 4000
};
console.log(ocean.name);`,

  `function sumThree(a, b, c) {
  return a + b + c;
}
console.log(sumThree(1, 2, 4));`,

  `const anime = {
  title: "Naruto",
  episodes: 220
};
console.log(anime.episodes);`,

  `function capital(country) {
  return "Capital of " + country;
}
console.log(capital("Japan"));`,

  `function cheer(n) {
  return "Go " + n + "!";
}
console.log(cheer("{{name}}"));`,

  `const toys = ["Ball", "Car", "Doll"];
console.log(toys[2]);`,

  `function say(word) {
  return word;
}
console.log(say("Hi"));`,

  `function timesFour(n) {
  return n * 4;
}
console.log(timesFour(3));`,

  `const writer = {
  name: "{{name}}",
  genre: "Fantasy"
};
console.log(writer.genre);`,

  `function getJob(job) {
  return "Job: " + job;
}
console.log(getJob("{{job}}"));`,

  `function describe(n, c) {
  return n + " from " + c;
}
console.log(describe("{{name}}", "{{city}}"));`,

  `const flags = ["USA", "Japan", "Brazil"];
console.log(flags[1]);`,

  `function color(c) {
  return "Color: " + c;
}
console.log(color("Green"));`,

  `const gamer = {
  username: "{{name}}",
  level: 10
};
console.log(gamer.level);`,

  `function sumTwo(a, b) {
  return a + b;
}
console.log(sumTwo(50, 25));`,

  `function half(n) {
  return n / 2;
}
console.log(half(200));`,

  `const tree = {
  type: "Oak",
  height: 30
};
console.log(tree.height);`,

  `function firstLetter(word) {
  return word[0];
}
console.log(firstLetter("Hello"));`,

  `const bakery = {
  best: "Croissant",
  city: "{{city}}"
};
console.log(bakery.city);`,

  `function intro(name) {
  return "My name is " + name;
}
console.log(intro("{{name}}"));`,

  `const pets2 = ["Rabbit", "Turtle", "Parrot"];
console.log(pets2[0]);`,

  `function bracket(x) {
  return "(" + x + ")";
}
console.log(bracket("ok"));`,

  `function describeFood(food) {
  return food + " tastes great";
}
console.log(describeFood("Pizza"));`,

  `const cafe = {
  name: "{{city}} Cafe",
  rating: 5
};
console.log(cafe.name);`,

  `function cube(n) {
  return n * n * n;
}
console.log(cube(5));`,
];
