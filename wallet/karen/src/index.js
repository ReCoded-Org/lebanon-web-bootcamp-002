class Wallet {
  constructor(
    name,
    currency = {},
    balance = 0,
    desc = "",
    TransactionList = []
  ) {
    this.name = name;
    this.currency = currency;
    this.balance = balance;
    this.desc = desc;
    this.transactionList = TransactionList;
  }
  addTrans(transaction) {
    this.transactionList.push(transaction);
  }
}
class Transaction {
  constructor(amount, note, tag, date = new Date()) {
    this.amount = amount;
    this.note = note;
    this.tag = tag;
    this.date = date;
  }
}
class Expense extends Transaction {
  constructor(amount, note, tag, date = new Date()) {
    super(amount, note, tag, date);
  }
  getAmount() {
    return -1 * this.amount;
  }
}
class Income extends Transaction {
  constructor(amount, note, tag, date = new Date()) {
    super(amount, note, tag, date);
  }
  getAmount() {
    return  +this.amount;
  }
}

class Currency {
  constructor(name, logo) {
    this.name = name;
    this.logo = logo;
  }
  static BTC() {
    return new this("BitCoin", "BTC");
  }
  static ETH() {
    return new this("Etheruem", "ETH");
  }
  static USD() {
    return new this("United States Dollar", "$");
  }
  static LBP() {
    return new this("Lebanese Pounds", "LBP");
  }
}
// console.log(Currency.BTC());
let wallets = [];
let currentWallet;

const welcomePage = document.getElementById("hidden");
const walletInfo = document.getElementById("wallet-info");
const walletList = document.getElementById("list-wallet");

// create wallet
const createWalletBtn = document.getElementById("create-btn");
createWalletBtn.addEventListener("click", () => {
  const name = document.getElementById("wallet-name").value;
  const balance =parseInt(document.getElementById("wallet-balance").value ,10);
  const desc = document.getElementById("wallet-desc").value;

  const currencyBtc = document.getElementById("currency-btc");
  const currencyEth = document.getElementById("currency-eth");
  const currencyUsd = document.getElementById("currency-usd");
  const currencyLbp = document.getElementById("currency-lbp");
  let currency;
  if (currencyBtc.checked) {
    currency = Currency.BTC();
  }
  if (currencyEth.checked) {
    currency = Currency.ETH();
  }
  if (currencyUsd.checked) {
    currency = Currency.USD();
  }
  if (currencyLbp.checked) {
    currency = Currency.LBP();
  }
  // console.log(currency);
  const walletBtn = document.createElement("button");
  walletBtn.id = wallets.length;
  walletBtn.classList.add("list-group-item", "list-group-item-action");
  walletBtn.innerText = name;
  walletList.appendChild(walletBtn);

  let w = new Wallet(name, currency, balance, desc);
  wallets.push(w);
  console.log(wallets);
  welcomePage.classList.add("d-none");
  walletInfo.classList.remove("d-none");
});

walletList.addEventListener("click", (e) => {
  return activeWallet(e);
});
function activeWallet(event) {
  const x = event.target;
  const id = x.id;
  currentWallet = wallets[id];
  renderWalletInfo(currentWallet);
  makeATransaction(currentWallet);
  return wallets[id];
}
let counter = 0;
function renderWalletInfo(w) {
  console.log(counter);
  console.log(w.transactionList[0]);
  // const totalExpenseValue = document.getElementById("total-expense-value");
  // totalExpenseValue.innerText =
  //   w.currency.logo + "-" + w.transactionList[counter];
  // const totalIncomeValue = document.getElementById("total-income-value");
  // totalIncomeValue.innerText =
  //   w.currency.logo + "-" + w.transactionList[counter];
  const totalBalance = document.getElementById("total-balance");
  totalBalance.innerText = w.currency.logo + "-" + w.balance;
}
 const totalTransaction = document.getElementById("total-transaction");
const addTransactionOut = document.getElementById("add-transaction-outside");
addTransactionOut.addEventListener("click", (e) => {
  const transactionBox = document.getElementById("transaction-box");
  transactionBox.classList.remove("d-none");
  const logoTransaction = document.getElementById("logo-transaction");
  logoTransaction.innerText = currentWallet.currency.logo;
 
  totalTransaction.innerText = currentWallet.balance;
});

function makeATransaction(w) {
  const addTransactionIn = document.getElementById("add-transaction-inside");
  addTransactionIn.addEventListener("click", () => {
    const tableContainer = document.getElementById("table-container");
    tableContainer.classList.remove("d-none");
    const transAmount = parseInt(document.getElementById("trans-amount").value ,10);
   
    const transNote = document.getElementById("trans-note").value;
    const transTag = document.getElementById("trans-tag").value;
    const expenseBtn = document.getElementById("expense-btn");
    const incomeBtn = document.getElementById("income-btn");
    let transType = "";
    if (incomeBtn.checked) {
      transType = "income";
      const inc = new Income(transAmount, transNote, transTag);
      // w.balance = w.balance + parseInt(transAmount.value, 10);
       w.balance = w.balance + transAmount;
      transAmount.innerText = w.balance;
      totalTransaction.innerText = w.balance;
      w.addTrans(inc);
    } else if (expenseBtn.checked) {
      transType = "expense";
      const ex = new Expense(transAmount, transNote, transTag);
      w.balance = w.balance - transAmount;
      transAmount.innerText = w.balance;
       totalTransaction.innerText = w.balance;
      w.addTrans(ex);
    }
    renderTransInfo(transType, w);
    renderWalletInfo(w);
  });
}

function renderTransInfo(transType, currentWallet) {
  if (transType == "income") {
    type = "Receiving money";
    svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" /></svg>';
  } else if (transType == "expense") {
    type = "Spending money";
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
    class="bi bi-arrow-down-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
    d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z" />
    </svg>`;
  }
  const transTbodyTable = document.getElementById("trans-tbody-table");
  transTbodyTable.innerHTML += `<tr>
    <th scope="row">${currentWallet.transactionList.length}</th>
    <td>${svg}</td>
    <td>${Math.floor(Math.random() * 1000000 + 1)}</td>
    <td>${type}</td>
    <td>${currentWallet.transactionList[counter].amount}</td>
    <td>${currentWallet.transactionList[counter].date}</td>
</tr>`;
  counter = counter + 1;
}
