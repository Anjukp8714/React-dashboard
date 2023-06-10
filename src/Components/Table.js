import React from 'react';
import './Table.css'
const Table = () => {
  const transactions = [
    {
      id: 1, account: 'Sales', debit: 25000, credit: 0, month: 'Aug'
    },
    {
      id: 2, account: 'Sales', debit: 65000, credit: 0, month: 'Sep'
    },
    {
      id: 3, account: 'Sales', debit: 52000, credit: 0, month: 'Aug'
    },
    {
      id: 4, account: 'Bank', debit: 0, credit: 25000, month: 'Aug'
    },
    {
      id: 5, account: 'Purchase', debit: 0, credit: 6500, month: 'Sep'
    },
    {
      id: 6, account: 'Purchase', debit: 5000, credit: 25000, month: 'Dec'
    },
    {
      id: 7, account: 'Asset', debit: 1000, credit: 0, month: 'Dec'
    },
    {id: 8, account: 'Purchase', debit: 0, credit: 1200, month: 'Nov'}
  ];

  return (
    <div className='table'>
      <div className='heading pb-10 font-medium'><h1>Account Dashboard</h1></div>
      <table>
        <thead>
          <tr>
            <th>Account</th>
            <th>Credit</th>
            <th>Debit</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.account}</td>
              <td>{transaction.credit}</td>
              <td>{transaction.debit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
