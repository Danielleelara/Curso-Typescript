"use strict";
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserAccount;
}());
var dani = new UserAccount('Danielle', 36);
console.log(dani);
console.log(dani.age);