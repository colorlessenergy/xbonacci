// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and
//  remember each next element is the sum of the last X elements - and returns the first n elements of the so 
// seeded sequence.

function Xbonacci (sig, n) {
  var len = sig.length;

  // loop starting from the amount of items in the array to the amount specified
  for (let i = len; i < n; i++) {
    // slices the array starting from 0 and everytime we iterate move starting by 1
    // then add the whole array so we get the value that should be next the in the sequence.
    sig[i] = sig.slice(i - len).reduce(function (a, b) {
      return a + b;
    })
  }

  // return final array
  return sig;
}

console.log(Xbonacci([0,0,0,0,1],10));
