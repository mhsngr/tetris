const col = 10;
const row = 20;
const game = new Game();

document.addEventListener('keydown', start);

function start(event) {
    if(event.keyCode === 13) {
        document.removeEventListener('keydown', start);
        document.addEventListener('keydown', controls);
        game.start();
    }
}

function controls(event) {
    switch (event.keyCode) {
        case 37:
            game.board.currentTetromino.moveLeft();
            break;
        case 39:
            game.board.currentTetromino.moveRight();
            break;
        case 40:
            if(!game.board.currentTetromino.softDrop()) {
                game.over();
            }
            break;
        case 38:
            game.board.currentTetromino.rotate();
            break;
    }
}