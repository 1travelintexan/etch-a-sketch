let screen = document.querySelector("#screen");
let eraseBtn = document.querySelector("#erase");
let clearBtn = document.querySelector("#clear");
let colorBtn = document.querySelector("#color");
let brushSize = document.querySelector("#brush-size");

//create screen
for (let i = 0; i < 3200; i++) {
  let box = document.createElement("div");
  box.className = "box";
  screen.appendChild(box);
}
//variable for all of the screen boxes
let boxes = document.querySelectorAll(".box");

//function to clear the screen
clearBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.style.backgroundColor = "#9c9c9c";
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "black";
    });
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

// to draw when you first enter the page
boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.classList.add("black-box");
    box.classList.remove("white-box");
  });
});

//erase button to toggle black or white and change from draw to erase
eraseBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "#9c9c9c";
    });
  });
});
