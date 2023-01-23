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
    it('first element in the transactions array is the header row', () => {
      const MyAccount = new Account();
      statement = MyAccount.print_statement();
      expect(statement[0]).toEqual("date || credit || debit || balance");
    })
  });


});



