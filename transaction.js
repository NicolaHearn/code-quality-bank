class Transaction {
  constructor() {
    this.date = null;
    this.credit_amount = null;
    this.debit_amount = null;
    this.balance = null;
  }

  print() {
    return (`${this.date.toLocaleDateString()} || ${this.credit_amount === null ? '' : this.credit_amount.toFixed(2)} || ${this.debit_amount === null ? '' : this.debit_amount.toFixed(2)} || ${this.balance.toFixed(2)}`)
  }
}

module.exports = Transaction;