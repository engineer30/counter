const countButton = document.querySelector('.countButton button');
const resetButton = document.querySelector('.resetButton button');
let count_Number = document.querySelector('.count_Number h1');
 countButton.addEventListener('click', countUp);
resetButton.addEventListener('click', reset);

function countUp(){
   count_Number.innerHTML++;
}

function reset(){
   count_Number.innerHTML = 0;
}