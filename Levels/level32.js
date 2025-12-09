export const level32 = [
  // --- LEVEL 32: ARRAY FILTERING (1–100) ---

  // Filter even numbers (1–20)
  `const nums = [1,2,3,4];
let evens = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evens.push(nums[i]);
  }
}
console.log(evens);`,

  `const arr = [2,5,6];
let out = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    out.push(arr[i]);
  }
}
console.log(out);`,

  `const list = [1,4,7,8];
let evenNums = [];
for (let i = 0; i < list.length; i++) {
  if (list[i] % 2 === 0) {
    evenNums.push(list[i]);
  }
}
console.log(evenNums);`,

  `const data = [3,6,9];
let ev = [];
for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 === 0) {
    ev.push(data[i]);
  }
}
console.log(ev);`,

  `const digits = [2,2,3];
let justEvens = [];
for (let i = 0; i < digits.length; i++) {
  if (digits[i] % 2 === 0) {
    justEvens.push(digits[i]);
  }
}
console.log(justEvens);`,

  `const a = [4,1];
let e = [];
for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0) {
    e.push(a[i]);
  }
}
console.log(e);`,

  `const small = [1,2];
let result = [];
for (let i = 0; i < small.length; i++) {
  if (small[i] % 2 === 0) {
    result.push(small[i]);
  }
}
console.log(result);`,

  `const test = [6,7];
let out2 = [];
for (let i = 0; i < test.length; i++) {
  if (test[i] % 2 === 0) {
    out2.push(test[i]);
  }
}
console.log(out2);`,

  `const nums2 = [10,11,12];
let filtered = [];
for (let i = 0; i < nums2.length; i++) {
  if (nums2[i] % 2 === 0) {
    filtered.push(nums2[i]);
  }
}
console.log(filtered);`,

  `const arr2 = [1,8];
let picks = [];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    picks.push(arr2[i]);
  }
}
console.log(picks);`,

  // Filter odd numbers (21–40)
  `const nums3 = [1,2,3,4];
let odds = [];
for (let i = 0; i < nums3.length; i++) {
  if (nums3[i] % 2 !== 0) {
    odds.push(nums3[i]);
  }
}
console.log(odds);`,

  `const arr3 = [5,6];
let oddOut = [];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 !== 0) {
    oddOut.push(arr3[i]);
  }
}
console.log(oddOut);`,

  `const nums4 = [7,7,2];
let oddList = [];
for (let i = 0; i < nums4.length; i++) {
  if (nums4[i] % 2 !== 0) {
    oddList.push(nums4[i]);
  }
}
console.log(oddList);`,

  `const list2 = [9,10,11];
let out3 = [];
for (let i = 0; i < list2.length; i++) {
    if (list2[i] % 2 !== 0) {
      out3.push(list2[i]);
    }
}
console.log(out3);`,

  `const digits2 = [1,4,5];
let onlyOdd = [];
for (let i = 0; i < digits2.length; i++) {
  if (digits2[i] % 2 !== 0) {
    onlyOdd.push(digits2[i]);
  }
}
console.log(onlyOdd);`,

  `const aa = [3,6];
let oddPick = [];
for (let i = 0; i < aa.length; i++) {
  if (aa[i] % 2 !== 0) {
    oddPick.push(aa[i]);
  }
}
console.log(oddPick);`,

  `const check = [8,9];
let oddOnes = [];
for (let i = 0; i < check.length; i++) {
  if (check[i] % 2 !== 0) {
    oddOnes.push(check[i]);
  }
}
console.log(oddOnes);`,

  `const nums5 = [12,13,14];
let oddOnly = [];
for (let i = 0; i < nums5.length; i++) {
  if (nums5[i] % 2 !== 0) {
    oddOnly.push(nums5[i]);
  }
}
console.log(oddOnly);`,

  `const bb = [7,2];
let odds2 = [];
for (let i = 0; i < bb.length; i++) {
  if (bb[i] % 2 !== 0) {
    odds2.push(bb[i]);
  }
}
console.log(odds2);`,

  `const list3 = [11,12,13];
let oddRes = [];
for (let i = 0; i < list3.length; i++) {
  if (list3[i] % 2 !== 0) {
    oddRes.push(list3[i]);
  }
}
console.log(oddRes);`,

  // Filter values greater than X (41–60)
  `const nums6 = [1,3,5,7];
let greater = [];
for (let i = 0; i < nums6.length; i++) {
  if (nums6[i] > 3) {
    greater.push(nums6[i]);
  }
}
console.log(greater);`,

  `const arr4 = [2,10];
let big = [];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > 5) {
    big.push(arr4[i]);
  }
}
console.log(big);`,

  `const nums7 = [4,6,2];
let above = [];
for (let i = 0; i < nums7.length; i++) {
  if (nums7[i] > 4) {
    above.push(nums7[i]);
  }
}
console.log(above);`,

  `const sample = [9,3,12];
let picks2 = [];
for (let i = 0; i < sample.length; i++) {
  if (sample[i] > 8) {
    picks2.push(sample[i]);
  }
}
console.log(picks2);`,

  `const digits3 = [5,1,10];
let high = [];
for (let i = 0; i < digits3.length; i++) {
  if (digits3[i] > 5) {
    high.push(digits3[i]);
  }
}
console.log(high);`,

  `const cc = [10,2,30];
let res = [];
for (let i = 0; i < cc.length; i++) {
  if (cc[i] > 9) {
    res.push(cc[i]);
  }
}
console.log(res);`,

  `const list4 = [{{age}},20];
let older = [];
for (let i = 0; i < list4.length; i++) {
  if (list4[i] > 18) {
    older.push(list4[i]);
  }
}
console.log(older);`,

  `const nums8 = [1,9,14];
let higher = [];
for (let i = 0; i < nums8.length; i++) {
  if (nums8[i] > 8) {
    higher.push(nums8[i]);
  }
}
console.log(higher);`,

  `const check2 = [3,6,9];
let above2 = [];
for (let i = 0; i < check2.length; i++) {
  if (check2[i] > 5) {
    above2.push(check2[i]);
  }
}
console.log(above2);`,

  `const arr5 = [15,4,20];
let chosen = [];
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] > 10) {
    chosen.push(arr5[i]);
  }
}
console.log(chosen);`,

  // Filter strings matching something (61–80)
  `const names = ["{{name}}","Alex","{{name}}"];
let matches = [];
for (let i = 0; i < names.length; i++) {
  if (names[i] === "{{name}}") {
    matches.push(names[i]);
  }
}
console.log(matches);`,

  `const cities = ["{{city}}","Tokyo"];
let chosenCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "{{city}}") {
    chosenCities.push(cities[i]);
  }
}
console.log(chosenCities);`,

  `const countries = ["{{country}}","Italy","{{country}}"];
let picks3 = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i] === "{{country}}") {
    picks3.push(countries[i]);
  }
}
console.log(picks3);`,

  `const jobs = ["{{job}}","pilot"];
let matchJobs = [];
for (let i = 0; i < jobs.length; i++) {
  if (jobs[i] === "{{job}}") {
    matchJobs.push(jobs[i]);
  }
}
console.log(matchJobs);`,

  `const names2 = ["Anna","Bob","Anna"];
let annas = [];
for (let i = 0; i < names2.length; i++) {
  if (names2[i] === "Anna") {
    annas.push(names2[i]);
  }
}
console.log(annas);`,

  `const pets = ["dog","cat","dog"];
let dogs = [];
for (let i = 0; i < pets.length; i++) {
  if (pets[i] === "dog") {
    dogs.push(pets[i]);
  }
}
console.log(dogs);`,

  `const cars = ["BMW","Audi"];
let bmw = [];
for (let i = 0; i < cars.length; i++) {
  if (cars[i] === "BMW") {
    bmw.push(cars[i]);
  }
}
console.log(bmw);`,

  `const letters = ["A","B","A"];
let aList = [];
for (let i = 0; i < letters.length; i++) {
  if (letters[i] === "A") {
    aList.push(letters[i]);
  }
}
console.log(aList);`,

  `const animals = ["cow","cow","pig"];
let cows = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i] === "cow") {
    cows.push(animals[i]);
  }
}
console.log(cows);`,

  `const foods = ["Pizza","Pasta","Pizza"];
let pizza = [];
for (let i = 0; i < foods.length; i++) {
  if (foods[i] === "Pizza") {
    pizza.push(foods[i]);
  }
}
console.log(pizza);`,

  // Filter non-matches (81–100)
  `const list5 = ["A","B","C"];
let notA = [];
for (let i = 0; i < list5.length; i++) {
  if (list5[i] !== "A") {
    notA.push(list5[i]);
  }
}
console.log(notA);`,

  `const numbers = [1,2,3];
let notTwo = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] !== 2) {
    notTwo.push(numbers[i]);
  }
}
console.log(notTwo);`,

  `const names3 = ["Anna","Bob","Anna"];
let notBob = [];
for (let i = 0; i < names3.length; i++) {
  if (names3[i] !== "Bob") {
    notBob.push(names3[i]);
  }
}
console.log(notBob);`,

  `const pets2 = ["dog","cat","dog"];
let notCat = [];
for (let i = 0; i < pets2.length; i++) {
  if (pets2[i] !== "cat") {
    notCat.push(pets2[i]);
  }
}
console.log(notCat);`,

  `const values = [2,3,2];
let excludeTwo = [];
for (let i = 0; i < values.length; i++) {
  if (values[i] !== 2) {
    excludeTwo.push(values[i]);
  }
}
console.log(excludeTwo);`,

  `const cars2 = ["BMW","Audi","BMW"];
let notBMW = [];
for (let i = 0; i < cars2.length; i++) {
  if (cars2[i] !== "BMW") {
    notBMW.push(cars2[i]);
  }
}
console.log(notBMW);`,

  `const cc3 = ["X","Y","X"];
let notX = [];
for (let i = 0; i < cc3.length; i++) {
  if (cc3[i] !== "X") {
    notX.push(cc3[i]);
  }
}
console.log(notX);`,

  `const nums9 = [{{age}},20,30];
let notTwenty = [];
for (let i = 0; i < nums9.length; i++) {
  if (nums9[i] !== 20) {
    notTwenty.push(nums9[i]);
  }
}
console.log(notTwenty);`,

  `const letters2 = ["A","B","A"];
let notB = [];
for (let i = 0; i < letters2.length; i++) {
  if (letters2[i] !== "B") {
    notB.push(letters2[i]);
  }
}
console.log(notB);`,

  `const foods2 = ["Soup","Salad","Soup"];
let notSoup = [];
for (let i = 0; i < foods2.length; i++) {
  if (foods2[i] !== "Soup") {
    notSoup.push(foods2[i]);
  }
}
console.log(notSoup);`,
];
