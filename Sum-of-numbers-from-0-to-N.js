/*
We want to generate a function that computes the series 
starting from 0 and ending until the given number.

Example:
Input: 6
Output: 0+1+2+3+4+5+6 = 21
*/


// Solution

let SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let sum = 0;
    let str = "";
    if (count === 0) {
      return "0=0";
    } else if (count < 0) {
      return count + "<0";
    } else {
      for (var i = 0; i < count; i++) {
        sum += i;
        str += i + "+";
      };
    sum += count;
    str += count + " = " + sum;
    return str;
    };
  };
  return SequenceSum;
})();

// or

class SumSequence {
  static showSequence(n) {
    return n < 0
      ? `${n}<0`
      : `${Array.from({length: n+1}, (v, k) => k).join('+')}${n?' = ':'='}${n*(n+1)/2}`;
  }
}