// Variables
const backButton = document.getElementById("backButton");
const infoButton = document.getElementById("infoButton");
const mainHome   = document.getElementById("mainHome");
const mainAbout  = document.getElementById("mainAbout");

const metode     = document.getElementById("metode");
const teks       = document.getElementById("teks");
const result     = document.getElementById("result");
const lockToogle = document.getElementById("lock-toogle");
const lockButton = document.getElementById("lock-button");
const hapus      = document.getElementById("hapus");
const loading    = document.getElementById("loading");
const play       = document.getElementById("play");
const stop       = document.getElementById("stop");

// Functions
function _MainHome() {
   backButton.classList.add("invisible");
   infoButton.classList.remove("invisible");
   mainHome.classList.remove("hidden");
   mainAbout.classList.add("hidden");
}

function _MainAbout() {
   backButton.classList.remove("invisible");
   infoButton.classList.add("invisible");
   mainHome.classList.add("hidden");
   mainAbout.classList.remove("hidden");
}

function _LockButton() {
   let text = teks.value;
   let mArray = text.split("\n");
   if (mArray.length == 1) {
      result.innerHTML = "Format Salah";
   } else {
      result.innerHTML = "";
      metode.toggleAttribute("disabled");
      teks.toggleAttribute("disabled");
      lockToogle.classList.toggle("fa-lock");
      lockToogle.classList.toggle("fa-lock-open");
   }
}

function _Hapus() {
   teks.value = "";
   metode.disabled = false;
   teks.disabled = false;
   result.innerHTML = "";
   lockToogle.classList.remove("fa-lock-open");
   lockToogle.classList.add("fa-lock");
}

function _Play() {
   if (teks.disabled === false) {
      result.innerHTML = "Lock";
   } else {
      result.innerHTML = "";
      play.classList.add("hidden");
      stop.classList.remove("hidden");
      loading.classList.remove("hidden");
      lockButton.classList.add("hidden");
      hapus.classList.add("hidden");
   }
}

function _Stop() {
   play.classList.remove("hidden");
   stop.classList.add("hidden");
   loading.classList.add("hidden");
   lockButton.classList.remove("hidden");
   hapus.classList.remove("hidden");
}

function _StopNormal() {
   let text = teks.value;
   let mArray = text.split("\n").filter((el) => el != "");
   const random = mArray[Math.floor(Math.random() * mArray.length)];
   result.innerHTML = random;
   _Stop();
}

function _StopElim() {
   let text = teks.value;
   let mArray = text.split("\n").filter((el) => el != "");
   const random = mArray[Math.floor(Math.random() * mArray.length)];
   result.innerHTML = random;
   if (mArray.length == 1) {
      text = teks.value = text.split(random).join("");
      metode.disabled = false;
      teks.disabled = false;
      lockToogle.classList.remove("fa-lock-open");
      lockToogle.classList.add("fa-lock");
   } else if (random == mArray[0]) {
      text = teks.value = text.split(`${random}\n`).join("");
   } else {
      text = teks.value = text.split(`\n${random}`).join("");
   }
   _Stop();
}

// Events
backButton.addEventListener("click", _MainHome);
infoButton.addEventListener("click", _MainAbout);
lockButton.addEventListener("click", _LockButton);
play.addEventListener("click", _Play);
hapus.addEventListener("click", _Hapus);
metode.addEventListener("change", () => (result.innerHTML = ""));
teks.addEventListener("input", () => (result.innerHTML = ""));
stop.addEventListener("click", function () {
   metode.value == "normal" ? _StopNormal() : _StopElim();
});
