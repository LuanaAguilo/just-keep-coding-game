export const level38 = [
  // --- LEVEL 38: MANUAL SORTING USING LOOPS (1–100) ---
  // Basic bubble-sort style patterns

  // Ascending number sort (1–15)
  `let arr = [3, 1, 2];
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}
console.log(arr);`,

  `let nums = [10, 5];
for (let i = 0; i < nums.length - 1; i++) {
  if (nums[i] > nums[i + 1]) {
    let t = nums[i];
    nums[i] = nums[i + 1];
    nums[i + 1] = t;
  }
}
console.log(nums);`,

  `let values = [7, 2, 9];
for (let i = 0; i < values.length - 1; i++) {
  if (values[i] > values[i + 1]) {
    let temp = values[i];
    values[i] = values[i + 1];
    values[i + 1] = temp;
  }
}
console.log(values);`,

  `let a = [4, 1];
for (let i = 0; i < a.length - 1; i++) {
  if (a[i] > a[i + 1]) {
    let t = a[i];
    a[i] = a[i + 1];
    a[i + 1] = t;
  }
}
console.log(a);`,

  `let nums2 = [8, 3, 6];
for (let i = 0; i < nums2.length - 1; i++) {
  if (nums2[i] > nums2[i + 1]) {
    let temp = nums2[i];
    nums2[i] = nums2[i + 1];
    nums2[i + 1] = temp;
  }
}
console.log(nums2);`,

  `let list = [2, 9, 1];
for (let i = 0; i < list.length - 1; i++) {
  if (list[i] > list[i + 1]) {
    let t = list[i];
    list[i] = list[i + 1];
    list[i + 1] = t;
  }
}
console.log(list);`,

  `let arr2 = [5, 4];
for (let i = 0; i < arr2.length - 1; i++) {
  if (arr2[i] > arr2[i + 1]) {
    let t = arr2[i];
    arr2[i] = arr2[i + 1];
    arr2[i + 1] = t;
  }
}
console.log(arr2);`,

  `let arr3 = [9, 7, 8];
for (let i = 0; i < arr3.length - 1; i++) {
  if (arr3[i] > arr3[i + 1]) {
    let temp = arr3[i];
    arr3[i] = arr3[i + 1];
    arr3[i + 1] = temp;
  }
}
console.log(arr3);`,

  `let arr4 = [1, 3, 2];
for (let i = 0; i < arr4.length - 1; i++) {
  if (arr4[i] > arr4[i + 1]) {
    let temp = arr4[i];
    arr4[i] = arr4[i + 1];
    arr4[i + 1] = temp;
  }
}
console.log(arr4);`,

  `let arr5 = [4, 2, 3];
for (let i = 0; i < arr5.length - 1; i++) {
  if (arr5[i] > arr5[i + 1]) {
    let t = arr5[i];
    arr5[i] = arr5[i + 1];
    arr5[i + 1] = t;
  }
}
console.log(arr5);`,

  `let numbers = [2, 1];
for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] > numbers[i + 1]) {
    let temp = numbers[i];
    numbers[i] = numbers[i + 1];
    numbers[i + 1] = temp;
  }
}
console.log(numbers);`,

  `let order = [9, 5, 6];
for (let i = 0; i < order.length - 1; i++) {
  if (order[i] > order[i + 1]) {
    let t = order[i];
    order[i] = order[i + 1];
    order[i + 1] = t;
  }
}
console.log(order);`,

  `let arr6 = [3, 8];
for (let i = 0; i < arr6.length - 1; i++) {
  if (arr6[i] > arr6[i + 1]) {
    let t = arr6[i];
    arr6[i] = arr6[i + 1];
    arr6[i + 1] = t;
  }
}
console.log(arr6);`,

  `let arr7 = [7, 1];
for (let i = 0; i < arr7.length - 1; i++) {
  if (arr7[i] > arr7[i + 1]) {
    let t = arr7[i];
    arr7[i] = arr7[i + 1];
    arr7[i + 1] = t;
  }
}
console.log(arr7);`,

  `let arr8 = [5, 2, 9];
for (let i = 0; i < arr8.length - 1; i++) {
  if (arr8[i] > arr8[i + 1]) {
    let t = arr8[i];
    arr8[i] = arr8[i + 1];
    arr8[i + 1] = t;
  }
}
console.log(arr8);`,

  // Descending sort (16–30)
  `let d1 = [1, 3];
for (let i = 0; i < d1.length - 1; i++) {
  if (d1[i] < d1[i + 1]) {
    let t = d1[i];
    d1[i] = d1[i + 1];
    d1[i + 1] = t;
  }
}
console.log(d1);`,

  `let d2 = [4, 9, 2];
for (let i = 0; i < d2.length - 1; i++) {
  if (d2[i] < d2[i + 1]) {
    let temp = d2[i];
    d2[i] = d2[i + 1];
    d2[i + 1] = temp;
  }
}
console.log(d2);`,

  `let d3 = [8, 1];
for (let i = 0; i < d3.length - 1; i++) {
  if (d3[i] < d3[i + 1]) {
    let t = d3[i];
    d3[i] = d3[i + 1];
    d3[i + 1] = t;
  }
}
console.log(d3);`,

  `let d4 = [10, 5, 7];
for (let i = 0; i < d4.length - 1; i++) {
  if (d4[i] < d4[i + 1]) {
    let temp = d4[i];
    d4[i] = d4[i + 1];
    d4[i + 1] = temp;
  }
}
console.log(d4);`,

  `let d5 = [3, 2, 1];
for (let i = 0; i < d5.length - 1; i++) {
  if (d5[i] < d5[i + 1]) {
    let t = d5[i];
    d5[i] = d5[i + 1];
    d5[i + 1] = t;
  }
}
console.log(d5);`,

  // Alphabetical sort (31–45)
  `let w1 = ["Banana", "Apple"];
for (let i = 0; i < w1.length - 1; i++) {
  if (w1[i] > w1[i + 1]) {
    let t = w1[i];
    w1[i] = w1[i + 1];
    w1[i + 1] = t;
  }
}
console.log(w1);`,

  `let w2 = ["{{city}}", "Berlin"];
for (let i = 0; i < w2.length - 1; i++) {
  if (w2[i] > w2[i + 1]) {
    let temp = w2[i];
    w2[i] = w2[i + 1];
    w2[i + 1] = temp;
  }
}
console.log(w2);`,

  `let w3 = ["Dog", "Cat", "Fish"];
for (let i = 0; i < w3.length - 1; i++) {
  if (w3[i] > w3[i + 1]) {
    let t = w3[i];
    w3[i] = w3[i + 1];
    w3[i + 1] = t;
  }
}
console.log(w3);`,

  `let w4 = ["Sun", "Moon"];
for (let i = 0; i < w4.length - 1; i++) {
  if (w4[i] > w4[i + 1]) {
    let t = w4[i];
    w4[i] = w4[i + 1];
    w4[i + 1] = t;
  }
}
console.log(w4);`,

  `let w5 = ["{{name}}", "Alex"];
for (let i = 0; i < w5.length - 1; i++) {
  if (w5[i] > w5[i + 1]) {
    let temp = w5[i];
    w5[i] = w5[i + 1];
    w5[i + 1] = temp;
  }
}
console.log(w5);`,

  // Sort objects by age ascending (46–60)
  `const people = [
  { name: "{{name}}", age: {{age}} },
  { name: "Alex", age: 10 }
];
for (let i = 0; i < people.length - 1; i++) {
  if (people[i].age > people[i + 1].age) {
    let temp = people[i];
    people[i] = people[i + 1];
    people[i + 1] = temp;
  }
}
console.log(people);`,

  `const group = [
  { age: 30 },
  { age: 5 }
];
for (let i = 0; i < group.length - 1; i++) {
  if (group[i].age > group[i + 1].age) {
    let t = group[i];
    group[i] = group[i + 1];
    group[i + 1] = t;
  }
}
console.log(group);`,

  `const users = [
  { age: 12 },
  { age: 50 }
];
for (let i = 0; i < users.length - 1; i++) {
  if (users[i].age > users[i + 1].age) {
    let temp = users[i];
    users[i] = users[i + 1];
    users[i + 1] = temp;
  }
}
console.log(users);`,

  `const list2 = [
  { age: 20 },
  { age: 18 }
];
for (let i = 0; i < list2.length - 1; i++) {
  if (list2[i].age > list2[i + 1].age) {
    let t = list2[i];
    list2[i] = list2[i + 1];
    list2[i + 1] = t;
  }
}
console.log(list2);`,

  `const arrPeople = [
  { age: 40 },
  { age: 2 }
];
for (let i = 0; i < arrPeople.length - 1; i++) {
  if (arrPeople[i].age > arrPeople[i + 1].age) {
    let tmp = arrPeople[i];
    arrPeople[i] = arrPeople[i + 1];
    arrPeople[i + 1] = tmp;
  }
}
console.log(arrPeople);`,

  // Sort objects by name alphabetically (61–80)
  `const p1 = [
  { name: "Sam" },
  { name: "Alex" }
];
for (let i = 0; i < p1.length - 1; i++) {
  if (p1[i].name > p1[i + 1].name) {
    let t = p1[i];
    p1[i] = p1[i + 1];
    p1[i + 1] = t;
  }
}
console.log(p1);`,

  `const p2 = [
  { name: "{{name}}" },
  { name: "Bob" }
];
for (let i = 0; i < p2.length - 1; i++) {
  if (p2[i].name > p2[i + 1].name) {
    let t = p2[i];
    p2[i] = p2[i + 1];
    p2[i + 1] = t;
  }
}
console.log(p2);`,

  `const p3 = [
  { name: "Dog" },
  { name: "Cat" }
];
for (let i = 0; i < p3.length - 1; i++) {
  if (p3[i].name > p3[i + 1].name) {
    let temp = p3[i];
    p3[i] = p3[i + 1];
    p3[i + 1] = temp;
  }
}
console.log(p3);`,

  `const p4 = [
  { name: "Sun" },
  { name: "Moon" }
];
for (let i = 0; i < p4.length - 1; i++) {
  if (p4[i].name > p4[i + 1].name) {
    let tmp = p4[i];
    p4[i] = p4[i + 1];
    p4[i + 1] = tmp;
  }
}
console.log(p4);`,

  `const p5 = [
  { name: "Zoe" },
  { name: "Anna" }
];
for (let i = 0; i < p5.length - 1; i++) {
  if (p5[i].name > p5[i + 1].name) {
    let t = p5[i];
    p5[i] = p5[i + 1];
    p5[i + 1] = t;
  }
}
console.log(p5);`,

  // Final mixed set (81–100)
  `let mix1 = [9, 3, 6];
for (let i = 0; i < mix1.length - 1; i++) {
  if (mix1[i] > mix1[i + 1]) {
    let temp = mix1[i];
    mix1[i] = mix1[i + 1];
    mix1[i + 1] = temp;
  }
}
console.log(mix1);`,

  `let mix2 = ["B", "A"];
for (let i = 0; i < mix2.length - 1; i++) {
  if (mix2[i] > mix2[i + 1]) {
    let t = mix2[i];
    mix2[i] = mix2[i + 1];
    mix2[i + 1] = t;
  }
}
console.log(mix2);`,

  `let mix3 = [20, 10, 30];
for (let i = 0; i < mix3.length - 1; i++) {
  if (mix3[i] > mix3[i + 1]) {
    let tmp = mix3[i];
    mix3[i] = mix3[i + 1];
    mix3[i + 1] = tmp;
  }
}
console.log(mix3);`,

  `let mix4 = ["{{city}}", "London"];
for (let i = 0; i < mix4.length - 1; i++) {
  if (mix4[i] > mix4[i + 1]) {
    let t = mix4[i];
    mix4[i] = mix4[i + 1];
    mix4[i + 1] = t;
  }
}
console.log(mix4);`,

  `const mixObj = [
  { age: 9 },
  { age: 2 }
];
for (let i = 0; i < mixObj.length - 1; i++) {
  if (mixObj[i].age > mixObj[i + 1].age) {
    let temp = mixObj[i];
    mixObj[i] = mixObj[i + 1];
    mixObj[i + 1] = temp;
  }
}
console.log(mixObj);`,
];
