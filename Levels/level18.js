export const level18 = [
  // --- LEVEL 18: OBJECT MANIPULATION (1–100) ---

  // ACCESS BASIC PROPERTIES (1–20)
  `const person = { name: "{{name}}", city: "{{city}}" };
console.log(person.name);`,

  `const item = { price: 20, inStock: true };
console.log(item.price);`,

  `const car = { brand: "Tesla", model: "S" };
console.log(car.model);`,

  `const user = { username: "{{name}}", age: {{age}} };
console.log(user.age);`,

  `const country = { name: "{{country}}", continent: "Europe" };
console.log(country.name);`,

  `const profile = { job: "{{job}}", experience: 5 };
console.log(profile.job);`,

  `const product = { name: "Phone", cost: 999 };
console.log(product.cost);`,

  `const pet = { type: "dog", color: "brown" };
console.log(pet.type);`,

  `const fruit = { name: "apple", color: "red" };
console.log(fruit.color);`,

  `const book = { title: "1984", pages: 300 };
console.log(book.title);`,

  `const device = { brand: "Samsung", year: 2020 };
console.log(device.year);`,

  `const laptop = { brand: "Apple", size: 13 };
console.log(laptop.size);`,

  `const movie = { title: "Avatar", rating: 9 };
console.log(movie.rating);`,

  `const team = { city: "{{city}}", sport: "football" };
console.log(team.city);`,

  `const weather = { temp: 25, rainy: false };
console.log(weather.temp);`,

  `const room = { width: 4, height: 3 };
console.log(room.width);`,

  `const toy = { type: "car", material: "plastic" };
console.log(toy.material);`,

  `const drink = { name: "Water", cold: true };
console.log(drink.cold);`,

  `const note = { text: "Reminder", important: true };
console.log(note.text);`,

  `const place = { city: "{{city}}", country: "{{country}}" };
console.log(place.country);`,

  // UPDATE EXISTING PROPERTIES (21–40)
  `const person2 = { name: "{{name}}", age: 20 };
person2.age = 21;
console.log(person2.age);`,

  `const item2 = { cost: 100 };
item2.cost = 80;
console.log(item2.cost);`,

  `const user2 = { city: "{{city}}" };
user2.city = "Berlin";
console.log(user2.city);`,

  `const car2 = { model: "A" };
car2.model = "B";
console.log(car2.model);`,

  `const pet2 = { name: "Buddy" };
pet2.name = "Max";
console.log(pet2.name);`,

  `const book2 = { pages: 200 };
book2.pages = 250;
console.log(book2.pages);`,

  `const profile2 = { job: "{{job}}" };
profile2.job = "developer";
console.log(profile2.job);`,

  `const drink2 = { cold: false };
drink2.cold = true;
console.log(drink2.cold);`,

  `const phone = { brand: "Apple" };
phone.brand = "Samsung";
console.log(phone.brand);`,

  `const data = { active: false };
data.active = true;
console.log(data.active);`,

  `const room2 = { width: 5 };
room2.width = 6;
console.log(room2.width);`,

  `const device2 = { year: 2018 };
device2.year = 2024;
console.log(device2.year);`,

  `const car3 = { wheels: 4 };
car3.wheels = 3;
console.log(car3.wheels);`,

  `const temp = { value: 20 };
temp.value = 22;
console.log(temp.value);`,

  `const lamp = { on: false };
lamp.on = true;
console.log(lamp.on);`,

  `const user3 = { age: {{age}} };
user3.age = {{age}} + 1;
console.log(user3.age);`,

  `const dog = { color: "black" };
dog.color = "white";
console.log(dog.color);`,

  `const plant = { height: 15 };
plant.height = 20;
console.log(plant.height);`,

  `const game = { level: 1 };
game.level = 2;
console.log(game.level);`,

  `const door = { open: false };
door.open = true;
console.log(door.open);`,

  // ADD NEW PROPERTIES (41–60)
  `const car4 = { brand: "Tesla" };
car4.color = "red";
console.log(car4.color);`,

  `const user4 = { name: "{{name}}" };
user4.country = "{{country}}";
console.log(user4.country);`,

  `const book3 = { title: "Book" };
book3.author = "{{name}}";
console.log(book3.author);`,

  `const phone2 = { brand: "Apple" };
phone2.year = 2025;
console.log(phone2.year);`,

  `const drink3 = { name: "Tea" };
drink3.size = "Large";
console.log(drink3.size);`,

  `const room3 = { width: 3 };
room3.height = 4;
console.log(room3.height);`,

  `const toy2 = { type: "car" };
toy2.color = "blue";
console.log(toy2.color);`,

  `const user5 = { username: "{{name}}" };
user5.age = {{age}};
console.log(user5.age);`,

  `const fruit6 = { name: "apple" };
fruit6.weight = 200;
console.log(fruit6.weight);`,

  `const country2 = { name: "{{country}}" };
country2.code = "XX";
console.log(country2.code);`,

  `const home = { city: "{{city}}" };
home.street = "Main";
console.log(home.street);`,

  `const data2 = { active: true };
data2.updated = false;
console.log(data2.updated);`,

  `const plant2 = { type: "rose" };
plant2.color = "pink";
console.log(plant2.color);`,

  `const laptop2 = { brand: "Dell" };
laptop2.size = 15;
console.log(laptop2.size);`,

  `const ocean = { name: "Pacific" };
ocean.depth = 4000;
console.log(ocean.depth);`,

  `const profile3 = { job: "{{job}}" };
profile3.salary = 50000;
console.log(profile3.salary);`,

  `const device3 = { os: "Android" };
device3.version = 12;
console.log(device3.version);`,

  `const car5 = { model: "X" };
car5.year = 2022;
console.log(car5.year);`,

  `const user6 = { name: "{{name}}" };
user6.email = "test@example.com";
console.log(user6.email);`,

  `const game2 = { name: "Adventure" };
game2.players = 2;
console.log(game2.players);`,

  // DELETE PROPERTIES (61–75)
  `const item3 = { name: "Phone", cost: 500 };
delete item3.cost;
console.log(item3);`,

  `const user7 = { name: "{{name}}", age: {{age}} };
delete user7.age;
console.log(user7);`,

  `const car6 = { brand: "Tesla", color: "red" };
delete car6.color;
console.log(car6);`,

  `const book4 = { title: "Book", pages: 300 };
delete book4.pages;
console.log(book4);`,

  `const profile4 = { job: "{{job}}", salary: 50000 };
delete profile4.salary;
console.log(profile4);`,

  `const device4 = { brand: "Sony", year: 2010 };
delete device4.year;
console.log(device4);`,

  `const toy3 = { type: "bear", fur: "brown" };
delete toy3.fur;
console.log(toy3);`,

  `const drink4 = { type: "Coffee", sugar: true };
delete drink4.sugar;
console.log(drink4);`,

  `const game3 = { level: 3, score: 100 };
delete game3.score;
console.log(game3);`,

  `const pet3 = { name: "Max", age: 5 };
delete pet3.age;
console.log(pet3);`,

  // NESTED OBJECTS (76–95)
  `const user8 = {
  name: "{{name}}",
  address: { city: "{{city}}", zip: 12345 }
};
console.log(user8.address.city);`,

  `const company = {
  name: "TechCo",
  location: { country: "{{country}}", city: "{{city}}" }
};
console.log(company.location.country);`,

  `const car7 = {
  brand: "Tesla",
  specs: { speed: 250, range: 400 }
};
console.log(car7.specs.range);`,

  `const home2 = {
  city: "{{city}}",
  rooms: { bedrooms: 3, bathrooms: 2 }
};
console.log(home2.rooms.bedrooms);`,

  `const product2 = {
  name: "Laptop",
  details: { weight: 2, color: "silver" }
};
console.log(product2.details.color);`,

  `const user9 = {
  username: "{{name}}",
  profile: { job: "{{job}}", age: {{age}} }
};
console.log(user9.profile.job);`,

  `const phone3 = {
  brand: "Apple",
  info: { model: "Pro", year: 2024 }
};
console.log(phone3.info.model);`,

  `const country3 = {
  name: "{{country}}",
  stats: { population: 1000000, size: 5000 }
};
console.log(country3.stats.population);`,

  `const book5 = {
  title: "Story",
  meta: { pages: 200, author: "{{name}}" }
};
console.log(book5.meta.author);`,

  `const device5 = {
  brand: "Sony",
  specs: { hz: 144, size: 24 }
};
console.log(device5.specs.hz);`,

  // END OF LEVEL (96–100)
  `function checkpoint18() { return "Level 18 complete"; }
console.log(checkpoint18());`,

  `function celebrate18() { return "Great job learning object manipulation"; }
console.log(celebrate18());`,

  `function ready18() { return "You’re ready for Level 19"; }
console.log(ready18());`,

  `function skills18() { return "Your object skills are getting powerful"; }
console.log(skills18());`,

  `function end18() { return "End of Level 18"; }
console.log(end18());`,
];
