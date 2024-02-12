const randomNum=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt');
const input=document.querySelector('#guessfield');
const guessSlot=document.querySelector('.guesses');
const remaining =document.querySelector('.lastresult');
const loworhi=document.querySelector('.lowerHi');
const startOver=document.querySelector('.resultParas');
const p=document.createElement('p');
let prevGuess=[];
let numGuess=1;
let playGame=true;
submit.addEventListener('')