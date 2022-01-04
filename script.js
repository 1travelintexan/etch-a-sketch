let screen = document.querySelector("#screen");
for (let i = 0; i < 16; i++) {
  for (let i = 0; i < 16; i++) {
    let box = document.createElement("div");
    box.className = "box";
    screen.appendChild(box);
  }
}
let boxes = document.querySelectorAll(".box");

console.log(boxes);
boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.classList.add("box-selected");
  });
});
