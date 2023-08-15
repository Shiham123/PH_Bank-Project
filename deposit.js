const depositBtnEl = document.getElementById('btn-deposit'),
  withdrawBtnEl = document.getElementById('btn-withdraw'),
  depositInputEl = document.getElementById('deposit'),
  withdrawInputEl = document.getElementById('withdraw');

let depositAmountEl = document.getElementById('deposit-amount'),
  balanceAmountEl = document.getElementById('balance-amount'),
  withdrawAmountEl = document.getElementById('withdraw-amount');

let totalDeposit = 0;

depositBtnEl.addEventListener('click', () => {
  depositUpdate();
  balanceUpdate();
});

withdrawBtnEl.addEventListener('click', () => {
  withdrawUpdate();
});

function balanceUpdate() {
  balanceAmountEl.innerText = '$' + totalDeposit.toFixed(2);
}

function depositUpdate() {
  let newDeposit = parseFloat(depositInputEl.value);
  totalDeposit += newDeposit;
  depositAmountEl.innerText = '$' + totalDeposit.toFixed(2);
  depositInputEl.value = '';
}

function withdrawUpdate() {
  let withdraw = parseFloat(withdrawInputEl.value);

  if (withdraw <= totalDeposit) {
    totalDeposit -= withdraw;
    withdrawAmountEl.innerText = '$' + withdraw.toFixed(2);
    balanceUpdate();
  } else {
    alert('Insufficient balance for withdrawal.');
  }

  withdrawInputEl.value = '';
}
