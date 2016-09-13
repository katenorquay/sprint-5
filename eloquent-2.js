#Looping A Triangle

var hashtag = '#'

for (i = 0; i < 7; i++) {
console.log(hashtag);
  hashtag += '#';
}

#FizzBuzz

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

  #ChessBoard
  /* My first attempt, it works but it's a bit pathetic, and you have to make the size half the size of whatever you want cos there are two inner loops */

  var size = 4;
  var hashtag = "#";
  var space = " ";
  var chessboard ="";

  for (j = 0; j < size; j++) {

  for (i = 0; i < size; i++) {
    chessboard += hashtag + space;
  }
  chessboard += "\n";

  for (i = 0; i < size; i++) {
    chessboard += space + hashtag;
  }
   chessboard += "\n";
  }

  console.log(chessboard);

  /*After a google I found a classier solution */

  var size = 8;
  var chessboard = "";

  for (i = 0; i < size; i++) {
  	for (j =0; j < size; j++) {
      if ((i+j) % 2 === 0) {
      chessboard += " ";
      } else {
      chessboard += "#"
      }
      } chessboard += "\n"
  }

  console.log(chessboard);
