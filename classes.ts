interface UserInterface {
    name: string;
    email: string;
    age: number;
    register(): any;
    payInvoice(): any;
}

class User implements UserInterface {
    name: string;
    email: string;
    age: number

    //constructor is a 
    constructor(name: string, email: string, age: number) {
        //assign these to properties
        // this pertains to our User class - set to name we pass in
        this.name = name;
        this.email = email;
        this.age = age

        console.log(`User created: ${this.name}`);
    }

    register() {
        console.log(this.name + ' is now registered')
    }

    payInvoice() {
        console.log(this.name + ' paid invoice.')
    }
}


// extend means it's inheriting from the User class
class Member extends User {
    id: number;

    // paste property along with inherited ones
    constructor(id: number, name: string, email: string, age: number) {
        //super takes in properties class is inheriting
        super(name, email, age)
        this.id = id
    }
    payInvoice() {
        super.payInvoice()
    }
}

// let john = new User('John', "jdoe@gmail.com", 34)

// console.log(john.register())

// Mike Smith is a user, but he's also a member so let's call payInvoice
let mike = new Member(1, 'Mike Smith', 'mike@gmail.com', 33)

mike.payInvoice()