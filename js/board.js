class Board {
    constructor(col, row) {
        this.grid = new Array(row)
        for(let i = 0; i < row; i++) {
            this.grid[i] = new Array(col);
            this.grid[i].fill(0);
        }
    }
    draw() {
        console.table(this.grid);
    }
}

board = new Board(10, 20);
board.draw();