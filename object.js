"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(fistName, lastName, pesel) {
        this.fistName = fistName;
        this.lastName = lastName;
        this.pesel = pesel;
    }
    /**
     * Getter lastName
     * @return {string}
     */
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    /**
     * Setter lastName
     * @param {string} value
     */
    Person.prototype.setLastName = function (value) {
        this.lastName = value;
    };
    /**
     * Getter fistName
     * @return {string}
     */
    Person.prototype.getFistName = function () {
        return this.fistName;
    };
    /**
     * Setter fistName
     * @param {string} value
     */
    Person.prototype.setFistName = function (value) {
        this.fistName = value;
    };
    /**
     * Getter pesel
     * @return {string}
     */
    Person.prototype.getPesel = function () {
        return this.pesel;
    };
    /**
     * Setter pesel
     * @param {string} value
     */
    Person.prototype.setPesel = function (value) {
        this.pesel = value;
    };
    // method show name and surname of user
    Person.prototype.show = function () {
        console.log("Hi my name is: " + this.getFistName() + " " + this.getLastName());
    };
    return Person;
}());
exports.Person = Person;
