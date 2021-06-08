'use strict';
let overallScore = 0;
let progress = document.getElementById('progress');

let retake = document.getElementById('retake');

let done = [false, false, false];
let qs = [
  'Is Gray my favorite color?',
  'Am I a cat person?',
  'Am I a fan of Barcelona FC?',
  'Do I like, nay, love physics?',
  'Am I from Irbid?'
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
    let ans = prompt(qs[i] + '\n(y)es | (n)o').toLowerCase();
    if (ans === ansrs[i] || ans === ansrs[i][0]){
      alert('Correct! ' + String.fromCodePoint(emjs[rand]));
      corct++;
      overallScore += 1;
    } else {
      alert('Noooo, Not Correct ' + String.fromCodePoint(0x1F622));
    }
  }
  done[0] = true;
  // progress.style.width = corct*18 + '%';
  let pars = document.querySelectorAll('main p');
  //   console.log(bye[0].innerHTML, bye[1].innerHTML);
  pars[0].innerHTML = `Welcome ${name}`;
  pars[1].innerHTML = 'Maybe we will get to know each other better in the future ' + String.fromCodePoint(0x1F601);
}
/////////////////////////////////////////////////////////////////////////
let finished = document.getElementById('finished');
let prg = document.querySelectorAll('#container div');

function score(){

  // console.log(done[0], done[1], done[2]);
  if (done[0] == done[1] && done[0] == done[2] && done[0] == true){

    finished.innerHTML = `All questions have been answered, you scored ${overallScore} out of 7, good job ${String.fromCodePoint(0x1F605)}`;
    finished.style.color = 'green';
    for (let p = 0; p < overallScore ; p++) {
      prg[p].style.background = 'green';
    }
    retake.style.color = 'white';
    overallScore = 0;
    // window.location.reload();
  } else {
    finished.innerHTML = 'Please finish all sections first';
    finished.style.color = 'red';

    // finished.innerHTML = `${overallScore}`;
    // console.log("not good");
  }

}

///////////////////////////////////////////////////////////////////////////
function reloadAll(){
  window.location.reload();
}
////////////////////////////////////////////////////////////////////////
let y = 4;
let highOrLow = document.getElementById('indicator');
let atsleft = document.getElementById('atsleft');
let terminate = false;
function test(n){
  y-= 1;
  atsleft.innerHTML =`${y} attempts left`;
  console.log(n);
  if (y != 0) {
    if (n == 7) {
      highOrLow.innerHTML = 'Correct!';
      let all = document.querySelectorAll('#nums div');
      for (let j = 0 ; j< all.length; j++) {
        all[j].style.background = 'green';
        terminate = true;
      }
    } else {
      if (n < 7){
        highOrLow.innerHTML = 'Too Low';
      } else if (n > 7) {
        highOrLow.innerHTML = 'High';
      }
    }
  } else {

    if (n == 7) {
      highOrLow.innerHTML = 'Correct!';
      terminate = true;
      let all = document.querySelectorAll('#nums div');
      for (let j = 0 ; j< all.length; j++) {
        all[j].style.background = 'green'; }
      terminate = true;
    } else {
      let all = document.querySelectorAll('#nums div');
      for (let j = 0 ; j< all.length; j++) {
        all[j].style.background = 'red';
      }
      highOrLow.innerHTML = 'Sorry, the answer is 7';
      terminate = true;
      done[1] = true;
    }
  }
  if (terminate) {
    let all = document.querySelectorAll('#nums div');
    for (let j = 0 ; j< all.length; j++) {
      all[j].setAttribute('onClick', null);
      done[1] = true;
    }
    overallScore += 1;
  }
  

}

//////////////////////////////////////////////////////////////////////////////////////////////////////
let tv = ['peaky blinders', 'bb', 'stranger things', 'dark', 'bab alhara', 'prison break', 'narcos'];
let entrybox = document.getElementById('entry');
let entryContainer = document.getElementById('entrybox');
let left = document.getElementById('left');
let z = 6;
function check(){
  z -= 1;
  left.innerHTML = `${z} attempts left`;
  if (z != 0) {
    if (tv.indexOf((entrybox.value).toLowerCase()) != -1){
      left.innerHTML = `Correct! My most favorite TV series are \n ${tv[3]}, ${tv[1]} and ${tv[2]}`;
      entryContainer.style.background = 'green';
      done[2] = true;
      overallScore += 1;
    } else {
      entrybox.value = '';
      entrybox.setAttribute('placeholder', 'try again');
    }
  } else {
    left.innerHTML = `Sorry, the answer is \n ${tv[3]}, ${tv[1]} and ${tv[2]}`;
    entryContainer.style.background = 'red';
    done[2] = true;
  }
  console.log(entrybox.value);
  done[2] = true;
}

