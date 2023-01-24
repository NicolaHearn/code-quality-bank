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
    const month = parseInt(dateString.slice(3, 5));
    const day = dateString.slice(0, 2);

    return new Date(year, month-1, day);
  }

  setPropertiesAndRecord(transaction, date, amount) {
    transaction.date = this.stringToDate(date);
    transaction.balance = this.current_balance;
    this.transactions.push(transaction);

  }
  deposit(date, amount) {
    this.current_balance += amount;
    const new_transaction = new Transaction();
    new_transaction.credit_amount = amount;
    this.setPropertiesAndRecord(new_transaction, date, amount);
    return new_transaction;
  }

  withdraw(date, amount) {
    this.current_balance -= amount;
    const new_transaction = new Transaction();
    new_transaction.debit_amount = amount;
    this.setPropertiesAndRecord(new_transaction, date, amount);
    return new_transaction;
  }

  printStatement() {
    const header = "date || credit || debit || balance";

    const transactions_pretty = [] // .map here would be better but it returned undefined and I couldn't work out why
    this.transactions.reverse().forEach(transaction => transactions_pretty.push(transaction.print()));

    console.log(`${header}\n${transactions_pretty.join("\n")}`);
  }
}

module.exports = Account;
