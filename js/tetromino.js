const shapes = [
    [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]
    ],
    [
        [2, 2, 2],
        [0, 0, 2],
        [0, 0, 0]
    ],
    [
        [3, 3, 0],
        [0, 3, 3],
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
        [6, 6, 6],
        [6, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0, 0],
        [7, 7, 7, 7],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
  ];

class Tetromino {
    constructor() {
        this.shape = shapes[Math.floor(Math.random() * 7)].map(y => y.slice());
        if (this.shape.length < 3) this.x = 4;
        else this.x = 3;
        if (this.shape[1].length > 3) this.y = -1;
        else this.y = 0;
    }
    draw() {
        for (let i = 0; i < this.shape.length; i++) {
            for (let j = 0; j < this.shape[i].length; j++) {
                if (this.shape[i][j] > 0) {
                    document.querySelector(`.board > .row.y${this.y + i} > .col.x${this.x + j}`).className = `col x${this.x + j} c${this.shape[i][j]}`;
                }
            }
        }
    }
    moveLeft() {
        if (this.validMove(-1, 0)) {
            this.x--;
        }
        game.board.draw()
    }
    moveRight() {
        if (this.validMove(1, 0)) {
            this.x++;
        }
        game.board.draw()
    }
    softDrop() {
        if (game.board.currentTetromino.validMove(0, 1)) {
            game.board.currentTetromino.y++;
            game.score++;
        }
        if (!game.board.currentTetromino.validMove(0, 1)) {
            if (game.board.currentTetromino.y === 0) return false;
            game.board.lock();
            game.board.clearRows();
        }
        game.board.draw();
        game.board.drawInfo();
        return true;
    }
    drop() {
        if (game.board.currentTetromino.validMove(0, 1)) {
            game.board.currentTetromino.y++;
        }
        if (!game.board.currentTetromino.validMove(0, 1)) {
            if (game.board.currentTetromino.y === 0) return false;
            game.board.lock();
            game.board.clearRows();
        }
        game.board.draw();
        return true;
    }
    rotate() {
        for (let i = 0; i < this.shape.length; i++) {
            for (let j = 0; j < i; j++) {
                [this.shape[j][i], this.shape[i][j]] = [this.shape[i][j], this.shape[j][i]];
            }
        }
        this.shape.forEach(row => row.reverse());
        if (this.y < 0) {
            while (!this.validMove(0, 0)) this.y++;
        }
        if (this.x < this.shape.length) {
            while (!this.validMove(0, 0)) this.x++;
        }
        if (this.x > this.shape.length) {
            while (!this.validMove(0, 0)) this.x--;
        }
        game.board.draw()
    }
    validMove(dx, dy) {
        for (let i = 0; i < this.shape.length; i++) {
            for (let j = 0; j < this.shape[i].length; j++) {
                let x = this.x + j + dx;
                let y = this.y + i + dy;
                if (this.shape[i][j] > 0) {
                    if (y < 0 || y > game.board.grid.length - 1) return false;
                    if (x < 0 || x > game.board.grid[y].length - 1) return false;
                    if (game.board.grid[y][x] > 0) return false;               
                }
            }
        }
        return true;
    }
}