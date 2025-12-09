export const level34 = [
  // --- LEVEL 34: FILTERING WITH LOOPS + CONDITIONALS (1–100) ---

  // Basic filtering (1–20)
  `const nums = [1,2,3,4];
let out = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 1) {
    out.push(nums[i]);
  }
}
console.log(out);`,

  `const arr = [2,5,8];
let res = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    res.push(arr[i]);
  }
}
console.log(res);`,

  `const list = [3,6,9];
let filtered = [];
for (let i = 0; i < list.length; i++) {
  if (list[i] > 4) {
    filtered.push(list[i]);
  }
}
console.log(filtered);`,

  `const nums2 = [1,4,7];
let above3 = [];
for (let i = 0; i < nums2.length; i++) {
  if (nums2[i] > 3) {
    above3.push(nums2[i]);
  }
}
console.log(above3);`,

  `const aa = [5,2,10];
let evens = [];
for (let i = 0; i < aa.length; i++) {
  if (aa[i] % 2 === 0) {
    evens.push(aa[i]);
  }
}
console.log(evens);`,

  `const ages = [{{age}},20,15];
let adults = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    adults.push(ages[i]);
  }
}
console.log(adults);`,

  `const nums3 = [1,10,20];
let big = [];
for (let i = 0; i < nums3.length; i++) {
  if (nums3[i] > 9) {
    big.push(nums3[i]);
  }
}
console.log(big);`,

  `const arr2 = [6,12,3];
let sixes = [];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 6 === 0) {
    sixes.push(arr2[i]);
  }
}
console.log(sixes);`,

  `const list2 = [2,4,6];
let above3Again = [];
for (let i = 0; i < list2.length; i++) {
    if (list2[i] > 3) {
      above3Again.push(list2[i]);
    }
}
console.log(above3Again);`,

  `const nums4 = [3,9];
let divisible = [];
for (let i = 0; i < nums4.length; i++) {
  if (nums4[i] % 3 === 0) {
    divisible.push(nums4[i]);
  }
}
console.log(divisible);`,

  // Filtering strings (21–40)
  `const names = ["{{name}}","Sam","Leo"];
let long = [];
for (let i = 0; i < names.length; i++) {
  if (names[i].length > 3) {
    long.push(names[i]);
  }
}
console.log(long);`,

  `const cities = ["{{city}}","LA","Rome"];
let longCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i].length > 2) {
    longCities.push(cities[i]);
  }
}
console.log(longCities);`,

  `const jobs = ["{{job}}","pilot","chef"];
let longJobs = [];
for (let i = 0; i < jobs.length; i++) {
  if (jobs[i].length > 3) {
    longJobs.push(jobs[i]);
  }
}
console.log(longJobs);`,

  `const words = ["Hello","Hi","Test"];
let withE = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].includes("e")) {
    withE.push(words[i]);
  }
}
console.log(withE);`,

  `const animals = ["dog","horse","cat"];
let longAnimals = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i].length > 3) {
    longAnimals.push(animals[i]);
  }
}
console.log(longAnimals);`,

  `const letters = ["A","Long","Z"];
let moreThanOne = [];
for (let i = 0; i < letters.length; i++) {
  if (letters[i].length > 1) {
    moreThanOne.push(letters[i]);
  }
}
console.log(moreThanOne);`,

  `const foods = ["Pizza","Pie","Burger"];
let zFoods = [];
for (let i = 0; i < foods.length; i++) {
  if (foods[i].includes("z")) {
    zFoods.push(foods[i]);
  }
}
console.log(zFoods);`,

  `const people = ["{{name}}","Sam","Jo"];
let filteredPeople = [];
for (let i = 0; i < people.length; i++) {
  if (people[i].length > 2) {
    filteredPeople.push(people[i]);
  }
}
console.log(filteredPeople);`,

  `const items = ["book","pen","cup"];
let longItems = [];
for (let i = 0; i < items.length; i++) {
  if (items[i].length > 2) {
    longItems.push(items[i]);
  }
}
console.log(longItems);`,

  // Multiple numeric checks (41–60)
  `const nums5 = [5,15,25];
let between = [];
for (let i = 0; i < nums5.length; i++) {
  if (nums5[i] > 10 && nums5[i] < 20) {
    between.push(nums5[i]);
  }
}
console.log(between);`,

  `const arr3 = [10,30];
let bigger = [];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > 20) {
    bigger.push(arr3[i]);
  }
}
console.log(bigger);`,

  `const nums6 = [2,4,6];
let evenBig = [];
for (let i = 0; i < nums6.length; i++) {
  if (nums6[i] % 2 === 0 && nums6[i] > 3) {
    evenBig.push(nums6[i]);
  }
}
console.log(evenBig);`,

  `const list3 = [7,14,21];
let smallMultiples = [];
for (let i = 0; i < list3.length; i++) {
  if (list3[i] > 10 && list3[i] < 20) {
    smallMultiples.push(list3[i]);
  }
}
console.log(smallMultiples);`,

  `const xx = [3,9];
let threes = [];
for (let i = 0; i < xx.length; i++) {
  if (xx[i] % 3 === 0 && xx[i] > 3) {
    threes.push(xx[i]);
  }
}
console.log(threes);`,

  `const nums7 = [8,16,2];
let biggerEvens = [];
for (let i = 0; i < nums7.length; i++) {
  if (nums7[i] % 2 === 0 && nums7[i] > 10) {
    biggerEvens.push(nums7[i]);
  }
}
console.log(biggerEvens);`,

  `const arr4 = [1,20,40];
let mid = [];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > 10 && arr4[i] < 30) {
    mid.push(arr4[i]);
  }
}
console.log(mid);`,

  `const nums8 = [3,5,15];
let midSmall = [];
for (let i = 0; i < nums8.length; i++) {
  if (nums8[i] > 3 && nums8[i] < 10) {
    midSmall.push(nums8[i]);
  }
}
console.log(midSmall);`,

  `const list4 = [6,12];
let bySix = [];
for (let i = 0; i < list4.length; i++) {
  if (list4[i] % 6 === 0 && list4[i] > 7) {
    bySix.push(list4[i]);
  }
}
console.log(bySix);`,

  // Push logic becomes more detailed (61–80)
  `const arr5 = [1,2,3];
let out2 = [];
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] > 1) {
    out2.push(arr5[i]);
  }
}
console.log(out2);`,

  `const arr6 = [4,5];
let res2 = [];
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] > 3) {
    res2.push(arr6[i]);
  }
}
console.log(res2);`,

  `const nums9 = [2,8];
let out3 = [];
for (let i = 0; i < nums9.length; i++) {
  if (nums9[i] > 2 && nums9[i] < 10) {
    out3.push(nums9[i]);
  }
}
console.log(out3);`,

  `const list6 = [{{age}},50];
let group = [];
for (let i = 0; i < list6.length; i++) {
  if (list6[i] > 10 && list6[i] < 60) {
    group.push(list6[i]);
  }
}
console.log(group);`,

  `const nums10 = [3,9];
let store = [];
for (let i = 0; i < nums10.length; i++) {
  if (nums10[i] % 3 === 0 && nums10[i] > 3) {
    store.push(nums10[i]);
  }
}
console.log(store);`,

  `const arr7 = [5,15,25];
let picks = [];
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] > 10 && arr7[i] < 20) {
    picks.push(arr7[i]);
  }
}
console.log(picks);`,

  `const arr8 = [2,4,8];
let evensAgain = [];
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] % 2 === 0 && arr8[i] > 3) {
    evensAgain.push(arr8[i]);
  }
}
console.log(evensAgain);`,

  `const arr9 = [1,20,40];
let mid2 = [];
for (let i = 0; i < arr9.length; i++) {
  if (arr9[i] > 10 && arr9[i] < 30) {
    mid2.push(arr9[i]);
  }
}
console.log(mid2);`,

  `const nums11 = [6,12];
let sixGroup = [];
for (let i = 0; i < nums11.length; i++) {
  if (nums11[i] % 6 === 0 && nums11[i] > 7) {
    sixGroup.push(nums11[i]);
  }
}
console.log(sixGroup);`,

  `const last = [9,3];
let small = [];
for (let i = 0; i < last.length; i++) {
  if (last[i] > 2 && last[i] < 5) {
    small.push(last[i]);
  }
}
console.log(small);`,

  // Harder filters (81–100)
  `const mix = [1,10,20];
let out4 = [];
for (let i = 0; i < mix.length; i++) {
  if (mix[i] > 5 && mix[i] < 20) {
    out4.push(mix[i]);
  }
}
console.log(out4);`,

  `const ages2 = [{{age}},18,50];
let young = [];
for (let i = 0; i < ages2.length; i++) {
  if (ages2[i] >= 18 && ages2[i] < 40) {
    young.push(ages2[i]);
  }
}
console.log(young);`,

  `const xx2 = [2,4,6,8];
let largeEvens = [];
for (let i = 0; i < xx2.length; i++) {
  if (xx2[i] % 2 === 0 && xx2[i] > 4) {
    largeEvens.push(xx2[i]);
  }
}
console.log(largeEvens);`,

  `const items2 = ["{{city}}","Paris","Rome"];
let longCities2 = [];
for (let i = 0; i < items2.length; i++) {
  if (items2[i].length > 4 && items2[i] !== "Paris") {
    longCities2.push(items2[i]);
  }
}
console.log(longCities2);`,

  `const words2 = ["Hello","World","Hi"];
let filteredWords = [];
for (let i = 0; i < words2.length; i++) {
  if (words2[i].includes("o") && words2[i].length > 2) {
    filteredWords.push(words2[i]);
  }
}
console.log(filteredWords);`,

  `const scores = [5,50,100];
let mids = [];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > 10 && scores[i] < 90) {
    mids.push(scores[i]);
  }
}
console.log(mids);`,

  `const group2 = ["dog","cow","cat"];
let notCat = [];
for (let i = 0; i < group2.length; i++) {
  if (group2[i].length > 2 && group2[i] !== "cat") {
    notCat.push(group2[i]);
  }
}
console.log(notCat);`,

  `const arr10 = [3,6,9,12];
let threes2 = [];
for (let i = 0; i < arr10.length; i++) {
  if (arr10[i] % 3 === 0 && arr10[i] > 6) {
    threes2.push(arr10[i]);
  }
}
console.log(threes2);`,

  `const letters3 = ["A","BB","CCC"];
let midLetters = [];
for (let i = 0; i < letters3.length; i++) {
  if (letters3[i].length > 1 && letters3[i].length < 3) {
    midLetters.push(letters3[i]);
  }
}
console.log(midLetters);`,

  `const ages3 = [{{age}},60,15];
let mids2 = [];
for (let i = 0; i < ages3.length; i++) {
  if (ages3[i] > 10 && ages3[i] < 50) {
    mids2.push(ages3[i]);
  }
}
console.log(mids2);`,
];
