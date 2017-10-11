var $message = $('#message'),
    $letters = $('#spaces'),
    $guesses = $('#guesses'),
    $button = $('.newGame'),
    $image = $("#gallows img");


var randomWord = function() {
  var words = ["oil", "jerky", "quiche", "abalone", "orange"];

  return function() {
    var word = words[Math.floor(Math.random() * words.length)];
    words.splice(words.indexOf(word),1);
    return word;
  };
}();

function Game() {
  this.word = randomWord();
  this.guesses = [];
  this.incorrect = 0;
  this.allowedWrongGueses = 9;

  if (!this.word) {
    this.displayMessage("Sorry, I've run out of words!")
  }
  this.init();
}

Game.prototype = {
  displayMessage: function(text) {
    $message.show().text(text);
  },
  createBlanks: function() {
    if (this.word) {
      var len = this.word.length;
      for (var i = 1; i <= len; i++) {
        $letters.append("<span>_</span>");
      }
    }
  },
  findIndexes: function(letter) {
    var i = 0,
        indexes = [],
        match;
    while (match !== -1 && i <= this.word.length) {
      match = this.word.indexOf(letter, i);
      indexes.push(match);
      i = i + match + 1;
    }
    return indexes;
  },
  revealLetters: function(indexes, guess) {
    indexes.forEach(function(index) {
      $($letters.find('span')[index]).text(guess.toUpperCase());
    });
  },
  gameOver: function() {
    this.displayMessage("You lose!");
    $button.show();
    $(document).unbind();
  },
  win: function() {
    this.displayMessage("Congratulation! You Win!");
    $button.show();
    $(document).unbind();
  },
  checkState: function() {
    if (this.incorrect === this.allowedWrongGueses) {
      this.gameOver();
    } else {
      var result = [];
      $letters.find('span').each(function() {
        result.push(this.innerText);
      });

      if (result.join("") === this.word.toUpperCase()) {
        this.win();
      }
    }
  },
  processGuess: function(e) {
    var key = e.which,
        guess = String.fromCharCode(key),
        indexes = [];

    if (key >=97 && key <= 122 && this.guesses.indexOf(guess) === -1) {
      this.guesses.push(guess);
      $guesses.append(`<span>${_(this.guesses).last().toUpperCase()}</span>`);
    }

    indexes = this.findIndexes(guess);

    if (indexes[0] !== -1) {
      this.revealLetters(indexes, guess);
    } else {
      this.incorrect += 1;
      $image.attr("src", `img/s${this.incorrect}.jpg`);
    }

    this.checkState();
  },
  bind: function() {
    $(document).on('keypress', this.processGuess.bind(this));
  },
  resetBoard: function() {
    $message.hide();
    $button.hide();
    $letters.find('span').remove();
    $guesses.find('span').remove();
    $image.attr("src", `img/s0.jpg`);
  },
  init: function() {
    this.resetBoard();
    this.bind();
    this.createBlanks();
  }
};

new Game();

$('.newGame a').on('click', function(e) {
  e.preventDefault();
  new Game();
});



