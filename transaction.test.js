const Transaction = require('./transaction.js');

describe(Transaction, () => {
  describe('initialises', () => {
    it('initializes a new transaction object', () => {
      const transaction = new Transaction();

      expect(transaction instanceof Transaction).toBe(true);
    });

    it('has 4 properties all set to null: date, credit_amount, debit_amount, balance', () => {
      const transaction = new Transaction();

      expect(transaction.date).toEqual(null);
      expect(transaction.credit_amount).toEqual(null);
      expect(transaction.debit_amount).toEqual(null);
      expect(transaction.balance).toEqual(null);
    });
  });

  
})