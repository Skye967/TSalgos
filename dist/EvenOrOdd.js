"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evenOrOdd = void 0;
function evenOrOdd(n) {
    if (n % 2 === 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
    return "";
}
exports.evenOrOdd = evenOrOdd;
console.log(evenOrOdd(1));
console.log(evenOrOdd(2));
console.log(evenOrOdd(-1));
console.log(evenOrOdd(-2));
