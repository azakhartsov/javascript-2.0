function t1() {
  let a = 0;
  return function () {
    a = a + 1;
    return a;
  };
}

let count = t1();

console.log(count());
console.log(count());
console.log(count());

let z = t1();

console.log(z());
