// Variables
const backButton   = document.getElementById("backButton");
const infoButton   = document.getElementById("infoButton");
const mainHome     = document.getElementById("mainHome");
const mainAbout    = document.getElementById("mainAbout");
const caseSelector = document.getElementById("caseSelector");
const copyButton   = document.getElementById("copyButton");
const teks         = document.getElementById("teks");

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

function _ChangeCase() {
   const caseType = this.value;
   let val = teks.value;
   switch (caseType) {
      case "upper":
         val = val.toUpperCase();
         break;
      case "lower":
         val = val.toLowerCase();
         break;
      case "capitalize":
         val = val.toLowerCase().replace(/(^\s*\w|\s\w|\n\w)/g, (_) => _.toUpperCase());
         break;
      case "sentence":
         val = val.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w|\n\s*\w)/g, (_) => _.toUpperCase());
         break;
   }
   teks.value = val;
}

function _CopyText() {
   teks.select();
   teks.setSelectionRange(0, 99999);
   document.execCommand("copy");
   copyButton.classList.remove("fa-regular", "fa-copy");
   copyButton.classList.add("fa-solid", "fa-check");
   setTimeout(function () {
      copyButton.classList.add("fa-regular", "fa-copy");
      copyButton.classList.remove("fa-solid", "fa-check");
   }, 2000);
}

// Events
backButton.addEventListener("click", _MainHome);
infoButton.addEventListener("click", _MainAbout);
caseSelector.addEventListener("change", _ChangeCase);
copyButton.addEventListener("click", _CopyText);
teks.addEventListener("input", () => (caseSelector.value = ""));
