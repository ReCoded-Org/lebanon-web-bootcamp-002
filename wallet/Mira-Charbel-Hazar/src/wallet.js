class Wallet {
  constructor(name, description, currency, balance = 0, transactions) {
    this.name = name;
    this.balance = +balance;
    this.transactions = transactions ? transactions : [];
    this.description = description;
    this.currency = currency;
  }
  getBalance() {
    let balance = this.transactions.reduce((a, t) => {
      return a + t.getAmount();
    }, this.balance);
    return balance;
  }

  showTransaction(transaction) {
    this.transactions.push(transaction);
  }
  toHTML() {}
  toJSON() {
    let curr = (this.currency = JSON.stringify());
    return {
      name: this.name,
      description: this.description,
      currency: curr,
      balance: this._balance,
      transactions: this.transactions.map((t) => t.JSON.stringify())
    };
  }
}
//==========================
class Transaction {
  constructor(name, tags, notes, date = new Date()) {
    this.name = name;
    this.tags = tags;
    this.notes = notes;
    this.date = date;
  }
  RenderTransactions() {
    const li = document.createElement("li");
    const createAmountDiv = document.createElement("div");
    createAmountDiv.classList.add("row");

    const amount = document.createElement("h3");
    amount.classList.add("col-md-6");
    if (this instanceof Expense) {
      amount.classList.add("expense");
    } else {
      amount.classList.add("income");
    }

    const dateList = document.createElement("p");
    dateList.classList.add("col-md-6", "text-right");
    dateList.innerText =
      this.date.toDateString() + " | " + this.date.toLocaleTimeString();
    createAmountDiv.append(amount, dateList);
    const notes_tagsDiv = document.createElement("div");
    const tags = document.createElement("p");
    const notes = document.createElement("p");
    amount.innerText = this.amount;
    notes.innerText = this.note;
    this.tags
      .map((t) => {
        let span = document.createElement("span");
        span.innerText = t;
        return span;
      })
      .forEach((s) => tags.appendChild(s));
    notes_tagsDiv.append(notes, tags);

    li.append(createAmountDiv, notes_tagsDiv);
    return li;
  }
  toJson() {
    let transaction = {
      name: this.name,
      tags: this.tags,
      notes: this.notes,
      date: this.date
    };
    let setTransaction = localStorage.setItem(
      "transaction",
      JSON.stringify(transaction)
    );
    let retrieveTransaction = localStorage.getItem("transaction");
  }
}
class Expense extends Transaction {
  getAmount() {
    return this.amount * -1;
  }
}
class Income extends Transaction {
  getAmount() {
    return this.amount;
  }
}
class Currency {
  constructor(name, sign, exchangeRate) {
    this.name = name;
    this.sign = sign;
    this.exchangeRate = exchangeRate;
  }
  static USD() {
    return new this("United States Dollar", "$", 1);
  }
  static LL() {
    return new this("Lebanese Pounds", "LL", 3900);
  }
}

let wallets = [];
let currentWallet = null;
//load_from_storage();
// function load_from_storage() {
//   if (window.localStorage) {
//     const data = localStorage.getItem("Wallet");
//     if (data) {
//       wallets = JSON.parse(data).map((obj) => Wallet.fromJSON(obj));
//     }
//   }
// }

function displayTransactions() {
  const List = document.getElementById("transactions-list");
  List.innerHTML = "";
  currentWallet.transactions.forEach((t) => {
    List.appendChild(t.RenderTransactions());
  });
}
function Balance() {
  const rou2iya = document.getElementById("displayBalance");
  rou2iya.innerText =
    "Wallet Balance: " +
    currentWallet.currency.sign +
    currentWallet.getBalance().toFixed(3);

  const Span = document.getElementById("rasid");
  Span.innerText = currentWallet.getBalance().toFixed(2);
}

function SwitchView(showWallet) {
  let no_view_wallet = document.getElementById("no-wallet-view");
  let view_wallet = document.getElementById("wallet-view");
  let walletBtns = document.getElementById("wallet-btns");
  if (!showWallet) {
    view_wallet.classList.remove("d-block");
    view_wallet.classList.add("d-none");

    no_view_wallet.classList.add("d-block");
    no_view_wallet.classList.remove("d-none");
    walletBtns.classList.add("d-none");
  } else {
    view_wallet.classList.remove("d-none");
    view_wallet.classList.add("d-block");
    no_view_wallet.classList.add("d-none");
    no_view_wallet.classList.remove("d-block");
    walletBtns.classList.remove("d-none");
  }
}
function CreateNew_wallet() {
  const createWalletBtn = document.getElementById("create-wallet-btn");
  createWalletBtn.addEventListener("click", (e) => {
    const name = document.getElementById("name");
    const balance = document.getElementById("balance");
    const description = document.getElementById("description");
    const currency = document.getElementById("usd");
    //function CurrencyCheck(){
    //   if(Currency.checked)
    //}
    const checkedCurrency = 0;
    let w = new Wallet(
      name.value,
      description.value,
      checkedCurrency,
      balance.value
    );
    wallets.push(w);
    save_to_storage();
    setActiveWallet(wallets.length - 1);
  });
}
let Showbtn = document.getElementById("ShowModal");
Showbtn.addEventListener("click", ShowModal);
function ShowModal() {
  let modal = document.getElementById("wallet-modal");
  modal.classList.remove("d-none");
  modal.classList.add("displayModal");
}
let Xbtn = document.getElementById("xclose");
Xbtn.addEventListener("click", CloseModal);
function CloseModal() {
  let xmodal = document.getElementById("wallet-modal");
  xmodal.classList.remove("displayModal");
  xmodal.classList.add("d-none");
  console.log("Yes");
}
function dropDown() {
  const walletList = document.getElementById("wallet-list");
  walletList.innerHTML = `                
  <div class="dropdown-divider"></div>
  <button class="dropdown-item" data-toggle="modal" data-target="#ShowModal">+ Create new
                    wallet</button>
  `;
  wallets.forEach((wallet, i) => {
    walletList.insertAdjacentHTML(
      "afterbegin",
      `
    <button onclick="setActiveWallet(${i})" class="dropdown-item">${wallet.name}</button>    
    `
    );
  });
}
let activeWallet = [];
//load wallets from local storage
//load_from_storage();

//save wallet to local storage
function save_to_storage() {
  if (window.localStorage) {
    let json = wallets.map((w) => w.toJSON());
    localStorage.setItem("Wallet", JSON.stringify(json));
    Dropdown();
  }
}

function Dropdown() {
  const wallet_dropdown = document.getElementById("wallet-list");
  wallet_dropdown.innerHTML = `                
<div class="dropdown-divider"></div>
<button class="dropdown-item" data-toggle="modal" data-target="#wallet-form-modal">+ Create new
                  wallet</button>
`;
  wallets.forEach((wallet, i) => {
    wallet_dropdown.innerText = `
  <button onclick="setActiveWallet(${i})" class="dropdown-item">${wallet.name}</button>    
  `;
  });
}

function setActiveWallet(index) {
  activeWallet = wallets[index];

  if (activeWallet) {
    const selectedWalletButton = document.getElementById("selected");
    selectedWalletButton.innerText = activeWallet.name;

    const currencySym = document.getElementById("currencySymbol");
    currencySym.innerText = activeWallet.currency;

    Balance();
    displayTransactions();
    SwitchView(true);
  }
}
CreateNew_wallet();
