var ROCK = '바위';
var SCISSORS = '가위';
var PAPER = '보';
var userInput;
var comInput;
var inputFlag = true;

while(inputFlag) {
    userInput = prompt('가위. 바위. 보!');
    inputFlag = false;
    if(userInput !== SCISSORS && userInput !== ROCK && userInput !== PAPER) {
        alert('가위. 바위. 보 중 하나를 입력해야 합니다.');
        inputFlag = true;
    }
}

var rnd = Math.random();

if(rnd < 0.33) {
    comInput = SCISSORS;
} else if(rnd > 0.66) {
    comInput = ROCK;
} else {
    comInput = PAPER;
}

var result = '사용자: ' + userInput + ' 컴퓨터: ' + comInput;

if(userInput === comInput) {
    result += ' 비겼습니다.';
} else if(userInput === SCISSORS) {
    if(comInput === ROCK) {
        result += ' 졌습니다.';
    } else {
        result += ' 이겼습니다.';
    }
} else if(userInput === ROCK) {
    if(comInput === PAPER) {
        result += ' 졌습니다.';
    } else {
        result += ' 이겼습니다.';
    }
} else {
    if(comInput === SCISSORS) {
        result += ' 졌습니다.';
    } else {
        result += ' 이겼습니다.';
    }

    alert(result);
}
