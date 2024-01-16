class Customers {
    firstName: string;
    lastName: string;

    constructor(firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myCustomer = new Customers("Marthin", "Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
