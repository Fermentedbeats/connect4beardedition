// 1. create board (6 x 7 square)

// array 0..41
// for loop drops in pre-set sized pieces within container div (inline block)

var boardArray = new Array(42);
//console.log(boardArray);

function createBoard() {
	var boardContainer = document.createElement('div');
	boardContainer.className = 'boardContainer';
	document.getElementsByClassName('mainContainer')[0].appendChild(boardContainer);

	function square() {
		var boardSquare = document.createElement('div');
		boardSquare.className = 'boardSquare vacant';
		boardSquare.setAttribute('id', counter)
		// boardSquare.innerHTML = counter;
		boardSquare.appendChild(circle());
		return boardSquare;
	}

	function circle() {
		var innerCircle = document.createElement('div');
		innerCircle.className = 'boardCircle';
		innerCircle.setAttribute('id', counter)
		return innerCircle;
	}

	for (var counter = 0; counter < boardArray.length; counter++) {
		boardContainer.appendChild(square());
	};
}

createBoard();

// 2. set 2 players

var player1 = {name: 'Player 1', turn: true, color: 'red', number: 1};
var player2 = {name: 'Player 2', turn: false, color: 'black', number: 2};


// 3. alternate turns
// turn function assigns a player and after action assigns new player
// action lands piece in specified column (modulus of 7) in last open cell

var whosTurnIsIt = function() {
	if (player1.turn == true) {
		return player1;
	}
	else {
		return player2;
	}
}	

var switchPlayer = function() {
	if (player1.turn == true) {
		player1.turn = false;
		player2.turn = true;
	}
	else {
		player1.turn = true;
		player2.turn = false;
	}
}

// 4. click on col & piece appears
// 0..6 have event listeners: 7 diff click-here areas

var makeAChecker = function(color) {
	var checker = document.createElement('div');
	checker.className = color;
	checker.className += " checker";
	checker.style.backgroundColor = color;
	return checker;
}

var animateChecker = function() {
	var currentPlayer = whosTurnIsIt();
	var column = this.id % 7;
	//console.log(column); 
	var newChecker = makeAChecker(currentPlayer.color);

		// checker starts in outer space
		// by column, look at last cell and choose the one that is not empty
		// col number + (7*5), loop through 4..1
		// assign tag to announce that slot is occupied
		for (var checkerCounter = 5; checkerCounter > -1; checkerCounter--) {
			var squareId = column + (7 * checkerCounter)
			squareId.toString();
			var vacantCheck = document.getElementById(squareId); 	
			console.log(vacantCheck)		
			if (vacantCheck.className == 'boardSquare vacant') {
				vacantCheck.appendChild(newChecker);
				vacantCheck.className = 'boardSquare occupied';
				boardArray[squareId] = currentPlayer.number;
				checkForWinner(squareId);
				switchPlayer();
				break;
			}
		}
	}

	for (var sqCount = 0; sqCount < 42; sqCount++) {	
		document.getElementById(sqCount).addEventListener("click", animateChecker, true);
	}


// 5. after each turns

// GARBAGE TIME CHECK: 168 cells touched per turn
// 	5a check row
// splice or slice - for look with counter - when counter == 4: winner
// 	5b check col
//  for loop index i, i + 7, match value, if counter == 4: winner
// 	5c check diag


// MIND-BLOWING ALGORITHM: < 42 cells checked per turn.
// check adjacent cells & brute force against the edges


function checkForWinner(index) {

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
 
 	var countingToFour = 1
    var testCases = [1, 6, 7, 8];

    // loop to check all 8 surrounding cell squares for a matching value (-/+ 1, 6, 7 or 8 indices away)
	for (var counter0 = 0; counter0 < testCases.length; counter0++) {

		    console.log("num in cell: ");
     		console.log(boardArray[index]);

		// if the player # (just-placed checker) in the array matches the value in the contiguous cell 
		// run the next loop
     	if (boardArray[index] === boardArray[index - testCases[counter0]] || boardArray[index] === boardArray[index+testCases[counter0]]) {

    		
     		// when a match is found, check the next cell in that direction (-/+)
     		for(var i = index; boardArray[i] === boardArray[i-testCases[counter0]]; i-=testCases[counter0]) {
     			countingToFour++;
     			//console.log("loop2");
     			if (countingToFour === 4) {
     				console.log("winner1")
     				return "Winner"; 			
     			}

     		}
     		// when a match is found, check the next cell in the other direction (-/+)
     		for (var j = index; boardArray[j] === boardArray[j+testCases[counter0]]; i+=testCases[counter0]) {
     			//console.log("loop3");
     			console.log(countingToFour)
     			countingToFour++;
     			if (countingToFour === 4) {
     				console.log("winner2")
     				return "Winner"; 	
     			}

     		}
		//console.log(countingToFour);
		countingToFour = 1;
		}
	}
}




// 6 stop game when there's a winner



