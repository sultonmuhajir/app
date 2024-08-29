// Variables
const backButton   = document.getElementById("backButton");
const infoButton   = document.getElementById("infoButton");
const mainHome     = document.getElementById("mainHome");
const mainAbout    = document.getElementById("mainAbout");

const defaultInput = document.getElementById("defaultInput");
const editButton   = document.getElementById("editButton");
const lockButton   = document.getElementById("lockButton");
const pxInput      = document.getElementById("pxInput");
const emInput      = document.getElementById("emInput");

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

function _Edit() {
   defaultInput.disabled = false;
   pxInput.disabled = true;
   emInput.disabled = true;
   pxInput.value = null;
   emInput.value = null;
   editButton.classList.add("hidden");
   lockButton.classList.remove("hidden");
}

function _Lock() {
   defaultInput.disabled = true;
   pxInput.disabled = false;
   emInput.disabled = false;
   editButton.classList.remove("hidden");
   lockButton.classList.add("hidden");
}

function _Converter(type, input, output) {
   if (!isNaN(input.value) & (input.value != "")) {
      output.disabled = true;
      output.value =
         type == "px-em"
            ? input.value * (1 / defaultInput.value)
            : input.value * defaultInput.value;
   } else {
      output.disabled = false;
      output.value = null;
   }
}

// Events
backButton.addEventListener("click", _MainHome);
infoButton.addEventListener("click", _MainAbout);
editButton.addEventListener("click", _Edit);
lockButton.addEventListener("click", _Lock);
pxInput.addEventListener("keyup", () => _Converter("px-em", pxInput, emInput));
emInput.addEventListener("keyup", () => _Converter("em-px", emInput, pxInput));
