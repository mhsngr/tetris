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
        console.clear();
        console.table(this.grid);
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                document.querySelector(`.board > .row.y${i} > .col.x${j}`).className = `col x${j} c${this.grid[i][j]}`;
            }
        }
        this.currentTetromino.draw();
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
        this.currentTetromino = this.nextTetromino;
        this.nextTetromino = new Tetromino();
        this.drawInfo();
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
        if (rows === 1) game.score += 40 * (game.level + 1)
        if (rows === 2) game.score += 100 * (game.level + 1)
        if (rows === 3) game.score += 300 * (game.level + 1)
        if (rows === 4) game.score += 1200 * (game.level + 1)
        game.levelUp();
    }
    drawInfo() {
        document.querySelector('.score').innerText = game.score;
        document.querySelector('.level').innerText = game.level;
        document.querySelector('.lines').innerText = game.rows;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                document.querySelector(`.next > .row.y${i} > .col.x${j}`).className = `col x${j} c0`;
            }
        }
        for (let i = 0; i < this.nextTetromino.shape.length; i++) {
            for (let j = 0; j < this.nextTetromino.shape.length; j++) {
                if (this.nextTetromino.shape[i][j] > 0) {
                    document.querySelector(`.next > .row.y${i} > .col.x${j}`).className = `col x${j} c${this.nextTetromino.shape[i][j]}`;
                }
            }
        }
    }
}