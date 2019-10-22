const display = document.getElementById('display');
const numberBtn = document.getElementsByClassName('number');
const operatorBtn = document.getElementsByClassName('operator');
const clearBtn = document.getElementById('ac');
const backBtn = document.getElementById('back');
const decimalBtn = document.getElementById('decimal');

var displayVal = 0;
var pendingVal;
var evalStringArray = [];

const updateDisplayVal = (clickObj) => {
    
    const btnText = clickObj.target.innerHTML;

    if (displayVal === 0) {
        displayVal = '';
    }

    displayVal += btnText
    // console.log(btnText + " button clicked");
    display.innerHTML = displayVal;
};

const performOperation = (clickObj) => {
    var operBtnValue = clickObj.target.innerText;

    console.log(operBtnValue + 'clicked');

    switch (operBtnValue) {
        case '+':
            pendingVal = displayVal;
            displayVal = 0;
            display.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            console.log(evalStringArray)
            break;
        case '-':
        pendingVal = displayVal;
            displayVal = 0;
            display.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            console.log(evalStringArray)
            break;
        case '×':
        pendingVal = displayVal;
            displayVal = 0;
            display.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            console.log(evalStringArray)
            break;
        case '÷':
        pendingVal = displayVal;
            displayVal = 0;
            display.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            console.log(evalStringArray)
            break;
        case '=':
        
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + '';
            display.innerHTML = displayVal;
            evalStringArray = [];
            console.log(evalStringArray)
            break;
        default:
            break;
    }
}



for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', updateDisplayVal, false); 
};

for (let i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener('click', performOperation, false);
};

clearBtn.onclick = () => {
    displayVal = 0;
    pendingVal = '';
    evalStringArray = [];
    display.innerHTML = displayVal;
};

backBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
    
    if (displayVal === '') {
        displayVal = 0;
    }
    
    display.innerHTML = displayVal;
}

decimalBtn.onclick = () => {
    if (!displayVal.includes('.')) {
        displayVal += ".";
    }

    display.innerHTML = displayVal;
}