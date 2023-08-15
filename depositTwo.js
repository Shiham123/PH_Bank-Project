document.getElementById('btn-deposit').addEventListener('click', () => {
  const depositField = document.getElementById('deposit'),
    depositValue = depositField.value,
    depositAmount = parseFloat(depositValue);

  depositField.value = '';

  const depositTotalEl = document.getElementById('deposit-amount'),
    previousDepositStr = depositTotalEl.innerText,
    previousDepositTotal = parseFloat(previousDepositStr);

  const newDepositTotal = previousDepositTotal + depositAmount;
  depositTotalEl.innerText = newDepositTotal;
});
