// ==========================================================
// IMPORT LEVEL FILES
// ==========================================================
import { level1 } from "./levels/level1.js";
import { level2 } from "./levels/level2.js";
import { level3 } from "./levels/level3.js";

// ==========================================================
// RANDOM DATA POOLS + HELPERS
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

function randomName() {
  return r(names);
}
function randomCity() {
  return r(cities);
}
function randomCountry() {
  return r(countries);
}
function randomJob() {
  return r(jobs);
}
function randomAge() {
  return r(ages);
}

// ==========================================================
// COMBINE ALL LEVELS INTO ONE ARRAY
// ==========================================================
let allExercises = [...level1, ...level2, ...level3];

// ==========================================================
// APPLY RANDOM VALUES INTO TEMPLATES
// ==========================================================
allExercises = allExercises.map((snippet) =>
  snippet
    .replace(/{{name}}/g, randomName())
    .replace(/{{city}}/g, randomCity())
    .replace(/{{country}}/g, randomCountry())
    .replace(/{{job}}/g, randomJob())
    .replace(/{{age}}/g, randomAge())
);

// ==========================================================
// LOAD PROGRESS INDEX
// ==========================================================
let index = Number(localStorage.getItem("exercise_progress")) || 0;

// Safety fix — never let player jump to Level 4+
if (index >= allExercises.length) {
  index = 0;
  localStorage.setItem("exercise_progress", 0);
}

// ==========================================================
// UI ELEMENTS
// ==========================================================
const codePrompt = document.getElementById("codePrompt");
const inputBox = document.getElementById("userInput");
const progressFill = document.querySelector(".progress-fill");
const result = document.getElementById("result");
const levelLabel = document.querySelector(".level-label");
const levelMenu = document.getElementById("levelMenu");
const burger = document.getElementById("hamburger");

// ==========================================================
// LEVEL NAME + TAG LIST FOR SIDEBAR
// ==========================================================
const levelInfo = [
  { name: "Level 1", tag: "Repetition" },
  { name: "Level 2", tag: "Practice" },
  { name: "Level 3", tag: "Logic" },

  // Placeholder Levels (4–50)
  ...Array.from({ length: 47 }, (_, i) => ({
    name: `Level ${i + 4}`,
    tag: i % 3 === 0 ? "Practice" : i % 3 === 1 ? "Logic" : "Repetition",
  })),
];

// ==========================================================
// DETERMINE CURRENT LEVEL INDEX
// ==========================================================
function getCurrentLevelIndex() {
  if (index < level1.length) return 0;
  if (index < level1.length + level2.length) return 1;
  if (index < level1.length + level2.length + level3.length) return 2;
  return 3; // placeholder level
}

// ==========================================================
// BUILD SIDEBAR MENU
// ==========================================================
function buildLevelMenu() {
  const current = getCurrentLevelIndex();
  let html = "";

  levelInfo.forEach((lvl, i) => {
    let cls =
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
// UPDATE PROGRESS BAR
// ==========================================================
function updateProgressBar() {
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
// LOAD EXERCISE
// ==========================================================
function loadExercise() {
  const code = allExercises[index] || "";
  codePrompt.textContent = code;

  Prism.highlightElement(codePrompt);

  result.innerHTML = "";
  updateLevelLabel();
  updateProgressBar();
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
// NORMALIZE INPUT
// ==========================================================
function normalize(str) {
  return str
    .replace(/\r/g, "")
    .replace(/\s+$/g, "")
    .split("\n")
    .map((l) => l.trimStart())
    .join("\n")
    .trim();
}

// ==========================================================
// HIGHLIGHT FIRST ERROR
// ==========================================================
function highlightError(userRaw, expectedRaw) {
  const user = userRaw.replace(/\r/g, "");
  const expected = expectedRaw.replace(/\r/g, "");

  let i = 0;
  while (i < user.length && i < expected.length && user[i] === expected[i]) i++;

  if (i < user.length && i < expected.length) {
    return (
      user.slice(0, i) +
      `<span class="error-highlight">${user[i]}</span>` +
      user.slice(i + 1)
    );
  }

  if (user.length > expected.length) {
    return (
      expected +
      `<span class="error-highlight">${user.slice(expected.length)}</span>`
    );
  }

  if (expected.length > user.length) {
    return (
      user + `<span class="error-highlight">${expected[user.length]}</span>`
    );
  }

  return user;
}

// ==========================================================
// CHECK ANSWER BUTTON
// ==========================================================
document.getElementById("checkBtn").onclick = () => {
  const userInput = normalize(inputBox.value);
  const expected = normalize(allExercises[index]);

  if (userInput === expected) {
    index++;
    saveProgress();
    inputBox.value = "";
    result.innerHTML = "";

    // Finished ALL available levels
    if (index >= allExercises.length) {
      result.innerHTML = "<strong>🎉 All levels complete!</strong>";
      return;
    }

    loadExercise();
    inputBox.focus();
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

  inputBox.focus();
};

// ==========================================================
// HAMBURGER MENU TOGGLE
// ==========================================================
burger.onclick = () => {
  levelMenu.classList.toggle("open");
};

// Focus cursor immediately
inputBox.focus();
