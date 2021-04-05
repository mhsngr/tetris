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
        for(let i = 0; i < this.shape.length; i++) {
            for(let j = 0; j < this.shape[i].length; j++) {
                document.querySelector(`.board > .row.y${this.y + i} > .col.x${this.x + j}`).innerText = `${this.shape[i][j]}`;
            }
        }
    }
    move() {

    }
    fix() {
        
    }
}