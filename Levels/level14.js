export const level14 = [
  // --- LEVEL 14: OBJECT METHODS & USING "THIS" (1–100) ---

  // BASIC METHODS (1–15)
  `const user = {
  name: "{{name}}",
  greet() {
    return "Hello " + this.name;
  }
};
console.log(user.greet());`,

  `const city = {
  name: "{{city}}",
  describe() {
    return "City: " + this.name;
  }
};
console.log(city.describe());`,

  `const person = {
  age: {{age}},
  showAge() {
    return this.age;
  }
};
console.log(person.showAge());`,

  `const job = {
  title: "{{job}}",
  print() {
    return "Job: " + this.title;
  }
};
console.log(job.print());`,

  `const car = {
  brand: "BMW",
  model: "X5",
  info() {
    return this.brand + " " + this.model;
  }
};
console.log(car.info());`,

  `const lamp = {
  on: false,
  status() {
    return this.on ? "On" : "Off";
  }
};
console.log(lamp.status());`,

  `const cat = {
  name: "{{name}}",
  sound() {
    return this.name + " says meow";
  }
};
console.log(cat.sound());`,

  `const score = {
  value: 10,
  get() {
    return this.value;
  }
};
console.log(score.get());`,

  `const wallet = {
  amount: 50,
  show() {
    return "Balance: $" + this.amount;
  }
};
console.log(wallet.show());`,

  `const book = {
  title: "Inception Guide",
  read() {
    return "Reading " + this.title;
  }
};
console.log(book.read());`,

  // METHODS THAT UPDATE DATA (16–35)
  `const counter = {
  value: 0,
  increase() {
    this.value++;
  }
};
counter.increase();
console.log(counter.value);`,

  `const ageCounter = {
  age: {{age}},
  birthday() {
    this.age++;
  }
};
ageCounter.birthday();
console.log(ageCounter.age);`,

  `const carSpeed = {
  speed: 0,
  accelerate() {
    this.speed += 10;
  }
};
carSpeed.accelerate();
console.log(carSpeed.speed);`,

  `const phone = {
  battery: 50,
  charge() {
    this.battery += 20;
  }
};
phone.charge();
console.log(phone.battery);`,

  `const likes = {
  count: 5,
  add() {
    this.count++;
  }
};
likes.add();
console.log(likes.count);`,

  `const robot = {
  active: false,
  activate() {
    this.active = true;
  }
};
robot.activate();
console.log(robot.active);`,

  `const account = {
  balance: 100,
  deposit(amount) {
    this.balance += amount;
  }
};
account.deposit(50);
console.log(account.balance);`,

  `const stepper = {
  steps: 0,
  walk() {
    this.steps += 2;
  }
};
stepper.walk();
console.log(stepper.steps);`,

  `const temp = {
  value: 20,
  warm() {
    this.value += 5;
  }
};
temp.warm();
console.log(temp.value);`,

  `const game = {
  level: 1,
  levelUp() {
    this.level++;
  }
};
game.levelUp();
console.log(game.level);`,

  // METHODS WITH PARAMETERS (36–55)
  `const greeter = {
  prefix: "Hello",
  greet(name) {
    return this.prefix + " " + name;
  }
};
console.log(greeter.greet("{{name}}"));`,

  `const mathBox = {
  add(a, b) {
    return a + b;
  }
};
console.log(mathBox.add(3, 4));`,

  `const multiplier = {
  factor: 3,
  multiply(n) {
    return n * this.factor;
  }
};
console.log(multiplier.multiply(4));`,

  `const messenger = {
  send(text) {
    return "Message: " + text;
  }
};
console.log(messenger.send("Hello"));`,

  `const counter2 = {
  count: 0,
  add(n) {
    this.count += n;
  }
};
counter2.add(5);
console.log(counter2.count);`,

  `const rounder = {
  round(n) {
    return Math.round(n);
  }
};
console.log(rounder.round(4.6));`,

  `const converter = {
  toUpper(t) {
    return t.toUpperCase();
  }
};
console.log(converter.toUpper("hello"));`,

  `const label = {
  tag(t) {
    return "[" + t + "]";
  }
};
console.log(label.tag("note"));`,

  `const repeater = {
  say(w) {
    return w + w;
  }
};
console.log(repeater.say("Hi"));`,

  `const comparer = {
  isEqual(a, b) {
    return a === b;
  }
};
console.log(comparer.isEqual(5, 5));`,

  // COMBINED STATE + PARAMETERS (56–75)
  `const runner = {
  distance: 0,
  run(km) {
    this.distance += km;
  }
};
runner.run(3);
console.log(runner.distance);`,

  `const bank = {
  balance: 200,
  withdraw(amount) {
    this.balance -= amount;
  }
};
bank.withdraw(50);
console.log(bank.balance);`,

  `const heater = {
  temp: 15,
  heat(deg) {
    this.temp += deg;
  }
};
heater.heat(10);
console.log(heater.temp);`,

  `const playlist = {
  songs: 0,
  add(num) {
    this.songs += num;
  }
};
playlist.add(5);
console.log(playlist.songs);`,

  `const xp = {
  value: 0,
  gain(amount) {
    this.value += amount;
  }
};
xp.gain(20);
console.log(xp.value);`,

  `const leveler = {
  level: 1,
  increase(n) {
    this.level += n;
  }
};
leveler.increase(2);
console.log(leveler.level);`,

  `const clicker = {
  clicks: 0,
  click(n) {
    this.clicks += n;
  }
};
clicker.click(10);
console.log(clicker.clicks);`,

  `const scoreBox = {
  score: 0,
  add(points) {
    this.score += points;
  }
};
scoreBox.add(7);
console.log(scoreBox.score);`,

  `const timer = {
  time: 0,
  tick(t) {
    this.time += t;
  }
};
timer.tick(5);
console.log(timer.time);`,

  `const energy = {
  level: 3,
  boost(n) {
    this.level += n;
  }
};
energy.boost(4);
console.log(energy.level);`,

  // RETURNING OBJECTS FROM METHODS (76–90)
  `const builder = {
  create(name, age) {
    return { name: name, age: age };
  }
};
console.log(builder.create("{{name}}", {{age}}));`,

  `const summarizer = {
  pack(a, b) {
    return { first: a, second: b };
  }
};
console.log(summarizer.pack(1, 2));`,

  `const tagger = {
  wrap(text) {
    return { content: text, length: text.length };
  }
};
console.log(tagger.wrap("Hello"));`,

  `const creator = {
  make(city, country) {
    return { city: city, country: country };
  }
};
console.log(creator.make("{{city}}", "{{country}}"));`,

  `const makeUser = {
  create(name, job) {
    return { name, job };
  }
};
console.log(makeUser.create("{{name}}", "{{job}}"));`,

  `const produce = {
  data(n) {
    return { number: n, double: n * 2 };
  }
};
console.log(produce.data(5));`,

  `const toolbox = {
  store(a, b, c) {
    return { a, b, sum: a + b + c };
  }
};
console.log(toolbox.store(1, 2, 3));`,

  `const geo = {
  point(x, y) {
    return { x, y };
  }
};
console.log(geo.point(10, 20));`,

  `const maker = {
  combine(a, b) {
    return { text: a + " " + b };
  }
};
console.log(maker.combine("Hello", "World"));`,

  `const finisher = {
  stamp(msg) {
    return { done: true, message: msg };
  }
};
console.log(finisher.stamp("Complete"));`,

  // END OF LEVEL (91–100)
  `function checkpoint14() { return "Level 14 complete"; }
console.log(checkpoint14());`,

  `function celebrate14() { return "Great job using object methods"; }
console.log(celebrate14());`,

  `function ready14() { return "You’re ready for Level 15"; }
console.log(ready14());`,

  `function skills14() { return "Your object skills just got stronger"; }
console.log(skills14());`,

  `function end14() { return "End of Level 14"; }
console.log(end14());`,
];
