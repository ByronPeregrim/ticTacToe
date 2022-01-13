const Player = (name) => {
    return {name}
};

const playerModule = {
    people: [],
    init: function() {
        this.cacheDom();
        this.attachEventListeners();
    },
    cacheDom: function() {
        this.$firstPlayerName = document.querySelector('#firstPlayerName');
        this.$secondPlayerName = document.querySelector('#secondPlayerName');
        this.$button = document.querySelector('#editNamesButton');
    },
    attachEventListeners: function () {
        this.$button.addEventListener('click', playerModule.editNames);
    },
    editNames: function () {
        player1 = prompt("Enter name for Player X: ", 'Bill');
            player2 = prompt('Enter name for Player O: ', 'Ted');
            playerModule.$firstPlayerName.innerHTML = "Player X: " + player1;
            playerModule.$secondPlayerName.innerHTML = 'Player O: ' + player2;
    }
};


const board = {
    init: function() {
        this.cacheDom();
        this.attachEventListeners();
    },
    cacheDom: function() {
        this.$allSquares = document.querySelectorAll('.square');
    },
    attachEventListeners: function() {
        this.$allSquares.forEach(square => {
            square.addEventListener('click', function(e) {
                board.addMark(e.target, 'X');
            });
        });
    },
    addMark : function(ele, symbol) {
        ele.innerHTML = symbol;
    }
};


const results = {
    init: function() {
        this.cacheDom();
        this.attachEventListeners();
    },
    cacheDom: function() {
        this.$resultsContainer = document.querySelector('.resultsContainer');
        this.$button = document.querySelector('#startNewGameButton');
    },
    attachEventListeners: function() {
        this.$button.addEventListener('click', results.startNewGame);
    },
    startNewGame: function() {
        board.$allSquares.forEach(square => {
            square.innerHTML = '';
        });
    }
};


playerModule.init();
results.init();
board.init();

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