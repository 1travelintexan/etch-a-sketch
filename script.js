let screen = document.querySelector("#screen");
let eraseBtn = document.querySelector("#erase");
let blackBox = true;

//create screen
for (let i = 0; i < 20; i++) {
  for (let i = 0; i < 28; i++) {
    let box = document.createElement("div");
    box.className = "box";
    screen.appendChild(box);
  }
}

let boxes = document.querySelectorAll(".box");

// to draw when you first enter the page
boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.classList.add("black-box");
    box.classList.remove("white-box");
  });
});

//erase button to toggle black or white and change from draw to earse
eraseBtn.addEventListener("click", () => {
  blackBox = !blackBox;
  console.log(blackBox);
  if (blackBox == true) {
    eraseBtn.classList.remove("erase");
    eraseBtn.classList.add("no-erase");
    boxes.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.classList.add("black-box");
        box.classList.remove("white-box");
      });
    });
  }
  if (blackBox == false) {
    eraseBtn.classList.remove("no-erase");
    eraseBtn.classList.add("erase");
    boxes.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.classList.remove("black-box");
        box.classList.add("white-box");
      });
    });
  }
});
