export const level39 = [
  // --- LEVEL 39: INTRO TO .sort() (1–100) ---
  // Basic number sorting (requires compare function)

  // Ascending numbers (1–15)
  `[3, 1, 2].sort((a, b) => a - b);`,

  `[10, 5].sort((a, b) => a - b);`,

  `[9, 2, 7].sort((a, b) => a - b);`,

  `[4, 1].sort((a, b) => a - b);`,

  `[8, 3, 6].sort((a, b) => a - b);`,

  `[2, 9, 1].sort((a, b) => a - b);`,

  `[5, 4].sort((a, b) => a - b);`,

  `[7, 3, 8].sort((a, b) => a - b);`,

  `[1, 3, 2].sort((a, b) => a - b);`,

  `[4, 2, 3].sort((a, b) => a - b);`,

  `[2, 1].sort((a, b) => a - b);`,

  `[9, 5, 6].sort((a, b) => a - b);`,

  `[8, 6].sort((a, b) => a - b);`,

  `[7, 1].sort((a, b) => a - b);`,

  `[5, 2, 9].sort((a, b) => a - b);`,

  // Descending numbers (16–30)
  `[1, 3].sort((a, b) => b - a);`,

  `[4, 9, 2].sort((a, b) => b - a);`,

  `[8, 1].sort((a, b) => b - a);`,

  `[10, 5, 7].sort((a, b) => b - a);`,

  `[3, 2, 1].sort((a, b) => b - a);`,

  `[6, 4].sort((a, b) => b - a);`,

  `[9, 8, 2].sort((a, b) => b - a);`,

  `[2, 7].sort((a, b) => b - a);`,

  `[15, 3, 9].sort((a, b) => b - a);`,

  `[12, 11].sort((a, b) => b - a);`,

  // Alphabetical strings (31–45)
  `["Banana", "Apple"].sort();`,

  `["{{city}}", "Berlin"].sort();`,

  `["Dog", "Cat", "Fish"].sort();`,

  `["Sun", "Moon"].sort();`,

  `["{{name}}", "Alex"].sort();`,

  `["Orange", "Lemon"].sort();`,

  `["Tokyo", "London"].sort();`,

  `["Zebra", "Ant"].sort();`,

  `["House", "Car"].sort();`,

  `["Tree", "Air"].sort();`,

  // Reverse alphabetical (46–60)
  `["Banana", "Apple"].sort().reverse();`,

  `["{{city}}", "Dubai"].sort().reverse();`,

  `["Dog", "Cat", "Fish"].sort().reverse();`,

  `["Sun", "Moon"].sort().reverse();`,

  `["{{name}}", "Zoe"].sort().reverse();`,

  `["Yellow", "Blue"].sort().reverse();`,

  `["Ocean", "Lake"].sort().reverse();`,

  `["Sky", "Ground"].sort().reverse();`,

  `["Coffee", "Tea"].sort().reverse();`,

  `["Lion", "Bear"].sort().reverse();`,

  // Sorting objects by number property (61–75)
  `[{ age: 10 }, { age: 5 }].sort((a, b) => a.age - b.age);`,

  `[{ age: {{age}} }, { age: 3 }].sort((a, b) => a.age - b.age);`,

  `[{ age: 40 }, { age: 12 }].sort((a, b) => a.age - b.age);`,

  `[{ age: 2 }, { age: 1 }].sort((a, b) => a.age - b.age);`,

  `[{ age: 9 }, { age: 20 }].sort((a, b) => a.age - b.age);`,

  `[{ age: 7 }, { age: 3 }].sort((a, b) => a.age - b.age);`,

  `[{ age: 100 }, { age: 50 }].sort((a, b) => a.age - b.age);`,

  `[{ age: 4 }, { age: 9 }].sort((a, b) => a.age - b.age);`,

  `[{ age: 14 }, { age: 2 }].sort((a, b) => a.age - b.age);`,

  `[{ age: 5 }, { age: 5 }].sort((a, b) => a.age - b.age);`,

  // Sorting objects by name (alphabetical) (76–90)
  `[{ name: "Sam" }, { name: "Alex" }].sort((a, b) => a.name.localeCompare(b.name));`,

  `[{ name: "{{name}}" }, { name: "Bob" }].sort((a, b) => a.name.localeCompare(b.name));`,

  `[{ name: "Dog" }, { name: "Cat" }].sort((a, b) => a.name.localeCompare(b.name));`,

  `[{ name: "Sun" }, { name: "Moon" }].sort((a, b) => a.name.localeCompare(b.name));`,

  `[{ name: "Zoe" }, { name: "Anna" }].sort((a, b) => a.name.localeCompare(b.name));`,

  `[{ name: "Chris" }, { name: "Ben" }].sort((a, b) => a.name.localeCompare(b.name));`,

  `[{ name: "Lion" }, { name: "Bear" }].sort((a, b) => a.name.localeCompare(b.name));`,

  `[{ name: "Tom" }, { name: "Jerry" }].sort((a, b) => a.name.localeCompare(b.name));`,

  `[{ name: "Apple" }, { name: "Apricot" }].sort((a, b) => a.name.localeCompare(b.name));`,

  `[{ name: "{{city}}" }, { name: "Paris" }].sort((a, b) => a.name.localeCompare(b.name));`,

  // Mixed advanced (91–100)
  `[9, 3, 6].sort((a, b) => a - b);`,

  `["B", "A"].sort();`,

  `[20, 10, 30].sort((a, b) => a - b);`,

  `["{{city}}", "London"].sort();`,

  `[{ age: 9 }, { age: 2 }].sort((a, b) => a.age - b.age);`,

  `["Zoo", "Ant", "Bee"].sort();`,

  `[100, 1, 50].sort((a, b) => a - b);`,

  `["Tree", "Rock", "Air"].sort();`,

  `[{ name: "Sam" }, { name: "{{name}}" }].sort((a, b) => a.name.localeCompare(b.name));`,

  `[5, 2, 9, 1].sort((a, b) => a - b);`,
];
