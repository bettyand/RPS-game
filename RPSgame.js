// I am a fool who thought we were supposed to use recursion

const hands = ["rock", "paper", "scissors"];

function getHand()
{
    return hands[parseInt(Math.random()*10)%3];
}

const player1 = {
    name: "Betty",
    hand: () => getHand()
};

const player2 = {
    name: "Chris",
    hand: () => getHand()
};


// this originally returned both hands plus the winner but I trimmed it down to streamline troubleshooting
function playRound(player1, player2)
{
    let p1hand = player1.hand();
    let p2hand = player2.hand();

    if (p1hand === p2hand) 
    {
        return "it's a tie";
    }
    else if ((p1hand == "rock") && (p2hand == "scissors")) 
    {
        return player1.name;
    }
    else if ((p1hand == "paper") && (p2hand == "rock")) 
    {
        return player1.name;
    }
    else if ((p1hand == "scissors") && (p2hand == "paper"))
    {
        return player1.name;
    }
    else if ((p1hand == "rock") && (p2hand == "paper")) 
    {
        return player2.name;
    }
    else if ((p1hand == "paper") && (p2hand == "scissors")) 
    {
        return player2.name;
    }
    else if ((p1hand == "scissors") && (p2hand == "rock")) 
    {
        return player2.name;
    }
}


let p1wins = 0;
let p2wins = 0;

function playGame (player1, player2, playUntil)
{
    if (p1wins == playUntil) 
    {
        return player1.name + " wins!";
    }
    else if (p2wins == playUntil)
    {
        return player2.name + " wins!";
    }
    else {
        let winner = playRound(player1, player2);
        
        if (winner == player1.name)
        {
            p1wins++;
            return playGame(player1, player2, playUntil);
        }
        else if (winner == player2.name)
        {
            p2wins++;
            return playGame(player1, player2, playUntil);
        }
        else if (winner == "it's a tie")
        {
            return playGame(player1, player2, playUntil);
        }
    }
}

console.log(playGame(player1, player2, 5));