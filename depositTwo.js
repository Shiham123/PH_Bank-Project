// deposit and balance update
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

// withdraw section
document.getElementById('btn-withdraw').addEventListener('click', () => {
  const withdrawInputEl = document.getElementById('withdraw'),
    withdrawValue = withdrawInputEl.value,
    withdrawAmount = parseFloat(withdrawValue);

  withdrawInputEl.value = '';

  const withdrawEl = document.getElementById('withdraw-amount'),
    withdrawStr = withdrawEl.innerText,
    withdrawTotal = parseFloat(withdrawStr);

  const newWithdrawTotal = withdrawAmount + withdrawTotal;
  withdrawEl.innerText = newWithdrawTotal;

  const balanceEl = document.getElementById('balance-amount'),
    balanceStr = balanceEl.innerText,
    balanceAmount = parseFloat(balanceStr);

  const newBalanceTotal = balanceAmount - withdrawAmount;
  balanceEl.innerText = newBalanceTotal;
});
