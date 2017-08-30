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
    $('#user-choice').html("Your Selection: " + userChoice); 

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

    $('#computer-choice').html("Computer Selection: " + computerChoice);

    var compare = function( choice1,choice2 ) {
        if( choice1 === choice2 ) {
            $('#outcome').html("Outcome: Draw!");
        }
        else if( choice1 === "rock" ) {
            if( choice2 === "scissors" ) {
                $('#outcome').html("Outcome: Win!");
            }
            else {
                $('#outcome').html("Outcome: Lose");
            }
        }
        else if( choice1 === "paper" ) {
            if( choice2 === "rock" ) {
                $('#outcome').html("Outcome: Win!");
            }
            else {
                $('#outcome').html("Outcome: Lose");
            }
        }
        else if ( choice1 === "scissors" ) {
            if( choice2 === "rock" ) {
                $('#outcome').html("Outcome: Lose");
            }
            else {
                $('#outcome').html("Outcome: Win!");
            }
        }
    };
    compare( userChoice, computerChoice );
    });
}); 