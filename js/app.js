function quizGame(){
  'use strict';

  let userName = prompt('Thank you for stopping by!  What\'s your name?');
  alert('Nice to meet you, ' + userName);

  let guestScore = 0;

  function yesNoQuestions(){

    let likeParty = prompt('Does Justin like to party?');
    let likePartyAns = likeParty.toLowerCase();
    if (likePartyAns === 'yes'||likePartyAns === 'y'){
      alert('Party time!');
      guestScore++;
    } else if (likePartyAns === 'no'||likePartyAns === 'n'){
      alert('What?!  Of course Justin likes to party!');
    } else {
      alert('It is definitely party time!');
    }

    let regKaraoke = prompt('Does Justin do karaoke on the regular?');
    let regKaraokeAns = regKaraoke.toLowerCase();
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

    let rNumber = Math.floor((Math.random() * 10000000) + 1);
    let guestNumber = '0';

    for (let i = 1; i < 5; i++){
      guestNumber = parseInt(prompt('What number I am thinking of between 1 - 10,000,000? GOOD LUCK!'));
      console.log('Attempt ' + i + ': ' + guestNumber);
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

    const petName = ['chomp','ghost', 'vladimir'];
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

      if (correctPet){
        alert('Justin has 3 pets: Vladimir the cat, Ghost the lizard, and Chomp the axolotl!');
        break;
      } else if (guessCount <= 6 && guessCount >= 1){
        guessCount--;
        alert('That is incorrect.  You have ' + guessCount + ' tries left.');
      }
    }

    if (!correctPet){
      alert('sorry, you have no more attempts!  Correct answers would have been Ghost, Chomp or Vladimir.');
    }
  }

  function quizTotal(){
    alert('You have answered ' + guestScore + ' out of 7 questions correctly...  but grades don\'t matter here!');
  }

yesNoQuestions();
guessingGame();
petQuestion();
quizTotal();

}

