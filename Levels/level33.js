export const level33 = [
  // --- LEVEL 33: NESTED CONDITIONALS IN LOOPS (1–100) ---

  // Basic nested checks (1–20)
  `const nums = [1,2,3,4];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 1) {
    if (nums[i] < 4) {
      console.log(nums[i]);
    }
  }
}`,

  `const arr = [2,4];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 1) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}`,

  `const list = [3,6,9];
for (let i = 0; i < list.length; i++) {
  if (list[i] > 5) {
    if (list[i] < 10) {
      console.log(list[i]);
    }
  }
}`,

  `const data = [1,5,7];
for (let i = 0; i < data.length; i++) {
  if (data[i] > 1) {
    if (data[i] !== 7) {
      console.log(data[i]);
    }
  }
}`,

  `const nums2 = [2,5];
for (let i = 0; i < nums2.length; i++) {
  if (nums2[i] > 0) {
    if (nums2[i] > 3) {
      console.log(nums2[i]);
    }
  }
}`,

  `const aa = [4,8,1];
for (let i = 0; i < aa.length; i++) {
  if (aa[i] > 2) {
    if (aa[i] % 2 === 0) {
      console.log(aa[i]);
    }
  }
}`,

  `const numbers = [1,10];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    if (numbers[i] < 15) {
      console.log(numbers[i]);
    }
  }
}`,

  `const bb = [9,3];
for (let i = 0; i < bb.length; i++) {
  if (bb[i] > 2) {
    if (bb[i] % 3 === 0) {
      console.log(bb[i]);
    }
  }
}`,

  `const list2 = [{{age}},20];
for (let i = 0; i < list2.length; i++) {
  if (list2[i] > 10) {
    if (list2[i] < 30) {
      console.log(list2[i]);
    }
  }
}`,

  `const test = [7,14];
for (let i = 0; i < test.length; i++) {
  if (test[i] > 5) {
    if (test[i] % 7 === 0) {
      console.log(test[i]);
    }
  }
}`,

  // String nested logic (21–40)
  `const names = ["{{name}}","Alex"];
for (let i = 0; i < names.length; i++) {
  if (names[i].length > 3) {
    if (names[i] === "{{name}}") {
      console.log(names[i]);
    }
  }
}`,

  `const cities = ["{{city}}","Rome"];
for (let i = 0; i < cities.length; i++) {
  if (cities[i].length > 2) {
    if (cities[i] !== "Rome") {
      console.log(cities[i]);
    }
  }
}`,

  `const jobs = ["{{job}}","pilot"];
for (let i = 0; i < jobs.length; i++) {
  if (jobs[i].length > 3) {
    if (jobs[i] !== "pilot") {
      console.log(jobs[i]);
    }
  }
}`,

  `const words = ["Hello","Hi"];
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 2) {
    if (words[i].includes("e")) {
      console.log(words[i]);
    }
  }
}`,

  `const animals = ["dog","horse"];
for (let i = 0; i < animals.length; i++) {
  if (animals[i].length > 3) {
    if (animals[i] !== "dog") {
      console.log(animals[i]);
    }
  }
}`,

  `const cars = ["BMW","Audi"];
for (let i = 0; i < cars.length; i++) {
  if (cars[i] !== "BMW") {
    if (cars[i].length > 3) {
      console.log(cars[i]);
    }
  }
}`,

  `const letters = ["A","Long"];
for (let i = 0; i < letters.length; i++) {
  if (letters[i].length > 1) {
    if (letters[i][0] === "L") {
      console.log(letters[i]);
    }
  }
}`,

  `const foods = ["Pizza","Pie"];
for (let i = 0; i < foods.length; i++) {
  if (foods[i].length > 3) {
    if (foods[i].includes("z")) {
      console.log(foods[i]);
    }
  }
}`,

  `const people = ["{{name}}","Sam"];
for (let i = 0; i < people.length; i++) {
  if (people[i].length > 2) {
    if (people[i] !== "Sam") {
      console.log(people[i]);
    }
  }
}`,

  `const items = ["book","pen"];
for (let i = 0; i < items.length; i++) {
  if (items[i].length > 2) {
    if (items[i][0] === "b") {
      console.log(items[i]);
    }
  }
}`,

  // Double numeric logic (41–60)
  `const nums3 = [5,15,25];
for (let i = 0; i < nums3.length; i++) {
  if (nums3[i] > 10) {
    if (nums3[i] < 20) {
      console.log(nums3[i]);
    }
  }
}`,

  `const arr2 = [10,30];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5) {
    if (arr2[i] > 20) {
      console.log(arr2[i]);
    }
  }
}`,

  `const nums4 = [2,4,6];
for (let i = 0; i < nums4.length; i++) {
  if (nums4[i] % 2 === 0) {
    if (nums4[i] > 3) {
      console.log(nums4[i]);
    }
  }
}`,

  `const list3 = [7,14,21];
for (let i = 0; i < list3.length; i++) {
  if (list3[i] > 10) {
    if (list3[i] % 7 === 0) {
      console.log(list3[i]);
    }
  }
}`,

  `const xx = [3,9];
for (let i = 0; i < xx.length; i++) {
  if (xx[i] > 2) {
    if (xx[i] % 3 === 0) {
      console.log(xx[i]);
    }
  }
}`,

  `const ages = [{{age}},30];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] > 18) {
    if (ages[i] < 40) {
      console.log(ages[i]);
    }
  }
}`,

  `const nums5 = [8,16,2];
for (let i = 0; i < nums5.length; i++) {
  if (nums5[i] % 2 === 0) {
    if (nums5[i] > 10) {
      console.log(nums5[i]);
    }
  }
}`,

  `const arr3 = [1,20,40];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > 10) {
    if (arr3[i] < 30) {
      console.log(arr3[i]);
    }
  }
}`,

  `const nums6 = [3,5,15];
for (let i = 0; i < nums6.length; i++) {
  if (nums6[i] > 3) {
    if (nums6[i] < 10) {
      console.log(nums6[i]);
    }
  }
}`,

  `const list4 = [6,12];
for (let i = 0; i < list4.length; i++) {
  if (list4[i] % 6 === 0) {
    if (list4[i] > 7) {
      console.log(list4[i]);
    }
  }
}`,

  // Nested push logic (61–80)
  `const arr4 = [1,2,3];
let out = [];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > 1) {
    if (arr4[i] < 3) {
      out.push(arr4[i]);
    }
  }
}
console.log(out);`,

  `const arr5 = [4,5];
let res = [];
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] > 3) {
    if (arr5[i] < 6) {
      res.push(arr5[i]);
    }
  }
}
console.log(res);`,

  `const nums7 = [2,8];
let final = [];
for (let i = 0; i < nums7.length; i++) {
  if (nums7[i] > 2) {
    if (nums7[i] < 10) {
      final.push(nums7[i]);
    }
  }
}
console.log(final);`,

  `const list5 = [{{age}},50];
let group = [];
for (let i = 0; i < list5.length; i++) {
  if (list5[i] > 10) {
    if (list5[i] < 60) {
      group.push(list5[i]);
    }
  }
}
console.log(group);`,

  `const nums8 = [3,9];
let store = [];
for (let i = 0; i < nums8.length; i++) {
  if (nums8[i] % 3 === 0) {
    if (nums8[i] > 3) {
      store.push(nums8[i]);
    }
  }
}
console.log(store);`,

  `const arr6 = [5,15,25];
let picks = [];
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] > 10) {
    if (arr6[i] < 20) {
      picks.push(arr6[i]);
    }
  }
}
console.log(picks);`,

  `const arr7 = [2,4,8];
let evenList = [];
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] % 2 === 0) {
    if (arr7[i] > 3) {
      evenList.push(arr7[i]);
    }
  }
}
console.log(evenList);`,

  `const arr8 = [1,20,40];
let mid = [];
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] > 10) {
    if (arr8[i] < 30) {
      mid.push(arr8[i]);
    }
  }
}
console.log(mid);`,

  `const nums9 = [6,12];
let sixes = [];
for (let i = 0; i < nums9.length; i++) {
  if (nums9[i] % 6 === 0) {
    if (nums9[i] > 7) {
      sixes.push(nums9[i]);
    }
  }
}
console.log(sixes);`,

  `const last = [9,3];
let small = [];
for (let i = 0; i < last.length; i++) {
  if (last[i] > 2) {
    if (last[i] < 5) {
      small.push(last[i]);
    }
  }
}
console.log(small);`,

  // Harder condition combos (81–100)
  `const mix = [1,10,20];
for (let i = 0; i < mix.length; i++) {
  if (mix[i] > 5) {
    if (mix[i] !== 20) {
      console.log(mix[i]);
    }
  }
}`,

  `const numbers2 = [{{age}},18,50];
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] >= 18) {
    if (numbers2[i] < 40) {
      console.log(numbers2[i]);
    }
  }
}`,

  `const xx2 = [2,4,6,8];
for (let i = 0; i < xx2.length; i++) {
  if (xx2[i] % 2 === 0) {
    if (xx2[i] > 4) {
      console.log(xx2[i]);
    }
  }
}`,

  `const items2 = [{{city}},"Paris"];
for (let i = 0; i < items2.length; i++) {
  if (items2[i].length > 4) {
    if (items2[i] !== "Paris") {
      console.log(items2[i]);
    }
  }
}`,

  `const words2 = ["Hello","World","Hi"];
for (let i = 0; i < words2.length; i++) {
  if (words2[i].length > 2) {
    if (words2[i].includes("o")) {
      console.log(words2[i]);
    }
  }
}`,

  `const scores = [5,50,100];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > 10) {
    if (scores[i] < 90) {
      console.log(scores[i]);
    }
  }
}`,

  `const group2 = ["dog","cow","cat"];
for (let i = 0; i < group2.length; i++) {
  if (group2[i].length > 2) {
    if (group2[i] !== "cat") {
      console.log(group2[i]);
    }
  }
}`,

  `const arr9 = [3,6,9,12];
for (let i = 0; i < arr9.length; i++) {
  if (arr9[i] % 3 === 0) {
    if (arr9[i] > 6) {
      console.log(arr9[i]);
    }
  }
}`,

  `const letters3 = ["A","BB","CCC"];
for (let i = 0; i < letters3.length; i++) {
  if (letters3[i].length > 1) {
    if (letters3[i].length < 3) {
      console.log(letters3[i]);
    }
  }
}`,

  `const ages2 = [{{age}},60,15];
for (let i = 0; i < ages2.length; i++) {
  if (ages2[i] > 10) {
    if (ages2[i] < 50) {
      console.log(ages2[i]);
    }
  }
}`,
];
