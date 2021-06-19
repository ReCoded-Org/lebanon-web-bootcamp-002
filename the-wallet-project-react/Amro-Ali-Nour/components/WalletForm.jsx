import { useContext, useState, useEffect } from "react";
import { StateContext } from "../context/StateContext";
import TransactionList from "./TransactionList";
import uuid from "uuid";

function WalletForm({ match }) {
  const [Type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [tag, setTag] = useState("");
  const [note, setNote] = useState("");
  const [submit, setSubmit] = useState(false);
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
  }, [match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    CreateTransaction(uuid.v4(), Type, amount, new Date(), tag, note, active);
    setSubmit((prev) => !prev);
  };

  return (
    <>
      {active ? (
        <div className="form">
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
            <ul className="list-group">
              <TransactionList active={active} />
            </ul>
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
}
export default WalletForm;
