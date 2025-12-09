//---- IMPORT LEVEL FILES (1–50) -----

import { level1 } from "./levels/level1.js";
import { level2 } from "./levels/level2.js";
import { level3 } from "./levels/level3.js";
import { level4 } from "./levels/level4.js";
import { level5 } from "./levels/level5.js";
import { level6 } from "./levels/level6.js";
import { level7 } from "./levels/level7.js";
import { level8 } from "./levels/level8.js";
import { level9 } from "./levels/level9.js";
import { level10 } from "./levels/level10.js";
import { level11 } from "./levels/level11.js";
import { level12 } from "./levels/level12.js";
import { level13 } from "./levels/level13.js";
import { level14 } from "./levels/level14.js";
import { level15 } from "./levels/level15.js";
import { level16 } from "./levels/level16.js";
import { level17 } from "./levels/level17.js";
import { level18 } from "./levels/level18.js";
import { level19 } from "./levels/level19.js";
import { level20 } from "./levels/level20.js";
import { level21 } from "./levels/level21.js";
import { level22 } from "./levels/level22.js";
import { level23 } from "./levels/level23.js";
import { level24 } from "./levels/level24.js";
import { level25 } from "./levels/level25.js";
import { level26 } from "./levels/level26.js";
import { level27 } from "./levels/level27.js";
import { level28 } from "./levels/level28.js";
import { level29 } from "./levels/level29.js";
import { level30 } from "./levels/level30.js";
import { level31 } from "./levels/level31.js";
import { level32 } from "./levels/level32.js";
import { level33 } from "./levels/level33.js";
import { level34 } from "./levels/level34.js";
import { level35 } from "./levels/level35.js";
import { level36 } from "./levels/level36.js";
import { level37 } from "./levels/level37.js";
import { level38 } from "./levels/level38.js";
import { level39 } from "./levels/level39.js";
import { level40 } from "./levels/level40.js";
import { level41 } from "./levels/level41.js";
import { level42 } from "./levels/level42.js";
import { level43 } from "./levels/level43.js";
import { level44 } from "./levels/level44.js";
import { level45 } from "./levels/level45.js";
import { level46 } from "./levels/level46.js";
import { level47 } from "./levels/level47.js";
import { level48 } from "./levels/level48.js";
import { level49 } from "./levels/level49.js";
import { level50 } from "./levels/level50.js";

//----- RANDOM DATA -----

const names = [
  "Aarav",
  "Sophia",
  "Noah",
  "Olivia",
  "Mateo",
  "Aisha",
  "Liam",
  "Mia",
  "Hiroshi",
  "Yuna",
  "Lucas",
  "Emily",
];
const cities = [
  "Tokyo",
  "New York",
  "London",
  "Dubai",
  "Singapore",
  "Berlin",
  "Sydney",
  "Barcelona",
  "Zurich",
  "Copenhagen",
];
const countries = [
  "Switzerland",
  "Germany",
  "USA",
  "Canada",
  "Australia",
  "Japan",
  "India",
  "Brazil",
  "Mexico",
];
const jobs = [
  "developer",
  "pilot",
  "doctor",
  "engineer",
  "teacher",
  "designer",
  "chef",
  "lawyer",
];
const ages = Array.from({ length: 30 }, (_, i) => 18 + i);

const r = (arr) => arr[Math.floor(Math.random() * arr.length)];

const randomName = () => r(names);
const randomCity = () => r(cities);
const randomCountry = () => r(countries);
const randomJob = () => r(jobs);
const randomAge = () => r(ages);

//----- MERGE LEVELS & APPLY RANDOM DATA -----

let allExercises = [
  ...level1,
  ...level2,
  ...level3,
  ...level4,
  ...level5,
  ...level6,
  ...level7,
  ...level8,
  ...level9,
  ...level10,
  ...level11,
  ...level12,
  ...level13,
  ...level14,
  ...level15,
  ...level16,
  ...level17,
  ...level18,
  ...level19,
  ...level20,
  ...level21,
  ...level22,
  ...level23,
  ...level24,
  ...level25,
  ...level26,
  ...level27,
  ...level28,
  ...level29,
  ...level30,
  ...level31,
  ...level32,
  ...level33,
  ...level34,
  ...level35,
  ...level36,
  ...level37,
  ...level38,
  ...level39,
  ...level40,
  ...level41,
  ...level42,
  ...level43,
  ...level44,
  ...level45,
  ...level46,
  ...level47,
  ...level48,
  ...level49,
  ...level50,
];

allExercises = allExercises.map((code) =>
  code
    .replace(/{{name}}/g, randomName())
    .replace(/{{city}}/g, randomCity())
    .replace(/{{country}}/g, randomCountry())
    .replace(/{{job}}/g, randomJob())
    .replace(/{{age}}/g, randomAge())
);

//----- PROGRESS -----

let index = Number(localStorage.getItem("exercise_progress")) || 0;

if (index >= allExercises.length) {
  index = 0;
  localStorage.setItem("exercise_progress", "0");
}

//----- DOM ELEMENTS -----

const codePrompt = document.getElementById("codePrompt");
const inputBox = document.getElementById("userInput");
const result = document.getElementById("result");
const progressFill = document.querySelector(".progress-fill");
const levelLabel = document.querySelector(".level-label");
const levelMenu = document.getElementById("levelMenu");
const burger = document.getElementById("hamburger");
const autoNextToggle = document.getElementById("autoNextToggle");

//----- LEVEL METADATA -----

const levelLengths = [
  level1.length,
  level2.length,
  level3.length,
  level4.length,
  level5.length,
  level6.length,
  level7.length,
  level8.length,
  level9.length,
  level10.length,
  level11.length,
  level12.length,
  level13.length,
  level14.length,
  level15.length,
  level16.length,
  level17.length,
  level18.length,
  level19.length,
  level20.length,
  level21.length,
  level22.length,
  level23.length,
  level24.length,
  level25.length,
  level26.length,
  level27.length,
  level28.length,
  level29.length,
  level30.length,
  level31.length,
  level32.length,
  level33.length,
  level34.length,
  level35.length,
  level36.length,
  level37.length,
  level38.length,
  level39.length,
  level40.length,
  level41.length,
  level42.length,
  level43.length,
  level44.length,
  level45.length,
  level46.length,
  level47.length,
  level48.length,
  level49.length,
  level50.length,
];

const TOTAL_LEVELS = 50;

const levelInfo = Array.from({ length: 50 }, (_, i) => ({
  name: `LEVEL ${i + 1}`,
  tag: i % 3 === 0 ? "Repetition" : i % 3 === 1 ? "Practice" : "Logic",
}));

function getCurrentLevelIndex() {
  let sum = 0;
  for (let i = 0; i < levelLengths.length; i++) {
    sum += levelLengths[i];
    if (index < sum) return i;
  }
  return 49;
}

//----- UI COMPONENTS -----

function buildLevelMenu() {
  const current = getCurrentLevelIndex();
  let html = "";

  levelInfo.forEach((lvl, i) => {
    const cls =
      i < current
        ? "completed-level"
        : i === current
        ? "current-level"
        : "future-level";

    html += `
      <div class="level-item ${cls}">
        <div class="level-title">${lvl.name} — ${lvl.tag}</div>
      </div>
    `;
  });

  levelMenu.innerHTML = html;
}

function updateLevelLabel() {
  const lvl = getCurrentLevelIndex();
  levelLabel.textContent =
    `${levelInfo[lvl].name} — ${levelInfo[lvl].tag}`.toUpperCase();
}

function updateProgressBar() {
  const lvl = getCurrentLevelIndex();
  const completedBefore = levelLengths.slice(0, lvl).reduce((a, b) => a + b, 0);
  const size = levelLengths[lvl];
  const inside = index - completedBefore;

  let percent = Math.floor((inside / size) * 100);
  percent = Math.floor(percent / 10) * 10;

  progressFill.style.width = percent + "%";
}

//----- NORMALIZE INPUT -----

function normalize(str) {
  return str
    .replace(/\r/g, "")
    .replace(/\s+$/g, "")
    .split("\n")
    .map((line) => line.trimStart())
    .join("\n")
    .trim();
}

//----- ERROR HIGHLIGHT -----

function highlightError(userRaw, expectedRaw) {
  const u = userRaw.replace(/\r/g, "");
  const e = expectedRaw.replace(/\r/g, "");

  let i = 0;
  while (i < u.length && i < e.length && u[i] === e[i]) i++;

  if (i < u.length && i < e.length)
    return (
      u.slice(0, i) +
      `<span class="error-highlight">${u[i]}</span>` +
      u.slice(i + 1)
    );

  if (u.length > e.length)
    return e + `<span class="error-highlight">${u.slice(e.length)}</span>`;

  if (e.length > u.length)
    return u + `<span class="error-highlight">${e[u.length]}</span>`;

  return u;
}

//----- SKIP TO LEVEL (EASTER EGG) -----

function tryLevelSkip(rawText) {
  const text = rawText.trim().toLowerCase();
  const match = text.match(/skip\s+to\s+level\s+(\d+)/);

  if (!match) return false;

  const levelNumber = Number(match[1]);

  if (levelNumber < 1 || levelNumber > TOTAL_LEVELS) {
    alert("That level does not exist.");
    return true;
  }

  // Calculate REAL index
  let newIndex = 0;
  for (let i = 0; i < levelNumber - 1; i++) {
    newIndex += levelLengths[i];
  }

  index = newIndex;
  saveProgress();
  loadExercise();

  inputBox.value = "";
  result.innerHTML = "";

  return true;
}

//----- LOAD EXERCISE -----

function loadExercise() {
  codePrompt.textContent = allExercises[index] || "";
  setTimeout(() => Prism.highlightElement(codePrompt), 0);

  result.innerHTML = "";
  updateLevelLabel();
  updateProgressBar();
  buildLevelMenu();
}

loadExercise();

//----- SAVE PROGRESS -----

function saveProgress() {
  localStorage.setItem("exercise_progress", index);
}

//----- GO TO NEXT -----

function goToNext() {
  index++;
  saveProgress();
  inputBox.value = "";
  result.innerHTML = "";

  if (index >= allExercises.length) {
    index = 0;
    saveProgress();
  }

  loadExercise();
  inputBox.focus();
}

//----- CHECK BUTTON -----

document.getElementById("checkBtn").onclick = () => {
  const userInput = normalize(inputBox.value);

  if (tryLevelSkip(userInput)) return;

  const expected = normalize(allExercises[index]);

  if (userInput === expected) {
    goToNext();
    return;
  }

  result.innerHTML = `
    <strong>Your code:</strong>
    <pre class="code-block"><code>${highlightError(
      userInput,
      expected
    )}</code></pre>

    <strong>Expected:</strong>
    <pre class="code-block"><code>${expected}</code></pre>
  `;
};

//----- AUTO-NEXT -----

inputBox.addEventListener("input", () => {
  if (!autoNextToggle.checked) return;

  const userInput = normalize(inputBox.value);

  if (tryLevelSkip(userInput)) return;

  const expected = normalize(allExercises[index]);

  if (userInput === expected) goToNext();
});

//----- HAMBURGER MENU -----

burger.onclick = () => {
  levelMenu.classList.toggle("open");
};

inputBox.focus();

//----- DEBUG -----
window.__debug = {
  allExercises,
  levelLengths,
  index,
};
