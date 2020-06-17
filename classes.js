var User = /** @class */ (function () {
    //constructor is a 
    function User(name, email, age) {
        //assign these to properties
        // this pertains to our User class - set to name we pass in
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User created: " + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + ' is now registered');
    };
    return User;
}());
var john = new User('John', "jdoe@gmail.com", 34);
console.log(john.register());
