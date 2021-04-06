class Game {
    constructor() {
        this.level = 0;
        this.rows = 0;
        this.score = 0;
        this.top = 0;
        this.speed = 720;
    }
    start() {
        this.board = new Board(col, row);
        this.board.draw();
        this.board.drawInfo();
        this.run = setInterval(this.drop, this.speed);
        document.querySelector('.overlay').className = 'overlay';
    }
    drop() {
        if (!game.board.currentTetromino.drop()) {
            game.over();
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
        if (this.level >= 19) this.speed = 20;
        clearInterval(game.run);
        this.run = setInterval(this.drop, this.speed);
    }
    over() {
        clearInterval(game.run);
        document.removeEventListener('keydown', controls);
        document.addEventListener('keydown', start);
        document.querySelector('.overlay > .score').innerText = game.score.toString().padStart(6, 0);
        document.querySelector('.overlay').className = 'overlay game-over-screen';
        if (this.score > this.top) this.top = this.score;
        this.level = 0;
        this.rows = 0;
        this.score = 0;
        this.speed = 720;
    }
}