const container = document.getElementById("container");

const SquareNumber = 500;

for (let i = 0; 1 < SquareNumber; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    container.appendChild(square);
}