class Savings {

    constructor(id, description, balance) {
        this.id = id;
        this.description = description
        this.balance = balance;
    }
    
    withdraw(balance) {
        this.balance -= balance;
        if(this.withdraw > balance);
    }

    deposit(balance) {
        this.balance += balance;
        if(this.deposit !== 0);
    }

    // transfer(balance) {
    //     this.balance += balance;
    //     this.id(balance.transfer);
    // }


    print() {
        return `${this.id} | ${this.description} | ${this.balance}`;
    }
}

let sav1 = new Savings(1, "Bob", 0.0);
sav1.deposit(500.00)
sav1.withdraw(300.00);
console.log(sav1.print());

let sav2 = new Savings(2, "Marigold", 10000.00);
sav2.withdraw(1000.00);
sav2.deposit(3200.00);
console.log(sav2.print());

