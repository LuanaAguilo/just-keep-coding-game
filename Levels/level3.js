export const level3 = [
  // --- LEVEL 3: IF / ELSE / LOGIC / NESTED CONDITIONS (1–100) ---

  // BASIC IF STATEMENTS (1–20)
  `const age = {{age}};
if (age > 18) {
  console.log("Adult");
}`,

  `const score = 50;
if (score === 50) {
  console.log("Perfect score");
}`,

  `let temp = 30;
if (temp > 25) {
  console.log("Hot day");
}`,

  `const city = "{{city}}";
if (city === "{{city}}") {
  console.log("Matching city");
}`,

  `let number = 10;
if (number < 20) {
  console.log("Smaller than 20");
}`,

  `let value = 5;
if (value === 5) {
  console.log("Value is five");
}`,

  `let speed = 60;
if (speed > 50) {
  console.log("Too fast");
}`,

  `const name = "{{name}}";
if (name === "{{name}}") {
  console.log("Correct name");
}`,

  `let grade = "A";
if (grade === "A") {
  console.log("Excellent");
}`,

  `let count = 3;
if (count !== 5) {
  console.log("Not five");
}`,

  `let tempCheck = 18;
if (tempCheck < 20) {
  console.log("Cold day");
}`,

  `let rain = false;
if (!rain) {
  console.log("No rain");
}`,

  `let likesCoding = true;
if (likesCoding) {
  console.log("Coder!");
}`,

  `let height = 180;
if (height > 150) {
  console.log("Tall enough");
}`,

  `let scoreCheck = 30;
if (scoreCheck < 50) {
  console.log("Needs improvement");
}`,

  `let time = 9;
if (time < 12) {
  console.log("Morning");
}`,

  `let weekend = false;
if (!weekend) {
  console.log("Weekday");
}`,

  `let x = 4;
if (x < 10) {
  console.log("Small number");
}`,

  `let hungry = true;
if (hungry) {
  console.log("Time to eat");
}`,

  `let isOpen = true;
if (isOpen) {
  console.log("Open");
}`,

  // IF / ELSE (21–40)
  `const age2 = {{age}};
if (age2 >= 18) {
  console.log("Allowed");
} else {
  console.log("Not allowed");
}`,

  `let score2 = 70;
if (score2 > 80) {
  console.log("High score");
} else {
  console.log("Keep trying");
}`,

  `let num = 2;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}`,

  `let price = 100;
if (price > 50) {
  console.log("Expensive");
} else {
  console.log("Affordable");
}`,

  `let hour = 10;
if (hour < 12) {
  console.log("Morning");
} else {
  console.log("Afternoon");
}`,

  `let balance = 500;
if (balance >= 100) {
  console.log("Sufficient funds");
} else {
  console.log("Low balance");
}`,

  `let color = "blue";
if (color === "blue") {
  console.log("Blue color");
} else {
  console.log("Different color");
}`,

  `let age3 = {{age}};
if (age3 < 13) {
  console.log("Child");
} else {
  console.log("Teen or adult");
}`,

  `let temp2 = 18;
if (temp2 < 20) {
  console.log("Cold");
} else {
  console.log("Warm");
}`,

  `let digits = 100;
if (digits > 99) {
  console.log("Three digits");
} else {
  console.log("Not three digits");
}`,

  `let seats = 3;
if (seats > 0) {
  console.log("Available");
} else {
  console.log("Sold out");
}`,

  `let battery = 15;
if (battery < 20) {
  console.log("Low battery");
} else {
  console.log("Battery ok");
}`,

  `let rainingToday = false;
if (!rainingToday) {
  console.log("Clear day");
} else {
  console.log("Rainy");
}`,

  `let moving = true;
if (moving) {
  console.log("In motion");
} else {
  console.log("Stopped");
}`,

  `let discount = 5;
if (discount > 0) {
  console.log("Discount applied");
} else {
  console.log("No discount");
}`,

  `let stars = 4;
if (stars >= 4) {
  console.log("Great rating");
} else {
  console.log("Average rating");
}`,

  `let snow = false;
if (snow) {
  console.log("Snowing");
} else {
  console.log("No snow");
}`,

  `let isHome = true;
if (isHome) {
  console.log("You are home");
} else {
  console.log("Away");
}`,

  `let free = true;
if (free) {
  console.log("Available");
} else {
  console.log("Busy");
}`,

  `let ageCheck = {{age}};
if (ageCheck > 17) {
  console.log("Adult");
} else {
  console.log("Minor");
}`,

  // ELSE IF (41–60)
  `let score3 = 85;
if (score3 > 90) {
  console.log("A");
} else if (score3 > 80) {
  console.log("B");
} else {
  console.log("C");
}`,

  `let temperature = 15;
if (temperature > 30) {
  console.log("Hot");
} else if (temperature > 20) {
  console.log("Warm");
} else {
  console.log("Cool");
}`,

  `let age4 = {{age}};
if (age4 >= 65) {
  console.log("Senior");
} else if (age4 >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`,

  `let hour2 = 22;
if (hour2 < 12) {
  console.log("Morning");
} else if (hour2 < 18) {
  console.log("Afternoon");
} else {
  console.log("Evening");
}`,

  `let num2 = 0;
if (num2 > 0) {
  console.log("Positive");
} else if (num2 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}`,

  `let price2 = 40;
if (price2 < 20) {
  console.log("Cheap");
} else if (price2 < 50) {
  console.log("Medium price");
} else {
  console.log("Expensive");
}`,

  `let tries = 1;
if (tries < 3) {
  console.log("Try again");
} else {
  console.log("Attempts exceeded");
}`,

  `let seats2 = 10;
if (seats2 > 0) {
  console.log("Seats available");
} else {
  console.log("Sold out");
}`,

  `let amount = 1;
if (amount === 1) {
  console.log("One");
} else if (amount === 2) {
  console.log("Two");
} else {
  console.log("Other");
}`,

  `let progress = 70;
if (progress === 100) {
  console.log("Complete");
} else if (progress >= 50) {
  console.log("Halfway");
} else {
  console.log("Starting");
}`,

  `let fuel = 30;
if (fuel > 50) {
  console.log("Full tank");
} else if (fuel > 20) {
  console.log("Okay");
} else {
  console.log("Low fuel");
}`,

  `let noise = 5;
if (noise > 7) {
  console.log("Loud");
} else if (noise > 3) {
  console.log("Medium");
} else {
  console.log("Quiet");
}`,

  `let rating = 3;
if (rating === 5) {
  console.log("Excellent");
} else if (rating === 4) {
  console.log("Great");
} else {
  console.log("Okay");
}`,

  `let pages = 100;
if (pages > 300) {
  console.log("Long book");
} else if (pages > 100) {
  console.log("Medium book");
} else {
  console.log("Short book");
}`,

  `let speed3 = 120;
if (speed3 > 130) {
  console.log("Very fast");
} else if (speed3 > 90) {
  console.log("Fast");
} else {
  console.log("Normal");
}`,

  `let points = 10;
if (points > 20) {
  console.log("High");
} else if (points > 10) {
  console.log("Medium");
} else {
  console.log("Low");
}`,

  `let hours = 8;
if (hours > 12) {
  console.log("Long day");
} else if (hours > 6) {
  console.log("Normal day");
} else {
  console.log("Short day");
}`,

  `let rating2 = 2;
if (rating2 === 3) {
  console.log("Okay");
} else if (rating2 === 2) {
  console.log("Bad");
} else {
  console.log("Terrible");
}`,

  `let age5 = {{age}};
if (age5 >= 30) {
  console.log("30 or older");
} else if (age5 >= 20) {
  console.log("20s");
} else {
  console.log("Teen");
}`,

  `let waterTemp = 70;
if (waterTemp > 80) {
  console.log("Hot water");
} else if (waterTemp > 60) {
  console.log("Warm water");
} else {
  console.log("Cold water");
}`,

  // BOOLEAN LOGIC (61–80)
  `let isReady = false;
if (!isReady) {
  console.log("Not ready");
} else {
  console.log("Ready");
}`,

  `let sunny = true;
if (sunny && true) {
  console.log("Go outside");
}`,

  `let rainingToday2 = false;
if (!rainingToday2) {
  console.log("Dry weather");
} else {
  console.log("Bring umbrella");
}`,

  `let active = true;
if (active === true) {
  console.log("Active");
} else {
  console.log("Inactive");
}`,

  `let loggedIn = false;
if (!loggedIn) {
  console.log("Please log in");
}`,

  `let hasID = true;
let ageCheck2 = {{age}};
if (hasID && ageCheck2 >= 18) {
  console.log("Entry allowed");
} else {
  console.log("Entry denied");
}`,

  `let score4 = 88;
if (score4 > 80 && score4 < 100) {
  console.log("Great score");
}`,

  `let rainCheck = false;
let clouds = true;
if (!rainCheck && clouds) {
  console.log("Cloudy but dry");
}`,

  `let warm = true;
let humid = false;
if (warm || humid) {
  console.log("Uncomfortable weather");
}`,

  `let pass = true;
let submit = true;
if (pass && submit) {
  console.log("Task completed");
}`,

  `let internet = false;
let router = true;
if (!internet && router) {
  console.log("Check connection");
}`,

  `let enrolled = true;
let paid = false;
if (enrolled && !paid) {
  console.log("Payment required");
}`,

  `let hungry2 = true;
let foodAvailable = true;
if (hungry2 && foodAvailable) {
  console.log("Time to eat");
}`,

  `let tired = false;
if (!tired) {
  console.log("Keep going");
}`,

  `let distance = 3;
if (distance < 5) {
  console.log("Short distance");
}`,

  `let driver = true;
let license = true;
if (driver && license) {
  console.log("Can drive");
}`,

  `let connected = false;
let wifi = true;
if (!connected && wifi) {
  console.log("Check connection");
}`,

  `let on = true;
let plugged = false;
if (on || plugged) {
  console.log("Powered");
}`,

  `let warmEnough = true;
let windy = false;
if (warmEnough && !windy) {
  console.log("Nice weather");
}`,

  `let paid2 = true;
let delivered = false;
if (paid2 && !delivered) {
  console.log("Waiting for delivery");
}`,

  // NESTED IF STATEMENTS (81–95)
  `let ageNested = {{age}};
if (ageNested > 10) {
  if (ageNested < 20) {
    console.log("Teenager zone");
  }
}`,

  `let x2 = 5;
if (x2 > 0) {
  if (x2 < 10) {
    console.log("Between 1 and 9");
  }
}`,

  `let y2 = 12;
if (y2 > 10) {
  if (y2 < 20) {
    console.log("Between 10 and 19");
  }
}`,

  `let password = "1234";
if (password === "1234") {
  if (password.length === 4) {
    console.log("Access granted");
  }
}`,

  `let countryCheck = "{{country}}";
if (countryCheck === "{{country}}") {
  if (countryCheck.length > 3) {
    console.log("Valid country");
  }
}`,

  `let jobType = "{{job}}";
if (jobType === "{{job}}") {
  if (jobType.length > 2) {
    console.log("Job confirmed");
  }
}`,

  `let speed2 = 100;
if (speed2 > 80) {
  if (speed2 < 120) {
    console.log("Highway speed");
  }
}`,

  `let points2 = 40;
if (points2 > 20) {
  if (points2 < 60) {
    console.log("Moderate points");
  }
}`,

  `let distance2 = 5;
if (distance2 > 0) {
  if (distance2 <= 5) {
    console.log("Short travel");
  }
}`,

  `let light = true;
if (light) {
  if (light === true) {
    console.log("Light is on");
  }
}`,

  `let marks = 85;
if (marks > 70) {
  if (marks < 90) {
    console.log("Good score");
  }
}`,

  `let rain2 = true;
if (rain2) {
  if (rain2 === true) {
    console.log("Rainy weather");
  }
}`,

  `let direction = "north";
if (direction === "north") {
  if (direction.length > 3) {
    console.log("Valid direction");
  }
}`,

  `let password2 = "abcd";
if (password2.length >= 4) {
  if (password2 !== "1234") {
    console.log("Custom password");
  }
}`,

  `let heat = 35;
if (heat > 30) {
  if (heat < 40) {
    console.log("Very warm");
  }
}`,

  // FINAL CHALLENGES (96–100)
  `let scoreFinal = 92;
if (scoreFinal >= 90) {
  console.log("Excellent");
} else if (scoreFinal >= 70) {
  console.log("Good");
} else {
  console.log("Needs work");
}`,

  `let monthFinal = 7;
if (monthFinal === 7) {
  console.log("July");
} else {
  console.log("Not July");
}`,

  `let connectedFinal = false;
if (connectedFinal) {
  console.log("Online");
} else {
  console.log("Offline");
}`,

  `let finished = true;
if (finished) {
  console.log("Completed");
} else {
  console.log("In progress");
}`,

  `let login = true;
if (login) {
  console.log("Welcome back");
} else {
  console.log("Please sign in");
}`,
];
