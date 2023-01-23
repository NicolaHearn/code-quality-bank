# Diary Method Design Recipe

## 1. Problem

As a user
So that I can keep track of my transactions
I want to print a list of all my transactions in reverse date order.

As a user
So that I can keep track of my transactions
I want to print a list of all my transactions showing the date, credit/debit amount and balance at time of transaction.

As a user
So that I can make deposits
I want to be able to add money to the account balance.

As a user
So that I can make withdrawals
I want to take money away from the account balance.

## 2. Classes

Account
properties: 
  - current_balance
  - transactions (array of transaction objects)
methods:
  - credit()
  - debit()
  - print_statement()

Transaction
properties
  - date (date)
  - credit_amount (decimal)
  - debit_amount  (decimal)
  - balance (decimal)
methods:
  - print() 

## 3. Method Signatures

```javascript
credit = Account.credit(date, amount)
- date is text in format "dd/mm/yy"
- amount is number in format 00.00
- returns a transaction object which stores the date, credit_amount, debit_amount, current_balance

debit = Account.debit(date, amount)
- date is text in format "dd/mm/yy"
- amount is number in format 00.00
- returns a transaction object which stores the date, credit_amount, debit_amount, current_balance

statement = Account.print_statement()
- converts date into a timestamp
- sorts transactions by date
- prints a list of the return value of transaction.print() for each transaction

transaction.print()
- returns and prints the string: `${date} || ${credit_amount} || ${debit_amount} || ${balance}`

```

## 4. Create Examples as Tests

_Make a list of examples of what the method will take and return._

```javascript

Account.credit("18/01/23", 300)     => {date: "18/01/23", credit_amount: 300, debit_amount: 0, balance: 300}
Account.credit("23/01/23", 200)     => {date: "23/01/23", credit_amount: 200, debit_amount: 0, balance: 500}
Account.debit("24/01/23", 100)      => {date: "24/01/23", credit_amount: 0, debit_amount: 100, balance: 400}
Account.print_statement()           => date || credit || debit || balance
                                       24/01/2023 ||  || 100 || 400
                                       23/01/2023 || 200 || || 500
                                       18/01/2023 || 300 || || 300                              
Account.credit("18", 300)           => Fail "Date must be in format: "dd/mm/yy""
Account.credit("18/01/23")          => Fail "Please enter an amount"
Amount.credit("18/01/23", -200)     => Fail "credit amount must be greater than 0"
Account.debit("18", 300)            => Fail "Date must be in format: "dd/mm/yy""
Account.debit("18/01/23")           => Fail "Please enter an amount"
Amount.debit("18/01/23", -200)      => Fail "credit amount must be greater than 0"
If no transactions exist            => date || credit || debit || balance
                                       ** no transactions available **

Date must not be earlier than the most recent transaction
```

## 4. Implement the Behaviour

_After each test you write, follow the test-driving process of red, green, refactor to implement the behaviour._