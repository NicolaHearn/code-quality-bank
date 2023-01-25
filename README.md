# Code Review BANK

## Description

This is command line programme that allows someone to make 'deposits' and 'withdrawals' from a bank and ask it to print abank statement.

## Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Acceptance Criteria

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Approach

I used a diagram to being this exercise (Diagram.png). I decided to use a class of Transaction and a class of Account. I started by thinking about what I wanted to output to the terminal, working the tests around this and building in unit tests where needed.

I also used a Design recipe (DesignRecipe.md) which proved very useful and has more details about the approach used.

## How to use:

- Fork and clone the repository
- Run npm install to install all dependencies for the project
- Run tests by typing jest into the terminal from the root folder
- In the terminal open a repl by typing 'node'
- then type

```
const Account = require('./account.js')
```

- then type to create a new account to work in.

```
const <AccountName> = new Account()
```

- You can now use the following commands:
  - myAccount.deposit(200, "23/01/2023")
  - myAccount.withdraw(200, "23/01/2023")
  - myAccount.printStatement(200, "23/01/2023")

[!Screenshot](screenshot.png)

## Known issues:

- An error message is output when you enter a date that is earlier than the most recent transaction but it still logs the transaction.
- An error message is output when you enter a date that is not in the correct format but the programme still logs the transaction
- The statement only works if the transactions are input in date order.
