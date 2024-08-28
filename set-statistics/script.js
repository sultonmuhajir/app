// Variables
const backButton         = document.getElementById("backButton");
const infoButton         = document.getElementById("infoButton");
const mainInput          = document.getElementById("mainInput");
const mainOutput         = document.getElementById("mainOutput");
const mainAbout          = document.getElementById("mainAbout");

const inputSetA          = document.getElementById("inputSetA");
const inputSetB          = document.getElementById("inputSetB");
const inputCardinalityA  = document.getElementById("inputCardinalityA");
const inputCardinalityB  = document.getElementById("inputCardinalityB");
const calculateButton    = document.getElementById("calculateButton");
const clearButton        = document.getElementById("clearButton");

const outputCardinalityA = document.getElementById("outputCardinalityA");
const outputCardinalityB = document.getElementById("outputCardinalityB");
const outputIntersection = document.getElementById("outputIntersection");
const outputDifferenceA  = document.getElementById("outputDifferenceA");
const outputDifferenceB  = document.getElementById("outputDifferenceB");
const countIntersection  = document.getElementById("countIntersection");
const countDifferenceA   = document.getElementById("countDifferenceA");
const countDifferenceB   = document.getElementById("countDifferenceB");

// Functions
function _MainInput() {
   backButton.classList.add("invisible");
   infoButton.classList.remove("invisible");
   mainInput.classList.remove("hidden");
   mainOutput.classList.add("hidden");
   mainAbout.classList.add("hidden");
}

function _MainAbout() {
   backButton.classList.remove("invisible");
   infoButton.classList.add("invisible");
   mainInput.classList.add("hidden");
   mainOutput.classList.add("hidden");
   mainAbout.classList.remove("hidden");
}

function _ClearTextareas() {
   inputSetA.value = "";
   inputSetB.value = "";
   _UpdateCardinality();
}

function _UpdateCardinality() {
   let setA = inputSetA.value
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item !== "");
   let setB = inputSetB.value
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item !== "");
   let cardinalityA = setA.length;
   let cardinalityB = setB.length;

   inputCardinalityA.textContent = `${cardinalityA}`;
   inputCardinalityB.textContent = `${cardinalityB}`;
   calculateButton.disabled      = cardinalityA === 0 || cardinalityB === 0;
}

function _CalculateStatistics() {
   let setA = inputSetA.value
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item !== "");
   let setB = inputSetB.value
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item !== "");
   let cardinalityA = setA.length;
   let cardinalityB = setB.length;
   let intersection = setA.filter((value) => setB.includes(value));
   let differenceA  = setA.filter((value) => !setB.includes(value));
   let differenceB  = setB.filter((value) => !setA.includes(value));

   outputCardinalityA.textContent = cardinalityA;
   outputCardinalityB.textContent = cardinalityB;
   outputIntersection.value       = intersection.join("\n");
   outputDifferenceA.value        = differenceA.join("\n");
   outputDifferenceB.value        = differenceB.join("\n");
   countIntersection.textContent  = `${intersection.length}`;
   countDifferenceA.textContent   = `${differenceA.length}`;
   countDifferenceB.textContent   = `${differenceB.length}`;
   backButton.classList.remove("invisible");
   mainInput.classList.add("hidden");
   mainOutput.classList.remove("hidden");
}

// Events
backButton.addEventListener("click", _MainInput);
infoButton.addEventListener("click", _MainAbout);
inputSetA.addEventListener("input", _UpdateCardinality);
inputSetB.addEventListener("input", _UpdateCardinality);
calculateButton.addEventListener("click", _CalculateStatistics);
clearButton.addEventListener("click", _ClearTextareas);
