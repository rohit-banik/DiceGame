var winingScore = 30;
var turn = 1;
var p1 = 0;
var p2 = 0;

function rollDice(){
    var dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById('diceVal').innerHTML = dice;
    document.getElementById('diceVal').style.visibility = "visible";
    return dice;
}

function button(){
    if(turn == 1){
        document.getElementById('dice').innerText = "Player 2: Roll the dice";
        play();
    }
    else if(turn == 2){
        document.getElementById('dice').innerText = "Player 1: Roll the dice";
        play();
    }
}

function play(){

    if(p1 < winingScore && p2 < winingScore){
        if(turn == 1){
            document.getElementById('player2').classList.add("activePlayer")
            document.getElementById('player1').classList.remove("activePlayer")
            var diceNum = rollDice();
            if (p1+diceNum <= winingScore){
                p1 = p1 + diceNum;
            }
            turn = 2;
            document.getElementById('p1').value = p1;
        }
        else if(turn == 2){
            document.getElementById('player1').classList.add("activePlayer")
            document.getElementById('player2').classList.remove("activePlayer")
            var diceNum = rollDice();
            if (p2+diceNum <= winingScore){
                p2 = p2 + diceNum;
            }
            turn = 1;    
            document.getElementById('p2').value = p2;
        }
        else{
            document.getElementById('out').innerHTML = 'Invalid turn';
        }
    }
    
    
    if(check() == 1){
        document.getElementById('out').innerHTML = 'Player 1 is the winner';
        document.getElementById('dice').remove;
        document.getElementById('button-grp').innerHTML = "<button onclick='window.location.reload(true)'>Play Again</button>";
    }
    else if(check() == 2){
        document.getElementById('out').innerHTML = 'Player 2 is the winner';
        document.getElementById('dice').remove;
        document.getElementById('button-grp').innerHTML = "<button onclick='window.location.reload(true)'>Play Again</button>";
    }    
}

function check(){
    if(p1 == winingScore){
        return 1;
    }
    else if(p2 == winingScore){
        return 2;
    }
}

