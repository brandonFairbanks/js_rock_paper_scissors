$(document).ready(function() {
    $('#user-options').on('change', function() {
        var userChoice = 'rock';
        switch(this.value) {
            case 'rock':
                userChoice = 'rock';
                break;
            case 'paper':
                userChoice = 'paper';
                break;
            case 'scissors':
                userChoice = 'scissors';
                break;
        }
    alert("You Chose " + userChoice );
    function randomNumber( range ) {
        return Math.round( Math.random() * range )
    };

    var choiceSet = ["Rock", "Paper", "Scissors"];
    var computerChoice = randomNumber( choiceSet.length - 1 );

    if ( computerChoice === 0 ) {
        computerChoice = "rock";
    } else if( computerChoice === 1 ) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    alert( "The computer chose " + computerChoice );

    var compare = function( choice1,choice2 ) {
        if( choice1 === choice2 ) {
            alert("Draw!");
        }
        else if( choice1 === "rock" ) {
            if( choice2 === "scissors" ) {
                alert("Win!");
            }
            else {
                alert("Lose!");
            }
        }
        else if( choice1 === "paper" ) {
            if( choice2 === "rock" ) {
                alert("Win!");
            }
            else {
                alert("Lose!");
            }
        }
        else if ( choice1 === "scissors" ) {
            if( choice2 === "rock" ) {
                alert("Lose");
            }
            else {
                alert("Win!");
            }
        }
    };
    compare( userChoice, computerChoice );
    });
}); 