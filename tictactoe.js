var board = [[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']];
var turn = 'X';

console.log(`
  Welcome to TicTacToe
  press enter to begin.
  1-9 for placing a piece.
  `)

let checkVictory = () => {
  //if board is in some configuration then return true;
  return false;
}
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var input = +d.toString().trim();
    if([1,2,3,4,5,6,7,8,9].includes(input)) {
      board[Math.floor((input - 1)/3)][(input - 1)%3] = turn;
      turn = turn === 'X' ? 'O' : 'X';
    }

  board.map((row, i)=>{
    console.log(row.join(' |'))
    if(i < board.length - 1) {console.log('__ __ __')}
  })
  console.log(`it is player ${turn}'s turn`);
});
