export const makeNegative = (num: number): number => {
    if (num <= 0) {
        return num;
    } else {
        return parseInt('-' + num.toString())
    }
    

};

console.log(makeNegative(5))
console.log(makeNegative(0));
console.log(makeNegative(-2));
console.log(makeNegative(40));
