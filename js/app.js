'use strict';

let result = 0;
//start();

function start(){

  let name = prompt('Hi! Please enter your name');
  if (name.length == 0) {
    start();
  }
  alert(`Welcome ${name}\nYou will now have 5 yes/no qustions, so stay sharp!`);
  let accepted = [['yes', 'y'],['no', 'n']];

  let answers = {

    '1': {
      'question':'Did I study computer science?',
      'answer': accepted[1],
      'respT': 'Correct! I actually studied mechanical engineering.',
      'respF': 'Sorry, incorrect. I actually studied mechanical engineering, but I am always on fire when it comes to comupter science.'
    },
    '2': {
      'question':'Do I like anime?',
      'answer': accepted[0],
      'respT': 'Correct! I love anime.',
      'respF': 'Sorry, incorrect. I love anime.'
    },
    '3': {
      'question':'Am I from Irbid?',
      'answer': accepted[0],
      'respT': 'Correct! I am from Irbid',
      'respF': 'Sorry, incorrect. I am from Irbid'
    },
    '4': {
      'question':'Am I 1.80m or taller?',
      'answer': accepted[0],
      'respT': 'Correct! In fact I am 1.85m',
      'respF': 'Sorry, incorrect. Actually I am 1.85m'
    },
    '5': {
      'question':'Do I like cats?',
      'answer': accepted[0],
      'respT': 'Correct! I love cats.',
      'respF': 'Sorry, incorrect. I love cats.'
    },
  };

  alert('let\'s start!');
  for (let prop in answers) {
    first(answers,prop,accepted);
  }
  alert('The first part is over, moving to the next one...');
  second();
  alert('The second part is over, moving to the last one...');
  third();

}

function first(parent,q,acc){
  let ans = prompt(parent[q]['question']).toLocaleLowerCase();
  while(acc[0].indexOf(ans) == -1 && acc[1].indexOf(ans) == -1) {
    ans = prompt('Invalid entry, please check.\n' +parent[q]['question']).toLocaleLowerCase();
  }
  let crct = parent[q]['answer'];
  if (crct.indexOf(ans) != -1){
    alert(parent[q]['respT']);
    result++;
  } else {
    alert(parent[q]['respF']);
  }

}
function second(){
  let num = 7;
  for (let i = 4; i >= 1; i--){
    let ans = Number(prompt(`Guess what my favorite number is.\nIt it is between 1 and 10.\nYou have ${i} attempts left.`));
    if (isNaN(ans) || ans === '' || ans == 0) {
      alert('Invalid entry, try again.');
      i++;
      continue;
    } else {
      if (ans <num) {
        if (i == 1) {
          alert('Sorry, the answer is 7, you are out of attempts.');
          return;
        }
        alert('Too low.');
        continue;
      } else if (ans > num) {
        if (i == 1) {
          alert('Sorry, the answer is 7, you are out of attempts.');
          return;
        }
        alert('Too high.');
        continue;
      } else if (ans == num) {
        alert('Correct! It is 7');
        result++;
        return;
      }
    }
  }
}
function third(){
  let arr = ['java', 'javascript', 'python'];
  for (let i = 6; i >= 1; i--){
    let ans = prompt(`Try to guess at least one to three PROGRAMMING languages I know\nYou have ${i} attempts left.`);
    if (ans.length == 0){
      alert('Invalid entry, try again.');
      i++;
      continue;
    } else if (arr.indexOf(ans) == -1) {
      if (i == 1) {
        alert(`Sorry, you did not get any of them right\nYour Overall score is ${result} out of 7\nBye!`);
        return;
      }
      alert('Incorrect, try again');
      continue;
    } else {
      alert(`Correct!, I know some JS, Java and Python\nYour Overall score is ${result} out of 7\nBye!`);
      result++;
      return;
    }
  }
}
