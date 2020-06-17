var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    User.prototype.payInvoice = function () {
        console.log(this.name + ' paid invoice.');
    };
    return User;
}());
// extend means it's inheriting from the User class
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    // paste property along with inherited ones
    function Member(id, name, email, age) {
        var _this = 
        //super takes in properties class is inheriting
        _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
// let john = new User('John', "jdoe@gmail.com", 34)
// console.log(john.register())
// Mike Smith is a user, but he's also a member so let's call payInvoice
var mike = new Member(1, 'Mike Smith', 'mike@gmail.com', 33);
mike.payInvoice();
