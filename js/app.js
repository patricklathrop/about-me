'use strict';
// use strict is almost alwayst the first line of our js files



// this console.log is just the test that we've hooked up the files correctly
console.log('the javascript is linked correctly!');

// declare global variables
var score = 0;
var username = '';

function greeting() {
  username = prompt('Hello, what is your name!');
  //console.log('user\'s name was ' + username);
  alert('Welcome to my page ' + username + '. \nPlease use the paragraphs below to answer questions.');
}

function myQuiz() {

  function questionOne() {
    var answer = prompt('I started making moonshine at the age of 12? y/yes or n/no');
    console.log('user\'s 1st answer was ' + answer);
    var lowerCaseAnswer = answer.toLowerCase();
    if ((lowerCaseAnswer === 'y') || (lowerCaseAnswer === 'yes')) {
      alert('You chose correctly');
      score++;
    } else {
      alert('You chose incorrectly');
    }
  }

  function questionTwo() {
    var answer = prompt('My brother taught me how to make moonshine? y/yes or n/no');
    console.log('user\'s 2nd answer was ' + answer);
    var lowerCaseAnswer = answer.toLowerCase();
    if ((lowerCaseAnswer === 'n') || (lowerCaseAnswer === 'no')) {
      alert('You chose correctly');
      score++;
    } else {
      alert('You chose incorrectly');
    }
  }

  function questionThree() {
    var answer = prompt('I joined the French Foreign Legion? y/yes or n/no');
    console.log('user\'s 3rd answer was ' + answer);
    var lowerCaseAnswer = answer.toLowerCase();
    if ((lowerCaseAnswer === 'n') || (lowerCaseAnswer === 'no')) {
      alert('You chose correctly');
      score++;
    } else {
      alert('You chose incorrectly');
    }
  }

  function questionFour() {
    var answer = prompt('The study of cryptozoology includes bigfoot? y/yes or n/no');
    console.log('user\'s 4th answer was ' + answer);
    var lowerCaseAnswer = answer.toLowerCase();
    if ((lowerCaseAnswer === 'y') || (lowerCaseAnswer === 'yes')) {
      alert('You chose correctly');
      score++;
    } else {
      alert('You chose incorrectly');
    }
  }

  function questionFive() {
    var answer = prompt('The BFRO has their own website? y/yes or n/no');
    console.log('user\'s 5th answer was ' + answer);
    var lowerCaseAnswer = answer.toLowerCase();
    if ((lowerCaseAnswer === 'y') || (lowerCaseAnswer === 'yes')) {
      alert('You chose correctly');
      score++;
    } else {
      alert('You chose incorrectly');
    }
  }

  function questionSix() {
    // random number question - question 6
    var randomNumber = Math.ceil(Math.random() * 10);
    console.log(randomNumber);
    for (let i = 4; i > 0; i--) {
      var numberGuess = prompt('Guess a number between 1 and 10.');
      numberGuess = parseInt(numberGuess);
      if (numberGuess > randomNumber) {
        alert('Too high. Guess again. ' + (i - 1) + ' attempt remaining.');
      } else if (numberGuess < randomNumber) {
        alert('Too low. Guess again. ' + (i - 1) + ' attempts remaining.');
      } else {
        alert('Correct!');
        i = 0;
        score++;
      }
    }
  }


  function questionSeven() {
    // question 7 - array question
    var bigFeet = ['harry', 'sassy sally', 'yeti', 'sasquatch', 'skookum'];

    // gives the user 6 attempts to guess one of the names
    for (var j = 6; j > 0; j--) {
      var nameGuess = prompt('What\'s another name for Bigfoot?');
      nameGuess = nameGuess.toLowerCase();
      if (bigFeet.includes(nameGuess)) {
        alert('Correct!');
        j = 0;
        score++;
      } else {
        alert('That is not a name for Bigfoot. You have ' + (j - 1) + ' guesses remaining.');
      }
    }

    // informs the user the acceptable names for Bigfoot
    function bigNames() {
      for (var k = 0; k < bigFeet.length; k++) {
        alert('Another name for Bigfoot is ' + bigFeet[k] + '.');
      }
    }
    bigNames();
  }

  // informs the user of their final score
  function goodbye() {
    alert('Thank\s for playing ' + username + '. Your final score is ' + score + ' out of 7.');
  }

  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
  questionSix();
  questionSeven();
  goodbye();
}

greeting();