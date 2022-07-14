function add (a,b) {
	return a + b;
}

function substract (a,b) {
	return a - b;
}

function multiply (a,b) {
	return a*b;
}

function divide (a,b) {
	return a/b;
}

function operate (operator, a, b) {
	switch (operator) {
		case "add" : return add (a,b);	break;
		case "substract" : return substract(a,b); break;
		case "multiply" : return multiply(a,b); break;
		case "divide" : return divide(a,b); break;
		default: return "Error!"
	}
}

function operateObject (sequence) {
	operator = sequence.operator;
	a = sequence.firstOperand;
	b = sequence.secondOperand;
	return operate(operator, a, b);

}

function roundTwo (num) {
	num = Math.round(num*100)/100;
	return num;
}

function clearDisplay () {
	const display = document.querySelector('.display');
	display.innerHTML = "";
}

function displayValue (value) {
	const display = document.querySelector('.display');
	display.innerHTML = value;
}

function pressNumberButton () {

	console.log(this.id);
	let currentDispText = currentDisplayText();
	let numberText = this.id
	let newDisplayText = currentDispText + numberText;
	displayValue(newDisplayText);

}

function currentDisplayText () {
	const display = document.querySelector('.display');
	return display.textContent;
}

function currentDisplayValue () {
	let currentDispText = currentDisplayText();
	let displayNumber = Number(currentDispText);
	return displayNumber;
}

function pressOperatorButton () {
	let operatorPressed = this.className;
	if (operatorDefined(currentSequence) && firstDefined(currentSequence)) {
		currentSequence.secondOperand = currentDisplayValue();
		console.log(currentSequence);
		let resultCache = operateObject(currentSequence);
		clearSequence(currentSequence);
		currentSequence.firstOperand = resultCache;
		currentSequence.operator = operatorPressed;
		clearDisplay();
		displayValue(currentSequence.firstOperand);
		console.log(currentSequence);
	} else if (firstDefined(currentSequence) === false && operatorDefined(currentSequence) === false && secondDefined(currentSequence) === false) {
		console.log(currentSequence);
		currentSequence.firstOperand = currentDisplayValue();
		currentSequence.operator = operatorPressed;
		clearDisplay();
		console.log(currentSequence);
	}
	
	
	

}

function pressEquals () {

}

function firstDefined (sequence) {
	return sequence.firstOperand === undefined ? false : true;
}
function secondDefined (sequence) {
	return sequence.secondOperand === undefined ? false : true;
}
function operatorDefined (sequence) {
	return sequence.operator === undefined ? false : true;
}
function sequenceComplete (sequence) {
	return firstDefined(sequence) && secondDefined(sequence) && operatorDefined(sequence) ? true : false;
}
function clearSequence (sequence) {
	Object.keys(sequence).forEach(key => sequence[key] = undefined)
}


let currentSequence = {};


let completeSequence = {
	operator : "add",
	firstOperand: undefined,
	secondOperand : 13,
}
let lastResult;
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operators div');
const clearButton = document.querySelector('.clear');
const operateButton = document.querySelector('.operate');
const backspaceButton = document.querySelector('.backspace');
const display = document.querySelector('.display');

numberButtons.forEach(button => button.addEventListener('click', pressNumberButton))
operatorButtons.forEach(button => button.addEventListener('click', pressOperatorButton))