const Transaction = require('./transaction.js');
const Account = require('./account.js')

describe('account', () => {
  describe('initializes', () => {
    it('initializes a new object (account) with a starting balance of zero and an empty array for storing transactions', () => {
      const myAccount = new Account(); 
      expect(myAccount instanceof Account).toBe(true);
      expect(myAccount.current_balance).toEqual(0);
      expect(myAccount.transactions instanceof Array).toBe(true);
    });
  });

  describe('print_statement', () => {
    it('returns a header for the statement', () => {
      const MyAccount = new Account();
      expect(MyAccount.printStatement()).toEqual(expect.stringContaining("date || credit || debit || balance"));

    })
  });

  describe('credit', () => {
   xit('accepts two arguments - a date as a string and an amount as a number', () => {
      myAccount = new Account();
      date = "21/01/23";
      amount = 100;
      expect(myAccount.credit(date)).not.toThrowError;
    });

    it('adds the amount to the current balance', () => {
      myAccount = new Account();
      date = "21/01/23";
      amount = 100;
      myAccount.credit(date, amount);

      expect(myAccount.current_balance).toEqual(100);
    });

    it('creates a new Transaction object and returns it', () => {
      myAccount = new Account();
      date = "21/01/23";
      amount = 100;
      return_value = myAccount.credit(date, amount);

      expect(return_value instanceof Transaction).toBe(true);
    })

  })

});



