function TransactionItem({ tran }) {
  const displayDate = (today) => {
    let date =
      today.toLocaleString("default", { month: "short" }) +
      " | " +
      today.toLocaleString("default", { day: "2-digit" }) +
      " | " +
      today.toLocaleTimeString();
    return date;
  };
  // const style = {
  //   color: "blue"
  // }

  return (
    <li className="li">
      <div className="item">
        <span>{tran.amount}</span>
        <span>{displayDate(tran.date)}</span>
      </div>
      <div className="note">
        <span>{tran.note}</span>
      </div>
      <div className="tag">
        <span>{tran.tags}</span>
      </div>

      <hr />
    </li>
  );
}
export default TransactionItem;
