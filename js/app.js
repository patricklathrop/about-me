'use strict';
// use strict is almost alwayst the first line of our js files

// this console.log is just the test that we've hooked up the files correctly
console.log('the javascript is linked correctly!');

var username = prompt('Hello, what is your name!');
//console.log('user\'s name was ' + username);
alert('Welcome to my page ' + username + '. \nPlease use the paragraphs below to answer questions.');

function myQuiz() {

  var correct = 0;
  var incorrect = 0;

  // console.log('Correct = ' + correct)
  // console.log('Incorrect = ' + incorrect)

  var answer = prompt('I started making moonshine at the age of 12? y/yes or n/no');
  // console.log('user\'s 1st answer was ' + answer);
  var lowerCaseAnswer1 = answer.toLowerCase();
  if ((lowerCaseAnswer1 === 'y') || (lowerCaseAnswer1 === 'yes')) {
    alert('You chose correctly');
    correct = correct + 1;
  } else {
    alert('You chose incorrectly');
    incorrect = incorrect + 1;
  }

  // console.log('Correct = ' + correct)
  // console.log('Incorrect = ' + incorrect)

  var answer = prompt('My brother taught me how to make moonshine? y/yes or n/no');
  // console.log('user\'s 2nd answer was ' + answer);
  var lowerCaseAnswer2 = answer.toLowerCase();
  if ((lowerCaseAnswer2 === 'n') || (lowerCaseAnswer2 === 'no')) {
    alert('You chose correctly');
    correct = correct + 1;
  } else {
    alert('You chose incorrectly');
    incorrect = incorrect + 1;
  }

  // console.log('Correct = ' + correct)
  // console.log('Incorrect = ' + incorrect)

  var answer = prompt('I joined the French Foreign Legion? y/yes or n/no');
  // console.log('user\'s 3rd answer was ' + answer);
  var lowerCaseAnswer3 = answer.toLowerCase();
  if ((lowerCaseAnswer3 === 'n') || (lowerCaseAnswer3 === 'no')) {
    alert('You chose correctly');
    correct = correct + 1;
  } else {
    alert('You chose incorrectly');
    incorrect = incorrect + 1;
  }

  // console.log('Correct = ' + correct)
  // console.log('Incorrect = ' + incorrect)

  var answer = prompt('The study of cryptozoology includes bigfoot? y/yes or n/no');
  // console.log('user\'s 4th answer was ' + answer);
  var lowerCaseAnswer4 = answer.toLowerCase();
  if ((lowerCaseAnswer4 === 'y') || (lowerCaseAnswer4 === 'yes')) {
    alert('You chose correctly');
    correct = correct + 1;
  } else {
    alert('You chose incorrectly');
    incorrect = incorrect + 1;
  }
  // console.log('Correct = ' + correct)
  // console.log('Incorrect = ' + incorrect)

  var answer = prompt('The BFRO has their own website? y/yes or n/no');
  // console.log('user\'s 5th answer was ' + answer);
  var lowerCaseAnswer5 = answer.toLowerCase();
  if ((lowerCaseAnswer5 === 'y') || (lowerCaseAnswer5 === 'yes')) {
    alert('You chose correctly');
    correct = correct + 1;
  } else {
    alert('You chose incorrectly');
    incorrect = incorrect + 1;
  }
  // console.log('Correct = ' + correct)
  // console.log('Incorrect = ' + incorrect)
}

// function picNumber() {

//   var numRight = 5
//   var i = 1

//   var numGuess = prompt('Select a number between 1-10 - you have 4 chances' );
// var numAnswer = Math.ceil(Math.random() *20);
//   if (i < 5)
//     else 

