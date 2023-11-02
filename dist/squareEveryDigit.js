"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static squareDigits(num) {
        return Number(String(num)
            .split("")
            .map((x) => Number(x) * Number(x))
            .join(""));
    }
}
exports.Kata = Kata;
console.log(Kata.squareDigits(9119));
console.log(Kata.squareDigits(0));
console.log(Kata.squareDigits(1));
