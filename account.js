const Transaction = require('./transaction.js');

class Account {
  constructor() {
    this.current_balance = 0
    this.transactions = ["date || credit || debit || balance"];
  }



  credit(date, amount) {
    this.current_balance += amount;
    const new_transaction = new Transaction();
    
    //date logic 23/01/2023
    const year = date.slice(6);
    const month = parseInt(date.slice(3, 5));
    const day = date.slice(0, 2);

    new_transaction.date = new Date(year, month-1, day);
    return new_transaction;
  }

  debit(date, amount) {
    this.current_balance -= amount;
    const new_transaction = new Transaction();
    return new_transaction;
  }

  printStatement() {
    const header = "date || credit || debit || balance";
    return header;
  }
}

module.exports = Account;