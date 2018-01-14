function Xbonacci (sig, n) {
  var len = sig.length;

  for (let i = len; i < n; i++) {
    sig[i] = sig.slice(i - len).reduce(function (a, b) {
      return a + b;
    })
  }

  return sig.slice(0, n)
}

console.log(Xbonacci([0,0,0,0,1],10));
