const depositBtnEl = document.getElementById('btn-deposit');
const depositInputEl = document.getElementById('deposit');

let depositAmountEl = document.getElementById('deposit-amount');
let balanceAmountEl = document.getElementById('balance-amount');

depositBtnEl.addEventListener('click', () => {
  depositUpdate();
  balanceUpdate();
});

function balanceUpdate() {
  let previousDeposit = parseFloat(depositAmountEl.innerText.replace('$', ''));
  balanceAmountEl.innerText = '$' + previousDeposit;
}

function depositUpdate() {
  let newDeposit = parseFloat(depositInputEl.value);
  let previousDeposit = parseFloat(depositAmountEl.innerText.replace('$', ''));

  let totalDeposit = previousDeposit + newDeposit;

  depositAmountEl.innerText = '$' + totalDeposit.toFixed(2);
  depositInputEl.value = '';
}
