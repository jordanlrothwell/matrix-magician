import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fraction'
})
export class FractionPipe implements PipeTransform {

  transform(value: number): string {
    if (value == null || isNaN(value)) {
      return '0';
    }

    const gcd = (a: number, b: number): number => {
      return b ? gcd(b, a % b) : a;
    };

    const toMixedFraction = (num: number): string => {
      const wholeNumber = Math.floor(num);
      const fractionPart = num - wholeNumber;
      if (fractionPart === 0) {
        return `${wholeNumber}`;
      }

      const tolerance = 1.0E-6;
      let h1 = 1, h2 = 0, k1 = 0, k2 = 1, b = fractionPart;

      while (Math.abs(fractionPart - (h1 / k1)) > fractionPart * tolerance) {
        const a = Math.floor(b);
        let aux = h1; h1 = a * h1 + h2; h2 = aux;
        aux = k1; k1 = a * k1 + k2; k2 = aux;
        b = 1 / (b - a);
      }

      const gcdValue = gcd(h1, k1);
      const numerator = h1 / gcdValue;
      const denominator = k1 / gcdValue;

      if (wholeNumber === 0) {
        return `${numerator}/${denominator}`;
      } else {
        return `${wholeNumber} ${numerator}/${denominator}`;
      }
    };

    return toMixedFraction(value);
  }
}
