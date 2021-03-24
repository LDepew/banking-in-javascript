class Savings {

    constructor(id, desc) {
        this.id = id;
        this.desc = desc
        this.bal = 0;
    }
    
    deposit(amt) {
        if(typeof amt !== "number") {
            console.error("Amount is not a number");
            return false;
        }
        if(amt <= 0) {
            console.error("Amount must be gt zero");
            return false;
        }
        this.bal += amt;
        return true;
    }

    withdraw(amt) {
        if(typeof amt !== "number") {
            console.error("Amount is not a number");
            return false;
        }
        if(amt <= 0) {
            console.error("Amount must be gt zero");
            return false;
        }   
        if(amt > this.bal) {
            console.error("Insufficient funds")
            return false;
        }
        this.bal -= amt;
        return true;
    }

    transfer(amt, toAcct) {
        if(this.withdraw(amt)) {
            toAcct.deposit(amt)
            return true;
        }
        return false;
    }

}

let s1 = new Savings(1, "Sav1");
s1.deposit(2000);
s1.withdraw(700);
console.log("S1 bal is", s1.bal);

let s2 = new Savings(2, "Sav2");
s2.deposit(200);
s2.withdraw(40);
console.log("S2 bal is", s2.bal);

s1.transfer(100, s2);
console.log("S1 bal is", s1.bal);
console.log("S2 bal is", s2.bal);

s1.deposit(-1);
s2.withdraw(10000);