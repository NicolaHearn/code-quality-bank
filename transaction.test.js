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
    it('returns a transaction in the correct format', () => {
      const transaction = new Transaction();

      transaction.date = new Date(2023, 1 -1, 21);
      transaction.credit_amount = 500;
      transaction.balance = 500;

      expect(transaction.print()).toEqual("21/01/2023 || 500.00 ||  || 500.00");
    });
  });

  
})