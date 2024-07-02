function BankAccount(owner, initialBalance) {
    let balance = initialBalance;
  
    this.deposit = function(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposit: $${amount}, New Balance: $${balance}`);
      } else {
        console.log("Error: Deposit amount must be positive");
      }
    };
  
    this.withdraw = function(amount) {
      if (balance >= amount) {
        balance -= amount;
        console.log(`Withdraw: $${amount}, New Balance: $${balance}`);
      } else {
        console.log("Insufficient funds");
      }
    };
  
    this.getBalance = function() {
      return balance;
    };
  }
  
  // Example usage:
  var myAccount = new BankAccount("John Doe", 1000);
  myAccount.deposit(500); // Output: "Deposit: $500, New Balance: $1500"
  myAccount.deposit(-20); // Output: "Error: Deposit amount must be positive"
  myAccount.withdraw(200); // Output: "Withdraw: $200, New Balance: $1300"
  myAccount.withdraw(2000); // Output: "Insufficient funds"
  console.log(`Balance: $${myAccount.getBalance()}`); // Output: "Balance: $1300"
  