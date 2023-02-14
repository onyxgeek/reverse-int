module.exports = function reverse (n) {
   let a = Math.abs(n);
   let c = a.toString();
   let b = Array.from(c);
   let ms = b.reverse().join('');
return ms;
}
