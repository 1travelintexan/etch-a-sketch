let container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  for (let i = 0; i < 16; i++) {
    let box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
  }
}
