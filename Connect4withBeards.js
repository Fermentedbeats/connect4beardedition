// 1 create board (6 x 7 square)

// array 0..41
// for loop drops in pre-set sized pieces within container div (inline block)

var boardArray = new Array(42);

function createBoard() {
	var boardContainer = document.createElement('div');
	boardContainer.className = 'boardContainer';
	document.getElementsByTagName('body')[0].appendChild(boardContainer);

	for (var counter = 0; counter = boardArray.length; counter++)
	  var boardSquare = document.createElement('div');
	  boardSquare.className = 'boardSquare';
	  boardSquare.innerHTML = counter;
	  boardContainer.appendChild(boardSquare);
};

createBoard();

// 2 set 2 players

// 3 alternate turns
// turn function assigns a player and after action assigns new player
// action lands piece in specified column (modulus of 7) in last open cell


// 4 click on col & piece appears
// 0..6 have event listeners or 7 diff click-here areas

// 5 after each turns

// GARBAGE TIME CHECK: 168 cells touched per turn
// 	5a check row
// splice or slice - for look with counter - when counter == 4: winner
// 	5b check col
//  for loop index i, i + 7, match value, if counter == 4: winner
// 	5c check diag


// MIND-BLOWING ALGORITHM: < 42 cells checked per turn.
// check adjacent cells & brute force against the edges

// destination cell index = x
// check
     // A. +1 & -1
     // 	while x != edge cases
	 // B. +7 & -7
     // 	while x != edge cases
	 // C. +6 & -6
     // 	while x != edge cases
	 // D. +8 & -8
     // 	while x != edge cases

// 6 stop game when there's a winner


	
