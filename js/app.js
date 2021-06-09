'use strict';

let scoreBars = document.querySelectorAll('#container div');
let welcome = document.getElementById('welcome');
let score = document.getElementById('strong');
let line = document.getElementById('static');

function start(){
  let name = prompt('Hi! Please enter your name');
  alert(`Welcome ${name}\nYou will now have 5 yes/no qustions, so stay sharp!`);
  welcome.innerHTML = `Welcome ${name}`;
  line.innerHTML = 'Let\'s hope that these questions will help us know each other better';
}

function first(){

}

function second(){

}

function third(){

}
