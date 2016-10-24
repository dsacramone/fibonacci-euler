/** 
* Recursive Generator solving the Project Euler (no idea what that is)
* The idea is to use fibonacci up to (no greater than 4000000), and 
* sum all of the even values
*/

function *fib(n1 = 1, n2 = 2) {
  if (n1 >= 4000000) return n1;

  yield *fib(n2, n1 + n2), yield n1;
}

Array.of(...fib()).filter(f => !(f & 1)).reduce( (p,c) => p += c, 0); 
