var board = [[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']];
var turn = 'X';
var victor;
console.log(`
  Welcome to TicTacToe
  press enter to begin.
  1-9 for placing a piece.
  `)
console.log('Player 1 input your name!')

let checkVictory = () => {
  var result = false;
  var col1 = '';
  var col2 = '';
  var col3 = '';
  var diagMajor = '';
  var diagMinor = '';
  var checkAxis = (axis) => {
    if(axis === 'XXX' || axis === 'OOO') {
      result = true;
    }
  }
  board.forEach((row, i)=>{
    var rowJoin = row.join('');
    checkAxis(rowJoin);
    col1+=row[0];
    col2+=row[1];
    col3+=row[2];
    diagMajor += row[i];
    diagMinor += row[2-i];
  })
  checkAxis(col1);
  checkAxis(col2);
  checkAxis(col3);
  checkAxis(diagMajor)
  checkAxis(diagMinor)

  return result;
}

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var input = +d.toString().trim();
    if([1,2,3,4,5,6,7,8,9].includes(input)) {
      if(board[Math.floor((input - 1)/3)][(input - 1)%3] === ' ') {
        board[Math.floor((input - 1)/3)][(input - 1)%3] = turn;
        if(checkVictory()) {
          victor = turn;
        }
        turn = turn === 'X' ? 'O' : 'X';
      }
    }

  board.map((row, i)=>{
    console.log(row.join(' |'))
    if(i < board.length - 1) {console.log('__ __ __')}
  })
  if(victor) {
    console.log(`Congratulations player ${victor} won!`);
  } else {
    console.log(`it is player ${turn}'s turn`);
  }
});
