
const Player = () => {
    player1 = {
        name: 'Player 1',
        symbol: 'X'
    };
    player2 = {
        name: 'Player 2',
        symbol: 'O'
    };
    const init = () => {
        cacheDom();
        attachEventListeners();
    };
    const cacheDom = () => {
        $firstPlayerName = document.querySelector('#firstPlayerName');
        $secondPlayerName = document.querySelector('#secondPlayerName');
        $button = document.querySelector('#editNamesButton');
    }   
    const attachEventListeners = () => {
        $button.addEventListener('click', editNames);
    };
    const editNames = () => {
        player1Name = prompt("Enter name for Player X: ", 'Player 1');
        player1.name = player1Name;
        player2Name = prompt('Enter name for Player O: ', 'Player 2');
        player2.name = player2Name;
        $firstPlayerName.innerHTML = "X: " + player1.name;
        $secondPlayerName.innerHTML = 'O: ' + player2.name;
    };
    init();
    return {player1, player2};
};


const boardModule = {
    boardArray: [],
    init: function() {
        this.cacheDom();
        this.createBoard(); 
    },
    cacheDom: function() {
        this.$board = document.querySelector('.board');
    },
    createBoard: function() {
        this.pushSquaresToArray();
        this.renderSquares();
    },
    
    renderSquares: function() {
        this.$board.innerHTML = '';
        for (let i=0; i<9; i++) {
            $square = document.createElement('div');
            $square.classList.add('square');
            $square.setAttribute('id', i);
            $square.innerHTML = boardModule.boardArray[i].symbol;
            boardModule.$board.appendChild($square);
        };
        gameModule.addListenerToSquares();
    },
    pushSquaresToArray: function() {
        for (let i=0; i<9; i++) {
            boardModule.boardArray.push({symbol: null, number: i+1});
        };
    },
};

const gameModule = {
    counter: 0,
    init: function() {
        this.cacheDom();
        this.attachEventListeners();
    },
    cacheDom: function() {
        this.$resultsContainer = document.querySelector('.resultsContainer');
        this.$button = document.querySelector('#startNewGameButton');
    },
    attachEventListeners: function() {
        this.$button.addEventListener('click', function () {
            gameModule.startNewGame();
        });
    },
    startNewGame: function() {
        boardModule.boardArray.forEach(square => {
            square.symbol = null;
        });
        gameModule.counter = 0;
        gameModule.$resultsContainer.innerHTML = 'Turn: ' + gameModule.counter;
        boardModule.renderSquares();
    },
    addListenerToSquares: function(){
        this.$allSquares = document.querySelectorAll('.square');
        this.$allSquares.forEach(square => {
            square.addEventListener('click', makingMove = () => {
                gameModule.makeMove(square);
            });
        });
    },
    getPlayerTurn: function() {
        if (this.counter % 2 == 0) {
            return true;
        } else {
            return false;
        };
    },
    
    makeMove: function(square) {
        if (gameModule.getPlayerTurn() === true && boardModule.boardArray[square.id].symbol === null) {
            (boardModule.boardArray[square.id]).symbol = 'X'; 
            boardModule.renderSquares();
            gameModule.counter++;
            gameModule.$resultsContainer.innerHTML = 'Turn: ' + gameModule.counter;
            gameModule.checkForWinner();
        } else if (gameModule.getPlayerTurn() === false && boardModule.boardArray[square.id].symbol === null) {
            (boardModule.boardArray[square.id]).symbol = 'O'; 
            boardModule.renderSquares();
            gameModule.counter++;
            gameModule.$resultsContainer.innerHTML = 'Turn: ' + gameModule.counter;
            gameModule.checkForWinner();
        }
    },
    checkForWinner: function() {
        if (document.getElementById('0').innerHTML == 'X' && document.getElementById('1').innerHTML == 'X' && document.getElementById('2').innerHTML == 'X') {
            gameModule.$resultsContainer.innerHTML = player1.name + ' is the winner!';
            gameModule.endGame(player1.name);
        } else if (document.getElementById('3').innerHTML == 'X' && document.getElementById('4').innerHTML == 'X' && document.getElementById('5').innerHTML == 'X') {
            gameModule.$resultsContainer.innerHTML = player1.name + ' is the winner!';
            gameModule.endGame(player1.name);
        } else if (document.getElementById('6').innerHTML == 'X' && document.getElementById('7').innerHTML == 'X' && document.getElementById('8').innerHTML == 'X') {
            gameModule.$resultsContainer.innerHTML = player1.name + ' is the winner!';
            gameModule.endGame(player1.name);
        } else if (document.getElementById('0').innerHTML == 'X' && document.getElementById('3').innerHTML == 'X' && document.getElementById('6').innerHTML == 'X') {
            gameModule.$resultsContainer.innerHTML = player1.name + ' is the winner!';
            gameModule.endGame(player1.name);
        } else if (document.getElementById('1').innerHTML == 'X' && document.getElementById('4').innerHTML == 'X' && document.getElementById('7').innerHTML == 'X') {
            gameModule.$resultsContainer.innerHTML = player1.name + ' is the winner!';
            gameModule.endGame(player1.name);
        } else if (document.getElementById('2').innerHTML == 'X' && document.getElementById('5').innerHTML == 'X' && document.getElementById('8').innerHTML == 'X') {
            gameModule.$resultsContainer.innerHTML = player1.name + ' is the winner!';
            gameModule.endGame(player1.name);
        } else if (document.getElementById('0').innerHTML == 'X' && document.getElementById('4').innerHTML == 'X' && document.getElementById('8').innerHTML == 'X') {
            gameModule.$resultsContainer.innerHTML = player1.name + ' is the winner!';
            gameModule.endGame(player1.name);
        } else if (document.getElementById('2').innerHTML == 'X' && document.getElementById('4').innerHTML == 'X' && document.getElementById('6').innerHTML == 'X') {
            gameModule.$resultsContainer.innerHTML = player1.name + ' is the winner!';
            gameModule.endGame(player1.name);
        } else if (document.getElementById('0').innerHTML == 'O' && document.getElementById('1').innerHTML == 'O' && document.getElementById('2').innerHTML == 'O') {
            gameModule.$resultsContainer.innerHTML = player2.name + ' is the winner!';
            gameModule.endGame(player2.name);
        } else if (document.getElementById('3').innerHTML == 'O' && document.getElementById('4').innerHTML == 'O' && document.getElementById('5').innerHTML == 'O') {
            gameModule.$resultsContainer.innerHTML = player2.name + ' is the winner!';
            gameModule.endGame(player2.name);
        } else if (document.getElementById('6').innerHTML == 'O' && document.getElementById('7').innerHTML == 'O' && document.getElementById('8').innerHTML == 'O') {
            gameModule.$resultsContainer.innerHTML = player2.name + ' is the winner!';
            gameModule.endGame(player2.name);
        } else if (document.getElementById('0').innerHTML == 'O' && document.getElementById('3').innerHTML == 'O' && document.getElementById('6').innerHTML == 'O') {
            gameModule.$resultsContainer.innerHTML = player2.name + ' is the winner!';
            gameModule.endGame(player2.name);
        } else if (document.getElementById('1').innerHTML == 'O' && document.getElementById('4').innerHTML == 'O' && document.getElementById('7').innerHTML == 'O') {
            gameModule.$resultsContainer.innerHTML = player2.name + ' is the winner!';
            gameModule.endGame(player2.name);
        } else if (document.getElementById('2').innerHTML == 'O' && document.getElementById('5').innerHTML == 'O' && document.getElementById('8').innerHTML == 'O') {
            gameModule.$resultsContainer.innerHTML = player2.name + ' is the winner!';
            gameModule.endGame(player2.name);
        } else if (document.getElementById('0').innerHTML == 'O' && document.getElementById('4').innerHTML == 'O' && document.getElementById('8').innerHTML == 'O') {
            gameModule.$resultsContainer.innerHTML = player2.name + ' is the winner!';
            gameModule.endGame(player2.name);
        } else if (document.getElementById('2').innerHTML == 'O' && document.getElementById('4').innerHTML == 'O' && document.getElementById('6').innerHTML == 'O') {
            gameModule.$resultsContainer.innerHTML = player2.name + ' is the winner!';
            gameModule.endGame(player2.name);
        } else if (gameModule.counter === 9) {
            gameModule.$resultsContainer.innerHTML = 'Draw!';
            alert("It's a draw!");
            this.startNewGame();
        }
    },
    endGame: function(winner) {
        alert(winner + ' has won the game!')
        this.startNewGame();
    },
};


Player();
gameModule.init();
boardModule.init();










// create display controller module/object. controls flow of the game

// build logic to check for winner or tie.

// add display element that congratulates winner

