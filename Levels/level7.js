export const level7 = [
  // --- LEVEL 7: CONDITIONAL LOGIC PRACTICE (1–100) ---

  `function isEven(n) {
  if (n % 2 === 0) {
    return "Even";
  }
  return "Odd";
}
console.log(isEven(4));`,

  `function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  }
  return "Minor";
}
console.log(isAdult({{age}}));`,

  `function matchName(n) {
  if (n === "{{name}}") {
    return "Match";
  }
  return "No match";
}
console.log(matchName("{{name}}"));`,

  `function positiveCheck(n) {
  if (n > 0) {
    return "Positive";
  }
  return "Not positive";
}
console.log(positiveCheck(3));`,

  `function longWord(word) {
  if (word.length > 5) {
    return "Long";
  }
  return "Short";
}
console.log(longWord("Hello"));`,

  `function hotOrCold(t) {
  if (t > 25) {
    return "Hot";
  }
  return "Cold";
}
console.log(hotOrCold(20));`,

  `function checkCity(city) {
  if (city === "{{city}}") {
    return "Correct city";
  }
  return "Different city";
}
console.log(checkCity("{{city}}"));`,

  `function isZero(n) {
  if (n === 0) {
    return "Zero";
  }
  return "Not zero";
}
console.log(isZero(0));`,

  `function overTen(n) {
  if (n > 10) {
    return "Above 10";
  }
  return "10 or below";
}
console.log(overTen(12));`,

  `function underFive(n) {
  if (n < 5) {
    return "Under 5";
  }
  return "5 or more";
}
console.log(underFive(2));`,

  // --- MORE COMPARISONS (11–20) ---

  `function status(active) {
  if (active) {
    return "Active";
  }
  return "Inactive";
}
console.log(status(true));`,

  `function isTrue(v) {
  if (v === true) {
    return "True";
  }
  return "False";
}
console.log(isTrue(false));`,

  `function compare(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not equal";
}
console.log(compare(2, 3));`,

  `function bigger(a, b) {
  if (a > b) {
    return "A bigger";
  }
  return "B bigger";
}
console.log(bigger(5, 3));`,

  `function startsWithH(word) {
  if (word[0] === "H") {
    return "Starts with H";
  }
  return "No H";
}
console.log(startsWithH("Hello"));`,

  `function matchCountry(c) {
  if (c === "{{country}}") {
    return "Correct";
  }
  return "Incorrect";
}
console.log(matchCountry("{{country}}"));`,

  `function checkJob(job) {
  if (job === "{{job}}") {
    return "Same job";
  }
  return "Different job";
}
console.log(checkJob("{{job}}"));`,

  `function warmEnough(t) {
  if (t >= 20) {
    return "Warm";
  }
  return "Cold";
}
console.log(warmEnough(18));`,

  `function tooLong(text) {
  if (text.length > 10) {
    return "Too long";
  }
  return "OK";
}
console.log(tooLong("short"));`,

  `function password(p) {
  if (p.length >= 6) {
    return "Valid";
  }
  return "Too short";
}
console.log(password("abc123"));`,

  // --- ELSE IF CHAINS (21–40) ---

  `function grade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 70) {
    return "B";
  }
  return "C";
}
console.log(grade(80));`,

  `function temperature(t) {
  if (t > 30) {
    return "Hot";
  } else if (t >= 20) {
    return "Warm";
  }
  return "Cold";
}
console.log(temperature(15));`,

  `function lifeStage(age) {
  if (age >= 65) {
    return "Senior";
  } else if (age >= 18) {
    return "Adult";
  }
  return "Minor";
}
console.log(lifeStage({{age}}));`,

  `function rating(stars) {
  if (stars === 5) {
    return "Excellent";
  } else if (stars === 4) {
    return "Great";
  }
  return "Good";
}
console.log(rating(4));`,

  `function waterTemp(t) {
  if (t >= 80) {
    return "Hot water";
  } else if (t >= 60) {
    return "Warm water";
  }
  return "Cold water";
}
console.log(waterTemp(75));`,

  `function dayTime(h) {
  if (h < 12) {
    return "Morning";
  } else if (h < 18) {
    return "Afternoon";
  }
  return "Evening";
}
console.log(dayTime(10));`,

  `function exam(score) {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 75) {
    return "Good";
  }
  return "Needs work";
}
console.log(exam(70));`,

  `function noise(n) {
  if (n > 7) {
    return "Loud";
  } else if (n > 3) {
    return "Medium";
  }
  return "Quiet";
}
console.log(noise(5));`,

  `function pages(p) {
  if (p > 300) {
    return "Long book";
  } else if (p > 100) {
    return "Medium book";
  }
  return "Short book";
}
console.log(pages(150));`,

  `function fuel(f) {
  if (f > 50) {
    return "Full";
  } else if (f > 20) {
    return "Okay";
  }
  return "Low";
}
console.log(fuel(30));`,

  // --- BOOLEAN & LOGIC (41–60) ---

  `function canEnter(age, hasID) {
  if (age >= 18 && hasID) {
    return "Allowed";
  }
  return "Denied";
}
console.log(canEnter({{age}}, true));`,

  `function needsUmbrella(rain) {
  if (rain || rain === true) {
    return "Take umbrella";
  }
  return "No umbrella needed";
}
console.log(needsUmbrella(false));`,

  `function ready(go, fuel) {
  if (go && fuel > 0) {
    return "Start car";
  }
  return "Cannot start";
}
console.log(ready(true, 10));`,

  `function bothTrue(a, b) {
  if (a && b) {
    return "Both true";
  }
  return "Not both";
}
console.log(bothTrue(true, false));`,

  `function either(x, y) {
  if (x || y) {
    return "One is true";
  }
  return "None";
}
console.log(either(false, false));`,

  `function unlocked(key, code) {
  if (key || code === "1234") {
    return "Open";
  }
  return "Closed";
}
console.log(unlocked(true, ""));`,

  `function safe(temp) {
  if (temp > 0 && temp < 100) {
    return "Safe";
  }
  return "Unsafe";
}
console.log(safe(50));`,

  `function login(user, pass) {
  if (user === "{{name}}" && pass === "123") {
    return "Success";
  }
  return "Fail";
}
console.log(login("{{name}}", "123"));`,

  `function allowedToDrive(age, hasLicense) {
  if (age >= 18 && hasLicense) {
    return "Can drive";
  }
  return "Cannot drive";
}
console.log(allowedToDrive({{age}}, true));`,

  `function sunnyAndWarm(sun, temp) {
  if (sun && temp > 20) {
    return "Nice day";
  }
  return "Not nice";
}
console.log(sunnyAndWarm(true, 25));`,

  // --- SLIGHTLY MORE ADVANCED LOGIC (61–80) ---

  `function compareThree(a, b, c) {
  if (a > b && a > c) {
    return "A biggest";
  } else if (b > c) {
    return "B biggest";
  }
  return "C biggest";
}
console.log(compareThree(3, 5, 1));`,

  `function scoreRank(n) {
  if (n >= 90) return "High";
  if (n >= 60) return "Medium";
  return "Low";
}
console.log(scoreRank(80));`,

  `function cooler(t) {
  if (t <= 0) return "Freezing";
  if (t < 15) return "Cold";
  return "Warm";
}
console.log(cooler(10));`,

  `function budget(amount) {
  if (amount >= 1000) return "Large";
  if (amount >= 200) return "Medium";
  return "Small";
}
console.log(budget(500));`,

  `function category(x) {
  if (x === 1) return "One";
  if (x === 2) return "Two";
  return "Other";
}
console.log(category(2));`,

  `function checkLetter(l) {
  if (l === "a") return "A";
  if (l === "b") return "B";
  return "Other";
}
console.log(checkLetter("a"));`,

  `function alertLevel(n) {
  if (n >= 80) return "High";
  if (n >= 50) return "Medium";
  return "Low";
}
console.log(alertLevel(40));`,

  `function matchBoth(a, b) {
  if (a === "{{city}}" && b === "{{country}}") {
    return "Both match";
  }
  return "Not match";
}
console.log(matchBoth("{{city}}", "{{country}}"));`,

  `function direction(d) {
  if (d === "north") return "Up";
  if (d === "south") return "Down";
  return "Side";
}
console.log(direction("north"));`,

  `function weather(t) {
  if (t > 30) return "Very hot";
  if (t > 20) return "Warm";
  if (t > 10) return "Cool";
  return "Cold";
}
console.log(weather(18));`,

  // --- FINAL, CLEAN LOGIC TASKS (81–100) ---

  `function greeting(time) {
  if (time < 12) return "Morning";
  if (time < 18) return "Afternoon";
  return "Evening";
}
console.log(greeting(9));`,

  `function testScore(n) {
  if (n === 100) return "Perfect";
  if (n >= 90) return "Excellent";
  return "Good";
}
console.log(testScore(95));`,

  `function validateLength(text) {
  if (text.length === 0) return "Empty";
  if (text.length < 5) return "Short";
  return "Long";
}
console.log(validateLength("Hi"));`,

  `function payment(paid) {
  if (paid) return "Paid";
  return "Unpaid";
}
console.log(payment(true));`,

  `function bonus(sales) {
  if (sales >= 100) return "Big bonus";
  if (sales >= 50) return "Bonus";
  return "No bonus";
}
console.log(bonus(60));`,

  `function lucky(n) {
  if (n === 7) return "Lucky";
  return "Not lucky";
}
console.log(lucky(7));`,

  `function petType(pet) {
  if (pet === "dog") return "Dog";
  if (pet === "cat") return "Cat";
  return "Other";
}
console.log(petType("dog"));`,

  `function checkSpeed(s) {
  if (s > 120) return "Too fast";
  if (s >= 60) return "OK";
  return "Slow";
}
console.log(checkSpeed(80));`,

  `function weatherType(rain, sun) {
  if (rain) return "Rainy";
  if (sun) return "Sunny";
  return "Cloudy";
}
console.log(weatherType(false, true));`,

  `function end() {
  return "End of Level 7";
}
console.log(end());`,
];
