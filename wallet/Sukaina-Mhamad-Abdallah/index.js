const name = document.getElementById("wallet-name-input");
const balance = document.getElementById("wallet-balance-input");
const description = document.getElementById("wallet-description-input");
const header = document.querySelector("header");
const headerUL = header.querySelector("ul");
const currency = document.getElementsByName("currency");
const currLeb = document.getElementById("currency-ll");
const currUSA = document.getElementById("currency-usd");
let transactionBtn;
const myStorage = window.localStorage;
let wallets = JSON.parse(myStorage.getItem("wallets"));

class Wallet {
  constructor(name, currency, balance, description) {
    this.name = name;
    this.currency = currency;
    this.balance = balance;
    this.description = description;
    this.transactions = [];
  }

  getWalletName() {
    return this.name;
  }
  getBalance() {
    if (this.transactions.length !== 0) {
      return (
        this.transactions.reduce((balance, transaction) => {
          return balance + transaction.getCurrency();
        }, 0) + this.balance
      );
    } else return this.balance;
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(date, wallet, tags, note, currency, income) {
    this.date = date;
    this.wallet = wallet;
    this.tags = tags;
    this.note = note;
    this.currency = currency;
    this.income = income;
  }

  getDate() {
    return this.date;
  }

  getWallet() {
    return this.wallet;
  }

  getTags() {
    return this.tags;
  }

  getNote() {
    return this.note;
  }

  getCurrency() {
    return this.income ? this.currency : -this.currency;
  }

  getIncome() {
    return this.income;
  }
}

const createWalletBtn = document.querySelector(".save-change-btn");

function removeGhostHTML() {
  document.getElementById("middlePart").remove();
}

function renderTransactions() {
  const select = document.querySelector("select");
  const transUl = document.getElementById("transactions-list");
  const selectedWallet = select.options[select.selectedIndex].value;
  let wallet = JSON.parse(myStorage.getItem("wallets")).find(
    (wallet) => wallet.getWalletName() === selectedWallet
  );
  wallet.transactions.forEach((trans) => {
    transUl.insertAdjacentHTML(
      "beforeend",
      `<div class="container"><h5>${trans.getCurrency()}</h5><span>${trans.getDate()}</span></div>`
    );
  });
}

function renderWallet(wallet) {
  headerUL.insertAdjacentHTML(
    "beforeend",
    `<br><select name="wallets" id="wallets">
<option value="${wallet.name}">${wallet.name}</option>
<option value="New wallet">New wallet</option>
</select>`
  );
  header.insertAdjacentHTML(
    "afterend",
    `<div class="second-container">
  <div id="wallet-view">
      <h1 id="balance-display">Wallet balance: ${wallet.balance} ${wallet.currency}</h1>
      <div class="row">
      <label for="transaction-input" class="col col-label">Make a transaction:</label>
  </div>
  <div class="row">
      <div class="input-grp col">
          <input type="number" id="transaction-input" class="transaction-input" placeholder="Enter an amount"
              aria-label="Amount (with dot and two decimal places)">
          <div class="input-group-append">
              <span id="currency-span" class="input-text">$</span>
              <span id="balance-span" class="input-text">0.00</span>
          </div>
      </div>

      <div class="btn-grp  col" data-toggle="buttons">
          <label class="button income">
              <input type="radio" name="trans-type" id="income-radio" />
              Income
          </label>
          <label class="button expense">
              <input type="radio" name="trans-type" id="expense-radio" /> Expense
          </label>
      </div>
  </div>

  <div class="row">
      <label for="note-input" class="col col-label">Transaction Notes:</label>
      <label for="tags-input" class="col col-label">Transaction tags:</label>
  </div>
  <div class="row">
      <div class="input-grp col">
          <input type="text" id="note-input" class="transaction-input" placeholder="Transaction Notes"
              aria-label="Notes about the transactions">
      </div>
      <div class="input-grp col-4">
          <input type="text" id="tags-input" class="transaction-input"
              placeholder="Transaction tags (split tags by comma)" aria-label="tags">
      </div>

      <button value="Add Transaction" class="button add-transaction-btn  col" id="transaction-btn">Add Transaction</button>
  </div>
      </form>
      <ul id="transactions-list" ></ul>`
  );
  transactionBtn = document.getElementById("transaction-btn");
  let trans_tags = document.getElementById("tags-input");
  let trans_notes = document.getElementById("note-input");
  let transCurrency = document.getElementById("transaction-input");
  let select = document.querySelector("select");
  let incomeRad = document.getElementById("income-radio");
  transactionBtn.addEventListener("click", () => {
    let transaction = new Transaction(
      new Date().toLocaleString(),
      select.options[select.selectedIndex].value,
      trans_tags.value,
      trans_notes,
      transCurrency,
      incomeRad.checked
    );
    console.log(transaction);
    console.log(wallets);
    wallets.forEach((wallet) => {
      if (wallet.name === transaction.getWallet())
        wallet.addTransaction(transaction);
    });
    myStorage.removeItem("wallets");
    myStorage.setItem("wallets", JSON.stringify(wallets));
    renderTransactions();
  });
}

wallets = wallets === null ? [] : wallets;
if (wallets.length !== 0) {
  removeGhostHTML();
  renderWallet(wallets[0]);
}

createWalletBtn.addEventListener("click", () => {
  let wallet = new Wallet(
    name.value,
    (currUSA.checked ? currUSA : currLeb).nextElementSibling.innerHTML,
    balance.value,
    description.value
  );
  removeGhostHTML();
  renderWallet(wallet);
  wallets.push(wallet);
  myStorage.setItem("wallets", JSON.stringify(wallets));
});
