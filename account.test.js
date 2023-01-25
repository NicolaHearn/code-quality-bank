const Transaction = require('./transaction.js');
const Account = require('./account.js')

describe('account', () => {
  describe('..', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
    describe('constructs and stores properties', () => {
      it('initializes a new object (account) with a starting balance of zero and an empty array for storing transactions', () => {
        const myAccount = new Account(); 

        expect(myAccount instanceof Account).toBe(true);
        expect(myAccount.current_balance).toEqual(0);
        expect(myAccount.transactions instanceof Array).toBe(true);
      });

      it('keeps a list of all transactions', () => {
        const myAccount = new Account();
        tOne = myAccount.deposit(500, "12/01/2023");
        tTwo = myAccount.withdraw(100, "13/01/2023");

        expect(myAccount.transactions).toEqual([
          {date: new Date("2023", "01" -1, "12"), credit_amount: 500, debit_amount: null, balance: 500},
          {date: new Date("2023", "01" -1, "13"), credit_amount: null, debit_amount: 100, balance: 400}
          ]);
      });
    });

    describe('balanceCumulative()', () => {
      it('sorts the transactions array by the date', () => {
        myAccount = new Account();
        tOne = myAccount.deposit(500, "20/01/2023");
        tTwo = myAccount.withdraw(100, "15/01/2023");
        tThree = myAccount.deposit(500, "23/01/2023");
        tFour = myAccount.deposit(200, "14/01/2023");


        expect(myAccount.balanceCumulative()[0].date).toEqual(new Date("2023", "1"-1, "14"));
        expect(myAccount.balanceCumulative()[2].date).toEqual(new Date("2023", "1"-1, "20"));
        
      });
      it('calculates the balance after each Transaction after sorting the array by date', () => {
        const myAccount = new Account();
        tOne = myAccount.deposit(500, "20/01/2023");
        tTwo = myAccount.withdraw(100, "15/01/2023");
        tThree = myAccount.deposit(500, "23/01/2023");
        tFour = myAccount.deposit(200, "14/01/2023");

        expect(myAccount.balanceCumulative()).toEqual([
          {date: new Date("2023", "1"-1, "14"), credit_amount: 200, debit_amount: null, balance: 200},
          {date: new Date("2023", "1"-1, "15"), credit_amount: null, debit_amount: 100, balance: 100},
          {date: new Date("2023", "1"-1, "20"), credit_amount: 500, debit_amount: null, balance: 600},
          {date: new Date("2023", "1"-1, "23"), credit_amount: 500, debit_amount: null, balance: 1100}
         ])

      });
    });

    describe('print_statement', () => {
      it('prints a statement including a header and all transactions newest to oldest', () => {
        const myAccount = new Account();
        tOne = myAccount.deposit(500, "12/01/2023");
        tTwo = myAccount.withdraw(100, "13/01/2023");
        tThree = myAccount.deposit(500, "14/01/2023");
        
        const logSpy = jest.spyOn(global.console, 'log');
        myAccount.printStatement();
        
        expect(logSpy).toHaveBeenCalledWith(
        "date || credit || debit || balance\n14/01/2023 || 500.00 ||  || 900.00\n13/01/2023 ||  || 100.00 || 400.00\n12/01/2023 || 500.00 ||  || 500.00");
      });

      it('prints a statement header to the console', () => {
        const myAccount = new Account();
        tOne = myAccount.deposit(500, "12/01/2023");
        tTwo = myAccount.withdraw(100, "13/01/2023");

        const logSpy = jest.spyOn(global.console, 'log');
        myAccount.printStatement();

        expect(logSpy).toHaveBeenCalledWith(
          expect.stringContaining("date || credit || debit || balance")
          );
      });
      it('prints a transaction in the statement', () => {
        const myAccount = new Account();
        tOne = myAccount.deposit(500, "12/01/2023");
        tTwo = myAccount.withdraw(100, "13/01/2023");
        
        const logSpy = jest.spyOn(global.console, 'log');
        myAccount.printStatement();

        expect(logSpy).toHaveBeenCalledWith(
          expect.stringContaining("12/01/2023 || 500.00 ||  || 500.00")
          ); 
      });

      it('prints all transactions in the statement', () => {
        const myAccount = new Account();
        tOne = myAccount.deposit(500, "12/01/2023");
        tTwo = myAccount.withdraw(100, "13/01/2023");
        
        const logSpy = jest.spyOn(global.console, 'log');
        myAccount.printStatement();
      
        expect(logSpy).toHaveBeenCalledWith(
          expect.stringContaining("12/01/2023 || 500.00 ||  || 500.00")
          ); 
        expect(logSpy).toHaveBeenCalledWith(
          expect.stringContaining("13/01/2023 ||  || 100.00 || 400.00")
          ); 
      });
  
    });

    describe('deposit', () => {
      it('accepts a default date if no date is input', () => {
        myAccount = new Account();
        myAccount.deposit(100);

        expect(myAccount.transactions[0].date).toEqual(new Date());
      });

      it('adds the amount to the current balance', () => {
        myAccount = new Account();
        myAccount.deposit(100, "21/01/2023");

        expect(myAccount.current_balance).toEqual(100);
      });

      it('when called, a new Transaction object is created and passed to the transactions array', () => {
        myAccount = new Account();
        myAccount.deposit(100, "21/01/2023");

        expect(myAccount.transactions[0].date).toEqual(new Date("2023", "01"-1, "21"));
        expect(myAccount.transactions[0].credit_amount).toEqual(100);
      });

      it('sets the date as a property of the Transaction object in ISO date format', () => {
        myAccount = new Account();
        myAccount.deposit(100, "21/01/2023");
        
        expect(myAccount.transactions[0].date).toEqual(new Date("2023", "01" -1, "21"))
      });

      it('when a deposit is made, the amount is passed in as credit_amount property of the object', () => {
        myAccount = new Account();
        myAccount.deposit(100, "21/01/2023");
        myAccount.deposit(500, "22/01/2023");

        expect(myAccount.transactions[0].credit_amount).toEqual(100);
        expect(myAccount.transactions[1].credit_amount).toEqual(500);
      });

      it('when a deposit is made, the debit_amount is still equal to null', () => {
        myAccount = new Account();
        myAccount.deposit(100, "21/01/2023");
        myAccount.deposit(500, "22/01/2023");

        expect(myAccount.transactions[0].debit_amount).toEqual(null);
        expect(myAccount.transactions[1].debit_amount).toEqual(null);
      });
    });

    describe('withdraw', () => {
      it('accepts a default date if no date is input', () => {
        myAccount = new Account();
        myAccount.withdraw(100);

        expect(myAccount.transactions[0].date).toEqual(new Date());
      });

      it('adds the amount to the current balance', () => {
        myAccount = new Account();
        myAccount.withdraw(100, "21/01/2023");

        expect(myAccount.current_balance).toEqual(-100);
      });
    
      it('when called, a new Transaction object is created and passed to the transactions array', () => {
        myAccount = new Account();
        return_value = myAccount.withdraw(100, "21/01/2023");

        expect(myAccount.transactions[0].date).toEqual(new Date("2023", "01"-1, "21"));
        expect(myAccount.transactions[0].debit_amount).toEqual(100);
      });

      it('sets the date as a property of the Transaction object in ISO date format', () => {
        myAccount = new Account();
        myAccount.deposit(100, "21/01/2023");
        
        expect(myAccount.transactions[0].date).toEqual(new Date("2023", "01" -1, "21"))
      });

      it('when a withdrawal is made, the amount is passed in as debit_amount property of the object', () => {
        myAccount = new Account();
        myAccount.withdraw(100, "21/01/2023");
        myAccount.withdraw(500, "22/01/2023");

        expect(myAccount.transactions[0].debit_amount).toEqual(100);
        expect(myAccount.transactions[1].debit_amount).toEqual(500);
      });

      it('when a withdrawal is made, the credit_amount is still equal to null', () => {
        myAccount = new Account();
        myAccount.withdraw(100, "21/01/2023");
        myAccount.withdraw(500, "22/01/2023");

        expect(myAccount.transactions[0].credit_amount).toEqual(null);
        expect(myAccount.transactions[1].credit_amount).toEqual(null);
      });
    });
  });
});