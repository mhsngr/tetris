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
        for(let i = 0; i < this.grid.length; i++) {
            for(let j = 0; j < this.grid[i].length; j++) {
                document.querySelector(`.board > .row.y${i} > .col.x${j}`).innerText = `${this.grid[i][j]}`;
            }
        }
    }
}