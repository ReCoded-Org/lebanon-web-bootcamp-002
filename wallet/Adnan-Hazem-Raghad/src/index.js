import "./styles.css";
let walletCount = 0;
let transaction = document.getElementById("transaction");
let income = document.getElementById("income");
let expense = document.getElementById("expense");
let notes = document.getElementById("notes");
let tags = document.getElementById("tags");
let balanceH1 = document.getElementById("balance");
let balanceValue = document.getElementById("bal");
let ul = document.getElementById("ulData");
let withWallet = document.getElementById("withWallet");
let noWallet = document.getElementById("noWallet");
let createBtn = document.getElementById("createBtn");
let walletName = document.getElementById("walletName").innerText;
let us = document.getElementById("us");
let lbp = document.getElementById("lbp");
let walletBalance = document.getElementById("walletBalance");
let description = document.getElementById("walletDesctiption");
let liCount = 0;

//generateDom();

var newWallet;
var startBalance;
var t;
if (walletCount === 0) {
  withWallet.style.display = "none";
} else {
  noWallet.style.display = "none";
}

class Wallet {
  constructor(name, currency, balance, description) {
    this.name = name;
    this.currency = currency;
    this.balance = walletBalance.value;
    this.description = description;
    this.transactionArray = [];
    this.transactionArray.push(+walletBalance.value);
    balanceValue.innerText = this.balance;

    if (
      walletBalance.value === "" ||
      name.value === "" ||
      description.value === "" ||
      currency === ""
    ) {
      alert("Empty fields");
    }
    walletCount++;
  }
  getBalance() {
    let result;
    this.balance = this.transactionArray.reduce(function (x, y) {
      result = x + y;
      return result;
    });

    return this.balance;
  }
}

createBtn.addEventListener("click", (e) => {
  let currency;
  if (us.checked === true) {
    currency = us.checked.value;
  } else {
    currency = lbp.checked.value;
  }
  newWallet = new Wallet(
    walletName,
    currency,
    walletBalance.value,
    description.value
  );

  balanceValue.innerTexinnerText = newWallet.balance;
  walletCount++;
  if (walletCount === 0) {
    withWallet.style.display = "none";
  } else {
    withWallet.style.display = "block";
    noWallet.style.display = "none";
  }
});

let transArrayOfObjects = [];

function get_Date() {
  let today = new Date();
  let date =
    today.toLocaleString("default", { month: "long" }) + " " + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return date + " " + time;
}

class Transaction {
  constructor(amount, note, tag, date) {
    this.amount = walletBalance.value;
    this.note = notes.value;
    this.tag = tags.value;
    this.date = get_Date();
  }
  transactionLocal() {
    let transObj = {
      amount: this.amount,
      note: this.note,
      tag: this.tag,
      date: this.date
    };
    transArrayOfObjects.push(transObj);
    //window.localStorage.setItem("user", JSON.stringify(transArrayOfObjects));
  }
}

class Exchange extends Transaction {
  income() {
    this.balance += this.amount;
  }
  expense() {
    this.balance -= this.amount;
  }
  displayBalance() {
    let idk = newWallet.getBalance();
    balanceH1.innerHTML = `<h1 id='balance'>Wallet Balance: <span id='bal'>${idk}</span></h1>`;
  }
  updateBalance() {
    this.amount += startBalance;
    startBalance = 0;
  }
  updateData() {
    if (liCount % 2 === 0) {
      let li = document.createElement("li");
      li.classList.add("w3-hover-blue", "list-group");
      li.innerText = `Amount: ${this.amount}  Note: ${this.note} Tag: ${
        this.tag
      } Time and Date: ${get_Date()}
   `;
      ul.appendChild(li);
    } else {
      let li = document.createElement("li");
      li.classList.add("w3-hover-red", "list-group");
      li.innerText = `Amount: ${this.amount}  Note: ${this.note} Tag: ${
        this.tag
      } Time and Date: ${get_Date()}
      `;
      ul.appendChild(li);
    }
    liCount++;
  }
}

let btn = document.getElementById("trbtn");
var transArray = [];
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let trans = new Exchange();
  if (income.checked === true) {
    newWallet.transactionArray.push(+transaction.value);
    transArray.push(transaction.value);
    trans.income();
    trans.displayBalance();
    trans.updateData();
  }
  if (expense.checked === true) {
    newWallet.transactionArray.push(+transaction.value * -1);
    transArray.push(transaction.value * -1);
    trans.expense();
    trans.displayBalance();
    trans.updateData();
  }
  trans.transactionLocal();
  balanceValue = startBalance + t;
});

// function generateDom() {
//   let storedData = JSON.parse(window.localStorage.getItem("user"));
//   // storedData.forEach((el) => {
//   //   let li = document.createElement("li");
//   //   li.classList.add("list-group-item");
//   //   li.classList.add("list-group-flush");
//   //   li.innerText = `Amount: ${el.amount}  Note: ${el.note} Tag: ${el.tag} Time and Date: ${el.date}
//   //   `;
//   //   ul.appendChild(li);
//   // });

//   console.log(window.localStorage.getItem("user"));
// }
