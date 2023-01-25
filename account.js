const Transaction = require('./transaction.js');

// const replServer = repl.start({
//   prompt: "node > ",
//   input: process.stdin,
//   output: process.stdout,
//   useGlobal: true
// });
// replServer.on('exit', function() {
//   console.log("REPL DONE");
// });

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
        console.log('it is true')
        return true
        } else {
        console.log('it is false')
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

  addBalance() {
    const transactionSort = this.transactions.sort((a,b) => a.date - b.date);
    for (const trans of transactionSort) {
      if (trans === transactionSort.at(0)) {
        trans.balance = 0 + trans.credit_amount - trans.debit_amount
      } else {
        trans.balance = transactionSort[transactionSort.indexOf(trans)-1].balance + trans.credit_amount - trans.debit_amount
      }
    }
      // if (trans === transactionSort.at(0)) {
      //   trans.balance = 0 + trans.credit_amount - trans.debit_amount
      // } else {
      //   trans.balance = (transactionSort[transactionSort.indexOf(trans)-1].balance) + trans.credit_amount - trans.debit_amount
      // }
  

    return transactionSort;

  }

  // printStatement() {
  //   const header = "date || credit || debit || balance";

  //   const transactions_pretty = [] // .map here would be better but it returned undefined and I couldn't work out why
  //   this.transactions.reverse().forEach(transaction => transactions_pretty.push(transaction.print()));

  //   console.log(`${header}\n${transactions_pretty.join("\n")}`);
  // }
}

module.exports = Account;
