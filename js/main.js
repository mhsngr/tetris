
const board = new Board(10, 20);
board.draw();

function keyboard(event) {
    switch (event.keyCode) {
        case 37:
            board.currentTetromino.moveLeft();
            board.draw();
            break;
        case 39:
            board.currentTetromino.moveRight();
            board.draw();
            break;
        case 40:
            board.currentTetromino.moveDown();
            if (!board.currentTetromino.validMove(0, 1)) {
                board.lock();
            }
            board.draw();
            break;
        case 38:
            board.currentTetromino.rotate();
            board.draw();
            break;
    }
}

document.addEventListener('keyup', keyboard);