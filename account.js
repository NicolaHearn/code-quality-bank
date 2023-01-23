const Transaction = require('./transaction.js');

class Account {
  constructor() {
    this.current_balance = 0
    this.transactions = ["date || credit || debit || balance"];
  }

  credit(date, amount) {
    this.current_balance += amount;
    const new_transaction = new Transaction();
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