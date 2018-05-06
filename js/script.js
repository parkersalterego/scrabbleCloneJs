const board = [];




let startBoard = () => {
    let column = 0;
    let row = 0;

    for (let i = 0; i < 225; i++) {
        if (i%15 == 0) {
            row ++;
            column = 0
        }
        setTile(column, row);
        column ++;
    }
    console.log(board);
}

let setTile = (x, y) => {
    let row = y - 1;
    let tile = {
        coordinates: [x, row]   
    }

 board.push(tile);
}

startBoard();

let assignModoifiers = () => {
    
}