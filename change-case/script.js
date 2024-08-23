document.getElementById("caseSelector").addEventListener("change", function () {
   const caseType = this.value;
   const textArea = document.getElementById("textArea");
   let text = textArea.value;

   switch (caseType) {
      case "sentence":
         text = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (_) => _.toUpperCase());
         break;
      case "lower":
         text = text.toLowerCase();
         break;
      case "upper":
         text = text.toUpperCase();
         break;
      case "capitalize":
         text = text
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
         break;
   }

   textArea.value = text;
});

document.getElementById("textArea").addEventListener("input", function () {
   document.getElementById("caseSelector").value = "";
});

document.getElementById("copyButton").addEventListener("click", function () {
   const textArea = document.getElementById("textArea");
   const copyButton = document.getElementById("copyButton");

   textArea.select();
   textArea.setSelectionRange(0, 99999);
   document.execCommand("copy");

   copyButton.classList.remove("fa-regular", "fa-copy");
   copyButton.classList.add("fa-solid", "fa-check");
   setTimeout(function () {
      copyButton.classList.add("fa-regular", "fa-copy");
      copyButton.classList.remove("fa-solid", "fa-check");
   }, 2000);
});
