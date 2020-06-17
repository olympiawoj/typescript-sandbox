class User {
    private name: string;
    private email: string;
    public age: number

    //constructor is a 
    constructor(name: string, email: string, age: number) {
        //assign these to properties
        // this pertains to our User class - set to name we pass in
        this.name = name;
        this.email = email;
        this.age = age

        console.log(`User created: ${this.name}`);
    }
}


let john = new User('John', "jdoe@gmail.com", 34)

console.log(john.age)