class Account {
  constructor() {
    this.current_balance = 0
    this.transactions = ["date || credit || debit || balance"];
  }

  credit(date, amount) {
    this.current_balance += amount;
  }

  printStatement() {

    const header = "date || credit || debit || balance";
    return header;
  }
}

module.exports = Account;