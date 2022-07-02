// Matrix - multi dimensional array

// Table - Grid - Co-ordinates - Graphs

// rows - X
// columns - Y

// const table = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let row = 0; row < table.length; row++) {
//     for (let column = 0; column < table.length; column++) {
//         // console.log(table[row][column]) // in row order
//         console.log(table[column][row]) // in column order
//     }
// }

const grid = [
    ['X', 'O', 'X'],
    ['X', 'O', 'X'],
    ['O', 'X', 'X']
]

for (let row = 0; row < grid.length; row++) {
    const rowString = grid[row].join('') // returns string 'XOX'
    let columnString = ''

    for (let column = 0; column < grid.length; column++) {
        columnString += grid[column][row] // 'XXO'
    }
    
    if (rowString === 'XXX' || columnString === 'XXX') {
        console.log('X wins')
        break;
    }
}