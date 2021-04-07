class Board {
    constructor(col, row) {
        this.grid = new Array(row)
        for (let i = 0; i < row; i++) {
            this.grid[i] = new Array(col);
            this.grid[i].fill(0);
        }
        this.currentTetromino = new Tetromino();
        this.nextTetromino = new Tetromino();
    }
    draw() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                document.querySelector(`.board > .row.y${i} > .col.x${j}`).className = `col x${j} c${this.grid[i][j]}`;
            }
        }
        this.currentTetromino.draw();
        this.drawInfo();  
    }
    lock() {
        for (let i = 0; i < this.currentTetromino.shape.length; i++) {
            for (let j = 0; j < this.currentTetromino.shape[i].length; j++) {
                let x = this.currentTetromino.x + j;
                let y = this.currentTetromino.y + i;
                if (this.currentTetromino.shape[i][j] > 0) {
                    this.grid[y][x] = this.currentTetromino.shape[i][j];
                }
            }
        }
        for (let i = 1; i <= shapes.length; i++) {
            if (this.currentTetromino.shape[1].includes(i)) game.stats[i - 1]++;
        }
        this.currentTetromino = Object.assign(this.currentTetromino, this.nextTetromino);
        this.nextTetromino = new Tetromino();
        game.audioLock.cloneNode(true).play();
        this.currentTetromino.drop();
    }
    clearRows() {
        let rows = 0;
        this.grid.forEach((row, y) => {
            if (row.every(value => value > 0)) {
                this.grid.splice(y, 1);
                this.grid.unshift(Array(col).fill(0));
                rows++;
            }
        });
        game.rows += rows;
        if (rows === 1) {
            game.score += 40 * (game.level + 1);
            game.audioClear.cloneNode(true).play();
        }
        if (rows === 2) {
            game.score += 100 * (game.level + 1);
            game.audioClear.cloneNode(true).play();
        }
        if (rows === 3) {
            game.score += 300 * (game.level + 1);
            game.audioClear.cloneNode(true).play();
        }
        if (rows === 4) {
            game.score += 1200 * (game.level + 1);
            game.audioTetris.cloneNode(true).play();
        }
        game.levelUp();
    }
    drawInfo() {
        document.querySelector('.top').innerText = game.top.toString().padStart(6, 0);
        document.querySelector('.score').innerText = game.score.toString().padStart(6, 0);
        document.querySelector('.level').innerText = game.level.toString().padStart(2, 0);
        document.querySelector('.lines').innerText = game.rows.toString().padStart(2, 0);
        for (let i = 1; i <= game.stats.length; i++) {
            document.querySelector(`.stat${i}`).innerText = game.stats[i - 1].toString().padStart(3, 0);
        }
        if (this.nextTetromino.shape[0][0] > 0) document.querySelector('.next').className = `next n${this.nextTetromino.shape[0][0]}`;
        if (this.nextTetromino.shape[1][0] > 0) document.querySelector('.next').className = `next n${this.nextTetromino.shape[1][0]}`;
    }
}