const Transaction = require('./transaction.js');
const Account = require('./account.js')

describe('account', () => {
  describe('constructs and stores properties', () => {
    it('initializes a new object (account) with a starting balance of zero and an empty array for storing transactions', () => {
      const myAccount = new Account(); 

      expect(myAccount instanceof Account).toBe(true);
      expect(myAccount.current_balance).toEqual(0);
      expect(myAccount.transactions instanceof Array).toBe(true);
    });

    it('keeps a list of all transactions', () => {
      const myAccount = new Account();

      tOne = myAccount.credit("12/01/2023", 500);
      tTwo = myAccount.debit("13/01/2023", 100);

      expect(myAccount.transactions).toEqual([
        {date: new Date("2023", "01" -1, "12"), credit_amount: 500, debit_amount: null, balance: 500},
        {date: new Date("2023", "01" -1, "13"), credit_amount: null, debit_amount: 100, balance: 400}
        ]);
    });
  });

  describe('print_statement', () => {
    it('returns a header for the statement', () => {
      const MyAccount = new Account();

      expect(MyAccount.printStatement()).toEqual(expect.stringContaining("date || credit || debit || balance"));
    });
  });

  describe('credit', () => {
   xit('accepts two arguments - a date as a string and an amount as a number', () => {
      myAccount = new Account();
      date = "21/01/2023";
      amount = 100;

      expect(myAccount.credit(date)).not.toThrowError;
    });

    it('adds the amount to the current balance', () => {
      myAccount = new Account();
      date = "21/01/2023";
      amount = 100;
      myAccount.credit(date, amount);

      expect(myAccount.current_balance).toEqual(100);
    });

    it('creates a new Transaction object and returns it', () => {
      myAccount = new Account();
      date = "21/01/2023";
      amount = 100;
      return_value = myAccount.credit(date, amount);

      expect(return_value instanceof Transaction).toBe(true);
    });

    it('returns the date as a property of the Transaction object in ISO date format', () => {
      myAccount = new Account();
      date = "21/01/2023";
      amount = 100;

      new_transaction = myAccount.credit(date, amount);
      
      expect(new_transaction.date).toEqual(new Date("2023", "01" -1, "21"))
    });

    it('returns the amount as the credit_amount property of the transaction object and debit_amount is still equal to null', () => {
      myAccount = new Account();
      date = "21/01/2023";
      amount = 100;

      new_transaction = myAccount.credit(date, amount);

      expect(new_transaction.credit_amount).toEqual(100);
      expect(new_transaction.debit_amount).toEqual(null);
    });

    it('sets the balance property of the transaction object to the current_balance', () => {
      myAccount = new Account();
      date = "21/01/2023";
      amount = 100;

      new_transaction = myAccount.credit(date, amount);

      expect(new_transaction.balance).toEqual(100);
    });
  });

  describe('debit', () => {
    xit('accepts two arguments - a date as a string and an amount as a number', () => {
        myAccount = new Account();
        date = "21/01/2023";
        amount = 100;

        expect(myAccount.debit(date)).not.toThrowError;
      });
  
    it('adds the amount to the current balance', () => {
      myAccount = new Account();
      date = "21/01/2023";
      amount = 100;
      myAccount.debit(date, amount);

      expect(myAccount.current_balance).toEqual(-100);
    });
  
    it('creates a new Transaction object and returns it', () => {
      myAccount = new Account();
      date = "21/01/2023";
      amount = 100;
      return_value = myAccount.debit(date, amount);

      expect(return_value instanceof Transaction).toBe(true);
    });

    it('returns the date as a property of the Transaction object in ISO date format', () => {
      myAccount = new Account();
      date = "21/01/2023";
      amount = 100;

      new_transaction = myAccount.debit(date, amount);
      
      expect(new_transaction.date).toEqual(new Date("2023", "01" -1, "21"))
    });

    it('returns the amount as the debit_amount property of the transaction object and credit_amount is still equal to null', () => {
      myAccount = new Account();
      date = "21/01/2023";
      amount = 100;

      new_transaction = myAccount.debit(date, amount);

      expect(new_transaction.debit_amount).toEqual(100);
      expect(new_transaction.credit_amount).toEqual(null);
    });

    it('sets the balance property of the transaction object to the current_balance', () => {
      myAccount = new Account();
      date = "21/01/2023";
      amount = 100;

      new_transaction = myAccount.debit(date, amount);

      expect(new_transaction.balance).toEqual(-100);
    });
  });
});