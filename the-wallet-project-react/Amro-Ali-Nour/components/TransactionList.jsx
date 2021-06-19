import TransactionItem from "./TransactionItem";
function TransactionList({ active }) {
  const list = [
    ...active.Transactions.Income,
    ...active.Transactions.Expense
  ].sort((a, b) => b.date - a.date);

  return list.map((tran) => <TransactionItem key={tran.id} tran={tran} />);
}
export default TransactionList;
