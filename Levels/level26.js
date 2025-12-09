export const level26 = [
  // --- LEVEL 26: PRACTICAL forEach() USAGE (1–100) ---

  // ACCUMULATION (1–20)
  `let sum = 0;
[1,2,3].forEach(n => {
  sum += n;
});
console.log(sum);`,

  `let total = 0;
[5,10].forEach(n => {
  total += n;
});
console.log(total);`,

  `let count = 0;
["A","B","C"].forEach(() => {
  count++;
});
console.log(count);`,

  `let letters = 0;
["x","y"].forEach(() => {
  letters++;
});
console.log(letters);`,

  `let price = 0;
[10,20,30].forEach(n => {
  price += n;
});
console.log(price);`,

  `let lengthSum = 0;
["Hi","There"].forEach(w => {
  lengthSum += w.length;
});
console.log(lengthSum);`,

  `let result = 1;
[2,3].forEach(n => {
  result *= n;
});
console.log(result);`,

  `let counter = 0;
["Dog","Cat","Bird"].forEach(() => {
  counter++;
});
console.log(counter);`,

  `let charCount = 0;
["Red","Blue"].forEach(c => {
  charCount += c.length;
});
console.log(charCount);`,

  `let sumA = 0;
[4,4,4].forEach(n => {
  sumA += n;
});
console.log(sumA);`,

  `let totalLen = 0;
["Hello","World"].forEach(t => {
  totalLen += t.length;
});
console.log(totalLen);`,

  `let pets = 0;
["Dog","Cat"].forEach(() => {
  pets++;
});
console.log(pets);`,

  `let track = 0;
[7,8,9].forEach(n => {
  track += n;
});
console.log(track);`,

  `let howMany = 0;
["{{name}}","Alex","Sam"].forEach(() => {
  howMany++;
});
console.log(howMany);`,

  `let totalAge = 0;
[20,30].forEach(a => {
  totalAge += a;
});
console.log(totalAge);`,

  `let amount = 0;
[3,6].forEach(n => {
  amount += n;
});
console.log(amount);`,

  `let tally = 0;
["A","B"].forEach(() => {
  tally++;
});
console.log(tally);`,

  `let sumX = 0;
[1,5,10].forEach(n => {
  sumX += n;
});
console.log(sumX);`,

  `let len = 0;
["Hi","JS"].forEach(w => {
  len += w.length;
});
console.log(len);`,

  `let totalPets = 0;
["Dog","Cat","Fish"].forEach(() => {
  totalPets++;
});
console.log(totalPets);`,

  // CONDITIONAL CHECKS (21–40)
  `[1,2,3,4].forEach(n => {
  if (n > 2) console.log(n);
});`,

  `[5,10,15].forEach(n => {
  if (n >= 10) console.log(n);
});`,

  `["Red","Blue","Green"].forEach(c => {
  if (c.length === 3) console.log(c);
});`,

  `[10,20,30].forEach(n => {
  if (n !== 20) console.log(n);
});`,

  `["Hi","There"].forEach(w => {
  if (w.includes("e")) console.log(w);
});`,

  `[2,4,6].forEach(n => {
  if (n % 2 === 0) console.log(n);
});`,

  `["Dog","Cat"].forEach(p => {
  if (p === "Cat") console.log(p);
});`,

  `[3,6,9].forEach(n => {
  if (n > 5) console.log(n);
});`,

  `["A","BB","CCC"].forEach(s => {
  if (s.length > 1) console.log(s);
});`,

  `[100,50].forEach(n => {
  if (n > 70) console.log(n);
});`,

  `["{{city}}","Paris"].forEach(c => {
  if (c.length > 4) console.log(c);
});`,

  `[1,5,10].forEach(n => {
  if (n === 5) console.log(n);
});`,

  `["Hello","JS"].forEach(w => {
  if (w.startsWith("H")) console.log(w);
});`,

  `[2,3,4].forEach(n => {
  if (n < 4) console.log(n);
});`,

  `["A","C"].forEach(l => {
  if (l !== "C") console.log(l);
});`,

  `[7,8,9].forEach(n => {
  if (n % 3 === 0) console.log(n);
});`,

  `["Dog","Bird"].forEach(p => {
  if (p.includes("i")) console.log(p);
});`,

  `[9,10].forEach(n => {
  if (n > 9) console.log(n);
});`,

  `["Sun","Moon"].forEach(w => {
  if (w.length === 3) console.log(w);
});`,

  `[4,8,12].forEach(n => {
  if (n >= 8) console.log(n);
});`,

  // TRANSFORMATION (41–60)
  `["a","b","c"].forEach(x => {
  console.log(x.toUpperCase());
});`,

  `["hello","world"].forEach(w => {
  console.log(w + "!");
});`,

  `[5,10].forEach(n => {
  console.log(n * 2);
});`,

  `["Dog","Cat"].forEach(p => {
  console.log("Pet: " + p);
});`,

  `[10,20,30].forEach(n => {
  console.log(n / 10);
});`,

  `["Red","Blue"].forEach(c => {
  console.log("Color: " + c);
});`,

  `[1,2].forEach(n => {
  console.log(n + 5);
});`,

  `["{{name}}","{{city}}"].forEach(w => {
  console.log("Word: " + w);
});`,

  `[3,6,9].forEach(n => {
  console.log(n * n);
});`,

  `["JS","Code"].forEach(t => {
  console.log(t.toLowerCase());
});`,

  `["Hi","There"].forEach(w => {
  console.log(w + " friend");
});`,

  `[4,8,12].forEach(n => {
  console.log(n - 1);
});`,

  `["Apple","Banana"].forEach(f => {
  console.log(f.length);
});`,

  `[100,50].forEach(n => {
  console.log(n / 5);
});`,

  `["Sun","Star"].forEach(w => {
  console.log("Sky: " + w);
});`,

  `[2,4,6].forEach(n => {
  console.log(n * 3);
});`,

  `["Hot","Cold"].forEach(t => {
  console.log(t + " weather");
});`,

  `[9,18].forEach(n => {
  console.log(n / 3);
});`,

  `["A","B"].forEach(l => {
  console.log(l + " letter");
});`,

  `[20,40].forEach(n => {
  console.log(n + 2);
});`,

  // MINI-CHALLENGES (61–80)
  `["A","B","C"].forEach(l => {
  console.log("Letter:", l);
});`,

  `[10,20,30].forEach(n => {
  console.log("Value:", n);
});`,

  `["Dog","Cat","Fish"].forEach(p => {
  console.log("Pet:", p);
});`,

  `[1,2,3].forEach(n => {
  console.log("Num:", n);
});`,

  `["Red","Blue"].forEach(c => {
  console.log("Color:", c);
});`,

  `[5,10].forEach(n => {
  console.log("Double:", n * 2);
});`,

  `["{{country}}","Japan"].forEach(c => {
  console.log("Country:", c);
});`,

  `[3,6,9].forEach(n => {
  console.log("Square:", n * n);
});`,

  `["Hi","There"].forEach(w => {
  console.log("Word:", w);
});`,

  `[100,200].forEach(n => {
  console.log("Half:", n / 2);
});`,

  `["Sun","Moon"].forEach(w => {
  console.log("Item:", w);
});`,

  `[2,4,6].forEach(n => {
  console.log("Plus one:", n + 1);
});`,

  `["A","AA","AAA"].forEach(w => {
  console.log(w.length);
});`,

  `[7,14].forEach(n => {
  console.log(n - 2);
});`,

  `["Phone","Tablet"].forEach(d => {
  console.log("Device:", d);
});`,

  `[1,10].forEach(n => {
  console.log("Times 5:", n * 5);
});`,

  `["East","West"].forEach(dir => {
  console.log("Dir:", dir);
});`,

  `[3,9].forEach(n => {
  console.log("Cube:", n * n * n);
});`,

  `["Yes","No"].forEach(r => {
  console.log("Answer:", r);
});`,

  `[0,1].forEach(n => {
  console.log("Binary:", n);
});`,

  // FINAL SECTION (81–100)
  `[1,2,3].forEach(n => {
  console.log(n + "!");
});`,

  `["Alpha","Beta"].forEach(w => {
  console.log(w + "!");
});`,

  `[10,20,30].forEach(n => {
  console.log("n:", n);
});`,

  `["Cat","Bird"].forEach(p => {
  console.log("Pet:", p);
});`,

  `[4,8].forEach(n => {
  console.log("Half:", n / 2);
});`,

  `["Red","Green","Blue"].forEach(c => {
  console.log(c);
});`,

  `[5,15].forEach(n => {
  console.log(n - 1);
});`,

  `["{{name}}","{{city}}"].forEach(v => {
  console.log(v);
});`,

  `[2,4,8].forEach(n => {
  console.log(n * 10);
});`,

  `["End","Of","Level","26"].forEach(w => {
  console.log(w);
});`,
];
