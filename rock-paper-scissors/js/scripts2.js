var ROCK = '바위';
var SCISSORS = '가위';
var PAPER = '보';
//var userInput;

function onButtonClick(userInput) {
    var comInput;
    var rnd = Math.random();

    if(rnd < 0.33) {
        comInput = SCISSORS;
    } else if(rnd > 0.66) {
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }

    if(userInput === comInput) {
        alert('사용자: ' + userInput + ' 컴퓨터: ' + comInput + ' 비겼습니다.');
    } else if(userInput === SCISSORS) {
        if(comInput === ROCK) {
            alert('사용자: ' + userInput + ' 컴퓨터: ' + comInput + ' 졌습니다.');
        } else {
            alert('사용자: ' + userInput + ' 컴퓨터: ' + comInput + ' 이겼습니다.');
        }
    } else if(userInput === ROCK) {
        if(comInput === PAPER) {
            alert('사용자: ' + userInput + ' 컴퓨터: ' + comInput + ' 졌습니다.');
        } else {
            alert('사용자: ' + userInput + ' 컴퓨터: ' + comInput + ' 이겼습니다.');
        }
    } else {
        if(comInput === SCISSORS) {
            alert('사용자: ' + userInput + ' 컴퓨터: ' + comInput + ' 졌습니다.');
        } else {
            alert('사용자: ' + userInput + ' 컴퓨터: ' + comInput + ' 이겼습니다.');
        }
    }
}