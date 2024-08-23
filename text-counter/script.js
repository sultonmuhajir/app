document.getElementById("hitung").addEventListener("click", function () {
   teks = document.getElementById("teks").value;

   let karakter = teks.length;
   let kata = teks
      .replace(/\n/g, " ")
      .split(" ")
      .filter((i) => i !== "").length;
   let kalimat = teks
      .replace(/[\n\s]/g, "")
      .split(".")
      .filter((i) => i !== "").length;

   document.getElementById("result").classList.remove("hidden");
   document.getElementById("karakter").innerHTML = karakter;
   document.getElementById("kata").innerHTML = kata;
   document.getElementById("kalimat").innerHTML = kalimat;
});
