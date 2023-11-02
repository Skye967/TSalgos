"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static getCount(str) {
        const vowels = 'aeiou';
        let count = 0;
        let strArr = str.split('');
        for (let i in strArr) {
            if (vowels.includes(strArr[i])) {
                console.log(vowels.includes(strArr[i]));
                count += 1;
            }
        }
        return count;
    }
}
exports.Kata = Kata;
console.log(Kata.getCount('abracadabra'));
console.log(Kata.getCount("nqwrty"));
console.log(Kata.getCount("aeiou"));
console.log(Kata.getCount("world"));
