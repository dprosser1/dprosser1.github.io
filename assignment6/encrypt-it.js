(function() {
  "use strict";

  window.addEventListener("load", init);

  function init() {
    console.log("Window loaded!");
    const encryptBtn = document.getElementById("encrypt-it");
    const resetBtn = document.getElementById("reset");
    encryptBtn.addEventListener("click", handleEncrypt);
    resetBtn.addEventListener("click", handleReset);
  }

  function handleEncrypt() {
    console.log("Button clicked!");
    const input = document.getElementById("input-text").value;
    const output = shiftCipher(input);
    document.getElementById("result").textContent = output;
  }

  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < "a" || text[i] > "z") {
        result += text[i];
      } else if (text[i] === "z") {
        result += "a";
      } else {
        const letter = text.charCodeAt(i);
        const resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

})();
