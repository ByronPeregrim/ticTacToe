var events = {
    events: {},
    on: function (eventName, fn) {
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.events[eventName]) {
        for (var i = 0; i < this.events[eventName].length; i++) {
          if (this.events[eventName][i] === fn) {
            this.events[eventName].splice(i, 1);
            break;
          }
        };
      }
    },
    emit: function (eventName, data) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(function(fn) {
          fn(data);
        });
      }
    }
  };


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

playerModule.init();
/*
const Player = {
    people: [],
    init: function() {
        this.cacheDom();
    },
    cacheDom: function() {
        this.$el = $('#leftPanel');
        this.$firstPlayerName = this.$el.find('#firstPlayerName');
        this.$secondPlayerName = this.$el.find('#secondPlayerName');
        this.$button = this.$el.find('button');
    },
    editNames: function() {
        player1 = prompt("Enter name for player 1: ", 'Bill');
        player2 = prompt('Enter name for player 2: ', 'Ted');
        this.$firstPlayerName.innerHTML = "Player 1: " + player1;
        
    }

};
Player.init();
Player.editNames();

*/ 

// user clicks edit names input
// user is prompted to input player names
// player names are stored and displayed in playerName divs






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