/* eslint-disable for-direction */
'use strict';

let scoreBars = document.querySelectorAll('#container div');
let welcome = document.getElementById('welcome');
let score = document.getElementById('strong');
let line = document.getElementById('static');
let button = document.getElementById('btn');


let result = 0;

function start(){
  button.style.filter = 'blur(5px)';
  let name = prompt('Hi! Please enter your name');
  alert(`Welcome ${name}\nYou will now have 5 yes/no qustions, so stay sharp!`);
  welcome.innerHTML = `Welcome ${name}`;
  line.innerHTML = 'Let\'s hope that these questions will help us know each other better';

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
      'question':'Can I and the whole humanity be equivalent in size to a small cube of suger?',
      'answer': accepted[0],
      'respT': 'Correct! only if we find a way to suck all the empty space inside the atoms making us.',
      'respF': 'Sorry, incorrect. In fact we can only if we find a way to suck all the empty space inside the atoms making us.'
    },
    '4': {
      'question':'Can I exist in different places at the same time?',
      'answer': accepted[0],
      'respT': 'Correct! Theoritically you can.',
      'respF': 'Sorry, incorrect. Theoritically you can, have a look at what superpositioning and the uncertainety principle are in addition to quantum tunneling.'
    },
    '5': {
      'question':'Is my head getting a bit older faster than that of a person with an average height?',
      'answer': accepted[0],
      'respT': 'Correct! Gravity bends spacetime, and time passes slowly near massive objects like earth, so one inch can make a tiny difference.',
      'respF': 'Sorry, incorrect. Gravity bends spacetime, and time passes slowly near massive objects like earth, so one inch can make a tiny difference.'
    },
  };

  alert('let\'s start!');
  for (let prop in answers) {
    // console.log(prop);
    first(answers,prop,accepted);
  }
  // console.log(result);
  alert('The first part is over, moving to the next one...');
  second();
  alert('The second part is over, moving to the last one...');
  third();

}

///////////////////////////////////////////////////////////////////////////////
function first(parent,q,acc){
  let ans = prompt(parent[q]['question']).toLocaleLowerCase();
  // console.log(ans);
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
///////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////
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
      alert(`Incorrect, try again`);
      continue;
    } else {
      alert('Correct!, I know some JS, Java and Python');
      result++;
      return;
    }
  }
}
