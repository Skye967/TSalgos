export class Kata {
  static squareDigits(num: number): number {
      return Number(
        String(num)
          .split("")
          .map((x) => Number(x) * Number(x))
          .join("")
      );
  }
}

console.log(Kata.squareDigits(9119));
console.log(Kata.squareDigits(0));
console.log(Kata.squareDigits(1));