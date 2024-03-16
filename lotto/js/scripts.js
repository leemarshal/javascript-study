document.addEventListener('DOMContentLoaded', function() {
    const lottoNumbers = generateLottoNumbuers();
    lottoNumbers.sort(compare);
    const wrapper = document.querySelector('.lotto-wrapper');
    wrapper.innerHTML = '';
    lottoNumbers.forEach(number => {
        const ball = document.createElement('div');
        ball.className = 'lotto-ball';
        ball.textContent = number;
        wrapper.appendChild(ball);
    });
});

function generateLottoNumbuers() {
    var list = [];
    var result = [];

    for(var i = 1; i <= 45; i++) {
        list.push(i);
    }

    var index;

    for(i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * list.length);
        result.push(list[index]);
        list.splice(index, 1);
    }

    return result;
}

function compare(a, b) {
    return a - b;
}
