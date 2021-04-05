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
        console.table(this.grid);
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                document.querySelector(`.board > .row.y${i} > .col.x${j}`).innerText = `${this.grid[i][j]}`;
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
                    console.log(this.currentTetromino.shape[i][j]);
                    this.grid[y][x] = this.currentTetromino.shape[i][j];
                }
            }
        }
        this.currentTetromino = this.nextTetromino;
        this.nextTetromino = new Tetromino();
    }
    clearRows() {
        this.grid.forEach((row, y) => {
            if (row.every(value => value > 0)) {
                this.grid.splice(y, 1);
                this.grid.unshift(Array(col).fill(0));
            }
        });
    }
}