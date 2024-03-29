class Customer {

    private _firstName: string;
    private _lastName: string;

    public set lastName(value: string) {
        this._lastName = value;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
}

let aa = new Customer("Marthin", "Dixon");

console.log(aa.firstName);
console.log(aa.lastName);
