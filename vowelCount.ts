export class Kata {
    static getCount(str: string): number {
        const vowels: string = 'aeiou'
        let count: number = 0;
        let strArr: string[] = str.split('')
        for (let i in strArr) {
            if (vowels.includes(strArr[i])) {
                console.log(vowels.includes(strArr[i]));
                count += 1
            }
        }
        
      return count;
  }
}


console.log(Kata.getCount('abracadabra'))
console.log(Kata.getCount("nqwrty"));
console.log(Kata.getCount("aeiou"));
console.log(Kata.getCount("world"));