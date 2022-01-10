let container = document.createElement("div");
container.classList.add("container");
container.style.width = "100vw";
container.style.height = "100vh";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "space-around";
container.style.alignItems = "center";

let btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "Clear";
btn.addEventListener("click", () => {
  let size = window.prompt("Please enter how many pixels per side: ", 4);
  num = size;
  clearGrid();
  createGrid();
})
container.appendChild(btn);

let boxContainer = document.createElement("div");
boxContainer.classList.add("box-container");
boxContainer.style.width = "500px";
boxContainer.style.height = "500px";
boxContainer.style.backgroundColor = "gray";
boxContainer.style.display = "flex";
boxContainer.style.flexWrap = "wrap";
boxContainer.style.boxSiziing = "border-box";
boxContainer.style.border = "1px solid black";

let num = 6;
function createGrid() {
  for(let i = 0; i < num * num; i++) {
    let box = document.createElement("div");
    box.style.width = `${500/num}px`;
    box.style.height = `${500/num}px`;
    box.style.border = "1px solid black";
    box.style.boxSizing = "border-box";
    box.addEventListener("mouseover", function(e) {
      e.target.style.backgroundColor = "white";
  
      setTimeout(function() {
        e.target.style.backgroundColor = "";
      },500);
    })
    boxContainer.appendChild(box);
  }
}

function clearGrid() {
  boxContainer.innerHTML = "";
}

createGrid();


let body = document.querySelector("body");
body.style.margin = "0";
body.style.padding = "0";

body.appendChild(container);
container.appendChild(boxContainer);
