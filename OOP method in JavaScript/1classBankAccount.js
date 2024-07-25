class bankAccount {
  constructor(AccountHolder, InitBalance) {
    this.AccountHolder = AccountHolder;
    this.balance = InitBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(
        `Deposited amount is Rs.${amount} and new balance is Rs.${this.balance}`
      );
    } else {
      console.log("please enter valid amount");
    }
  }

  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Amount to be withdrawn is Rs.${amount} and Your new balance is ${this.balance}`);
      } else {
        console.log("Insufficient balance.");
      }
    } else if (amount < 0) {
        console.log("You can't withdraw negative amount. Please enter valid amount");
    }
  }

  checkBalance() {
    console.log(`Account balance for ${this.AccountHolder} is ${this.balance}`);
  }
}

const myAccount = new bankAccount("Mithun S", 1000);

myAccount.checkBalance();

myAccount.deposit(500);
myAccount.deposit(-50);

myAccount.withdraw(200);
myAccount.withdraw(1500);
myAccount.withdraw(-500);

myAccount.checkBalance();
