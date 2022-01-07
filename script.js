let screen = document.querySelector("#screen");
let eraseBtn = document.querySelector("#erase");
let clearBtn = document.querySelector("#clear");
let colorBtn = document.querySelector("#color");
let blackBox = true;
let brushSize = document.querySelector("#brush-size");

//create screen
for (let i = 0; i < 40; i++) {
  for (let i = 0; i < 66; i++) {
    let box = document.createElement("div");
    box.className = "box";
    screen.appendChild(box);
  }
}
//variable for all of the screen boxes
let boxes = document.querySelectorAll(".box");

//function to clear the screen
clearBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.style.backgroundColor = "#9c9c9c";
  });
});

//function to change the brush color
colorBtn.addEventListener("change", (e) => {
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = e.target.value;
    });
  });
});

//change brush size function
brushSize.addEventListener("change", (e) => {
  console.log(brushSize, e.target.value);
  boxes.forEach((box) => {
    console.log(box);
    box.style.width = Number(e.target.value);
    console.log(box);
  });
});

// to draw when you first enter the page
boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.classList.add("black-box");
    box.classList.remove("white-box");
  });
});

//erase button to toggle black or white and change from draw to erase
eraseBtn.addEventListener("click", () => {
  blackBox = !blackBox;
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
