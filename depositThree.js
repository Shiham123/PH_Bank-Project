function getInputValue(inputValue) {
  const inputField = document.getElementById(inputValue),
    inputStr = inputField.value,
    inputNumber = parseFloat(inputStr);

  inputField.value = '';

  return inputNumber;
}

function getElement(id) {
  const amountEl = document.getElementById(id),
    amountStr = amountEl.innerText,
    amountValue = parseFloat(amountStr);

  return amountValue;
}

function setTextElementValue(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', () => {
  const depositInput = getInputValue('deposit'),
    depositValue = getElement('deposit-amount');

  const depositTotal = depositInput + depositValue;
  setTextElementValue('deposit-amount', depositTotal);
});
