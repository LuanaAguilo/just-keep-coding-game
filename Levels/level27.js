export const level27 = [
  // --- LEVEL 27: ARRAY MANIPULATION BASICS (1–100) ---

  // PUSH (1–15)
  `let arr = [];
arr.push("A");
console.log(arr);`,

  `let nums = [1];
nums.push(2);
console.log(nums);`,

  `let pets = ["Dog"];
pets.push("Cat");
console.log(pets);`,

  `let letters = [];
letters.push("X");
console.log(letters);`,

  `let countries = ["{{country}}"];
countries.push("USA");
console.log(countries);`,

  `let items = [10];
items.push(20);
console.log(items);`,

  `let people = ["{{name}}"];
people.push("Alex");
console.log(people);`,

  `let colors = [];
colors.push("Red");
console.log(colors);`,

  `let stuff = ["A"];
stuff.push("B");
console.log(stuff);`,

  `let arr2 = [];
arr2.push(5);
console.log(arr2);`,

  `let cities = ["{{city}}"];
cities.push("Paris");
console.log(cities);`,

  `let nums2 = [3];
nums2.push(6);
console.log(nums2);`,

  `let drinks = ["Tea"];
drinks.push("Coffee");
console.log(drinks);`,

  `let arr3 = [];
arr3.push("Hello");
console.log(arr3);`,

  `let arr4 = [9];
arr4.push(10);
console.log(arr4);`,

  // POP (16–30)
  `let a = [1,2];
a.pop();
console.log(a);`,

  `let b = ["A","B"];
b.pop();
console.log(b);`,

  `let c = ["Dog","Cat"];
c.pop();
console.log(c);`,

  `let d = [10,20,30];
d.pop();
console.log(d);`,

  `let e = ["X","Y"];
e.pop();
console.log(e);`,

  `let f = ["{{name}}","Alex"];
f.pop();
console.log(f);`,

  `let g = ["{{city}}","Berlin"];
g.pop();
console.log(g);`,

  `let h = [100,200];
h.pop();
console.log(h);`,

  `let i = ["Sun","Moon"];
i.pop();
console.log(i);`,

  `let j = ["Red","Green"];
j.pop();
console.log(j);`,

  `let k = [2,4];
k.pop();
console.log(k);`,

  `let l = ["One","Two"];
l.pop();
console.log(l);`,

  `let m = ["Hi","There"];
m.pop();
console.log(m);`,

  `let n = [5,10];
n.pop();
console.log(n);`,

  `let o = ["A","B","C"];
o.pop();
console.log(o);`,

  // SHIFT (31–45)
  `let s1 = [1,2,3];
s1.shift();
console.log(s1);`,

  `let s2 = ["A","B"];
s2.shift();
console.log(s2);`,

  `let s3 = ["Dog","Cat"];
s3.shift();
console.log(s3);`,

  `let s4 = ["{{city}}","Paris"];
s4.shift();
console.log(s4);`,

  `let s5 = ["X","Y","Z"];
s5.shift();
console.log(s5);`,

  `let s6 = ["Red","Blue"];
s6.shift();
console.log(s6);`,

  `let s7 = ["Hi","There"];
s7.shift();
console.log(s7);`,

  `let s8 = [10,20];
s8.shift();
console.log(s8);`,

  `let s9 = ["Sun","Star"];
s9.shift();
console.log(s9);`,

  `let s10 = ["{{name}}","Sam"];
s10.shift();
console.log(s10);`,

  `let s11 = ["A","B","C"];
s11.shift();
console.log(s11);`,

  `let s12 = ["Yes","No"];
s12.shift();
console.log(s12);`,

  `let s13 = [7,14];
s13.shift();
console.log(s13);`,

  `let s14 = ["Cat","Fish"];
s14.shift();
console.log(s14);`,

  `let s15 = ["Hot","Cold"];
s15.shift();
console.log(s15);`,

  // UNSHIFT (46–60)
  `let u1 = [];
u1.unshift("A");
console.log(u1);`,

  `let u2 = ["B"];
u2.unshift("A");
console.log(u2);`,

  `let u3 = ["Cat"];
u3.unshift("Dog");
console.log(u3);`,

  `let u4 = ["{{city}}"];
u4.unshift("Berlin");
console.log(u4);`,

  `let u5 = [10];
u5.unshift(5);
console.log(u5);`,

  `let u6 = ["X"];
u6.unshift("Start");
console.log(u6);`,

  `let u7 = ["Red"];
u7.unshift("Blue");
console.log(u7);`,

  `let u8 = ["Bird"];
u8.unshift("Dog");
console.log(u8);`,

  `let u9 = [2];
u9.unshift(1);
console.log(u9);`,

  `let u10 = ["{{name}}"];
u10.unshift("Alex");
console.log(u10);`,

  `let u11 = ["Warm"];
u11.unshift("Hot");
console.log(u11);`,

  `let u12 = ["Hi"];
u12.unshift("Hello");
console.log(u12);`,

  `let u13 = ["B"];
u13.unshift("A");
console.log(u13);`,

  `let u14 = ["Tea"];
u14.unshift("Coffee");
console.log(u14);`,

  `let u15 = ["One"];
u15.unshift("Zero");
console.log(u15);`,

  // INCLUDES (61–75)
  `console.log(["A","B","C"].includes("B"));`,

  `console.log(["Dog","Cat"].includes("Dog"));`,

  `console.log([1,2,3].includes(2));`,

  `console.log(["{{city}}","Paris"].includes("Paris"));`,

  `console.log(["Red","Blue"].includes("Green"));`,

  `console.log([10,20].includes(10));`,

  `console.log(["Hi","There"].includes("Hi"));`,

  `console.log(["Sun","Moon"].includes("Star"));`,

  `console.log(["X","Y"].includes("X"));`,

  `console.log([5,10,15].includes(20));`,

  `console.log(["{{name}}","Alex"].includes("{{name}}"));`,

  `console.log(["Hot","Cold"].includes("Hot"));`,

  `console.log(["A","B"].includes("C"));`,

  `console.log([3,6,9].includes(3));`,

  `console.log(["Dog","Bird"].includes("Fish"));`,

  // INDEXOF (76–85)
  `console.log(["A","B","C"].indexOf("B"));`,

  `console.log(["Dog","Cat"].indexOf("Cat"));`,

  `console.log([1,2,3].indexOf(3));`,

  `console.log(["Red","Blue"].indexOf("Red"));`,

  `console.log(["{{city}}","London"].indexOf("London"));`,

  `console.log(["Hi","There"].indexOf("There"));`,

  `console.log([5,10,15].indexOf(20));`,

  `console.log(["Sun","Moon"].indexOf("Sun"));`,

  `console.log(["X","Y"].indexOf("Z"));`,

  `console.log(["{{name}}","Sam"].indexOf("{{name}}"));`,

  // SLICE + JOIN (86–100)
  `console.log(["A","B","C"].slice(0,2));`,

  `console.log(["Dog","Cat","Fish"].slice(1));`,

  `console.log([1,2,3,4].slice(2));`,

  `console.log(["{{city}}","Paris","Rome"].slice(0,1));`,

  `console.log(["Red","Blue","Green"].slice(1,3));`,

  `console.log(["Hi","There"].join(" "));`,

  `console.log(["{{name}}","{{city}}"].join(", "));`,

  `console.log([1,2,3].join("-"));`,

  `console.log(["Sun","Moon"].join(" & "));`,

  `console.log(["A","B","C"].slice(0,3));`,

  `console.log(["Dog","Cat"].join("/"));`,

  `console.log(["Hot","Cold"].slice(0,1));`,

  `console.log([5,10,15].slice(1,2));`,

  `console.log(["X","Y","Z"].join(""));`,

  `console.log(["End","Of","Level","27"].join(" "));`,
];
