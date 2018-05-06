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
}

let setTile = (x, y) => {
    let row = y - 1;
    let tile = {
        coordinates: [x, row]   
    }

 board.push(tile);
}

let assignModifiers = () => {
    board.forEach((tile) => {
        if (tile[0] === 1 || tile[0] === 3 || tile[0] === 11 || tile[0] === 14) {
            if(tile[1] === 0 || tile[1] === 7 || tile[1] === 14) {
                tile.scoreMod = '3w';
            } else if (tile[1] === 3 || tile[1] === 11) {
                tile.scoreMod = '2l';
            }
        }
    });
}

startBoard();
assignModifiers();
console.log(board);