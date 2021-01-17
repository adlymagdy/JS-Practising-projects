function sumTo (n) {
  var result = 0;
  for (let i = 1; i <= n; i++) {
    result += i
  }
  return result
}
 console.log(sumTo(10));

 function sumToRecursive (n) { 
   if (n === 1) { return 1 };
   return n + sumToRecursive(n-1)
 }

let result = sumToRecursive(5);
console.log(result)