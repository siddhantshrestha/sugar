// Basic Datatype
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5;
var Name = "sid";
var isBoy = true;
var x = "Hello world";
var numbers = [1, 2, 3, 4, 5];
var arr = [1, "wis", 3, true];
//Tuple
//should be in same order as assigned
var person = [1, "sid", true];
//Tuple array
var product;
product = [
    [1, "apple"],
    [2, "bag"],
    [2, "rack"],
];
//Union
// if you have to assign two diff value
var pid;
pid = "apple";
// Enum
var Keys1;
(function (Keys1) {
    Keys1[Keys1["up"] = 0] = "up";
    Keys1[Keys1["down"] = 1] = "down";
    Keys1[Keys1["left"] = 2] = "left";
    Keys1[Keys1["right"] = 3] = "right";
})(Keys1 || (Keys1 = {}));
// console.log(Keys1.left);
var Keys2;
(function (Keys2) {
    Keys2["up"] = "up";
    Keys2["down"] = "down";
    Keys2["left"] = "left";
    Keys2["right"] = "right";
})(Keys2 || (Keys2 = {}));
var user = {
    id: 1,
    name: "Sid",
};
//Type assertion
var nid = 1;
// let cid= <number>nid
var cid = nid;
cid = 2;
//function
function addNum(x, y) {
    return x + y;
}
//  console.log(addNum(10,2));
function smth(msg) {
    console.log(msg);
}
smth("This is null");
var users = {
    id: 12,
    name: "Sid",
};
var ID = "DUKE" || 2;
var add = function (x, y) { return x + y; };
console.log("Add:", add(4, 3));
var multiply = function (x, y) { return x * y; };
console.log("Multiply:", multiply(4, 3));
var Car = /** @class */ (function () {
    function Car(model, name) {
        this.model = model;
        this.name = name;
    }
    Car.prototype.buy = function () {
        return "".concat(this.name, " model ").concat(this.model, " obtained!!!");
    };
    return Car;
}());
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(model, name, company) {
        var _this = _super.call(this, id, name) || this;
        _this.company = company;
        return _this;
    }
    return Company;
}(Car));
var gadi = new Company(2001, "supra", "Honda");
console.log(gadi);
console.log(gadi.buy());
//sub class
