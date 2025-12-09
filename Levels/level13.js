export const level13 = [
  // --- LEVEL 13: OBJECT BASICS AND PROPERTY MANIPULATION (1–100) ---

  // OBJECT CREATION (1–10)
  `const person = { name: "{{name}}", age: {{age}} };
console.log(person);`,

  `const cityInfo = { city: "{{city}}", country: "{{country}}" };
console.log(cityInfo);`,

  `const jobInfo = { job: "{{job}}", salary: 50000 };
console.log(jobInfo);`,

  `const item = { title: "Book", price: 15 };
console.log(item);`,

  `const car = { brand: "Toyota", year: 2020 };
console.log(car);`,

  `const pet = { type: "Dog", name: "{{name}}" };
console.log(pet);`,

  `const account = { balance: 1000, currency: "USD" };
console.log(account);`,

  `const laptop = { brand: "Apple", model: "Air" };
console.log(laptop);`,

  `const phone = { brand: "Samsung", battery: 90 };
console.log(phone);`,

  `const movie = { title: "Inception", rating: 9 };
console.log(movie);`,

  // PROPERTY ACCESS (11–25)
  `const p = { name: "{{name}}", age: {{age}} };
console.log(p.name);`,

  `const p2 = { city: "{{city}}", country: "{{country}}" };
console.log(p2.city);`,

  `const p3 = { job: "{{job}}", level: "Junior" };
console.log(p3.level);`,

  `const obj = { x: 10, y: 20 };
console.log(obj.x);`,

  `const book = { title: "JS Guide", pages: 300 };
console.log(book.pages);`,

  `const user = { username: "{{name}}", active: true };
console.log(user.active);`,

  `const t = { temp: 25 };
console.log(t.temp);`,

  `const c = { color: "red" };
console.log(c.color);`,

  `const stats = { wins: 5, losses: 2 };
console.log(stats.losses);`,

  `const settings = { volume: 80 };
console.log(settings.volume);`,

  // PROPERTY UPDATES (26–40)
  `const personA = { name: "{{name}}", age: {{age}} };
personA.age = {{age}} + 1;
console.log(personA);`,

  `const accountA = { balance: 100 };
accountA.balance = 150;
console.log(accountA);`,

  `const dog = { name: "{{name}}", mood: "happy" };
dog.mood = "excited";
console.log(dog);`,

  `const carA = { speed: 50 };
carA.speed = 80;
console.log(carA);`,

  `const player = { level: 1 };
player.level = 2;
console.log(player);`,

  `const box = { open: false };
box.open = true;
console.log(box);`,

  `const phoneA = { battery: 80 };
phoneA.battery = 100;
console.log(phoneA);`,

  `const robot = { status: "off" };
robot.status = "on";
console.log(robot);`,

  `const product = { stock: 10 };
product.stock = 5;
console.log(product);`,

  `const fan = { speed: 1 };
fan.speed = 3;
console.log(fan);`,

  // ADDING NEW PROPERTIES (41–55)
  `const userA = { name: "{{name}}" };
userA.age = {{age}};
console.log(userA);`,

  `const profile = { username: "{{name}}" };
profile.country = "{{country}}";
console.log(profile);`,

  `const ticket = { event: "Concert" };
ticket.price = 120;
console.log(ticket);`,

  `const room = { number: 5 };
room.capacity = 3;
console.log(room);`,

  `const bike = { brand: "Giant" };
bike.color = "blue";
console.log(bike);`,

  `const order = { id: 1 };
order.total = 59.99;
console.log(order);`,

  `const boxA = { weight: 10 };
boxA.label = "Fragile";
console.log(boxA);`,

  `const accountB = { balance: 200 };
accountB.currency = "USD";
console.log(accountB);`,

  `const laptopA = { brand: "Dell" };
laptopA.year = 2022;
console.log(laptopA);`,

  `const plant = { type: "Fern" };
plant.height = 30;
console.log(plant);`,

  // CHECKING PROPERTIES (56–70)
  `const u1 = { name: "{{name}}" };
console.log("age" in u1);`,

  `const u2 = { city: "{{city}}" };
console.log("city" in u2);`,

  `const u3 = { job: "{{job}}" };
console.log("salary" in u3);`,

  `const objA = { x: 10 };
console.log("x" in objA);`,

  `const objB = { y: 5 };
console.log("z" in objB);`,

  `const wallet = { amount: 50 };
console.log("amount" in wallet);`,

  `const game = { score: 100 };
console.log("score" in game);`,

  `const carB = { brand: "BMW" };
console.log("brand" in carB);`,

  `const student = { grade: "A" };
console.log("class" in student);`,

  `const food = { type: "Fruit" };
console.log("type" in food);`,

  // DELETING PROPERTIES (71–85)
  `const aa = { a: 1, b: 2 };
delete aa.b;
console.log(aa);`,

  `const bb = { name: "{{name}}", age: {{age}} };
delete bb.age;
console.log(bb);`,

  `const cc = { job: "{{job}}", level: "Junior" };
delete cc.level;
console.log(cc);`,

  `const dd = { title: "Book", price: 10 };
delete dd.price;
console.log(dd);`,

  `const ee = { brand: "Nike", size: 42 };
delete ee.size;
console.log(ee);`,

  `const ff = { x: 10, y: 20 };
delete ff.x;
console.log(ff);`,

  `const gg = { cat: true, dog: false };
delete gg.dog;
console.log(gg);`,

  `const hh = { age: 30 };
delete hh.age;
console.log(hh);`,

  `const ii = { city: "{{city}}", temp: 22 };
delete ii.temp;
console.log(ii);`,

  `const jj = { color: "red", shade: "dark" };
delete jj.shade;
console.log(jj);`,

  // INTRO TO LOOPING OBJECTS (86–95)
  `const oo = { a: 1, b: 2, c: 3 };
for (let key in oo) console.log(key);`,

  `const pp = { x: 10, y: 20 };
for (let key in pp) console.log(pp[key]);`,

  `const qq = { city: "{{city}}", country: "{{country}}" };
for (let key in qq) console.log(key + ": " + qq[key]);`,

  `const rr = { name: "{{name}}", job: "{{job}}" };
for (let key in rr) console.log(rr[key]);`,

  `const ss = { a: "A", b: "B" };
for (let key in ss) console.log(key);`,

  `const tt = { n1: 1, n2: 2 };
for (let key in tt) console.log(tt[key] * 2);`,

  `const uu = { w: "Hello", x: "World" };
for (let key in uu) console.log(uu[key].length);`,

  `const vv = { age: {{age}}, job: "{{job}}" };
for (let key in vv) console.log(key + "=" + vv[key]);`,

  `const ww = { brand: "Ford", year: 2019 };
for (let key in ww) console.log(ww[key]);`,

  `const xx = { city: "{{city}}", code: 777 };
for (let key in xx) console.log(key);`,

  // END OF LEVEL (96–100)
  `function done13() { return "Level 13 complete"; }
console.log(done13());`,

  `function checkpoint13() { return "Great job finishing object basics"; }
console.log(checkpoint13());`,

  `function next13() { return "Next level: Intermediate Objects"; }
console.log(next13());`,

  `function keepGoing13() { return "Your skills are growing fast"; }
console.log(keepGoing13());`,

  `function end13() { return "End of Level 13"; }
console.log(end13());`,
];
