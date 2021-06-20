import React from "react";

export default function TransItem({ transaction }) {
  return (
    <div className="item">
      <div>
        <h3>{transaction.balance}</h3>
        <h4>{transaction.notes}</h4>
        <h6 id="tags-item">{transaction.tags}</h6>
      </div>
      <h4>{transaction.date}</h4>
    </div>
  );
}
