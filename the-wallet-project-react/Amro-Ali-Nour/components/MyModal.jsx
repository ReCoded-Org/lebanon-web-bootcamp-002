import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid";
import { StateContext } from "../context/StateContext";

const MyModal = () => {
  const [name, setName] = useState("");
  const [cur, setCur] = useState([]);
  const [bal, setBal] = useState(0);
  const [desc, setDesc] = useState("");

  const { CreateWallet } = useContext(StateContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCurChange = (e) => {
    setCur(e.target.value);
  };
  const handleBalChange = (e) => {
    setBal(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const id = uuid.v4();
  const handleSubmit = () => {
    CreateWallet(id, name, cur, bal, desc);
    // console.log("name:", name);
    // console.log("Cur:", cur);
    // console.log("Bal:", bal);
    // console.log("Desc:", desc);
  };

  return (
    <>
      <div>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header new-wallet">
              <h4 className="modal-title">Create New Wallet</h4>
              <Link to="/">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="close"
                ></button>
              </Link>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label className="control-label">Wallet Name</label>
                  <div>
                    <input
                      id="walletName"
                      onChange={handleNameChange}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <hr className="divider" />
                </div>

                <div className="form-group currency">
                  <select
                    onChange={handleCurChange}
                    id="currency"
                    className="form-select form-select-sm"
                  >
                    <option value="-">Select Currency</option>
                    <option value="$">USD ($)</option>
                    <option value="LBP">Lebanese Pounds (LBP)</option>
                  </select>
                </div>
                <hr className="divider" />
                <div className="form-group">
                  <label className="control-label">Balance</label>
                  <div>
                    <input
                      onChange={handleBalChange}
                      type="number"
                      className="form-control"
                      id="balance"
                    />
                    <hr className="divider" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="contol-label">Description</label>
                  <div>
                    <input
                      onChange={handleDescChange}
                      id="desc"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
              </form>
              {/* <!--Create Button inside Modal--> */}
              <div className="modal-footer justify-content-center">
                <Link to={`/walletForm/${id}`}>
                  <button
                    onClick={() => handleSubmit()}
                    style={{ width: "100%" }}
                    data-bs-dismiss="modal"
                    type="submit"
                    id="createBtnM"
                    className="btn btn-success rounded-pill"
                  >
                    Save
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyModal;
