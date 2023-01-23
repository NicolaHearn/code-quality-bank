class Account {
  constructor() {
    this.current_balance = 0
    this.transactions = ["date || credit || debit || balance"];
  }

  print_statement() {
    return this.transactions;
  }
}

module.exports = Account;