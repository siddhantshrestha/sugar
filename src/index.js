// Basic Datatype
var id = 5;
var Name = 'sid';
var isBoy = true;
var x = 'Hello world';
var numbers = [1, 2, 3, 4, 5];
var arr = [1, 'wis', 3, true];
//Tuple
//should be in same order as assigned
var person = [1, 'sid', true];
//Tuple array
var product;
product = [
    [1, 'apple'],
    [2, 'bag'],
    [2, 'rack'],
];
//Union
// if you have to assign two diff value
var pid;
pid = 'apple';
// Enum
var Keys1;
(function (Keys1) {
    Keys1[Keys1["up"] = 0] = "up";
    Keys1[Keys1["down"] = 1] = "down";
    Keys1[Keys1["left"] = 2] = "left";
    Keys1[Keys1["right"] = 3] = "right";
})(Keys1 || (Keys1 = {}));
console.log(Keys1.left);
var Keys2;
(function (Keys2) {
    Keys2["up"] = "up";
    Keys2["down"] = "down";
    Keys2["left"] = "left";
    Keys2["right"] = "right";
})(Keys2 || (Keys2 = {}));
console.log(Keys2.right);
