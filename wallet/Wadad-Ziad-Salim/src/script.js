class Wallet {
  constructor(name, currency, balance = 0, desc = "") {
    this.name = name;
    this.currency = currency;
    this.balance = balance;
    this.desc = desc;
    this.transactionList = [];
  }

  get getBalance() {
    return this.balance;
  }

  set changeBalance(bal) {
    this.balance = bal;
  }

  renderWallet() {
    walletH4.innerHTML = this.name;
    walletDisc.innerHTML = this.desc;
    walletBalance.innerHTML =
      "Wallet Balance: " + this.getBalance + this.currency;
  }
  // nav bar button containing all the wallets
  addToDropDown(id) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.classList.add("dropdown-item");
    a.href = "#";
    a.id = id;
    a.innerHTML = `${this.name}`;
    a.addEventListener("click", (e) => {
      currentWallet = wallets[parseInt(a.id, 10)];
      currentWallet.renderWallet();
      currentWallet.renderTransaction();
    });
    li.appendChild(a);
    dropDownUl.prepend(li);
  }
  // make a transaction and calls render function
  makeTransaction() {
    let type;
    // income transaction
    if (income.checked) {
      if (amount.value >= 0) {
        type = "Income";
        this.changeBalance = this.getBalance + parseFloat(amount.value, 10);
      } else {
        alert("cannot add negative number");
      }
    }
    // expense transaction
    else {
      if (amount.value >= 0) {
        type = "Expense";
        this.changeBalance = this.getBalance - parseFloat(amount.value, 10);
      } else {
        alert("cannot add negative number");
      }
    }
    let today = new Date(); // gets today's Date
    let date =
      today.toLocaleString("default", { month: "short" }) +
      " | " +
      today.toLocaleString("default", {day: "2-digit"  }) +
      " | " +
      today.toLocaleTimeString();

    // put everything in an array containing each transaction as object
    this.transactionList.push({
      type: type,
      amount: amount.value,
      Tags: tags.value,
      Description: note.value,
      date: date
    });
    this.renderWallet();
  }
  // <button class = "btn dropdown-toggle" type = "button" data-bs-toggle="dropdown" id="dropdownbtn" aria-expanded ="false">
  // displays the transaction on the DOM
  renderTransaction() {
    transactionsUL.innerHTML = ""; // empties the HTML before adding new transactions
    let transactions = currentWallet.transactionList;

    // income rendering
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].type === "Income") {
        transactionsUL.innerHTML += ` 
        <div class= "row">
          <div class ="col col-md-8 ps-0 mb-0 pb-0 me-0 pe-0">
            <div class ="dropdown">
            <button style="width:100%; height:100%" class= "dropdown-toggle descdrop py-0 px-0" id="dropdownbtn" data-bs-toggle="dropdown" >
            <li class = "me-0 text-white bg-success list-group-item">+ ${transactions[i].amount}</li>
            </button>
              <div class="dropdown-menu" style="background-color:#aaaaaa; width:100%" aria-labelledby="dropdownbtn">
                <p class = "fw-bolder fs-5 text-black ms-2"> ${transactions[i].Description}</p>
                <span class="ms-1 badge rounded-pill bg-primary">${transactions[i].Tags}</span>
              </div>
            </div>
          </div>
          <div id= "dated" class= "col col-md-4 bg-info align-self-end">
            <p  class= "fw-bolder mb-0 mt-2 text-center">${transactions[i].date}</p>
          </div>
        </div>
        `;

        transactionsDiv.appendChild(transactionsUL);
      }
      // expense rendering
      if (transactions[i].type === "Expense") {
        transactionsUL.innerHTML += ` 
        <div class= "row">
          <div class ="col col-md-8 ps-0 mb-0 pb-0 me-0 pe-0">
            <div class ="dropdown">
            <button style="width:100%; height:100%" class= "dropdown-toggle descdrop py-0 px-0" id="dropdownbtn" data-bs-toggle="dropdown" >
            <li class = "me-0 text-white bg-danger list-group-item">- ${transactions[i].amount}</li>
            </button>
              <div class="dropdown-menu" style="background-color:#aaaaaa; width:100%" aria-labelledby="dropdownbtn">
                <p class = "fw-bolder fs-5 text-black ms-2"> ${transactions[i].Description}</p>
                <span class="ms-1 badge rounded-pill bg-primary">${transactions[i].Tags}</span>
              </div>
            </div>
          </div>
          <div id= "dated" class= "col col-md-4 bg-info align-self-end">
            <p  class= "fw-bolder mb-0 mt-2 text-center">${transactions[i].date}</p>
          </div>
        </div>
        `;
        transactionsDiv.appendChild(transactionsUL);
      }
    }
  }
}
//DOM elements
let saveBtn = document.getElementById("createBtnM");
let welcome = document.getElementById("hidden1");
let walletPage = document.getElementById("hidden2");
let balance = document.getElementById("balance");
let walletsNameDrop = document.getElementById("walletsNames");
let walletBalance = document.getElementById("walletBalance");
let walletName = document.getElementById("walletName");
let amount = document.getElementById("transactionValue");
let tags = document.getElementById("transactionTags");
let note = document.getElementById("transactionNotes");
let transactionButton = document.getElementById("addTransaction");
let currencyD = document.getElementById("currency");
let desc = document.getElementById("desc");
let income = document.getElementById("incomeRadio");
let transactionsUL = document.getElementById("transactionsUL");
let dropDownUl = document.getElementById("dropdownUl");
let transactionsDiv = document.getElementById("transactionsDiv");
let currencySpan = document.getElementById("currencySpan");
let walletH4 = document.getElementById("walletNameForm");
let walletDisc = document.getElementById("descForm");

//Variables
let wallets = [];
let currentWallet;
let memoryList = [];
let currentId = 0;

//get the values from the local storage as list of objects
if (localStorage.getItem("walletList") !== null) {
  //remove welcome page since we have wallets
  welcome.classList.add("d-none");
  walletPage.classList.remove("d-none");
  walletsNameDrop.classList.remove("d-none");
  memoryList = JSON.parse(localStorage.getItem("walletList"));
  //create Wallet object with the data
  currentWallet = new Wallet(
    memoryList[0].name,
    memoryList[0].currency,
    memoryList[0].balance,
    memoryList[0].desc
  );
  currentWallet.transactionList = memoryList[0].transactionList;
  //show this wallet
  currentWallet.renderWallet();
  currentWallet.renderTransaction();
  //add all wallets to the dropdown menu
  memoryList.forEach((element, index) => {
    currentWallet = new Wallet(
      memoryList[index].name,
      memoryList[index].currency,
      memoryList[index].balance,
      memoryList[index].desc
    );
    currentWallet.transactionList = memoryList[index].transactionList;
    currentWallet.addToDropDown(index);
    //after making Wallet objects push them to the list of Wallet objects
    wallets.push(currentWallet);
  });
}

// removes welcome page when new wallet is added
saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  welcome.classList.add("d-none");
  walletPage.classList.remove("d-none");
  walletsNameDrop.classList.remove("d-none");
  currentWallet = new Wallet(
    walletName.value,
    currencyD.value,
    +balance.value,
    desc.value
  );
  wallets.push(currentWallet);
  localStorage.setItem("walletList", JSON.stringify(wallets));
  currentWallet.renderWallet();
  currentWallet.addToDropDown(currentId);
  currentId++;
  currencySpan.innerHTML = currencyD.value;
});

// renders the transaction
transactionButton.addEventListener("click", (e) => {
  e.preventDefault();
  currentWallet.makeTransaction();
  currentWallet.renderTransaction();
  amount.value = "";
  tags.value = "";
  note.value = "";
  localStorage.setItem("walletList", JSON.stringify(wallets));
});
