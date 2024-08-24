const caseSelector = document.getElementById("caseSelector");
const copyButton = document.getElementById("copyButton");
const teks = document.getElementById("teks");

teks.addEventListener("input", () => (caseSelector.value = ""));

caseSelector.addEventListener("change", function () {
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
});

copyButton.addEventListener("click", function () {
   teks.select();
   teks.setSelectionRange(0, 99999);
   document.execCommand("copy");
   copyButton.classList.remove("fa-regular", "fa-copy");
   copyButton.classList.add("fa-solid", "fa-check");
   setTimeout(function () {
      copyButton.classList.add("fa-regular", "fa-copy");
      copyButton.classList.remove("fa-solid", "fa-check");
   }, 2000);
});
