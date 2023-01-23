const Transaction = require('./transaction.js');
const Account = require('./account.js')

describe('account', () => {
  it('initializes a new object (account) with a starting balance of zero', () => {
    const myAccount = new Account(); 
    expect(myAccount instanceof Account).toBe(true);
    expect(myAccount.current_balance).toEqual(0);
  })
})