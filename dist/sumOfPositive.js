"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positiveSum = void 0;
function positiveSum(arr) {
    const filteredArr = arr.filter((num) => num > 0);
    if (filteredArr.length === 0) {
        return 0;
    }
    return filteredArr.reduce((a, b) => a + b);
}
exports.positiveSum = positiveSum;
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([1, 2, 3, -4, 5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
// export function positiveSum(arr: number[]): number {
//   return arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);
// }
