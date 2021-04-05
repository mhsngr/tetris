class Game {
    constructor() {
        this.level = 1;
        this.rows = 0;
        this.score = 0;
    }
    start() {
        this.board = new Board(col, row);
        this.board.draw();
        this.board.drawInfo();
        this.run = setInterval(this.drop, 2000);
    }
    drop() {
        if(!game.board.currentTetromino.moveDown()) {
            clearInterval(game.run);
            console.log('game over');
        }
    }
}