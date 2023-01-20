// const display = document.querySelector('.counter-preview');
// const allBtns = document.querySelector('#allBtns');

// allBtns.addEventListener('click', counter);

// let value = 0;
// function counter(e) {
//   const btn = e.target.id;
//   if (btn === 'increment') {
//     value += 1;
//   } else if (btn === 'decrement') {
//     value -= 1;
//   } else {
//     value = 0;
//   }

//     display.textContent = value;
// }

const display = document.querySelector('.counter-preview');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');

incrementBtn.addEventListener('click', increment);
 // Every time the increment button is pressed, this code will execute.
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

let value = 0;
function increment() {
  value += 1;
  display.textContent = value;
}

function decrement() {
  value -= 1;
  display.textContent = value;
}

function reset() {
  value = 0;
  display.textContent = value;
}