// Create counter display
let counterValue = document.createElement('div');
counterValue.textContent = localStorage.getItem('counterValueNumber') || "0";
document.body.appendChild(counterValue);
counterValue.setAttribute('class', 'counter-value');

// Create button placement container
let buttonsPlacement = document.createElement('div');
document.body.appendChild(buttonsPlacement);
buttonsPlacement.setAttribute('class', 'buttons-position');

// Create minus button
let minusButton = document.createElement('button');
minusButton.innerHTML = '-';
buttonsPlacement.appendChild(minusButton);
minusButton.setAttribute('class', 'minus-button');
minusButton.setAttribute('onclick', 'decreseValue()');

// Create plus button
let plusButton = document.createElement('button');
plusButton.textContent = '+'
buttonsPlacement.appendChild(plusButton);
plusButton.setAttribute('class', 'plus-button');
plusButton.setAttribute('onclick', 'increseValue()');

// Create reset button container
let resetContainer = document.createElement('div');
document.body.appendChild(resetContainer);
resetContainer.setAttribute('class', 'reset-container')

// Create reset button
let resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetContainer.appendChild(resetButton);
resetButton.setAttribute('class', 'reset-button');
resetButton.setAttribute('onclick', 'resetValue()');

// Create a variable to keep track of the counter value
let counterValueNumber = localStorage.getItem('counterValueNumber') || 0;

// Increse counter function
function increseValue() {
  counterValueNumber++;
  counterValue.innerHTML = counterValueNumber;
  localStorage.setItem('counterValueNumber', counterValueNumber);
}

// Decrese counter function
function decreseValue() {
  counterValueNumber--;
  counterValue.innerHTML = counterValueNumber;
  localStorage.setItem('counterValueNumber', counterValueNumber);
}

// Reset counter function
function resetValue() {
  counterValueNumber = 0;
  counterValue.innerHTML = counterValueNumber;
  localStorage.setItem('counterValueNumber', counterValueNumber);
}
