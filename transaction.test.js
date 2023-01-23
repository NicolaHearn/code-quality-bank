const Transaction = require('./transaction.js');

describe(Transaction, () => {
  it('initializes a new transaction object', () => {
    const transaction = new Transaction();

    expect(transaction instanceof Transaction).toBe(true);
  })
})