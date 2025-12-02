function makeBigger() {
  alert("Hello, world!");

  // Make the text larger
  const textArea = document.getElementById("text-input");
  textArea.style.fontSize = "24pt";
}

function updateStyle() {
  const textArea = document.getElementById("text-input");
  const fancy = document.getElementById("fancy");

  if (fancy.checked) {
    // FancyShmancy styles
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    // BoringBetty styles
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function moo() {
  const textArea = document.getElementById("text-input");
  let text = textArea.value;

  text = text.toUpperCase();

  let sentences = text.split(".");

  for (let i = 0; i < sentences.length - 1; i++) {
    let sentence = sentences[i].trim();
    if (sentence.length === 0) continue;

    let words = sentence.split(" ");
    for (let j = words.length - 1; j >= 0; j--) {
      if (words[j].length > 0) {
        words[j] = words[j] + "-MOO";
        break;
      }
    }
    sentences[i] = words.join(" ");
  }

  textArea.value = sentences.join(".").trim();
}
