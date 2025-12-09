export const level35 = [
  // --- LEVEL 35: MANUAL ARRAY TRANSFORMATIONS (1–100) ---

  // Basic math transforms (1–20)
  `const nums = [1,2,3];
let out = [];
for (let i = 0; i < nums.length; i++) {
  out.push(nums[i] * 2);
}
console.log(out);`,

  `const arr = [2,4,6];
let doubled = [];
for (let i = 0; i < arr.length; i++) {
  doubled.push(arr[i] * 3);
}
console.log(doubled);`,

  `const list = [3,5];
let plusOne = [];
for (let i = 0; i < list.length; i++) {
  plusOne.push(list[i] + 1);
}
console.log(plusOne);`,

  `const nums2 = [1,4,7];
let minusTwo = [];
for (let i = 0; i < nums2.length; i++) {
  minusTwo.push(nums2[i] - 2);
}
console.log(minusTwo);`,

  `const aa = [5,10];
let halved = [];
for (let i = 0; i < aa.length; i++) {
  halved.push(aa[i] / 5);
}
console.log(halved);`,

  `const nums3 = [{{age}},20];
let aged = [];
for (let i = 0; i < nums3.length; i++) {
  aged.push(nums3[i] + 10);
}
console.log(aged);`,

  `const nums4 = [1,10,20];
let squared = [];
for (let i = 0; i < nums4.length; i++) {
  squared.push(nums4[i] * nums4[i]);
}
console.log(squared);`,

  `const arr2 = [3,9];
let divided = [];
for (let i = 0; i < arr2.length; i++) {
  divided.push(arr2[i] / 3);
}
console.log(divided);`,

  `const list2 = [2,4,6];
let negatives = [];
for (let i = 0; i < list2.length; i++) {
  negatives.push(list2[i] * -1);
}
console.log(negatives);`,

  `const nums5 = [3,6];
let triple = [];
for (let i = 0; i < nums5.length; i++) {
  triple.push(nums5[i] * 3);
}
console.log(triple);`,

  // String transformations (21–40)
  `const names = ["{{name}}","Sam"];
let upper = [];
for (let i = 0; i < names.length; i++) {
  upper.push(names[i].toUpperCase());
}
console.log(upper);`,

  `const cities = ["{{city}}","Rome"];
let lower = [];
for (let i = 0; i < cities.length; i++) {
  lower.push(cities[i].toLowerCase());
}
console.log(lower);`,

  `const jobs = ["{{job}}","pilot"];
let excited = [];
for (let i = 0; i < jobs.length; i++) {
  excited.push(jobs[i] + "!");
}
console.log(excited);`,

  `const words = ["Hello","World"];
let lengths = [];
for (let i = 0; i < words.length; i++) {
  lengths.push(words[i].length);
}
console.log(lengths);`,

  `const animals = ["dog","horse"];
let firstLetters = [];
for (let i = 0; i < animals.length; i++) {
  firstLetters.push(animals[i][0]);
}
console.log(firstLetters);`,

  `const foods = ["Pizza","Pie"];
let reversed = [];
for (let i = 0; i < foods.length; i++) {
  reversed.push(foods[i].split("").reverse().join(""));
}
console.log(reversed);`,

  `const people = ["{{name}}","Alex"];
let tags = [];
for (let i = 0; i < people.length; i++) {
  tags.push("Name: " + people[i]);
}
console.log(tags);`,

  `const items = ["book","pen"];
let wrapped = [];
for (let i = 0; i < items.length; i++) {
  wrapped.push("[" + items[i] + "]");
}
console.log(wrapped);`,

  `const letters = ["A","BB","CCC"];
let sizes = [];
for (let i = 0; i < letters.length; i++) {
  sizes.push(letters[i].length);
}
console.log(sizes);`,

  // Template-based transformations (41–60)
  `const arr3 = ["{{city}}","Paris"];
let info = [];
for (let i = 0; i < arr3.length; i++) {
  info.push(arr3[i] + " is a city");
}
console.log(info);`,

  `const nums6 = [1,2,3];
let text = [];
for (let i = 0; i < nums6.length; i++) {
  text.push("Value: " + nums6[i]);
}
console.log(text);`,

  `const names2 = ["{{name}}","Leo"];
let greetings = [];
for (let i = 0; i < names2.length; i++) {
  greetings.push("Hello " + names2[i]);
}
console.log(greetings);`,

  `const ages2 = [{{age}},18,25];
let ageLines = [];
for (let i = 0; i < ages2.length; i++) {
  ageLines.push("Age: " + ages2[i]);
}
console.log(ageLines);`,

  `const jobs2 = ["{{job}}","chef"];
let jobLines = [];
for (let i = 0; i < jobs2.length; i++) {
  jobLines.push("Job: " + jobs2[i]);
}
console.log(jobLines);`,

  `const nums7 = [5,10];
let doubles = [];
for (let i = 0; i < nums7.length; i++) {
  doubles.push(nums7[i] + "!");
}
console.log(doubles);`,

  `const list3 = ["A","B","C"];
let codes = [];
for (let i = 0; i < list3.length; i++) {
  codes.push("Code-" + list3[i]);
}
console.log(codes);`,

  `const mix = [1,"Hi",true];
let types = [];
for (let i = 0; i < mix.length; i++) {
  types.push(typeof mix[i]);
}
console.log(types);`,

  `const arr4 = ["{{country}}","USA"];
let nations = [];
for (let i = 0; i < arr4.length; i++) {
  nations.push(arr4[i] + " Nation");
}
console.log(nations);`,

  // Logic-based transforms (61–80)
  `const nums8 = [1,2,3,4];
let flags = [];
for (let i = 0; i < nums8.length; i++) {
  if (nums8[i] % 2 === 0) {
    flags.push("even");
  } else {
    flags.push("odd");
  }
}
console.log(flags);`,

  `const ages3 = [{{age}},15,30];
let groups = [];
for (let i = 0; i < ages3.length; i++) {
  if (ages3[i] >= 18) {
    groups.push("adult");
  } else {
    groups.push("minor");
  }
}
console.log(groups);`,

  `const nums9 = [3,6,9];
let div3 = [];
for (let i = 0; i < nums9.length; i++) {
  if (nums9[i] % 3 === 0) {
    div3.push("yes");
  } else {
    div3.push("no");
  }
}
console.log(div3);`,

  `const temps = [10,25,30];
let weather = [];
for (let i = 0; i < temps.length; i++) {
  if (temps[i] > 20) {
    weather.push("warm");
  } else {
    weather.push("cold");
  }
}
console.log(weather);`,

  `const nums10 = [1,10,20];
let compare = [];
for (let i = 0; i < nums10.length; i++) {
  if (nums10[i] > 5) {
    compare.push("big");
  } else {
    compare.push("small");
  }
}
console.log(compare);`,

  `const list4 = [2,4,6];
let parity = [];
for (let i = 0; i < list4.length; i++) {
  if (list4[i] > 3) {
    parity.push("high");
  } else {
    parity.push("low");
  }
}
console.log(parity);`,

  `const pets = ["dog","cat","bird"];
let petInfo = [];
for (let i = 0; i < pets.length; i++) {
  if (pets[i].length > 3) {
    petInfo.push("long");
  } else {
    petInfo.push("short");
  }
}
console.log(petInfo);`,

  `const arr5 = [1,20,40];
let sizeInfo = [];
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] < 10) {
    sizeInfo.push("small");
  } else {
    sizeInfo.push("large");
  }
}
console.log(sizeInfo);`,

  // Harder mixed transforms (81–100)
  `const nums11 = [1,10,20];
let results = [];
for (let i = 0; i < nums11.length; i++) {
  results.push(nums11[i] > 5 ? "ok" : "no");
}
console.log(results);`,

  `const words2 = ["Hello","Hi","World"];
let caps = [];
for (let i = 0; i < words2.length; i++) {
  caps.push(words2[i].toUpperCase());
}
console.log(caps);`,

  `const numbers = [5,10,15];
let mod = [];
for (let i = 0; i < numbers.length; i++) {
  mod.push(numbers[i] % 2);
}
console.log(mod);`,

  `const strs = ["{{city}}","Rome","LA"];
let lengths2 = [];
for (let i = 0; i < strs.length; i++) {
  lengths2.push(strs[i].length);
}
console.log(lengths2);`,

  `const vals = [1,"A",true];
let types2 = [];
for (let i = 0; i < vals.length; i++) {
  types2.push(typeof vals[i]);
}
console.log(types2);`,

  `const nums12 = [2,4,8];
let half = [];
for (let i = 0; i < nums12.length; i++) {
  half.push(nums12[i] / 2);
}
console.log(half);`,

  `const list5 = ["{{name}}","Sam"];
let welcome = [];
for (let i = 0; i < list5.length; i++) {
  welcome.push("Welcome " + list5[i]);
}
console.log(welcome);`,

  `const level = [{{age}},20];
let agePlus = [];
for (let i = 0; i < level.length; i++) {
  agePlus.push(level[i] + 5);
}
console.log(agePlus);`,

  `const arr6 = ["dog","horse"];
let ends = [];
for (let i = 0; i < arr6.length; i++) {
  ends.push(arr6[i][arr6[i].length - 1]);
}
console.log(ends);`,

  `const arr7 = ["{{country}}","Japan"];
let info2 = [];
for (let i = 0; i < arr7.length; i++) {
  info2.push("Country: " + arr7[i]);
}
console.log(info2);`,
];
