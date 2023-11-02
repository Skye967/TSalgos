export class Kata {
    static disemvowel(str: string): string {
    return str.replace(/[aeiou]/gi, '');
  }
}

console.log(Kata.disemvowel('remove vowels'));
console.log(Kata.disemvowel('hello world'));
console.log(Kata.disemvowel(''));
console.log(Kata.disemvowel('o'));
console.log(Kata.disemvowel('t'));