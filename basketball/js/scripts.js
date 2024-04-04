var comScore = 0;
var userScore = 0;
var isComputerTurn = true;
function onComputerShoot() {
    if(!isComputerTurn) return;
    var textElem = document.getElementById('text');
    var comScoreElem = document.getElementById('computer-score');
    var shootType = Math.random() < 0.5 ? 2 : 3;

    if(shootType === 2) {
        if(Math.random() < 0.5) {
            textElem.innerHTML = '컴퓨터 2점슛 성공'
            comScore += 2;
        } else {
            textElem.innerHTML = '컴퓨터 2점슛 실패'
        }
    } else {
        if(Math.random() < 0.33) {
            textElem.innerHTML = '컴퓨터 3점슛 성공'
            comScore += 3;
        } else {
            textElem.innerHTML = '컴퓨터 3점슛 실패'
        }
    }
    comScoreElem.innerHTML = comScore;
    isComputerTurn = false;
}

function onUserShoot(shootType) {
    if(isComputerTurn) return;
    textElem = document.getElementById('text');
    var userScoreElem = document.getElementById('user-score');

    if(shootType === 2) {
        if(Math.random() < 0.5) {
            textElem.innerHTML = '사용자 2점슛 성공'
            userScore += 2;
        } else {
            textElem.innerHTML = '사용자 2점슛 실패'
        }
    } else {
        if(Math.random() < 0.33) {
            textElem.innerHTML = '사용자 3점슛 성공'
            userScore += 3;
        } else {
            textElem.innerHTML = '사용자 3점슛 실패'
        }
    }
    userScoreElem.innerHTML = userScore;
    isComputerTurn = true;
}