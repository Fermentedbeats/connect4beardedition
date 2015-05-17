
var board = [undefined, undefined,undefined,undefined,undefined, 1, 0,undefined,undefined,undefined,undefined, 1, 0 ,undefined,undefined,undefined,undefined,undefined, 0, 1,undefined,undefined,undefined,undefined, 0, 1, 0  ];

// console.log(board[6]);
// console.log(board[12]);
// console.log(board[18]);
// console.log(board[24]);

board[29] = 1;
board[23] = 1;
board[17] = 1;
board[11] = 1;
// row check
board[8] = 1;
board[9] = 1;
board[10] = 1;
board[11] = 1;
// col check
board[9] = 1;
board[16] = 1;
board[23] = 1;
board[30] = 1;
// other diag check
board[2] = 1;
board[10] = 1;
board[18] = 1;
board[26] = 1;


function checker(index){
	var connect = 1;
    var testCases = [1, 6, 7, 8];
  
  for (var counter0 = 0; counter0 < testCases.length; counter0++) {

	
	if (board[index] === board[index - testCases[counter0]] || board[index] === board[index+testCases[counter0]]){
     
          console.log("hello");
     // var i = index;
     // console.log(i);
		for(var i = index; board[i] === board[i-testCases[counter0]] ; i-=testCases[counter0]) {
			connect++;
            console.log("looping");
 			if (connect === 4){
 				return "Winner"; 			}
          
		}
      
        for(var j = index; board[j] === board[j+testCases[counter0]] ; i+=testCases[counter0]) {
		  console.log("looping");
 			connect++;
          if (connect === 4){
 				return "Winner"; 	}
          
        }
      console.log(connect);
      connect = 1;
			
			
	}
  }

}

console.log(checker(2));
console.log(checker(26));



