let players = ["X","O"];
let currentPlayer = players[Math.flooar(Math.random()*1+1)];
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let wins = document.getElementById('wins');
let btn = document.getElementById('btn');
let popup = document.getElementById('popup');
let ting = new Audio('ting.mp3');
let bgMusic = new Audio('music.mp3');
let gameover = new Audio('gameover.mp3');
document.getElementById('turn').textContent = currentPlayer;

function initializeGame() {
    const board = document.getElementById("board");
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = i;
        cell.addEventListener("click", () => makeMove(i));
        board.appendChild(cell);
    }
}
function makeMove(index) {
    if (gameBoard[index] === "") {
        gameBoard[index] = currentPlayer;
        const cell = document.getElementById(index);
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);
        ting.play();
        checkWinner();
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
        document.getElementById('turn').textContent = currentPlayer;
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            wins.textContent = currentPlayer;
            document.getElementById('win').textContent = 'Wins';
            popup.style.display = 'flex';
            btn.textContent = 'Play Again';
            gameover.play();
            bgMusic.pause();
            return;
        }
    }

    if (!gameBoard.includes("")) {
        wins.textContent = "Draw";
        document.getElementById('win').textContent = '';
        popup.style.display = 'flex';
        btn.textContent = 'Play Again';
        gameover.play();
        bgMusic.pause();
    }
}


function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
        cells[i].classList.remove("X", "O");
        popup.style.display = 'none';
        bgMusic.play(); 
    }
    currentPlayer = "X";
document.getElementById('turn').textContent = currentPlayer;
}
initializeGame();
