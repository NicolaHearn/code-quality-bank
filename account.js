class Account {
  constructor() {
    this.current_balance = 0
    this.transactions = ["date || credit || debit || balance"];
  }

  print_statement() {
    return this.transactions;
  }

  printStatement() {

    const header = "date || credit || debit || balance";
    return header;
  }
}

module.exports = Account;