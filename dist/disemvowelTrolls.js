"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static disemvowel(str) {
        return str.replace(/[aeiou]/gi, '');
    }
}
exports.Kata = Kata;

console.log(Kata.disemvowel('remove vowels'));
console.log(Kata.disemvowel('hello world'));
console.log(Kata.disemvowel(''));
console.log(Kata.disemvowel('o'));
console.log(Kata.disemvowel('t'));
