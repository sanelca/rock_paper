
var options = {1 : 'Rock', 2 : 'Paper', 3 : 'Scisors'}
var user = 0;
var computer = 0;
var tieCount = 0;
var winCount = 0;
var loseCount = 0;
var gamesCount = 0;


function choosenByUser(userChose) {
    user = userChose;
    computer = Math.floor(Math.random() * 3) + 1;
    jQuery('.user').html(options[user]); jQuery('.computer').html(options[computer]);
    cases();
}

function cases() {
    gamesCount = gamesCount + 1;
    if(computer == user) {
        tieCount = tieCount + 1;
    } else if ((user == 1 && computer == 2) || (user == 2 && computer == 3) || (user == 3 && computer == 1)) {
        loseCount = loseCount + 1;
    } else if ((user == 1 && computer == 2) || (user == 1 && computer == 3) || (user == 3 && computer == 2)) {
        winCount = winCount + 1;
    }
    jQuery('.tie').html(tieCount); jQuery('.wins').html(winCount); jQuery('.lose').html(loseCount);
}