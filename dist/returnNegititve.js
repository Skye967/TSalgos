"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNegative = void 0;
const makeNegative = (num) => {
    if (num <= 0) {
        return num;
    }
    else {
        return parseInt('-' + num.toString());
    }
};
exports.makeNegative = makeNegative;
console.log((0, exports.makeNegative)(5));
console.log((0, exports.makeNegative)(0));
console.log((0, exports.makeNegative)(-2));
console.log((0, exports.makeNegative)(40));
