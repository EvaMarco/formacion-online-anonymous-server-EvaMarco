'use strict';

const menuBtn = document.querySelector('.nav-trigger');
const closeBtn = document.querySelector('.nav-close');
const nav = document.querySelector('.nav');

function open (){
  nav.style.right= '0';
  nav.style.transition = 'right 2s ease-in-out';
}
function close(){
  nav.style.right = '-2000px';
}

menuBtn.addEventListener('click', open);
closeBtn.addEventListener('click', close);