"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strings = void 0;
const SortData_1 = require("./SortData");
class Strings extends SortData_1.SortData {
    constructor(str) {
        super();
        this.str = str;
    }
    get length() {
        return this.str.length;
    }
    compare(indexLeft, indexRight) {
        return (this.str[indexLeft].toLowerCase() > this.str[indexRight].toLowerCase());
    }
    swap(indexLeft, indexRight) {
        const charArgs = [...this.str];
        const leftArg = charArgs[indexLeft];
        charArgs[indexLeft] = charArgs[indexRight];
        charArgs[indexRight] = leftArg;
        this.str = charArgs.join("");
    }
}
exports.Strings = Strings;
