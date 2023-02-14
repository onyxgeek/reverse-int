module.exports = function reverse (n) {
   let a = Math.abs(n);
   let c = a.toString();
   let b = Array.from(c);
   let m = b.reverse().join('');
return m;
}
