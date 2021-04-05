class Game {
    constructor() {
        this.level = 0;
        this.rows = 0;
        this.score = 0;
        this.speed = 720;
    }
    start() {
        this.board = new Board(col, row);
        this.board.draw();
        this.board.drawInfo();
        this.run = setInterval(this.drop, this.speed);
    }
    drop() {
        if (!game.board.currentTetromino.drop()) {
            clearInterval(game.run);
            console.log('game over');
        }
    }
    levelUp() {
        this.level = Math.floor(this.rows / 10);
        if (this.level === 1) this.speed = 640;
        if (this.level === 2) this.speed = 580;
        if (this.level === 3) this.speed = 500;
        if (this.level === 4) this.speed = 440;
        if (this.level === 5) this.speed = 360;
        if (this.level === 6) this.speed = 300;
        if (this.level === 7) this.speed = 220;
        if (this.level === 8) this.speed = 140;
        if (this.level === 9) this.speed = 100;
        if (12 >= this.level >= 10) this.speed = 80;
        if (15 >= this.level >= 13) this.speed = 60;
        if (18 >= this.level >= 16) this.speed = 40;
        if (his.level >= 19) this.speed = 20;
    }
}