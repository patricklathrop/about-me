'use strict';
// use strict is almost alwayst the first line of our js files

function myQuiz() {

// this console.log is just the test that we've hooked up the files correctly
console.log('the javascript is linked correctly!');

var username = prompt('Hello, what is your name!');
//console.log('user\'s name was ' + username);
alert('Welcome to my page ' + username + '.  Please use the paragraph below to answer 5 questions.');

var answer = prompt('I started making moonshine at the age of 12? y or n');
//console.log('user\'s 1st answer was ' + answer);
var lowerCaseAnswer = answer.toLowerCase();
if(lowerCaseAnswer === 'y') {
  alert('You chose correctly');
} else {
  alert('You chose incorrectly');
}

var answer = prompt('My brother taught me how to make moonshine? y or n');
//console.log('user\'s 2nd answer was ' + answer);
var lowerCaseAnswer = answer.toLowerCase();
if(lowerCaseAnswer === 'n') {
  alert('You chose correctly');
} else {
  alert('You chose incorrectly');
}

var answer = prompt('I joined the French Foreign Legion? y or n');
//console.log('user\'s 3rd answer was ' + answer);
var lowerCaseAnswer = answer.toLowerCase();
if(lowerCaseAnswer === 'n') {
    alert('You chose correctly');
  } else {
    alert('You chose incorrectly');
  }

var answer = prompt('The study of cryptozoology includes bigfoot? y or n');
//console.log('user\'s 4th answer was ' + answer);
var lowerCaseAnswer = answer.toLowerCase();
if(lowerCaseAnswer === 'y') {
    alert('You chose correctly');
  } else {
    alert('You chose incorrectly');
  }

var answer = prompt('The BFRO has their own website? y or n');
//console.log('user\'s 5th answer was ' + answer);
var lowerCaseAnswer = answer.toLowerCase();
if(lowerCaseAnswer === 'y') {
    alert('You chose correctly');
  } else {
    alert('You chose incorrectly');
  }
}