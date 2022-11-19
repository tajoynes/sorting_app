"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Numbers_1 = require("./Numbers");
const Strings_1 = require("./Strings");
// Date Array
const dateArr = [
    new Date(2012, 9, 24),
    new Date(2022, 9, 24),
    new Date(2020, 9, 24),
    new Date(2017, 9, 24),
];
const years = dateArr.map((date) => {
    return date.getFullYear();
});
const numData = new Numbers_1.Numbers(years);
const strData = new Strings_1.Strings("bnjdkzjqoc");
numData.sort();
strData.sort();
console.log(numData.number);
console.log(strData.str);
