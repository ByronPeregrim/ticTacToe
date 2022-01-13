
const Player = () => {
    player1 = {
        symbol: 'X'
    };
    player2 = {
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
        player1Name = prompt("Enter name for Player X: ", 'Bill');
        player1.name = player1Name;
        player2Name = prompt('Enter name for Player O: ', 'Ted');
        player2.name = player2Name;
        $firstPlayerName.innerHTML = "Player X: " + player1.name;
        $secondPlayerName.innerHTML = 'Player O: ' + player2.name;
    };
    init();
    return {player1, player2};
};


/* const boardModule = {
    board: [],
    init: function() {
        this.cacheDom();
        this.createBoard();
        this.attachEventListeners();
    },
    cacheDom: function() {
        this.$board = document.querySelector('.board');
    },
    createBoard: function() {
        const createSquare = () => {
            square = document.createElement('div');
            square.classList.add('square');
            return square;
        }
        for (let i=0; i<9; i++) {
           boardModule.$board.appendChild(createSquare());
        }
        this.$allSquares = this.$board.querySelectorAll('.square');
    },
    attachEventListeners: function() {
        this.$allSquares.forEach(square => {
            square.addEventListener('click', function(e) {
                boardModule.addMark(e.target, 'X');
            });
        });
    },
    addMark : function(ele, symbol) {
        ele.innerHTML = symbol;
    },
};
*/

const boardModule = {
    init: function() {
        this.cacheDom();
        this.createBoard();
    },
    cacheDom: function() {
        this.$board = document.querySelector('.board');
    },
    createBoard: function() {
        boardArray = [];
        const pushSquaresToArray = () => {
            for (let i=0; i<9; i++) {
                let Square = {symbol: '', number: i+1};
                boardArray.push(Square);
            };
        };
        const renderSquares = () => {
            this.$board.innerHTML = '';
            for (let item in boardArray) {
                $square = document.createElement('div');
                $square.classList.add('square')
                $square.innerHTML = boardArray[item].number;
                boardModule.$board.appendChild($square);
            };
        };
        pushSquaresToArray();
        renderSquares();
        console.log(boardArray);
    },
};



const resultsModule = {
    init: function() {
        this.cacheDom();
        this.attachEventListeners();
    },
    cacheDom: function() {
        this.$resultsContainer = document.querySelector('.resultsContainer');
        this.$button = document.querySelector('#startNewGameButton');
    },
    attachEventListeners: function() {
        this.$button.addEventListener('click', resultsModule.startNewGame);
    },
    startNewGame: function() {
        boardModule.$allSquares.forEach(square => {
            square.innerHTML = '';
        });
    }
};


Player();
resultsModule.init();
boardModule.init();

// use factory to create player objects

// create display controller module/object. controls flow of the game

// Create function that will render the content of the gameboard array to the webpage

// Build the functions that allow players to add marks to a specific spot on the board,
// and then tie it to the DOM, letting players click on the gameboard to place their marker. 

// three modules. Game. Player. Gameboard.

// build logic to check for winner or tie.

// Add interface for players to input names

// add start/restart button

// add display element that congratulates winner