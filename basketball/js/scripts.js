var comScore = 0;
var userScore = 0;
var isComputerTurn = true;
var shotLeft = 15;
function onComputerShoot() {
    if(!isComputerTurn) return;
    var comScoreElem = document.getElementById('computer-score');
    var shootType = Math.random() < 0.5 ? 2 : 3;

    if(shootType === 2) {
        if(Math.random() < 0.5) {
            showText('컴퓨터 2점슛 성공');
            updateScore('computer', 2);
        } else {
            showText('컴퓨터 2점슛 실패');
        }
    } else {
        if(Math.random() < 0.33) {
            showText('컴퓨터 3점슛 성공');
            updateScore('computer', 3);
        } else {
            showText('컴퓨터 3점슛 실패');
        }
    }
    comScoreElem.innerHTML = comScore;
    isComputerTurn = false;
    disableComputerButtons(true);
    disableUserButtons(false);
}

function onUserShoot(shootType) {
    if(isComputerTurn) return;
    var userScoreElem = document.getElementById('user-score');
    var shotLeftElem = document.getElementById('shots-left');
    if(shootType === 2) {
        if(Math.random() < 0.5) {
            showText('사용자 2점슛 성공');
            updateScore('user', 2);
        } else {
            showText('사용자 2점슛 실패');
        }
    } else {
        if(Math.random() < 0.33) {
            showText('사용자 3점슛 성공');
            updateScore('user', 3);
        } else {
            showText('사용자 3점슛 실패');
        }
    }
    userScoreElem.innerHTML = userScore;
    isComputerTurn = true;
    disableComputerButtons(false);
    disableUserButtons(true);
    shotLeft--;
    shotLeftElem.innerHTML = shotLeft;
    isFinished();
}

function disableComputerButtons(flag) {
    var computerButtons = document.getElementsByClassName('btn-computer');
    for(var i = 0; i < computerButtons.length; i++) {
        computerButtons[i].disabled = flag;
    }
}

function disableUserButtons(flag) {
    var userButtons = document.getElementsByClassName('btn-user');
    for(var i = 0; i < userButtons.length; i++) {
        userButtons[i].disabled = flag;
    }
}

function showText(s) {
    var textElem = document.getElementById('text');
    textElem.innerHTML = s;
}

function updateScore(player, score) {
    var scoreElem;
    if(player === 'user') {
        userScore += score;
        scoreElem = document.getElementById('user-score');
        scoreElem.innerHTML = userScore;
    }
    else if(player === 'computer') {
        comScore += score;
        scoreElem = document.getElementById('computer-score');
        scoreElem.innerHTML = comScore;
    }
}

function isFinished() {
    var textElem = document.getElementById('text');
    if(shotLeft === 0) {
        if(userScore > comScore)
            textElem.innerHTML = '승리';
        else if(userScore === comScore)
            textElem.innerHTML = '무승부';
        else
            textElem.innerHTML = '패배';

        disableComputerButtons(true);
    }
}