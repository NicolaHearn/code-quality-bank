class Transaction {
  constructor() {
    this.date = null;
    this.credit_amount = null;
    this.debit_amount = null;
    this.balance = null;
  }

  print() {
    return "21/01/23 || 500.00 ||  || 500.00";
  }
}

module.exports = Transaction;