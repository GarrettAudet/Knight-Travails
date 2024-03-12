class Graph {

    // Constructor to Build Chessboard 
    constructor(size = 8) {
        this.chessboard = new Map();
        this.addVertices(size);
        this.addEdges(size); // Ensure this method is defined correctly below
    } 

    // Add Vertices across Chessboard
    addVertices(size) {
        for (let a = 0; a < size; a += 1) {
            for (let b = 0; b < size; b += 1) {
                this.chessboard.set(`${[a,b]}`, []);
            }
        }
    }

    // Populate the Relationships between Vertices
    addEdges(size) {
        const knightMoves = [
            [2, 1], [2, -1], [-2, 1], [-2, -1],
            [1, 2], [1, -2], [-1, 2], [-1, -2]
        ];

        for (let a = 0; a < size; a++) {
            for (let b = 0; b < size; b++) { 
                knightMoves.forEach(([x, y]) => {
                    const newX = a + x;
                    const newY = b + y; 

                    // Ensure newX and newY are within the board's bounds before adding an edge
                    if ((newX >= 0) && (newX < size) && (newY >= 0) && (newY < size)) {
                        const currentKey = `${[a, b]}`;
                        const newKey = `${[newX, newY]}`;
                        // Add newKey to the adjacency list of currentKey
                        this.chessboard.get(currentKey).push(newKey);
                    }
                });
            }
        }
    }
}

let chessBoard = new Graph()
console.log(chessBoard);