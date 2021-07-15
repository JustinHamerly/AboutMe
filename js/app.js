'use strict';

// console.log('test');

// Personalized welcome message

let userName = prompt('Thank you for stopping by!  What\'s your name?');
alert('Nice to meet you, ' + userName);

let guestScore = 0;


function yesNoQuestions(){
// 5 yes/no questions about Justin

let likeParty = prompt('Does Justin like to party?');
let likePartyAns = likeParty.toLowerCase();
// console.log(likePartyAns);
if (likePartyAns === 'yes'||likePartyAns === 'y'){
  // console.log('Party time!');
  alert('Party time!');
  guestScore++;
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
  guestScore++;
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
  guestScore++;
} else {
  alert('Is that what you really think?');
}


let singWellCare = prompt('Does Justin CARE if he sings well during karaoke?');
let singWellCareAns = singWellCare.toLowerCase();
// console.log(singWellAns);
if (singWellCareAns === 'yes'||singWellCareAns === 'y'){
  alert('that might be a teensy tiny bit true... but nothing Tequila can\'t solve');
  guestScore++;
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
  guestScore++;
} else if (youSingAns === 'no'||youSingAns === 'n'){
  alert('That\'s too bad ' + userName + '... Will you please reconsider?');
} else {
  alert('I can only take that as a yes.  I think... ? ... ' + userName + '?');
}
}

function guessingGame(){
// Number Guessing game.  Alert if value is too high or too low.  Give 4 opportunities for the correct answer.  Tell user correct answer after 4 guesses.

let rNumber = Math.floor((Math.random() * 10000000) + 1);
//declares the variable rNumber and assigns it to a random number from 1 - 10Million.  Math.random() picks a number from 0 (inc) to 1 (exc) and multiplies it by a million.  then we add 1 so 10,000,000 is included and 0 is excluded.  Math.floor will take that number and drop all the decimals rounding down to the nearest whole number.
// console.log(rNumber);

let guestNumber = '0';

for (let i = 1; i < 5; i++){
  guestNumber = parseInt(prompt('What number I am thinking of between 1 - 10,000,000? GOOD LUCK!'));
  console.log('Attempt ' + i + ': ' + guestNumber);
  //declaration of variable guestNumber and assigning it to the response to the prompt for guessing a number.
  if (guestNumber === rNumber){
    alert('WOW!  Have you considered Powerball?  You guessed the correct answer: ' + rNumber);
    guestScore++;
    break;
  } else if(guestNumber > rNumber && guestNumber <= 10000000) {
    alert('Attempt ' + i + ': Too High! Try Again. You have ' + (4-i) + ' attempts left.');
  } else if (guestNumber < rNumber && guestNumber >= 1){
    alert('Attempt '+ i + ': Too Low! Try Again. You have ' + (4-i) + ' attempts left.');
  } else {
    i -= 1;
    alert('Please only pick numbers from 1-10,000,000');
  }
}
if (guestNumber !== rNumber){
  alert('The correct answer was: ' + rNumber);
}
}

function petQuestion(){
//Guess answer to a question with multiple correct answers.  give the user 6 attempts at guessing correctly. game ends when user guesses a correct answer or running out of attempts.  then, display all the correct answers

const petName = ['chomp','ghost', 'vladimir'];
//creates the array of pet names
let guessCount = 6;
let correctPet = false;

while(guessCount > 0 && !correctPet){
  let userPetAns = prompt('Can you guess the name of one of Justin\'s pets?');
  let lowercaseAnswer = userPetAns.toLowerCase();

  for(let i = 0; i < petName.length; i++){
    if (lowercaseAnswer === petName[i]){
      alert('Yes, ' + userPetAns + ' is one of Justin\'s pets!');
      correctPet = true;
      guestScore++;
      break;
    }
  }
  // checks their answer against the three possible answers.  if their answer is correct, it changes the correctPet flag to true.

  if (correctPet){
    alert('Justin has 3 pets: Vladimir the cat, Ghost the lizard, and Chomp the axolotl!');
    break;
  } else if (guessCount <= 6 && guessCount >= 1){
    guessCount--;
    alert('That is incorrect.  You have ' + guessCount + ' tries left.');
  }
  // if correct it breaks out of the code and alerts user of all possible answers, otherwise if they have guesses left it will subtract from their guess count and tell them how many guesses they have remaining.
}

if (!correctPet){
  alert('sorry, you have no more attempts!  Correct answers would have been Ghost, Chomp or Vladimir.');
}
}
// Alerts user that they have used all their guesses and what the correct answers are.
yesNoQuestions();
guessingGame();
petQuestion();

alert('You have answered ' + guestScore + ' out of 7 questions correctly...  but grades don\'t matter here!');

