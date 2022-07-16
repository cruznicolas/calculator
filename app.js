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

function clearDisplay2 () {
	const display = document.querySelector('.display2');
	display.innerHTML = "";
}


function displayValue (value) {
	const display = document.querySelector('.display');
	display.innerHTML = value;
}


function display2Value (value) {
	const display = document.querySelector('.display2');
	display.innerHTML = value;
}

function display2update () {
	display2Value(JSON.stringify(currentSequence));
}

function currentDisplayText () {
	const display = document.querySelector('.display');
	return display.textContent;
}

function pressNumberButton () {
	display2update();
	console.log(this.id);
	let currentDispText = currentDisplayText();
	let numberText = this.id
	let newDisplayText = currentDispText + numberText;
	displayValue(newDisplayText);

}


function currentDisplayValue () {
	let currentDispText = currentDisplayText();
	let displayNumber = Number(currentDispText);
	return displayNumber;
}

function pressOperatorButton () {
	let operatorPressed = this.className;
	
	
	
	

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


let currentSequence = {
	operator: "add",
	firstOperand: 12.11,
	secondOperand: 13,
};


let completeSequence = {
	operator : "add",
	firstOperand: 12.1,
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