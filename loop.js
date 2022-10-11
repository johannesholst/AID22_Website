var looptxts = ["Hello there", "Looping", "some", "texts", "wih", "a", "for", "loop"];

let txt = "";
for (let i = 0; i < looptxts.length; i++) {
  txt += looptxts[i] + "<br>";
}

document.getElementById("demo").innerHTML = txt;