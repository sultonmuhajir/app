let pairs = [];
let currentPair = null;
let isFlipped = false;

document.getElementById("teks").placeholder =
   "Masukkan kata dan terjemahan di sini\nFormat: kata - terjemahan";

function toggleFlip() {
   const teks = document.getElementById("teks");
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

function startGame() {
   const teks = document.getElementById("teks");
   const val = teks.value.trim();
   const errorMessage = document.getElementById("errorMessage");
   if (val.length === 0) return;
   pairs = val.split("\n").map((line) => {
      const parts = line.split(" - ").map((item) => item.trim());
      return parts.length === 2 ? { word: parts[0], translation: parts[1] } : null;
   });
   pairs = pairs.filter((pair) => pair !== null);
   if (pairs.length > 0) {
      errorMessage.classList.add("hidden");
      document.getElementById("inputArea").classList.add("hidden");
      document.getElementById("gameArea").classList.remove("hidden");
      document.getElementById("answerArea").classList.remove("hidden");
      document.getElementById("backToInput").classList.remove("invisible");
      document.getElementById("result").innerHTML = "";
      displayRandomWord();
   } else {
      errorMessage.classList.remove("hidden");
   }
}

function displayRandomWord() {
   if (pairs.length === 0) {
      document.getElementById("answerArea").classList.add("hidden");
      document.getElementById("result").innerText = "Permainan Selesai!";
      document.getElementById("nextButton").classList.add("hidden");
      document.getElementById("restartButton").classList.remove("hidden");
      return;
   }
   const randomIndex = Math.floor(Math.random() * pairs.length);
   currentPair = pairs[randomIndex];
   document.getElementById("questionWord").innerText = currentPair.word;
   document.getElementById("userAnswer").value = "";
   document.getElementById("result").innerHTML = "";
   document.getElementById("nextButton").classList.add("hidden");
   document.getElementById("passButton").classList.remove("hidden");
   document.getElementById("checkButton").classList.remove("hidden");
}

function checkAnswer() {
   const userAnswer = document.getElementById("userAnswer").value.trim();
   const resultElement = document.getElementById("result");
   if (userAnswer.toLowerCase() === currentPair.translation.toLowerCase()) {
      resultElement.innerHTML = "<span class='text-green-500 text-3xl'>✔</span>";
      document.getElementById("nextButton").classList.remove("hidden");
      document.getElementById("passButton").classList.add("hidden");
      document.getElementById("checkButton").classList.add("hidden");
   } else {
      resultElement.innerHTML = "<span class='text-red-500 text-3xl'>✘</span>";
   }
}

function passAnswer() {
   const resultElement = document.getElementById("result");
   resultElement.innerHTML = `<h2>Jawaban yang benar: <span class="font-bold">${currentPair.translation}</span></h2>`;
   document.getElementById("nextButton").classList.remove("hidden");
   document.getElementById("passButton").classList.add("hidden");
   document.getElementById("checkButton").classList.add("hidden");
}

function nextWord() {
   if (currentPair) {
      const userAnswer = document.getElementById("userAnswer").value.trim().toLowerCase();
      if (userAnswer === currentPair.translation.toLowerCase()) {
         pairs = pairs.filter((pair) => pair.word !== currentPair.word);
      }
   }
   displayRandomWord();
}

function backToInput() {
   document.getElementById("inputArea").classList.remove("hidden");
   document.getElementById("gameArea").classList.add("hidden");
   document.getElementById("backToInput").classList.add("invisible");
}

function restartGame() {
   document.getElementById("restartButton").classList.add("hidden");
   backToInput();
}
