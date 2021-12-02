let buttonPlus = document.getElementById('buttonPlus'),
    buttonMinus = document.getElementById('buttonMinus'),
    buttonMultiplay = document.getElementById('buttonMultiplay'),
    buttonDevide = document.getElementById('buttonDevide'),
    inputOne = document.getElementById('number-one'),
    inputTwo = document.getElementById('number-two');

function makeOperation(operationCode) {
    let number1 = +inputOne.value;
    let number2 = +inputTwo.value;
    if(operationCode === '+') {
        var sum = number1 + number2;
    }else if(operationCode === '-') {
        var sum = number1 - number2;
    }else if(operationCode === '*') {
        var sum = number1 * number2;
    }else if(operationCode === '/') {
        var sum = number1 / number2;
    }
    window.alert(sum);
}

function operationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}


buttonPlus.addEventListener('click', operationButtonClick);
buttonMinus.addEventListener('click', operationButtonClick);
buttonMultiplay.addEventListener('click', operationButtonClick);
buttonDevide.addEventListener('click', operationButtonClick);