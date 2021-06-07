'use strict';

let progress = document.getElementById('progress');

let qs = [
  'Is Gray my favorite color?',
  'Am I a cat person?',
  'Am I a fan of Barcelona FC?',
  'Do I like, nay, love physics?',
  'Will I finish React.js soon?'
];
let ansrs = {
  '0':'yes',
  '1':'yes',
  '2':'yes',
  '3':'yes',
  '4':'yes'
};
let emjs = [0x1F601,0x1F600, 0x1F604, 0x1F605, 0x1F607, 0x1F60B ,0x1F60C ];

let rand = 0;
let corct = 0;
function start(){
  let name = prompt('Welcome! Please enter your name');
  alert(`Welcome ${name}!`);
  for (let i = 0; i < qs.length; i++){
    rand = Math.floor(Math.random() * 6);
    let ans = prompt(qs[i] + "\n(y)es | (n)o").toLowerCase();
    if (ans === ansrs[i] || ans === ansrs[i][0]){
      alert('Correct! ' + String.fromCodePoint(emjs[rand]));
      corct++;
    } else {
      alert('Noooo, Not Correct ' + String.fromCodePoint(0x1F622));
    }
  }
  progress.style.width = corct*18 + '%';
  let pars = document.querySelectorAll("main p");
  //   console.log(bye[0].innerHTML, bye[1].innerHTML);
  pars[0].innerHTML = `Thank you ${name}`;
  pars[1].innerHTML = 'Maybe we will get to know each other better in the future ' + String.fromCodePoint(0x1F601);
}
