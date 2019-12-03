'use strict';
// use strict is almost alwayst the first line of our js files

// this console.log is just the test that we've hooked up the files correctly
console.log('the javascript is linked correctly!');

var answer = prompt('I started making moonshine at the age of 12? y or n');
console.log('user\'s 1st answer was ' + answer);
var lowerCaseAnswer = answer.toLowerCase();
if(lowerCaseAnswer === 'y') {
  alert('You chose correctly');
} else {
  alert('You chose incorrectly');
}

var answer = prompt('My brother taught me how to make moonshine? y or n');
console.log('user\'s 2nd answer was ' + answer);
var lowerCaseAnswer = answer.toLowerCase();
if(lowerCaseAnswer === 'n') {
  alert('You chose correctly');
} else {
  alert('You chose incorrectly');
}

var answer = prompt('I joined the French Foreign Legion? y or n');
console.log('user\'s 3rd answer was ' + answer);
var lowerCaseAnswer = answer.toLowerCase();
if(lowerCaseAnswer === 'n') {
    alert('You chose correctly');
  } else {
    alert('You chose incorrectly');
  }

var answer = prompt('The study of cryptozoology includes bigfoot? y or n');
console.log('user\'s 4th answer was ' + answer);
var lowerCaseAnswer = answer.toLowerCase();
if(lowerCaseAnswer === 'y') {
    alert('You chose correctly');
  } else {
    alert('You chose incorrectly');
  }

var answer = prompt('The BFRO has their own website? y or n');
console.log('user\'s 5th answer was ' + answer);
var lowerCaseAnswer = answer.toLowerCase();
if(lowerCaseAnswer === 'y') {
    alert('You chose correctly');
  } else {
    alert('You chose incorrectly');
  }

// conditionals! let us use if, else if, else to run different pieces of code in different scenarios

// if the username is Michelle, show a custom message
// otherwise, for everyone else, show a generic message
// var lowerCaseUsername = username.toLowerCase();
// if(lowerCaseUsername === 'michelle') {
//   alert('welcome back, you cool person ' + username);
// } else {
//   alert('Welcome to my site!');
// }