"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(str) {
    return str.length > 1 ? str.split('').reverse().join('') : str;
}
exports.solution = solution;
console.log(solution('hello'));
console.log(solution('world'));
console.log(solution(''));
console.log(solution('h'));
