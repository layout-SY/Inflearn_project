let playerScore = 0;
let computerScore = 0;
let moves = 0;
const totalCount = 10;

const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');

    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['가위', '바위', '보'];

    playerOptions.forEach(option => {
        option.addEventListener('click', () => {

            const movesLeft = document.querySelector('.movesleft');
            moves++;
            movesLeft.innerText = `남은 횟수: ${totalCount - moves}`;

            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];
            console.log(option);
            console.log(option.innerText);

            // 누가 이겼는지 확인
            winner(option.innerText, computerChoice);

            // 10번을 다 선택했으면 game over!
            if (moves === 10) {
                gameOver(playerOptions, movesLeft);
            }
        })
    })

}


const gameOver = (playerOptions, movesLeft) => {

    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');

    playerOptions.forEach(option => {
        option.style.display = 'none';
    })

    chooseMove.innerText = '게임 종료!';
    movesLeft.style.display = 'none';

    if (playerScore > computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = '게임에서 이겼습니다.';
        result.style.color = '#308D46';
    }
    else if (playerScore < computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = '게임에서 졌습니다.';
        result.style.color = 'red';
    }
    else {
        result.style.fontSize = '2rem';
        result.innerText = '무승부';
        result.style.color = 'grey';
    }

    reloadBtn.innerText = '다시 시작';
    reloadBtn.style.display = 'flex';
    reloadBtn.addEventListener('click', () => {
        window.location.reload();
    })

}


const winner = (player, computer) => {

    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');

    if (player === computer) {
        result.textContent = '무승부';
    }
    else if (player === '바위') {
        if (computer === '보') {
            result.textContent = '컴퓨터 승리';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = '플레이어 승리';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player === '가위') {
        if (computer === '바위') {
            result.textContent = '컴퓨터 승리';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = '플레이어 승리';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player === '보') {
        if (computer === '가위') {
            result.textContent = '컴퓨터 승리';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = '플레이어 승리';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }


}



playGame();