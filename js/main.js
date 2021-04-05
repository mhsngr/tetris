const col = 10;
const row = 20;

const game = new Game();
game.start();

function keyboard(event) {
    switch (event.keyCode) {
        case 37:
            game.board.currentTetromino.moveLeft();
            break;
        case 39:
            game.board.currentTetromino.moveRight();
            break;
        case 40:
            if(!game.board.currentTetromino.softDrop()) {
                clearInterval(game.run);
                console.log('game over');
            }
            break;
        case 38:
            game.board.currentTetromino.rotate();
            break;
    }
}
document.addEventListener('keyup', keyboard);