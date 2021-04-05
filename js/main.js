
const board = new Board(10, 20);
let currentTetromino = new Tetromino();
board.draw();
currentTetromino.draw();

function keyboard(event) {
    switch (event.keyCode) {
        case 37:
            currentTetromino.moveLeft();
            board.draw();
            currentTetromino.draw();
            break;
        case 40:
            currentTetromino.moveRight();
            board.draw();
            currentTetromino.draw();
            break;
        case 39:
            currentTetromino.moveDown();
            board.draw();
            currentTetromino.draw();
            break;
        case 38:
            currentTetromino.rotate();
            board.draw();
            currentTetromino.draw();
            break;
    }
}

document.addEventListener('keyup', keyboard);