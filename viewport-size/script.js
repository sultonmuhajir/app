// Variables
const backButton   = document.getElementById("backButton");
const infoButton   = document.getElementById("infoButton");
const mainHome     = document.getElementById("mainHome");
const mainAbout    = document.getElementById("mainAbout");
const unitSelector = document.getElementById("unitSelector");
const result       = document.getElementById("result");

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

function _ConvertToUnit(px, unit) {
   switch (unit) {
      case "px":
         return px;
      case "in":
         return px / 96;
      case "cm":
         return (px / 96) * 2.54;
   }
}

function _UpdateDimensions() {
   let unit = unitSelector.value;
   let width = window.innerWidth;
   let height = window.innerHeight;
   let widthInUnit = _ConvertToUnit(width, unit);
   let heightInUnit = _ConvertToUnit(height, unit);
   if (unit !== "px") {
      widthInUnit = widthInUnit.toFixed(2);
      heightInUnit = heightInUnit.toFixed(2);
   }
   result.innerText = widthInUnit + "  x  " + heightInUnit;
}

// Events
backButton.addEventListener("click", _MainHome);
infoButton.addEventListener("click", _MainAbout);
unitSelector.addEventListener("change", _UpdateDimensions);
window.onload = _UpdateDimensions;
window.onresize = _UpdateDimensions;
