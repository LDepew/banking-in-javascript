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

let s1 = new Savings(1, "Sav1")

