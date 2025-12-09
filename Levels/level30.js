export const level30 = [
  // --- LEVEL 30: LOOP ACCUMULATORS (1–100) ---

  // Basic numeric accumulation (1–20)
  `let total = 0;
for (let i = 0; i < 3; i++) {
  total = total + i;
}
console.log(total);`,

  `let sum = 0;
for (let i = 1; i <= 3; i++) {
  sum = sum + i;
}
console.log(sum);`,

  `let result = 0;
for (let i = 0; i < 4; i++) {
  result = result + 2;
}
console.log(result);`,

  `let count = 0;
for (let i = 0; i < 5; i++) {
  count = count + 1;
}
console.log(count);`,

  `let total2 = 5;
for (let i = 0; i < 3; i++) {
  total2 = total2 + i;
}
console.log(total2);`,

  `let x = 10;
for (let i = 0; i < 2; i++) {
  x = x + 5;
}
console.log(x);`,

  `let y = 1;
for (let i = 0; i < 4; i++) {
  y = y + 2;
}
console.log(y);`,

  `let value = 0;
for (let i = 2; i < 5; i++) {
  value = value + i;
}
console.log(value);`,

  `let sum2 = 0;
for (let i = 3; i <= 5; i++) {
  sum2 = sum2 + i;
}
console.log(sum2);`,

  `let total3 = 1;
for (let i = 0; i < 3; i++) {
  total3 = total3 + 3;
}
console.log(total3);`,

  `let number = 0;
for (let i = 1; i <= 4; i++) {
  number = number + i;
}
console.log(number);`,

  `let result2 = 2;
for (let i = 0; i < 4; i++) {
  result2 = result2 + 1;
}
console.log(result2);`,

  `let add = 0;
for (let i = 0; i < 3; i++) {
  add = add + (i + 1);
}
console.log(add);`,

  `let sum3 = 0;
for (let i = 2; i < 6; i++) {
  sum3 = sum3 + i;
}
console.log(sum3);`,

  `let total4 = 0;
for (let i = 1; i < 5; i++) {
  total4 = total4 + i;
}
console.log(total4);`,

  `let t = 3;
for (let i = 0; i < 3; i++) {
  t = t + 2;
}
console.log(t);`,

  `let amount = 0;
for (let i = 1; i <= 3; i++) {
  amount = amount + i * 2;
}
console.log(amount);`,

  `let points = 0;
for (let i = 0; i < 5; i++) {
  points = points + 1;
}
console.log(points);`,

  `let z = 0;
for (let i = 2; i < 5; i++) {
  z = z + i;
}
console.log(z);`,

  `let total5 = 1;
for (let i = 0; i < 4; i++) {
  total5 = total5 + i;
}
console.log(total5);`,

  // Array summing (21–40)
  `const nums = [1,2,3];
let sumArr = 0;
for (let i = 0; i < nums.length; i++) {
  sumArr = sumArr + nums[i];
}
console.log(sumArr);`,

  `const arr = [5,5];
let totalArr = 0;
for (let i = 0; i < arr.length; i++) {
  totalArr = totalArr + arr[i];
}
console.log(totalArr);`,

  `const nums2 = [2,4,6];
let sum4 = 0;
for (let i = 0; i < nums2.length; i++) {
  sum4 = sum4 + nums2[i];
}
console.log(sum4);`,

  `const values = [10,20,30];
let total6 = 0;
for (let i = 0; i < values.length; i++) {
  total6 = total6 + values[i];
}
console.log(total6);`,

  `const ages = [{{age}},20];
let added = 0;
for (let i = 0; i < ages.length; i++) {
  added = added + ages[i];
}
console.log(added);`,

  `const list = [3,3,3];
let out = 0;
for (let i = 0; i < list.length; i++) {
  out = out + list[i];
}
console.log(out);`,

  `const nums3 = [1,5,9];
let sum5 = 0;
for (let i = 0; i < nums3.length; i++) {
  sum5 = sum5 + nums3[i];
}
console.log(sum5);`,

  `const numbers = [2,2,2,2];
let total7 = 0;
for (let i = 0; i < numbers.length; i++) {
  total7 = total7 + numbers[i];
}
console.log(total7);`,

  `const cc = [10,1];
let total8 = 0;
for (let i = 0; i < cc.length; i++) {
  total8 = total8 + cc[i];
}
console.log(total8);`,

  `const vals = [4,6,8];
let add2 = 0;
for (let i = 0; i < vals.length; i++) {
  add2 = add2 + vals[i];
}
console.log(add2);`,

  // String accumulation (41–60)
  `let text = "";
for (let i = 0; i < 3; i++) {
  text = text + "A";
}
console.log(text);`,

  `let word = "";
for (let i = 0; i < 4; i++) {
  word = word + "Hi";
}
console.log(word);`,

  `let phrase = "";
for (let i = 1; i <= 3; i++) {
  phrase = phrase + i;
}
console.log(phrase);`,

  `let str = "";
for (let i = 0; i < 2; i++) {
  str = str + "OK";
}
console.log(str);`,

  `let line = "";
for (let i = 0; i < 3; i++) {
  line = line + "*";
}
console.log(line);`,

  `let nameBuild = "";
for (let i = 0; i < 2; i++) {
  nameBuild = nameBuild + "{{name}}";
}
console.log(nameBuild);`,

  `let cityStr = "";
for (let i = 0; i < 2; i++) {
  cityStr = cityStr + "{{city}}";
}
console.log(cityStr);`,

  `let out2 = "";
for (let i = 0; i < 3; i++) {
  out2 = out2 + "X";
}
console.log(out2);`,

  `let tag = "";
for (let i = 1; i <= 3; i++) {
  tag = tag + "#" + i;
}
console.log(tag);`,

  `let path = "";
for (let i = 0; i < 4; i++) {
  path = path + "-";
}
console.log(path);`,

  // Counting matches (61–80)
  `const nums4 = [1,2,2,3];
let countTwos = 0;
for (let i = 0; i < nums4.length; i++) {
  if (nums4[i] === 2) {
    countTwos = countTwos + 1;
  }
}
console.log(countTwos);`,

  `const letters = ["A","B","A"];
let countA = 0;
for (let i = 0; i < letters.length; i++) {
  if (letters[i] === "A") {
    countA = countA + 1;
  }
}
console.log(countA);`,

  `const arr2 = ["Dog","Cat","Dog"];
let dogs = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === "Dog") {
    dogs = dogs + 1;
  }
}
console.log(dogs);`,

  `const people2 = ["{{name}}","Anna","{{name}}"];
let hits = 0;
for (let i = 0; i < people2.length; i++) {
  if (people2[i] === "{{name}}") {
    hits = hits + 1;
  }
}
console.log(hits);`,

  `const nums5 = [3,5,3];
let count3 = 0;
for (let i = 0; i < nums5.length; i++) {
  if (nums5[i] === 3) {
    count3 = count3 + 1;
  }
}
console.log(count3);`,

  `const list3 = ["X","X","Y"];
let xCount = 0;
for (let i = 0; i < list3.length; i++) {
  if (list3[i] === "X") {
    xCount = xCount + 1;
  }
}
console.log(xCount);`,

  `const flags = ["USA","Japan","USA"];
let usa = 0;
for (let i = 0; i < flags.length; i++) {
  if (flags[i] === "USA") {
    usa = usa + 1;
  }
}
console.log(usa);`,

  `const nums6 = [2,4,6,2];
let twos = 0;
for (let i = 0; i < nums6.length; i++) {
  if (nums6[i] === 2) {
    twos = twos + 1;
  }
}
console.log(twos);`,

  `const names2 = ["Max","{{name}}","Lia"];
let match = 0;
for (let i = 0; i < names2.length; i++) {
  if (names2[i].length === 3) {
    match = match + 1;
  }
}
console.log(match);`,

  `const cc2 = ["A","B","C","A"];
let cCount = 0;
for (let i = 0; i < cc2.length; i++) {
  if (cc2[i] !== "B") {
    cCount = cCount + 1;
  }
}
console.log(cCount);`,

  // Min/max logic (81–100)
  `const nums7 = [3,1,5];
let smallest = nums7[0];
for (let i = 0; i < nums7.length; i++) {
  if (nums7[i] < smallest) {
    smallest = nums7[i];
  }
}
console.log(smallest);`,

  `const values2 = [10,7,12];
let min = values2[0];
for (let i = 0; i < values2.length; i++) {
  if (values2[i] < min) {
    min = values2[i];
  }
}
console.log(min);`,

  `const heights = [150,160,140];
let lowest = heights[0];
for (let i = 0; i < heights.length; i++) {
  if (heights[i] < lowest) {
    lowest = heights[i];
  }
}
console.log(lowest);`,

  `const nums8 = [1,9,4];
let largest = nums8[0];
for (let i = 0; i < nums8.length; i++) {
  if (nums8[i] > largest) {
    largest = nums8[i];
  }
}
console.log(largest);`,

  `const arr3 = [3,3,3];
let max = arr3[0];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > max) {
    max = arr3[i];
  }
}
console.log(max);`,

  `const cc3 = [{{age}},20,15];
let lowest2 = cc3[0];
for (let i = 0; i < cc3.length; i++) {
  if (cc3[i] < lowest2) {
    lowest2 = cc3[i];
  }
}
console.log(lowest2);`,

  `const dd = [7,2,9];
let highest = dd[0];
for (let i = 0; i < dd.length; i++) {
  if (dd[i] > highest) {
    highest = dd[i];
  }
}
console.log(highest);`,

  `const temps = [20,25,18];
let coldest = temps[0];
for (let i = 0; i < temps.length; i++) {
  if (temps[i] < coldest) {
    coldest = temps[i];
  }
}
console.log(coldest);`,

  `const scores = [10,5,8];
let best = scores[0];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > best) {
    best = scores[i];
  }
}
console.log(best);`,

  `const nums9 = [4,1,6];
let worst = nums9[0];
for (let i = 0; i < nums9.length; i++) {
  if (nums9[i] < worst) {
    worst = nums9[i];
  }
}
console.log(worst);`,
];
