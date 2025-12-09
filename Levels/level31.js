export const level31 = [
  // --- LEVEL 31: ARRAY TRANSFORMATIONS (1–100) ---

  // Double numbers (1–20)
  `const nums = [1,2,3];
let out = [];
for (let i = 0; i < nums.length; i++) {
  out.push(nums[i] * 2);
}
console.log(out);`,

  `const arr = [2,4,6];
let result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(arr[i] * 2);
}
console.log(result);`,

  `const values = [3,3,3];
let doubled = [];
for (let i = 0; i < values.length; i++) {
  doubled.push(values[i] * 2);
}
console.log(doubled);`,

  `const list = [1,5];
let out2 = [];
for (let i = 0; i < list.length; i++) {
  out2.push(list[i] * 2);
}
console.log(out2);`,

  `const nums2 = [4,7];
let twoTimes = [];
for (let i = 0; i < nums2.length; i++) {
  twoTimes.push(nums2[i] * 2);
}
console.log(twoTimes);`,

  `const set = [5,1];
let final = [];
for (let i = 0; i < set.length; i++) {
  final.push(set[i] * 2);
}
console.log(final);`,

  `const nums3 = [6,6];
let doubled2 = [];
for (let i = 0; i < nums3.length; i++) {
  doubled2.push(nums3[i] * 2);
}
console.log(doubled2);`,

  `const evenNums = [2,8];
let twos = [];
for (let i = 0; i < evenNums.length; i++) {
  twos.push(evenNums[i] * 2);
}
console.log(twos);`,

  `const small = [1,1,2];
let doubled3 = [];
for (let i = 0; i < small.length; i++) {
  doubled3.push(small[i] * 2);
}
console.log(doubled3);`,

  `const test = [2,3,4];
let doubled4 = [];
for (let i = 0; i < test.length; i++) {
  doubled4.push(test[i] * 2);
}
console.log(doubled4);`,

  // Convert numbers to strings (21–40)
  `const nums4 = [1,2,3];
let strings = [];
for (let i = 0; i < nums4.length; i++) {
  strings.push(String(nums4[i]));
}
console.log(strings);`,

  `const arr2 = [5,7];
let out3 = [];
for (let i = 0; i < arr2.length; i++) {
  out3.push(String(arr2[i]));
}
console.log(out3);`,

  `const nums5 = [9,9];
let strArr = [];
for (let i = 0; i < nums5.length; i++) {
  strArr.push(String(nums5[i]));
}
console.log(strArr);`,

  `const arr3 = [3,6];
let converted = [];
for (let i = 0; i < arr3.length; i++) {
  converted.push(String(arr3[i]));
}
console.log(converted);`,

  `const nums6 = [7,8];
let asText = [];
for (let i = 0; i < nums6.length; i++) {
  asText.push(String(nums6[i]));
}
console.log(asText);`,

  `const numbers = [4,4];
let textList = [];
for (let i = 0; i < numbers.length; i++) {
  textList.push(String(numbers[i]));
}
console.log(textList);`,

  `const values2 = [2,9];
let printed = [];
for (let i = 0; i < values2.length; i++) {
  printed.push(String(values2[i]));
}
console.log(printed);`,

  `const simple = [1,2];
let result2 = [];
for (let i = 0; i < simple.length; i++) {
  result2.push(String(simple[i]));
}
console.log(result2);`,

  `const numList = [6,1];
let lines = [];
for (let i = 0; i < numList.length; i++) {
  lines.push(String(numList[i]));
}
console.log(lines);`,

  `const sample = [8,10];
let out4 = [];
for (let i = 0; i < sample.length; i++) {
  out4.push(String(sample[i]));
}
console.log(out4);`,

  // Add 1 to every number (41–60)
  `const data = [1,2,3];
let plusOne = [];
for (let i = 0; i < data.length; i++) {
  plusOne.push(data[i] + 1);
}
console.log(plusOne);`,

  `const d = [4,4];
let bump = [];
for (let i = 0; i < d.length; i++) {
  bump.push(d[i] + 1);
}
console.log(bump);`,

  `const nums7 = [5,7];
let next = [];
for (let i = 0; i < nums7.length; i++) {
  next.push(nums7[i] + 1);
}
console.log(next);`,

  `const two = [10,11];
let increment = [];
for (let i = 0; i < two.length; i++) {
  increment.push(two[i] + 1);
}
console.log(increment);`,

  `const set2 = [3,3,3];
let updated = [];
for (let i = 0; i < set2.length; i++) {
  updated.push(set2[i] + 1);
}
console.log(updated);`,

  `const list4 = [0,2,4];
let newArr = [];
for (let i = 0; i < list4.length; i++) {
  newArr.push(list4[i] + 1);
}
console.log(newArr);`,

  `const nums8 = [6,6];
let plus = [];
for (let i = 0; i < nums8.length; i++) {
  plus.push(nums8[i] + 1);
}
console.log(plus);`,

  `const big = [8,9];
let newOnes = [];
for (let i = 0; i < big.length; i++) {
  newOnes.push(big[i] + 1);
}
console.log(newOnes);`,

  `const items = [1,5,9];
let changed = [];
for (let i = 0; i < items.length; i++) {
  changed.push(items[i] + 1);
}
console.log(changed);`,

  `const digits = [2,4,6];
let out5 = [];
for (let i = 0; i < digits.length; i++) {
  out5.push(digits[i] + 1);
}
console.log(out5);`,

  // Uppercase strings (61–80)
  `const words = ["hi","yo"];
let caps = [];
for (let i = 0; i < words.length; i++) {
  caps.push(words[i].toUpperCase());
}
console.log(caps);`,

  `const names = ["{{name}}","Alex"];
let up = [];
for (let i = 0; i < names.length; i++) {
    up.push(names[i].toUpperCase());
}
console.log(up);`,

  `const cities = ["{{city}}","Rome"];
let big = [];
for (let i = 0; i < cities.length; i++) {
  big.push(cities[i].toUpperCase());
}
console.log(big);`,

  `const list5 = ["a","b","c"];
let upper = [];
for (let i = 0; i < list5.length; i++) {
  upper.push(list5[i].toUpperCase());
}
console.log(upper);`,

  `const items2 = ["cat","dog"];
let loud = [];
for (let i = 0; i < items2.length; i++) {
  loud.push(items2[i].toUpperCase());
}
console.log(loud);`,

  `const letters = ["x","y"];
let strong = [];
for (let i = 0; i < letters.length; i++) {
  strong.push(letters[i].toUpperCase());
}
console.log(strong);`,

  `const langs = ["js","html"];
let bigWords = [];
for (let i = 0; i < langs.length; i++) {
  bigWords.push(langs[i].toUpperCase());
}
console.log(bigWords);`,

  `const tools = ["pen","cup"];
let results = [];
for (let i = 0; i < tools.length; i++) {
  results.push(tools[i].toUpperCase());
}
console.log(results);`,

  `const pets = ["dog","cat"];
let upper2 = [];
for (let i = 0; i < pets.length; i++) {
  upper2.push(pets[i].toUpperCase());
}
console.log(upper2);`,

  `const t = ["hi","bye"];
let out6 = [];
for (let i = 0; i < t.length; i++) {
  out6.push(t[i].toUpperCase());
}
console.log(out6);`,

  // Prefix or suffix transformation (81–100)
  `const abc = ["A","B"];
let tagged = [];
for (let i = 0; i < abc.length; i++) {
  tagged.push(abc[i] + "!");
}
console.log(tagged);`,

  `const items3 = ["car","bus"];
let withTag = [];
for (let i = 0; i < items3.length; i++) {
  withTag.push(items3[i] + "?");
}
console.log(withTag);`,

  `const names2 = ["{{name}}","Anna"];
let greeting = [];
for (let i = 0; i < names2.length; i++) {
  greeting.push("Hi " + names2[i]);
}
console.log(greeting);`,

  `const cities2 = ["{{city}}","Paris"];
let visited = [];
for (let i = 0; i < cities2.length; i++) {
  visited.push(cities2[i] + "!");
}
console.log(visited);`,

  `const nums9 = [1,2];
let texted = [];
for (let i = 0; i < nums9.length; i++) {
  texted.push("Value " + nums9[i]);
}
console.log(texted);`,

  `const set3 = [3,4];
let output = [];
for (let i = 0; i < set3.length; i++) {
  output.push("Num:" + set3[i]);
}
console.log(output);`,

  `const pets3 = ["dog","cat"];
let marked = [];
for (let i = 0; i < pets3.length; i++) {
  marked.push(pets3[i] + "!");
}
console.log(marked);`,

  `const letters2 = ["A","B","C"];
let post = [];
for (let i = 0; i < letters2.length; i++) {
  post.push("*" + letters2[i]);
}
console.log(post);`,

  `const words2 = ["hi","bye"];
let final2 = [];
for (let i = 0; i < words2.length; i++) {
  final2.push(words2[i] + " END");
}
console.log(final2);`,

  `const countries = ["{{country}}","Italy"];
let places = [];
for (let i = 0; i < countries.length; i++) {
  places.push("Country: " + countries[i]);
}
console.log(places);`,
];
