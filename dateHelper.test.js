const Transaction = require("./transaction.js");
const Account = require("./account.js");

describe("account", () => {
  describe("dates", () => {
    it("input date must be a string", () => {
      const myAccount = new Account();

      const date1 = 12 / 15 / 2023;
      const date2 = 4;
      const date3 = "12/01/2023";

      expect(myAccount.dateStringValid(date1)).toEqual(false);
      expect(myAccount.dateStringValid(date2)).toEqual(false);
      expect(myAccount.dateStringValid(date3)).toEqual(true);
    });

    it("date input as a string matches 'dd/mm/yyyy'", () => {
      const myAccount = new Account();

      expect(myAccount.dateStringValid("10")).toEqual(false);
      expect(myAccount.dateStringValid("01/01/01")).toEqual(false);
      expect(myAccount.dateStringValid("01/01/2023")).toEqual(true);
    });

    it("accepts a default date as a date object", () => {
      const myAccount = new Account();

      expect(myAccount.dateIsDateObject(new Date())).toEqual(true);
      expect(myAccount.dateIsDateObject(200)).toEqual(false);
    });

    it("does not record a new transaction unless the date is valid", () => {
      const myAccount = new Account();
      myAccount.deposit(200, "01/02/2023");
      myAccount.withdraw(100, "01/02/2023");

      expect(myAccount.deposit(200, 12)).toEqual(false);
      expect(myAccount.transactions[0]).toEqual({
        balance: 200,
        credit_amount: 200,
        date: new Date("2023", "2" - 1, "1"),
        debit_amount: null,
      });
      expect(myAccount.withdraw(200, 12)).toEqual(false);
      expect(myAccount.transactions[1]).toEqual({
        balance: 100,
        credit_amount: null,
        date: new Date("2023", "2" - 1, "1"),
        debit_amount: 100,
      });
    });
  });
});
