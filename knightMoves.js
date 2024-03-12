class Graph {

    // Constructor to Build Chessboard 
    constructor(size = 8) {
        this.chessboard = new Map();
        this.addVertices(size);
    } 

    addVertices(size) {
        for (let a = 0; a < size; a += 1) {
            for (let b = 0; b < size; b += 1) {
                this.chessboard.set(`${[a,b]}`, []);
            }
        }
    }
}

let chessBoard = new Graph()
console.log(chessBoard);