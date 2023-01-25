const Transaction = require('./transaction.js');

class Account {
  constructor() {
    this.current_balance = 0
    this.transactions = [];
  }

  stringToDate(dateString) {
      const year = dateString.slice(6);
      const month = dateString.slice(3, 5);
      const day = dateString.slice(0, 2);

      return new Date(year, month-1, day);
  }

  dateStringValid(date) {
    const dateFormat = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/
    if ((typeof date) == "string") {
      if (date.match(dateFormat)) {
     
        return true
        } else {
       
        return false
        }
    } else {
      return false
    }
  }

  dateIsDateObject(date) {
    if (Object.prototype.toString.call(date) === "[object Date]") {
      return true
      } else {
       return false
      }
  }

  createTransaction(amount, date) {
    const new_transaction = new Transaction();
    new_transaction.date = date;
    amount > 0 ? new_transaction.credit_amount = amount : new_transaction.debit_amount = amount*-1;
    new_transaction.balance = this.current_balance;
    this.transactions.push(new_transaction);
  }

  deposit(amount, date = new Date()) {
    if (this.dateIsDateObject(date) || this.dateStringValid(date)) {
      this.dateIsDateObject(date) ? date : date = this.stringToDate(date);
      this.current_balance += amount;
      this.createTransaction(amount, date);
    } else {
      return false
    }
  };

  withdraw(amount, date = new Date()) {
    if (this.dateIsDateObject(date) || this.dateStringValid(date)) {
      this.dateIsDateObject(date) ? date : date = this.stringToDate(date);
      this.current_balance -= amount;
      this.createTransaction(amount*-1, date);
    } else {
      return false
    }
  }

  balanceCumulative() {
    const transactionSort = this.transactions.sort((a,b) => a.date - b.date);
    transactionSort.forEach((transaction) => {
      if (transaction === transactionSort.at(0)) {
        transaction.balance = 0 + transaction.credit_amount - transaction.debit_amount
      } else {
        transaction.balance = transactionSort[transactionSort.indexOf(transaction)-1].balance + transaction.credit_amount - transaction.debit_amount
      }
    });
    return transactionSort
  }

  printStatement() {
    const header = "date || credit || debit || balance";

    const transactionsPrint = []

    this.balanceCumulative().reverse().map((transaction) => {transactionsPrint.push(
      `${transaction.date.toLocaleDateString()} || ${transaction.credit_amount === null ? '' : transaction.credit_amount.toFixed(2)} || ${transaction.debit_amount === null ? '' : transaction.debit_amount.toFixed(2)} || ${transaction.balance.toFixed(2)}`
    )});

    console.log(`${header}\n${transactionsPrint.join("\n")}`);
  }
}

module.exports = Account;
