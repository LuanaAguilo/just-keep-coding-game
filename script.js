// ==========================================================
// IMPORT LEVEL FILES
// ==========================================================
import { level1 } from "./levels/level1.js";
import { level2 } from "./levels/level2.js";
import { level3 } from "./levels/level3.js";

// ==========================================================
// RANDOM DATA GENERATORS
// ==========================================================
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
  "Muhammad",
  "Fatima",
  "Lucas",
  "Emily",
  "Zara",
  "Elias",
  "Amara",
  "Arjun",
  "Sofia",
  "Leo",
  "Chloe",
  "Alexander",
  "Noura",
  "Diego",
  "Isabella",
  "Jonas",
  "Camila",
  "Andrei",
  "Sara",
  "David",
];

const cities = [
  "Tokyo",
  "New York",
  "London",
  "Dubai",
  "Singapore",
  "Berlin",
  "Riyadh",
  "Sydney",
  "Barcelona",
  "Seoul",
  "Vienna",
  "Mexico City",
  "Mumbai",
  "Cairo",
  "Istanbul",
  "Bangkok",
  "Johannesburg",
  "Buenos Aires",
  "Amsterdam",
  "Copenhagen",
  "Zurich",
];

const countries = [
  "Switzerland",
  "Germany",
  "Saudi Arabia",
  "Morocco",
  "USA",
  "Canada",
  "Australia",
  "Brazil",
  "Mexico",
  "Argentina",
  "Colombia",
  "Chile",
  "Japan",
  "India",
  "China",
  "South Korea",
  "Indonesia",
  "Philippines",
  "South Africa",
  "Nigeria",
  "Kenya",
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
  "architect",
  "scientist",
  "photographer",
  "musician",
  "writer",
  "electrician",
  "mechanic",
  "entrepreneur",
  "artist",
  "paramedic",
  "nurse",
];

const ages = Array.from({ length: 30 }, (_, i) => 18 + i);
const r = (arr) => arr[Math.floor(Math.random() * arr.length)];

const randomName = () => r(names);
const randomCity = () => r(cities);
const randomCountry = () => r(countries);
const randomJob = () => r(jobs);
const randomAge = () => r(ages);

// ==========================================================
// MERGE + RANDOMIZE EXERCISES
// ==========================================================
let allExercises = [...level1, ...level2, ...level3];

allExercises = allExercises.map((code) =>
  code
    .replace(/{{name}}/g, randomName())
    .replace(/{{city}}/g, randomCity())
    .replace(/{{country}}/g, randomCountry())
    .replace(/{{job}}/g, randomJob())
    .replace(/{{age}}/g, randomAge())
);

// ==========================================================
// PROGRESS INDEX
// ==========================================================
let index = Number(localStorage.getItem("exercise_progress")) || 0;

if (index >= allExercises.length) {
  index = 0;
  localStorage.setItem("exercise_progress", "0");
}

// ==========================================================
// ELEMENT REFERENCES
// ==========================================================
const codePrompt = document.getElementById("codePrompt");
const inputBox = document.getElementById("userInput");
const result = document.getElementById("result");
const progressFill = document.querySelector(".progress-fill"); // FIXED
const levelLabel = document.querySelector(".level-label");
const levelMenu = document.getElementById("levelMenu");
const burger = document.getElementById("hamburger");
const autoNextToggle = document.getElementById("autoNextToggle");

// ==========================================================
// LEVEL INFORMATION
// ==========================================================
const levelInfo = [
  { name: "Level 1", tag: "Repetition" },
  { name: "Level 2", tag: "Practice" },
  { name: "Level 3", tag: "Logic" },
  ...Array.from({ length: 47 }, (_, i) => ({
    name: `Level ${i + 4}`,
    tag: i % 3 === 0 ? "Practice" : i % 3 === 1 ? "Logic" : "Repetition",
  })),
];

function getCurrentLevelIndex() {
  if (index < level1.length) return 0;
  if (index < level1.length + level2.length) return 1;
  if (index < level1.length + level2.length + level3.length) return 2;
  return 3;
}

// ==========================================================
// BUILD SIDEBAR
// ==========================================================
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
      </div>`;
  });

  levelMenu.innerHTML = html;
}

// ==========================================================
// UPDATE LEVEL LABEL
// ==========================================================
function updateLevelLabel() {
  const lvl = getCurrentLevelIndex();
  levelLabel.textContent = `${levelInfo[lvl].name.toUpperCase()} — ${levelInfo[
    lvl
  ].tag.toUpperCase()}`;
}

// ==========================================================
// PROGRESS BAR (WORKING AGAIN)
// ==========================================================
function updateProgressBar() {
  if (!progressFill) return; // SAFETY FIX

  const size1 = level1.length;
  const size2 = level2.length;
  const size3 = level3.length;

  const lvl = getCurrentLevelIndex();
  const start = lvl === 0 ? 0 : lvl === 1 ? size1 : size1 + size2;
  const levelSize = lvl === 0 ? size1 : lvl === 1 ? size2 : size3;

  let progress = index - start;
  let percent = Math.floor((progress / levelSize) * 100);
  percent = Math.floor(percent / 10) * 10;

  progressFill.style.width = percent + "%";
}

// ==========================================================
// NORMALIZE INPUT
// ==========================================================
function normalize(str) {
  return str
    .replace(/\r/g, "")
    .replace(/\s+$/g, "")
    .split("\n")
    .map((line) => line.trimStart())
    .join("\n")
    .trim();
}

// ==========================================================
// ERROR HIGHLIGHTING
// ==========================================================
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

// ==========================================================
// LOAD EXERCISE
// ==========================================================
function loadExercise() {
  codePrompt.textContent = allExercises[index] || "";
  setTimeout(() => Prism.highlightElement(codePrompt), 0);

  result.innerHTML = "";
  updateLevelLabel();
  updateProgressBar(); // FIXED
  buildLevelMenu();
}

loadExercise();

// ==========================================================
// SAVE PROGRESS
// ==========================================================
function saveProgress() {
  localStorage.setItem("exercise_progress", index);
}

// ==========================================================
// CHECK ANSWER — FIXED AUTO-NEXT LOGIC
// ==========================================================
document.getElementById("checkBtn").onclick = () => {
  const userInput = normalize(inputBox.value);
  const expected = normalize(allExercises[index]);

  if (userInput === expected) {
    index++;
    saveProgress();
    inputBox.value = "";
    result.innerHTML = "";

    if (index >= allExercises.length) {
      index = 0;
      saveProgress();
    }

    // This FIXES Auto-Next:
    if (autoNextToggle.checked) {
      loadExercise();
      inputBox.focus();
      return;
    }

    // Normal mode: still load the next exercise
    loadExercise();
    inputBox.focus();
    return;
  }

  // Incorrect
  result.innerHTML = `
    <strong>Your code:</strong>
    <pre class="code-block"><code>${highlightError(
      userInput,
      expected
    )}</code></pre>
    <strong>Expected:</strong>
    <pre class="code-block"><code>${expected}</code></pre>
  `;

  inputBox.focus();
};

// ==========================================================
// HAMBURGER MENU
// ==========================================================
burger.onclick = () => {
  levelMenu.classList.toggle("open");
};

inputBox.focus();
