'use strict';

// console.log('test');

// Personalized welcome message

let userName = prompt('Thank you for stopping by!  What\'s your name?');
alert('Nice to meet you, ' + userName);

// 5 yes/no questions about Justin

let likeParty = prompt('Does Justin like to party?');
let likePartyAns = likeParty.toLowerCase();
// console.log(likePartyAns);
if (likePartyAns === 'yes'||likePartyAns === 'y'){
  // console.log('Party time!');
  alert('Party time!');
} else if (likePartyAns === 'no'||likePartyAns === 'n'){
  // console.log('What?!  Of course Justin likes to party!');
  alert('What?!  Of course Justin likes to party!');
} else {
  // console.log('It is definitely party time!');
  alert('It is definitely party time!');
}


let regKaraoke = prompt('Does Justin do karaoke on the regular?');
let regKaraokeAns = regKaraoke.toLowerCase();
// console.log(regKaraokeAns);
if (regKaraokeAns === 'yes'||regKaraokeAns === 'y'){
  alert('You know Justin so well!');
} else if (regKaraokeAns === 'no'||regKaraokeAns === 'n'){
  alert('You have a lot to learn about Justin');
} else {
  alert('Hmmm... I\'m confused... but I like your creativity!');
}


let singWell = prompt('Does Justin sing well during karaoke, or ever for that matter?');
let singWellAns = singWell.toLowerCase();
// console.log(singWellAns);
if (singWellAns === 'yes'||singWellAns === 'y'){
  alert('You are too kind... no really... that is too kind.  Are you sure you have heard Justin sing?');
} else if (singWellAns === 'no'||singWellAns === 'n'){
  alert('At least I know you will always tell me the truth.');
} else {
  alert('Is that what you really think?');
}


let singWellCare = prompt('Does Justin CARE if he sings well during karaoke?');
let singWellCareAns = singWellCare.toLowerCase();
// console.log(singWellAns);
if (singWellCareAns === 'yes'||singWellCareAns === 'y'){
  alert('that might be a teensy tiny bit true... but nothing Tequila can\'t solve');
} else if (singWellCareAns === 'no'||singWellCareAns === 'n'){
  alert('the jury is still out on that one.');
} else {
  alert('that is an interesting take on interpreting Justin\'s psyche.');
}


let youSing = prompt('Do you want to sing karaoke with Justin');
let youSingAns = youSing.toLowerCase();
// console.log(youSingAns);
if (youSingAns === 'yes'||youSingAns === 'y'){
  alert('WHOA that\'s great!  ' + userName + ', You should contact Justin IMMEDIATELY and we can pencil you in to his karaoke schedule');
} else if (youSingAns === 'no'||youSingAns === 'n'){
  alert('That\'s too bad ' + userName + '... Will you please reconsider?');
} else {
  alert('I can only take that as a yes.  I think... ? ... ' + userName + '?');
}

// 6th Question - Number Guessing game.  Alert if value is too high or too low.  Give 4 opportunities for the correct answer.  Tell user correct answer after 4 guesses.

let rNumber = Math.floor((Math.random() * 10000000) + 1);
//declares the variable rNumber and assigns it to a random number from 1 - 1Million.  Math.random() picks a number from 0 (inc) to 1 (exc) and multiplies it by a million.  then we add 1 to eliminate 0 and add 10,000,000 to the possible solutions.  Math.floor will take that number and drop all the decimals rounding down to the nearest whole number.

let guestNumber = prompt('Guess what number I am thinking of between 1-10,000,000  Good luck!')
//declaration of variable guestNumber and assigning it to the response to the prompt for guessing a number.

for (let i = 1; i < 5; i++){
  if (guestNumber === rNumber){
    alert('Wow!  Have you considered the Lottery?');
    break;
  } else if(guestNumber > rNumber && guestNumber <= 10000000) {
    alert('Attempt ${i}: Too High! Try Again. You have ' + (4-i) + 'attempts left.');
  } else if (guestNumber < rNumber && guestNumber >= 1){
    alert('Attempt ${i}: Too Low! Try Again. You have ' + (4-i) + 'attempts left.');
  } else {
    i -= 1;
    alert('Please only pick numbers from 1-10,000,000');
  }
}