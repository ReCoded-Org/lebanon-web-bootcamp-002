import { useContext, useState, useEffect } from "react";
import { StateContext } from "../context/StateContext";
import uuid from "uuid";

function WalletForm({ match }) {
  const [Type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [tag, setTag] = useState("");
  const [note, setNote] = useState("");
  // const [tran, setTran] = useState([]);
  const [active, setActive] = useState("");

  // (active.Transactions.Income.length && active.Transactions.Expense.length)
  const { wallets, CreateTransaction } = useContext(StateContext);

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  useEffect(() => {
    setActive(wallets.filter((wallet) => wallet.id === match.params.id)[0]);
  }, []);
  // useEffect(() => {
  //   if (active) {
  //     const arr = [
  //       ...active.Transactions.Income,
  //       ...active.Transactions.Expense
  //     ];
  //     setTran(arr);
  //   }
  // }, [active]);
  // .sort((a, b) => b.date - a.date)
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Type", Type);
    // console.log("amount", amount);
    // console.log("tag", tag);
    // console.log("note", note);
    const id = uuid.v4();
    let today = new Date();
    let date =
      today.toLocaleString("default", { month: "short" }) +
      " | " +
      today.toLocaleString("default", { day: "2-digit" }) +
      " | " +
      today.toLocaleTimeString();

    CreateTransaction(id, Type, amount, date, tag, note, active);
  };

  return (
    <>
      {active ? (
        <>
          <form>
            <div className="form-group">
              <h4 className="display-4" id="walletNameForm">
                {active.name}
              </h4>
              <label
                id="walletBalance"
                className="control-label display-6 mb-3"
              >
                Wallet Balance: {active.currency} {active.balance}
              </label>
              <p id="descForm" className="fs-4 fw-bolder tex-wrap"></p>
            </div>
            <div className="row">
              <div className="btn-group mb-3 col-md-4" id="radio">
                <input
                  type="radio"
                  className="btn-check"
                  name="options-outlined"
                  id="incomeRadio"
                  checked={Type === "income"}
                  value="income"
                  onChange={handleTypeChange}
                  autoComplete="off"
                />
                <label
                  className="btn btn-outline-success"
                  htmlFor="incomeRadio"
                >
                  Income
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="options-outlined"
                  id="expenseRadio"
                  checked={Type === "expense"}
                  value="expense"
                  onChange={handleTypeChange}
                  autoComplete="off"
                />
                <label
                  className="btn btn-outline-danger"
                  htmlFor="expenseRadio"
                >
                  Expense
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="mb-2 control-label">Amount</label>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <div className="input-group">
                  {/* <!-- transactions input --> */}
                  <input
                    type="number"
                    id="transactionValue"
                    className="form-control"
                    onChange={handleAmountChange}
                  />
                  <span className="input-group-text" id="currencySpan">
                    {active.currency}
                  </span>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="form-group mb-2 col-md-4">
                {/* <!-- transaction tags --> */}
                <label htmlFor="transactionTags" className="control-label">
                  Tags
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="transactionTags"
                  placeholder="Transaction Tags"
                  onChange={handleTagChange}
                />
              </div>
              <div className="form-group mb-2 col-md-4">
                {/* <!-- transaction notes --> */}
                <label htmlFor="transactionNotes" className="control-label">
                  Note
                </label>
                <textarea
                  className="form-control"
                  placeholder="Transaction Notes"
                  id="transactionNotes"
                  rows="3"
                  onChange={handleNoteChange}
                ></textarea>
              </div>
              <div className="col-md-4 mt-4">
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="btn btn-secondary"
                  id="addTransaction"
                >
                  Add Transaction
                </button>
              </div>
            </div>
          </form>
          <div className="row ms-2">
            {/* <!-- add transaction in js here!! --> */}
            <ul className="list-group">
              {active &&
                active.Transactions.Income.map((tran) => (
                  <li key={tran.id}>
                    <div>
                      <span>{tran.amount}</span>
                      <span>{tran.date}</span>
                    </div>
                    <div className="pop">
                      <span>{tran.tag}</span>
                      <span>{tran.note}</span>
                    </div>
                    <hr />
                  </li>
                ))}
              {active &&
                active.Transactions.Expense.map((tran) => (
                  <li key={tran.id}>
                    <div>
                      <span>{tran.amount}</span>
                      <span>{tran.date}</span>
                    </div>
                    <div className="pop">
                      <span>{tran.tags}</span>
                      <span>{tran.note}</span>
                    </div>
                    <hr />
                  </li>
                ))}
            </ul>
          </div>
        </>
      ) : (
        " "
      )}
    </>
  );
}
export default WalletForm;

// if (transactions[i].type === "Expense") {
//   transactionsUL.innerHTML += `

// <div className="row">
//   <div className="col col-md-8 ps-0 mb-0 pb-0 me-0 pe-0">
//     <div className="dropdown">
//       <button
//         style={{ width: "100%", height: "100%" }}
//         className="dropdown-toggle descdrop py-0 px-0"
//         id="dropdownbtn"
//         data-bs-toggle="dropdown"
//       >
//         <li className="me-0 text-white bg-danger list-group-item">- 1000</li>
//       </button>
//       <div
//         className="dropdown-menu"
//         style={{ backgroundColor: "#aaaaaa", width: "100%" }}
//         aria-labelledby="dropdownbtn"
//       >
//         <p className="fw-bolder fs-5 text-black ms-2"> desc</p>
//         <span className="ms-1 badge rounded-pill bg-primary">tag</span>
//       </div>
//     </div>
//   </div>
//   <div id="dated" className="col col-md-4 bg-info align-self-end">
//     <p className="fw-bolder mb-0 mt-2 text-center">date</p>
//   </div>
// </div>;

// let today = new Date();
// let date =
//   today.toLocaleString("default", { month: "short" }) +
//   " | " +
//   today.toLocaleString("default", { day: "2-digit" }) +
//   " | " +
//   today.toLocaleTimeString();
// let today = new Date();
// let date =
//   today.toLocaleString("default", { month: "short" }) +
//   " | " +
//   today.toLocaleString("default", { day: "2-digit" }) +
//   " | " +
//   today.toLocaleTimeString();
