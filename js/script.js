const container = document.querySelector(".container");
const resetBtn = document.querySelector("#reset-btn");

function createGrid(size) {
  container.innerHTML = "";

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size ** 2; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }
}

createGrid(16);

container.addEventListener("mouseover", function (event) {
  if (event.target.tagName === "DIV") {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    let opacity = Number(event.target.style.opacity);
    event.target.style.opacity = opacity + 0.1;
  }
});

resetBtn.addEventListener("click", function () {
  let size = prompt("Enter the size of the new grid (max 100):");
  if (size === null || size === "") return;
  size = parseInt(size);
  if (isNaN(size) || size > 100 || size < 1) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  createGrid(size);
});
