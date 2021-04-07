class Game {
    constructor() {
        this.level = 0;
        this.rows = 0;
        this.score = 0;
        this.top = 0;
        this.speed = 720;
        this.stats = [0, 0, 0, 0, 0, 0, 0]
        this.audioMove = new Audio('assets/move.mp3');
        this.audioRotate = new Audio('assets/rotate.mp3');
        this.audioLock = new Audio('assets/lock.mp3');
        this.audioClear = new Audio('assets/clear.mp3');
        // this.audioLevelup = new Audio('assets/levelup.mp3');
        this.audioStart = new Audio('assets/start.mp3');
        this.audioEnding = new Audio('assets/ending.mp3');
        this.audioTetris = new Audio('assets/tetris.mp3');
        this.audioMusic = new Audio('assets/music.mp3');
        this.audioGameover = new Audio('assets/gameover.mp3');
    }
    start() {
        this.board = new Board(col, row);
        this.board.currentTetromino.drop();
        this.board.draw();
        this.board.drawInfo();
        game.audioEnding.pause()
        game.audioStart.play();
        game.audioMusic.play();
        game.audioMusic.loop = true;
        this.run = setInterval(this.drop, this.speed);
        document.querySelector('.overlay').className = 'overlay';
        document.querySelector('.start-info').style.visibility = 'hidden';
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
        if (this.level >= 10 && this.level <= 12) this.speed = 80;
        if (this.level >= 13 && this.level <= 15) this.speed = 60;
        if (this.level >= 16 && this.level <= 18) this.speed = 40;
        if (this.level >= 19) this.speed = 20;
        clearInterval(game.run);
        this.run = setInterval(this.drop, this.speed);
    }
    over() {
        clearInterval(game.run);
        game.audioEnding.play();
        game.audioMusic.pause();
        game.audioGameover.play();
        document.removeEventListener('keydown', controls);
        document.addEventListener('keydown', start);
        document.querySelector('.end-score').innerText = game.score.toString().padStart(6, 0);
        document.querySelector('.overlay').className = 'overlay game-over-screen';
        if (this.score > this.top) this.top = this.score;
        this.level = 0;
        this.rows = 0;
        this.score = 0;
        this.speed = 720;
        this.stats = [0, 0, 0, 0, 0, 0, 0]
    }
}