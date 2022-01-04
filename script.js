let screen = document.querySelector("#screen");
let eraseBtn = document.querySelector("#erase");
let blackBox = true;

//create screen
for (let i = 0; i < 16; i++) {
  for (let i = 0; i < 16; i++) {
    let box = document.createElement("div");
    box.className = "box";
    screen.appendChild(box);
  }
}

let boxes = document.querySelectorAll(".box");

//erase button to toggle black or white
eraseBtn.addEventListener("click", () => {
  blackBox = !blackBox;
  console.log(blackBox);
  if (blackBox == true) {
    boxes.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.classList.add("black-box");
        box.classList.remove("white-box");
      });
    });
  }
  if (blackBox == false) {
    boxes.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.classList.remove("black-box");
        box.classList.add("white-box");
      });
    });
  }
});
