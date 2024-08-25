// Variables
const backButton = document.getElementById("backButton");
const infoButton = document.getElementById("infoButton");
const mainHome   = document.getElementById("mainHome");
const mainAbout  = document.getElementById("mainAbout");
const teks       = document.getElementById("teks");
const result     = document.getElementById("result");
const karakter   = document.getElementById("karakter");
const kata       = document.getElementById("kata");
const kalimat    = document.getElementById("kalimat");

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

function _TextCounter() {
   let val = teks.value;
   if (val == "") {
      result.classList.add("invisible");
   } else {
      let _karakter = val.length;
      let _kata = val
         .replace(/\n/g, " ")
         .split(" ")
         .filter((i) => i !== "").length;
      let _kalimat = val
         .replace(/\n/g, ".")
         .replace(/\s/g, "")
         .split(".")
         .filter((i) => i !== "").length;
      result.classList.remove("invisible");
      karakter.innerHTML = _karakter;
      kata.innerHTML = _kata;
      kalimat.innerHTML = _kalimat;
   }
}

// Events
backButton.addEventListener("click", _MainHome);
infoButton.addEventListener("click", _MainAbout);
teks.addEventListener("input", _TextCounter);
