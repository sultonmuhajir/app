// Variables
const backButton       = document.getElementById("backButton");
const infoButton       = document.getElementById("infoButton");
const mainInput        = document.getElementById("mainInput");
const mainGame         = document.getElementById("mainGame");
const mainAbout        = document.getElementById("mainAbout");

const teks             = document.getElementById("teks");
const toggleFlipButton = document.getElementById("toggleFlipButton");
const errorMessage     = document.getElementById("errorMessage");
const startButton      = document.getElementById("startButton");

const checkButton      = document.getElementById("checkButton");
const passButton       = document.getElementById("passButton");
const nextButton       = document.getElementById("nextButton");
const restartButton    = document.getElementById("restartButton");
const answerArea       = document.getElementById("answerArea");
const result           = document.getElementById("result");
const questionWord     = document.getElementById("questionWord");
const userAnswer       = document.getElementById("userAnswer");

let pairs       = [];
let currentPair = null;
let isFlipped   = false;

teks.placeholder = "Masukkan kata dan terjemahan di sini\nFormat: kata - terjemahan";

// Functions
function _MainInput() {
   backButton.classList.add("invisible");
   infoButton.classList.remove("invisible");
   mainInput.classList.remove("hidden");
   mainGame.classList.add("hidden");
   mainAbout.classList.add("hidden");
}

function _MainAbout() {
   backButton.classList.remove("invisible");
   infoButton.classList.add("invisible");
   mainInput.classList.add("hidden");
   mainGame.classList.add("hidden");
   mainAbout.classList.remove("hidden");
}

function _ToggleFlip() {
   const lines = teks.value.trim().split("\n");
   const flippedLines = lines.map((line) => {
      const parts = line.split(" - ");
      if (parts.length === 2) {
         return isFlipped
            ? `${parts[1].trim()} - ${parts[0].trim()}`
            : `${parts[1].trim()} - ${parts[0].trim()}`;
      }
      return line;
   });
   teks.value = flippedLines.join("\n");
   isFlipped = !isFlipped;
}

function _StartGame() {
   const val = teks.value.trim();
   if (val.length === 0) return;
   pairs = val.split("\n").map((line) => {
      const parts = line.split(" - ").map((item) => item.trim());
      return parts.length === 2 ? { word: parts[0], translation: parts[1] } : null;
   });
   pairs = pairs.filter((pair) => pair !== null);
   if (pairs.length > 0) {
      errorMessage.classList.add("hidden");
      mainInput.classList.add("hidden");
      mainGame.classList.remove("hidden");
      answerArea.classList.remove("hidden");
      backButton.classList.remove("invisible");
      result.innerHTML = "";
      _DisplayRandomWord();
   } else {
      errorMessage.classList.remove("hidden");
   }
}

function _DisplayRandomWord() {
   if (pairs.length === 0) {
      answerArea.classList.add("hidden");
      result.innerText = "Permainan Selesai!";
      nextButton.classList.add("hidden");
      restartButton.classList.remove("hidden");
      return;
   }
   const randomIndex = Math.floor(Math.random() * pairs.length);
   currentPair = pairs[randomIndex];
   questionWord.innerText = currentPair.word;
   userAnswer.value = "";
   result.innerHTML = "";
   nextButton.classList.add("hidden");
   passButton.classList.remove("hidden");
   checkButton.classList.remove("hidden");
}

function _CheckAnswer() {
   const answer = userAnswer.value.trim();
   if (answer.toLowerCase() === currentPair.translation.toLowerCase()) {
      result.innerHTML = "<span class='text-green-500 text-3xl'>✔</span>";
      nextButton.classList.remove("hidden");
      passButton.classList.add("hidden");
      checkButton.classList.add("hidden");
   } else {
      result.innerHTML = "<span class='text-red-500 text-3xl'>✘</span>";
   }
}

function _PassAnswer() {
   result.innerHTML = `<h2>Jawaban yang benar: <span class="font-bold">${currentPair.translation}</span></h2>`;
   nextButton.classList.remove("hidden");
   passButton.classList.add("hidden");
   checkButton.classList.add("hidden");
}

function _NextWord() {
   if (currentPair) {
      const answer = userAnswer.value.trim().toLowerCase();
      if (answer === currentPair.translation.toLowerCase()) {
         pairs = pairs.filter((pair) => pair.word !== currentPair.word);
      }
   }
   _DisplayRandomWord();
}

function _RestartGame() {
   restartButton.classList.add("hidden");
   _MainInput();
}

// Events
backButton.addEventListener("click", _MainInput);
infoButton.addEventListener("click", _MainAbout);
toggleFlipButton.addEventListener("click", _ToggleFlip);
startButton.addEventListener("click", _StartGame);
checkButton.addEventListener("click", _CheckAnswer);
passButton.addEventListener("click", _PassAnswer);
nextButton.addEventListener("click", _NextWord);
restartButton.addEventListener("click", _RestartGame);
