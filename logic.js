const field =
     [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
     ]
let lines;

window.onload = function () {
     const divs = document.getElementsByClassName('line');
     lines = Array.from(divs);
     console.log(lines); // Accessible here
};

console.log(lines); // Now lines is accessible here, but will be undefined until the page has loaded

let turn = true;
let turnNo = 0;
function checkWinner() {
     let winner = 0;

     switch (true) {
          // Horizontal checks
          case (field[0][0] !== 0 && field[0][0] === field[0][1] && field[0][1] === field[0][2]):
              winner = field[0][0];
              lines[0].style.display = 'block';   
              lines[0].style.backgroundColor = (field[0][0] === 'cross') ? 'blue' : 'red';
              break;
          case (field[1][0] !== 0 && field[1][0] === field[1][1] && field[1][1] === field[1][2]):
              winner = field[1][0];
              lines[1].style.display = 'block';   
              lines[1].style.backgroundColor = (field[1][0] === 'cross') ? 'blue' : 'red';
              break;
          case (field[2][0] !== 0 && field[2][0] === field[2][1] && field[2][1] === field[2][2]):
              winner = field[2][0];
              lines[2].style.display = 'block';   
              lines[2].style.backgroundColor = (field[2][0] === 'cross') ? 'blue' : 'red';
              break;
      
          // Vertical checks
          case (field[0][0] !== 0 && field[0][0] === field[1][0] && field[1][0] === field[2][0]):
              winner = field[0][0];
              lines[3].style.display = 'block';   
              lines[3].style.backgroundColor = (field[0][0] === 'cross') ? 'blue' : 'red';
              break;
          case (field[0][1] !== 0 && field[0][1] === field[1][1] && field[1][1] === field[2][1]):
              winner = field[0][1];
              lines[4].style.display = 'block';   
              lines[4].style.backgroundColor = (field[0][1] === 'cross') ? 'blue' : 'red';
              break;
          case (field[0][2] !== 0 && field[0][2] === field[1][2] && field[1][2] === field[2][2]):
              winner = field[0][2];
              lines[5].style.display = 'block';   
              lines[5].style.backgroundColor = (field[0][2] === 'cross') ? 'blue' : 'red';
              break;
      
          // Diagonal checks
          case (field[0][0] !== 0 && field[0][0] === field[1][1] && field[1][1] === field[2][2]):
              winner = field[0][0];
              lines[6].style.display = 'block';   
              lines[6].style.backgroundColor = (field[0][0] === 'cross') ? 'blue' : 'red';
              break;
          case (field[0][2] !== 0 && field[0][2] === field[1][1] && field[1][1] === field[2][0]):
              winner = field[0][2];
              lines[7].style.display = 'block';   
              lines[7].style.backgroundColor = (field[0][2] === 'cross') ? 'blue' : 'red';
              break;
      }
      
     return winner;
}

function cellClick(x, y) {
     if (turnNo <= 9) {
          const winner = checkWinner();
          if (winner !== 0) {
               console.log('winner:', winner)
               turnNo = 10;
               document.getElementById('winner').innerHTML = `Winner:${winner}`
               document.getElementById('tryAgain').style.display = 'block';



          }
          var id = String(x) + String(y);
          x--; y--;
          const cell = document.getElementById(id);
          let symbol = 0;
          if (turn === true && field[x][y] === 0) {
               symbol = 'cross';
               field[x][y] = 'cross'
               turnNo++;
               turn = !turn;
               const winner = checkWinner();
               if (winner !== 0) {
                    console.log('winner:', winner)
                    turnNo = 10;
                    document.getElementById('winner').innerHTML = `Winner:${winner}`
                    document.getElementById('tryAgain').style.display = 'block';



               }

          }
          else if (turn === false && field[x][y] === 0) {
               symbol = 'circle';
               field[x][y] = 'circle'
               turnNo++;
               turn = !turn;
               const winner = checkWinner();

               if (winner !== 0) {
                    console.log('winner:', winner)
                    turnNo = 10;
                    document.getElementById('winner').innerHTML = `Winner:${winner}`
                    document.getElementById('tryAgain').style.display = 'block';


               }


          }
          cell.classList.add(symbol);
     }

     if (turnNo === 9) {
          console.log('game finished')
          document.getElementById('winner').innerHTML = `Draw`
          document.getElementById('tryAgain').style.display = 'block';


     }
}
