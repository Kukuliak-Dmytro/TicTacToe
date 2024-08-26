const field =
     [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
     ]
var turn = true;
var turnNo = 0;
console.log('file attached')
function checkWinner() {
     // Horizontal checks
     for (let i = 0; i < 3; i++) {
         if (field[i][0] !== 0 && field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
             return field[i][i];
         }
     }
 
     // Vertical checks
     for (let i = 0; i < 3; i++) {
         if (field[0][i] !== 0 && field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
             return field[i][i];

         }
     }
 
     // Diagonal checks
     if (field[0][0] !== 0 && field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
         return field[1][1];

     }
 
     if (field[0][2] !== 0 && field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
         return field[1][1];

     }
 
     return 0;
 }
 
function cellClick(x, y) {
     if (turnNo <= 9) {
          const winner= checkWinner();
          if(winner!==0){
               console.log('winner:',winner)
               turnNo=10;
               document.getElementById('winner').innerHTML=`Winner:${winner}`

          }
          var id = String(x) + String(y);
          x--;y--;
          const cell = document.getElementById(id);
          let symbol = 0;
          if (turn === true && field[x][y] === 0) {
               symbol = 'cross';
               field[x][y] = 'cross'
               turnNo++;
               turn = !turn;
               const winner= checkWinner();
               if(winner!==0){
                    console.log('winner:',winner)
                    turnNo=10;
                    document.getElementById('winner').innerHTML=`Winner:${winner}`

               }

          }
          else if (turn === false && field[x][y] === 0) {
               symbol = 'circle';
               field[x][y] = 'circle'
               turnNo++;
               turn = !turn;
               const winner= checkWinner();
               if(winner!==0){
                    console.log('winner:',winner)
                    turnNo=10;
                    document.getElementById('winner').innerHTML=`Winner:${winner}`
               }


          }
          cell.classList.add(symbol);
     }
     
     if(turnNo===9){
          console.log('game finished')
          document.getElementById('winner').innerHTML=`Draw`

     }
}
