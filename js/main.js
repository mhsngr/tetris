const game = new Game();

document.addEventListener('keydown', start);

function start(event) {
    if (event.keyCode === 13) {
        document.removeEventListener('keydown', start);
        document.addEventListener('keydown', controls);
        game.start();
    }
}

function controls(event) {
    switch (event.keyCode) {
        case 37:
            if (!game.paused) game.board.currentTetromino.moveLeft();
            break;
        case 39:
            if (!game.paused) game.board.currentTetromino.moveRight();
            break;
        case 40:
            if (!game.paused) {
                if (!game.board.currentTetromino.softDrop()) game.over();
            }
            break;
        case 38:
            if (!game.paused) game.board.currentTetromino.rotate();
            break;
        case 32:
            if (game.audioMusic.paused) game.audioMusic.play();
            else game.audioMusic.pause()
            break;
        case 13:
            if (game.paused) game.resume();
            else game.pause();
            break;
    }
}