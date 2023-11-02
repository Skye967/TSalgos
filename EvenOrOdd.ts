export function evenOrOdd(n: number): string {
    if (n % 2 === 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
  return "";
}


console.log(evenOrOdd(1))
console.log(evenOrOdd(2));
console.log(evenOrOdd(-1));
console.log(evenOrOdd(-2));