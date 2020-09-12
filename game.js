import {
    update as updateSnake,
    draw as drawSnake,
    SNAKE_SPEED,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";

let lastRenderTIme = 0;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastRenderTIme) / 1000;

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTIme = currentTime;
    console.log("RENDER");

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
