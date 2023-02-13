let cell1 = document.getElementById('cell1');
let cell2 = document.getElementById('cell2');
let cell3 = document.getElementById('cell3');
let cell4 = document.getElementById('cell4');
let cell5 = document.getElementById('cell5');
let cell6 = document.getElementById('cell6');
let cell7 = document.getElementById('cell7');
let cell8 = document.getElementById('cell8');
let cell9 = document.getElementById('cell9');

let playerXForm = document.getElementById('player1');
let playerOForm = document.getElementById('player2');

let cell = document.getElementsByClassName('cell');

let startButton = document.getElementById('startButton');
let resetButton = document.getElementById('resetButton');

let isGameActive = false;
let gameState = true;

startButton.addEventListener('click', gameActive);
resetButton.addEventListener('click', resetGame);

cell1.addEventListener('click', play1);
cell2.addEventListener('click', play2);
cell3.addEventListener('click', play3);
cell4.addEventListener('click', play4);
cell5.addEventListener('click', play5);
cell6.addEventListener('click', play6);
cell7.addEventListener('click', play7);
cell8.addEventListener('click', play8);
cell9.addEventListener('click', play9);

function gameActive(){
    
    if(playerXForm.value === '' || playerOForm.value === ''){
        alert("please enter your name(s)")
    }else{
        isGameActive = true
    }
}
function resetGame(){
    gameState = true;
    isGameActive = false;

    playerXForm.value = '';
    playerOForm.value = '';

    cell1.innerText = '';
    cell2.innerText = '';
    cell3.innerText = '';
    cell4.innerText = '';
    cell5.innerText = '';
    cell6.innerText = '';
    cell7.innerText = '';
    cell8.innerText = '';
    cell9.innerText = '';
}

function play1(){
    if(gameState === true && cell1.innerText === '' && isGameActive){
        cell1.innerText = 'X';
        gameState = false;
    }else if(gameState === false && cell1.innerText === '' && isGameActive){
        cell1.innerText = 'O';
         gameState = true;
    }
    checkWin()
}
    
 function play2(){
    if(gameState === true && cell2.innerText === '' && isGameActive){
          cell2.innerText = 'X';
         gameState = false;
    }else if(gameState === false && cell2.innerText === '' && isGameActive){
         cell2.innerText = 'O';
         gameState = true;
     }
     checkWin()
 }
 function play3(){
    if(gameState === true && cell3.innerText === '' && isGameActive){
          cell3.innerText = 'X';
         gameState = false;
    }else if(gameState === false && cell3.innerText === '' && isGameActive){
         cell3.innerText = 'O';
         gameState = true;
     }
     checkWin()
 }
 function play4(){
    if(gameState === true && cell4.innerText === '' && isGameActive){
          cell4.innerText = 'X';
         gameState = false;
    }else if(gameState === false && cell4.innerText === '' && isGameActive){
         cell4.innerText = 'O';
         gameState = true;
     }
     checkWin()
 }
 function play5(){
    if(gameState === true && cell5.innerText === '' && isGameActive){
          cell5.innerText = 'X';
         gameState = false;
    }else if(gameState === false && cell5.innerText === '' && isGameActive){
         cell5.innerText = 'O';
         gameState = true;
     }
     checkWin()
 }
 function play6(){
    if(gameState === true && cell6.innerText === '' && isGameActive){
          cell6.innerText = 'X';
         gameState = false;
    }else if(gameState === false && cell6.innerText === '' && isGameActive){
         cell6.innerText = 'O';
         gameState = true;
     }
     checkWin()
 }
 function play7(){
    if(gameState === true && cell7.innerText === '' && isGameActive){
          cell7.innerText = 'X';
         gameState = false;
    }else if(gameState === false && cell7.innerText === '' && isGameActive){
         cell7.innerText = 'O';
         gameState = true;
     }
     checkWin()
 }
 function play8(){
    if(gameState === true && cell8.innerText === '' && isGameActive){
          cell8.innerText = 'X';
         gameState = false;
    }else if(gameState === false && cell8.innerText === '' && isGameActive){
         cell8.innerText = 'O';
         gameState = true;
     }
     checkWin()
 }
 function play9(){
    if(gameState === true && cell9.innerText === '' && isGameActive){
          cell9.innerText = 'X';
         gameState = false;
    }else if(gameState === false && cell9.innerText === '' && isGameActive){
         cell9.innerText = 'O';
         gameState = true;
     }
     checkWin()
 }

 function checkWin(){
    if((cell1.innerText === 'X' && cell2.innerText === 'X' && cell3.innerText === 'X') || (cell4.innerText === 'X' && cell5.innerText === 'X' && cell6.innerText === 'X') || 
    (cell7.innerText === 'X' && cell8.innerText === 'X' && cell9.innerText === 'X') || (cell1.innerText === 'X' && cell5.innerText === 'X' && cell9.innerText === 'X')||
    (cell3.innerText === 'X' && cell5.innerText === 'X' && cell7.innerText === 'X')|| (cell1.innerText === 'X' && cell4.innerText === 'X' && cell7.innerText === 'X')||
    (cell2.innerText === 'X' && cell5.innerText === 'X' && cell8.innerText === 'X')|| (cell3.innerText === 'X' && cell6.innerText === 'X' && cell9.innerText === 'X')){
        isGameActive = false
        alert(`${playerXForm.value} wins!`)
    }
    if((cell1.innerText === 'O' && cell2.innerText === 'O' && cell3.innerText === 'O') || (cell4.innerText === 'O' && cell5.innerText === 'O' && cell6.innerText === 'O') || 
    (cell7.innerText === 'O' && cell8.innerText === 'O' && cell9.innerText === 'O') || (cell1.innerText === 'O' && cell5.innerText === 'O' && cell9.innerText === 'O')||
    (cell3.innerText === 'O' && cell5.innerText === 'O' && cell7.innerText === 'O')|| (cell1.innerText === 'O' && cell4.innerText === 'O' && cell7.innerText === 'O')||
    (cell2.innerText === 'O' && cell5.innerText === 'O' && cell8.innerText === 'O')|| (cell3.innerText === 'O' && cell6.innerText === 'O' && cell9.innerText === 'O')){
        isGameActive = false
        alert(`${playerOForm.value} wins!`)
    }
 }

 //this is definitely not my proudest work. I got complacent and ran out of time. I'd like to use office hours this week to improve my craft.