document.getElementById('btn-deposit').addEventListener('click', () => {
  const depositField = document.getElementById('deposit'),
    depositValue = depositField.value,
    depositAmount = parseFloat(depositValue);

  depositField.value = '';

  const depositEl = document.getElementById('deposit-amount'),
    depositStr = depositEl.innerText,
    depositTotal = parseFloat(depositStr);

  const newDepositTotal = depositTotal + depositAmount;
  depositEl.innerText = newDepositTotal;

  const balanceEl = document.getElementById('balance-amount'),
    balanceStr = balanceEl.innerText,
    balanceAmount = parseFloat(balanceStr);

  const balanceTotal = depositAmount + balanceAmount;
  balanceEl.innerText = balanceTotal;
});
