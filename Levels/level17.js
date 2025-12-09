export const level17 = [
  // --- LEVEL 17: STRING MANIPULATION (1–100) ---

  // BASIC INCLUDES (1–20)
  `const word = "coding";
console.log(word.includes("cod"));`,

  `const text = "Hello {{name}}";
console.log(text.includes("Hello"));`,

  `const city = "{{city}}";
console.log(city.includes("{{city}}"));`,

  `const phrase = "JavaScript practice";
console.log(phrase.includes("practice"));`,

  `const title = "Learning strings";
console.log(title.includes("strings"));`,

  `const food = "pasta";
console.log(food.includes("a"));`,

  `const drink = "water";
console.log(drink.includes("w"));`,

  `const movie = "Inception";
console.log(movie.includes("cep"));`,

  `const car = "Tesla";
console.log(car.includes("es"));`,

  `const item = "Laptop";
console.log(item.includes("top"));`,

  `const msg = "Welcome!";
console.log(msg.includes("come"));`,

  `const day = "Monday";
console.log(day.includes("Mon"));`,

  `const pet = "dog";
console.log(pet.includes("o"));`,

  `const fruit = "apple";
console.log(fruit.includes("pp"));`,

  `const lang = "JavaScript";
console.log(lang.includes("Script"));`,

  `const country = "{{country}}";
console.log(country.includes("{{country}}"));`,

  `const greeting = "Hello World";
console.log(greeting.includes("World"));`,

  `const season = "summer";
console.log(season.includes("sum"));`,

  `const animal = "cat";
console.log(animal.includes("t"));`,

  `const flower = "rose";
console.log(flower.includes("ro"));`,

  // BASIC indexOf (21–40)
  `const word2 = "coding";
console.log(word2.indexOf("d"));`,

  `const nameText = "Hi {{name}}";
console.log(nameText.indexOf("{{name}}"));`,

  `const place = "{{city}} city";
console.log(place.indexOf("city"));`,

  `const fruit2 = "banana";
console.log(fruit2.indexOf("na"));`,

  `const msg2 = "Hello World";
console.log(msg2.indexOf("World"));`,

  `const item2 = "keyboard";
console.log(item2.indexOf("board"));`,

  `const drink2 = "coffee";
console.log(drink2.indexOf("f"));`,

  `const task = "coding time";
console.log(task.indexOf("time"));`,

  `const car2 = "BMW";
console.log(car2.indexOf("M"));`,

  `const flower2 = "tulip";
console.log(flower2.indexOf("lip"));`,

  `const greet2 = "Good morning";
console.log(greet2.indexOf("mor"));`,

  `const word3 = "developer";
console.log(word3.indexOf("lop"));`,

  `const numStr = "12345";
console.log(numStr.indexOf("34"));`,

  `const say = "practice makes perfect";
console.log(say.indexOf("makes"));`,

  `const brand = "Apple";
console.log(brand.indexOf("pp"));`,

  `const phrase2 = "study hard";
console.log(phrase2.indexOf("hard"));`,

  `const street = "Main Street";
console.log(street.indexOf("Street"));`,

  `const note = "Remember this";
console.log(note.indexOf("this"));`,

  `const car3 = "Audi";
console.log(car3.indexOf("i"));`,

  `const ocean = "Pacific";
console.log(ocean.indexOf("fic"));`,

  // SLICE / SUBSTRING (41–70)
  `const word4 = "JavaScript";
console.log(word4.slice(0, 4));`,

  `const greet3 = "Hello World";
console.log(greet3.slice(6));`,

  `const city2 = "{{city}}";
console.log(city2.slice(0, 2));`,

  `const fruit3 = "banana";
console.log(fruit3.slice(1, 4));`,

  `const msg3 = "coding time";
console.log(msg3.slice(0, 6));`,

  `const food2 = "sandwich";
console.log(food2.slice(4));`,

  `const day2 = "Monday";
console.log(day2.slice(3));`,

  `const word5 = "practice";
console.log(word5.slice(2, 6));`,

  `const street2 = "MainRoad";
console.log(street2.slice(0, 4));`,

  `const lang2 = "JavaScript";
console.log(lang2.substring(4));`,

  `const text2 = "Hello!";
console.log(text2.substring(0, 2));`,

  `const fruit4 = "orange";
console.log(fruit4.substring(2, 5));`,

  `const nameStr = "{{name}}";
console.log(nameStr.substring(0, 3));`,

  `const pet2 = "parrot";
console.log(pet2.substring(1, 4));`,

  `const music = "guitar";
console.log(music.substring(3));`,

  `const msg4 = "Working hard";
console.log(msg4.substring(8));`,

  `const flower3 = "tulip";
console.log(flower3.substring(0, 3));`,

  `const sport = "soccer";
console.log(sport.substring(1, 5));`,

  `const item3 = "backpack";
console.log(item3.substring(4));`,

  `const phrase3 = "coding challenge";
console.log(phrase3.substring(7));`,

  // REPLACE (71–85)
  `const text3 = "Hello Bob";
console.log(text3.replace("Bob", "{{name}}"));`,

  `const msg5 = "I live in oldCity";
console.log(msg5.replace("oldCity", "{{city}}"));`,

  `const fruit5 = "bad apple";
console.log(fruit5.replace("bad", "good"));`,

  `const phrase4 = "Hello World";
console.log(phrase4.replace("World", "{{country}}"));`,

  `const car4 = "I drive a oldCar";
console.log(car4.replace("oldCar", "Tesla"));`,

  `const text4 = "blue sky";
console.log(text4.replace("blue", "red"));`,

  `const word6 = "coffee time";
console.log(word6.replace("coffee", "tea"));`,

  `const phrase5 = "coding is bad";
console.log(phrase5.replace("bad", "fun"));`,

  `const greet4 = "Hi friend";
console.log(greet4.replace("friend", "{{name}}"));`,

  `const job = "I work as a waiter";
console.log(job.replace("waiter", "{{job}}"));`,

  // SPLIT / JOIN (86–95)
  `const sentence = "coding is fun";
const parts = sentence.split(" ");
console.log(parts);`,

  `const csv = "red,blue,green";
console.log(csv.split(","));`,

  `const fullName = "{{name}} {{city}}";
console.log(fullName.split(" "));`,

  `const items3 = "a-b-c";
console.log(items3.split("-"));`,

  `const date = "2025-01-01";
console.log(date.split("-"));`,

  `const phrase6 = "I love coding";
const arr = phrase6.split(" ");
console.log(arr.join("-"));`,

  `const words4 = ["one","two","three"];
console.log(words4.join(" "));`,

  `const citiesList = ["{{city}}","Berlin"];
console.log(citiesList.join(", "));`,

  `const fruits4 = ["apple","pear"];
console.log(fruits4.join(" + "));`,

  `const path = ["home","user","docs"];
console.log(path.join("/"));`,

  // END OF LEVEL (96–100)
  `function checkpoint17() { return "Level 17 complete"; }
console.log(checkpoint17());`,

  `function celebrate17() { return "Great job learning string methods"; }
console.log(celebrate17());`,

  `function ready17() { return "You’re ready for Level 18"; }
console.log(ready17());`,

  `function skills17() { return "Your string skills are getting sharp"; }
console.log(skills17());`,

  `function end17() { return "End of Level 17"; }
console.log(end17());`,
];
