export const level25 = [
  // --- LEVEL 25: INTRODUCTION TO forEach() (1–100) ---

  // BASIC USAGE (1–20)
  `["A","B","C"].forEach(item => {
  console.log(item);
});`,

  `[1,2,3].forEach(num => {
  console.log(num);
});`,

  `["Hello","World"].forEach(w => {
  console.log(w);
});`,

  `[5,10,15].forEach(n => {
  console.log(n);
});`,

  `["{{name}}","Alex","Sam"].forEach(person => {
  console.log(person);
});`,

  `["{{city}}","Berlin","Paris"].forEach(city => {
  console.log(city);
});`,

  `["Dog","Cat","Bird"].forEach(pet => {
  console.log(pet);
});`,

  `[true,false,true].forEach(flag => {
  console.log(flag);
});`,

  `["Red","Blue","Green"].forEach(color => {
  console.log(color);
});`,

  `[100,200,300].forEach(num => {
  console.log(num);
});`,

  `["One","Two"].forEach(w => {
  console.log(w);
});`,

  `[0,1,2].forEach(n => {
  console.log(n);
});`,

  `["Coffee","Tea","Juice"].forEach(drink => {
  console.log(drink);
});`,

  `["Car","Bike","Bus"].forEach(v => {
  console.log(v);
});`,

  `["Sun","Moon","Stars"].forEach(item => {
  console.log(item);
});`,

  `["Rock","Pop","Jazz"].forEach(m => {
  console.log(m);
});`,

  `[9,8,7].forEach(n => {
  console.log(n);
});`,

  `["Phone","Tablet","Laptop"].forEach(device => {
  console.log(device);
});`,

  `["Small","Medium","Large"].forEach(size => {
  console.log(size);
});`,

  `["{{country}}","USA","Japan"].forEach(c => {
  console.log(c);
});`,

  // INDEX + VALUE (21–40)
  `["A","B","C"].forEach((item, i) => {
  console.log(i);
});`,

  `[10,20,30].forEach((n, index) => {
  console.log(index);
});`,

  `["Dog","Cat"].forEach((pet, index) => {
  console.log(pet, index);
});`,

  `["Hi","There"].forEach((w, i) => {
  console.log(i, w);
});`,

  `[3,6,9].forEach((num, i) => {
  console.log(num, i);
});`,

  `["X","Y","Z"].forEach((letter, i) => {
  console.log(i + ": " + letter);
});`,

  `["{{job}}","Teacher","Pilot"].forEach((job, i) => {
  console.log(i, job);
});`,

  `[true,false].forEach((flag, i) => {
  console.log(i, flag);
});`,

  `["Hot","Cold","Warm"].forEach((temp, i) => {
  console.log(i, temp);
});`,

  `["Spring","Summer","Fall","Winter"].forEach((s, i) => {
  console.log(i, s);
});`,

  `[100,50,25].forEach((n, i) => {
  console.log(i + ": " + n);
});`,

  `["Red","Yellow"].forEach((c, i) => {
  console.log(i, c);
});`,

  `["Circle","Square"].forEach((shape, i) => {
  console.log(i, shape);
});`,

  `[5,10,15,20].forEach((n, i) => {
  console.log(i, n);
});`,

  `["{{name}}","{{city}}"].forEach((x, i) => {
  console.log(i, x);
});`,

  `["Alpha","Beta","Gamma"].forEach((item, i) => {
  console.log(i + ": " + item);
});`,

  `["East","West"].forEach((d, i) => {
  console.log("Index:", i);
});`,

  `["On","Off"].forEach((mode, i) => {
  console.log(i, mode);
});`,

  `["A","B"].forEach((l, i) => {
  console.log(i, l);
});`,

  `[1,2].forEach((n, i) => {
  console.log(i, n);
});`,

  // TRANSFORMATIONS (41–60)
  `[1,2,3].forEach(n => {
  console.log(n * 2);
});`,

  `[2,4,6].forEach(n => {
  console.log(n + 1);
});`,

  `["a","b"].forEach(x => {
  console.log(x.toUpperCase());
});`,

  `["Hello","World"].forEach(w => {
  console.log(w + "!");
});`,

  `[10,20].forEach(n => {
  console.log(n / 2);
});`,

  `[3,6,9].forEach(n => {
  console.log(n - 1);
});`,

  `["Cat","Dog"].forEach(p => {
  console.log("Pet: " + p);
});`,

  `["Hi","Hey"].forEach(w => {
  console.log(w + " there");
});`,

  `[7,14].forEach(n => {
  console.log(n * 3);
});`,

  `["Red","Blue"].forEach(c => {
  console.log("Color: " + c);
});`,

  `[5,10,15].forEach(n => {
  console.log("Value: " + n);
});`,

  `["{{country}}","Germany"].forEach(c => {
  console.log("Country: " + c);
});`,

  `[2,4,6,8].forEach(n => {
  console.log(n + 10);
});`,

  `["Dog","Fish"].forEach(p => {
  console.log(p + "!");
});`,

  `[100,200].forEach(n => {
  console.log("Half: " + n / 2);
});`,

  `["One","Two","Three"].forEach(w => {
  console.log(w + "!");
});`,

  `[3,9].forEach(n => {
  console.log(n * n);
});`,

  `["A","B"].forEach(l => {
  console.log(l + " letter");
});`,

  `[50,100].forEach(n => {
  console.log(n / 10);
});`,

  `["Hello","{{name}}"].forEach(w => {
  console.log("Word: " + w);
});`,

  // forEach WITH CALLBACK VARIABLES (61–80)
  `const arr1 = [1,2,3];
arr1.forEach(num => {
  console.log(num);
});`,

  `const arr2 = ["a","b","c"];
arr2.forEach(letter => {
  console.log(letter);
});`,

  `const arr3 = ["{{name}}","Alex"];
arr3.forEach(n => {
  console.log(n);
});`,

  `const arr4 = [true,false];
arr4.forEach(flag => {
  console.log(flag);
});`,

  `const arr5 = [10,20];
arr5.forEach(n => {
  console.log(n * 2);
});`,

  `const arr6 = ["Hi","Bye"];
arr6.forEach(w => {
  console.log(w + "!");
});`,

  `const arr7 = ["Red","Green"];
arr7.forEach(c => {
  console.log("Color:", c);
});`,

  `const arr8 = [2,4,8];
arr8.forEach(num => {
  console.log(num / 2);
});`,

  `const arr9 = ["Dog","Cat","Fish"];
arr9.forEach(p => {
  console.log("Pet:", p);
});`,

  `const arr10 = ["{{city}}","London"];
arr10.forEach(city => {
  console.log("City:", city);
});`,

  `const arr11 = ["A","B","C"];
arr11.forEach(l => {
  console.log(l.toLowerCase());
});`,

  `const arr12 = [5,10];
arr12.forEach(n => {
  console.log(n + 5);
});`,

  `const arr13 = [1,3,5];
arr13.forEach(n => {
  console.log(n);
});`,

  `const arr14 = ["JS","HTML"];
arr14.forEach(t => {
  console.log("Tech:", t);
});`,

  `const arr15 = ["Hot","Warm"];
arr15.forEach(t => {
  console.log(t);
});`,

  `const arr16 = [100,200];
arr16.forEach(x => {
  console.log(x);
});`,

  `const arr17 = ["{{job}}","Engineer"];
arr17.forEach(j => {
  console.log(j);
});`,

  `const arr18 = ["Phone","Tablet"];
arr18.forEach(d => {
  console.log(d);
});`,

  `const arr19 = [0,1];
arr19.forEach(n => {
  console.log(n);
});`,

  `const arr20 = ["OK","Yes"];
arr20.forEach(x => {
  console.log(x);
});`,

  // SMALL CHALLENGES (81–100)
  `["A","B","C"].forEach(x => {
  console.log("Letter:", x);
});`,

  `[10,20,30].forEach(n => {
  console.log("Num:", n);
});`,

  `["{{name}}","{{city}}"].forEach(v => {
  console.log(v);
});`,

  `["Dog","Cat","Fish"].forEach(p => {
  console.log("Pet:", p);
});`,

  `["Hi","There"].forEach(w => {
  console.log(w);
});`,

  `[1,2,3].forEach(n => {
  console.log(n * 10);
});`,

  `["Red","Blue"].forEach(c => {
  console.log(c);
});`,

  `[5,10].forEach(n => {
  console.log(n + 3);
});`,

  `["X","Y","Z"].forEach(x => {
  console.log("Value:", x);
});`,

  `["End","Of","Level","25"].forEach(w => {
  console.log(w);
});`,
];
