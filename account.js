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


  credit(date, amount) {
    this.current_balance += amount;
    const new_transaction = new Transaction();

    new_transaction.date = this.stringToDate(date);
    new_transaction.credit_amount = amount;
    new_transaction.balance = this.current_balance;
    this.transactions.push(new_transaction);
    return new_transaction;
  }

  debit(date, amount) {
    this.current_balance -= amount;
    const new_transaction = new Transaction();
    new_transaction.date = this.stringToDate(date);
    new_transaction.debit_amount = amount;
    new_transaction.balance = this.current_balance;
    this.transactions.push(new_transaction);
    return new_transaction;
  }

  printStatement() {
    const header = "date || credit || debit || balance";
    // print_list = []
    console.log(`${header}`);
    // \n${this.transactions.forEach(transaction => console.log(transaction.print()))}`);

    this.transactions.forEach(transaction => console.log(transaction.print()))
  }
}



module.exports = Account;
