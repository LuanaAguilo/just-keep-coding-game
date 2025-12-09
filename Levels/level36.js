export const level36 = [
  // --- LEVEL 36: LOOPING THROUGH OBJECTS (1–100) ---

  // Extract names (1–10)
  `const people = [
  { name: "{{name}}", age: {{age}} },
  { name: "Alex", age: 25 }
];
let out = [];
for (let i = 0; i < people.length; i++) {
  out.push(people[i].name);
}
console.log(out);`,

  `const users = [
  { name: "Sam" },
  { name: "{{name}}" }
];
let names = [];
for (let i = 0; i < users.length; i++) {
  names.push(users[i].name);
}
console.log(names);`,

  `const members = [
  { name: "{{name}}"}, 
  { name: "Chris"} 
];
let group = [];
for (let i = 0; i < members.length; i++) {
  group.push(members[i].name);
}
console.log(group);`,

  `const list = [
  { name: "A" },
  { name: "B" }
];
let extracted = [];
for (let i = 0; i < list.length; i++) {
  extracted.push(list[i].name);
}
console.log(extracted);`,

  `const folks = [
  { name: "{{name}}" },
  { name: "Taylor" }
];
let names2 = [];
for (let i = 0; i < folks.length; i++) {
  names2.push(folks[i].name);
}
console.log(names2);`,

  // Extract ages (11–20)
  `const people2 = [
  { age: {{age}} },
  { age: 30 }
];
let ages = [];
for (let i = 0; i < people2.length; i++) {
  ages.push(people2[i].age);
}
console.log(ages);`,

  `const group2 = [
  { age: 10 }, 
  { age: 20 }
];
let nums = [];
for (let i = 0; i < group2.length; i++) {
  nums.push(group2[i].age);
}
console.log(nums);`,

  `const persons = [
  { age: 15 },
  { age: {{age}} }
];
let ageList = [];
for (let i = 0; i < persons.length; i++) {
  ageList.push(persons[i].age);
}
console.log(ageList);`,

  `const folks2 = [
  { age: 4 },
  { age: 6 }
];
let kids = [];
for (let i = 0; i < folks2.length; i++) {
  kids.push(folks2[i].age);
}
console.log(kids);`,

  `const mix = [
  { age: 1 },
  { age: 2 }
];
let out2 = [];
for (let i = 0; i < mix.length; i++) {
  out2.push(mix[i].age);
}
console.log(out2);`,

  // Extract job titles (21–30)
  `const workers = [
  { job: "{{job}}" },
  { job: "chef" }
];
let jobs = [];
for (let i = 0; i < workers.length; i++) {
  jobs.push(workers[i].job);
}
console.log(jobs);`,

  `const staff = [
  { job: "driver" },
  { job: "pilot" }
];
let jList = [];
for (let i = 0; i < staff.length; i++) {
  jList.push(staff[i].job);
}
console.log(jList);`,

  `const team = [
  { job: "{{job}}" },
  { job: "nurse" }
];
let titles = [];
for (let i = 0; i < team.length; i++) {
  titles.push(team[i].job);
}
console.log(titles);`,

  `const people3 = [
  { job: "engineer" },
  { job: "artist" }
];
let info = [];
for (let i = 0; i < people3.length; i++) {
  info.push(people3[i].job);
}
console.log(info);`,

  `const folks3 = [
  { job: "writer" },
  { job: "{{job}}" }
];
let roleList = [];
for (let i = 0; i < folks3.length; i++) {
  roleList.push(folks3[i].job);
}
console.log(roleList);`,

  // Convert objects into text lines (31–50)
  `const persons2 = [
  { name: "{{name}}", age: {{age}} },
  { name: "Alex", age: 30 }
];
let lines = [];
for (let i = 0; i < persons2.length; i++) {
  lines.push(persons2[i].name + " - " + persons2[i].age);
}
console.log(lines);`,

  `const items = [
  { city: "{{city}}", country: "{{country}}" },
  { city: "Rome", country: "Italy" }
];
let out3 = [];
for (let i = 0; i < items.length; i++) {
  out3.push(items[i].city + ", " + items[i].country);
}
console.log(out3);`,

  `const list2 = [
  { title: "Book", price: 10 },
  { title: "Pen", price: 2 }
];
let result = [];
for (let i = 0; i < list2.length; i++) {
  result.push(list2[i].title + " $" + list2[i].price);
}
console.log(result);`,

  `const products = [
  { name: "{{name}}", job: "{{job}}" },
  { name: "Chris", job: "chef" }
];
let lines2 = [];
for (let i = 0; i < products.length; i++) {
  lines2.push(products[i].name + " works as " + products[i].job);
}
console.log(lines2);`,

  `const objs = [
  { planet: "Earth", size: "Medium" },
  { planet: "Mars", size: "Small" }
];
let desc = [];
for (let i = 0; i < objs.length; i++) {
  desc.push(objs[i].planet + " - " + objs[i].size);
}
console.log(desc);`,

  // Compute values from objects (51–70)
  `const users3 = [
  { age: 10 },
  { age: {{age}} }
];
let doubled = [];
for (let i = 0; i < users3.length; i++) {
  doubled.push(users3[i].age * 2);
}
console.log(doubled);`,

  `const nums3 = [
  { num: 5 },
  { num: 8 }
];
let squares = [];
for (let i = 0; i < nums3.length; i++) {
  squares.push(nums3[i].num * nums3[i].num);
}
console.log(squares);`,

  `const objects = [
  { value: 3 },
  { value: 9 }
];
let halved = [];
for (let i = 0; i < objects.length; i++) {
  halved.push(objects[i].value / 3);
}
console.log(halved);`,

  `const people4 = [
  { age: 2 },
  { age: 7 }
];
let plus10 = [];
for (let i = 0; i < people4.length; i++) {
  plus10.push(people4[i].age + 10);
}
console.log(plus10);`,

  `const data = [
  { height: 100 },
  { height: 150 }
];
let cmToM = [];
for (let i = 0; i < data.length; i++) {
  cmToM.push(data[i].height / 100);
}
console.log(cmToM);`,

  // Conditional logic on object properties (71–90)
  `const users4 = [
  { age: {{age}} },
  { age: 12 }
];
let group3 = [];
for (let i = 0; i < users4.length; i++) {
  if (users4[i].age >= 18) {
    group3.push("adult");
  } else {
    group3.push("minor");
  }
}
console.log(group3);`,

  `const temps = [
  { temp: 30 },
  { temp: 10 }
];
let weather = [];
for (let i = 0; i < temps.length; i++) {
  if (temps[i].temp > 20) {
    weather.push("warm");
  } else {
    weather.push("cold");
  }
}
console.log(weather);`,

  `const cars = [
  { speed: 100 },
  { speed: 40 }
];
let categories = [];
for (let i = 0; i < cars.length; i++) {
  if (cars[i].speed > 60) {
    categories.push("fast");
  } else {
    categories.push("slow");
  }
}
console.log(categories);`,

  `const pets = [
  { type: "dog" },
  { type: "bird" }
];
let sizes = [];
for (let i = 0; i < pets.length; i++) {
  if (pets[i].type.length > 3) {
    sizes.push("long");
  } else {
    sizes.push("short");
  }
}
console.log(sizes);`,

  `const objects2 = [
  { number: 3 },
  { number: 10 }
];
let labels = [];
for (let i = 0; i < objects2.length; i++) {
  if (objects2[i].number % 2 === 0) {
    labels.push("even");
  } else {
    labels.push("odd");
  }
}
console.log(labels);`,

  // Mixed harder transforms (91–100)
  `const arrA = [
  { name: "{{name}}", city: "{{city}}" },
  { name: "Alex", city: "Rome" }
];
let texts = [];
for (let i = 0; i < arrA.length; i++) {
  texts.push(arrA[i].name + " is from " + arrA[i].city);
}
console.log(texts);`,

  `const arrB = [
  { a: 2, b: 3 },
  { a: 4, b: 1 }
];
let sums = [];
for (let i = 0; i < arrB.length; i++) {
  sums.push(arrB[i].a + arrB[i].b);
}
console.log(sums);`,

  `const arrC = [
  { word: "Hello" },
  { word: "World" }
];
let shout = [];
for (let i = 0; i < arrC.length; i++) {
  shout.push(arrC[i].word.toUpperCase());
}
console.log(shout);`,

  `const arrD = [
  { num: 5 },
  { num: 20 }
];
let compare = [];
for (let i = 0; i < arrD.length; i++) {
  compare.push(arrD[i].num > 10 ? "big" : "small");
}
console.log(compare);`,

  `const arrE = [
  { country: "{{country}}" },
  { country: "Japan" }
];
let result2 = [];
for (let i = 0; i < arrE.length; i++) {
  result2.push("Country: " + arrE[i].country);
}
console.log(result2);`,
];
