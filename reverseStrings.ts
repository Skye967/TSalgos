export function solution(str: string): string {
    return str.length > 1 ? str.split('').reverse().join('') : str;
}

console.log(solution('hello'))
console.log(solution('world'));
console.log(solution(''));
console.log(solution('h'));

