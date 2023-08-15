function getInputById(inputValue) {
  const inputField = document.getElementById(inputValue),
    inputStr = inputField.value,
    inputNumber = parseFloat(inputStr);

  inputField.value = '';

  return inputNumber;
}

function getTextById(id) {
  const amountEl = document.getElementById(id),
    amountStr = amountEl.innerText,
    amountValue = parseFloat(amountStr);

  return amountValue;
}

function setTextById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', () => {
  const depositInput = getInputById('deposit'),
    depositValue = getTextById('deposit-amount'),
    depositTotal = depositInput + depositValue;

  setTextById('deposit-amount', depositTotal);

  const balanceValue = getTextById('balance-amount'),
    totalBalance = balanceValue + depositInput;

  setTextById('balance-amount', totalBalance);
});

document.getElementById('btn-withdraw').addEventListener('click', () => {
  const withdrawInput = getInputById('withdraw'),
    withdrawAmount = getTextById('withdraw-amount');

  const totalWithdraw = withdrawInput + withdrawAmount;

  setTextById('withdraw-amount', totalWithdraw);

  const oldBalance = getTextById('balance-amount'),
    calculate = oldBalance - withdrawInput;

  setTextById('balance-amount', calculate);
});
