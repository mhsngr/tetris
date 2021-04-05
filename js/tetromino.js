const shapes = [
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [2, 0, 0],
        [2, 2, 2],
        [0, 0, 0]
    ],
    [
        [0, 0, 3],
        [3, 3, 3],
        [0, 0, 0]
    ],
    [
        [4, 4],
        [4, 4]
    ],
    [
        [0, 5, 5],
        [5, 5, 0],
        [0, 0, 0]
    ],
    [
        [0, 6, 0],
        [6, 6, 6],
        [0, 0, 0]
    ],
    [
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0]
    ]
  ];

class Tetromino {
    constructor() {
        this.shape = shapes[Math.floor(Math.random() * 7)];
        this.x = 3;
        this.y = 0;
    }
    draw() {
        console.log(this.x, this.y);
        for (let i = 0; i < this.shape.length; i++) {
            for (let j = 0; j < this.shape[i].length; j++) {
                if (this.shape[i][j] > 0) {
                    document.querySelector(`.board > .row.y${this.y + i} > .col.x${this.x + j}`).innerText = `${this.shape[i][j]}`;
                }
            }
        }
    }
    moveLeft() {
        if (this.validMove(-1, 0)) {
            this.x--;
        }
    }
    moveRight() {
        if (this.validMove(1, 0)) {
            this.x++;
        }
    }
    moveDown() {
        if (this.validMove(0, 1)) {
            this.y++;
        }
    }
    rotate() {
        for (let i = 0; i < this.shape.length; i++) {
            for (let j = 0; j < i; j++) {
                [this.shape[j][i], this.shape[i][j]] = [this.shape[i][j], this.shape[j][i]];
            }
        }
        this.shape.forEach(row => row.reverse());
        if (this.x < this.shape.length) {
            while (!this.validMove(0, 0)) this.x++;
        }
        if (this.x > this.shape.length) {
            while (!this.validMove(0, 0)) this.x--;
        }
    }
    validMove(dx, dy) {
        for (let i = 0; i < this.shape.length; i++) {
            for (let j = 0; j < this.shape[i].length; j++) {
                let x = this.x + j + dx;
                let y = this.y + i + dy;
                if (this.shape[i][j] > 0) {
                    if (y < 0 || y > board.grid.length - 1) return false;
                    if (x < 0 || x > board.grid[y].length - 1) return false;
                    if (board.grid[y][x] > 0) return false;               
                }
            }
        }
        return true;
    }
}