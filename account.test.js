const Transaction = require('./transaction.js');
const Account = require('./account.js')

describe('account', () => {
  it('initializes a new object (account) with a starting balance of zero and an empty array for storing transactions', () => {
    const myAccount = new Account(); 
    expect(myAccount instanceof Account).toBe(true);
    expect(myAccount.current_balance).toEqual(0);
    expect(myAccount.transactions instanceof Array).toBe(true);
  })


})