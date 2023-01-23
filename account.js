const Transaction = require('./transaction.js');

class Account {
  constructor() {
    this.current_balance = 0
    this.transactions = ["date || credit || debit || balance"];
  }

  stringToDate(dateString) {
    const year = dateString.slice(6);
    const month = parseInt(dateString.slice(3, 5));
    const day = dateString.slice(0, 2);

    return new Date(year, month-1, day);
  }


  credit(date, amount) {
    this.current_balance += amount;
    const new_transaction = new Transaction();

    new_transaction.date = this.stringToDate(date);
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