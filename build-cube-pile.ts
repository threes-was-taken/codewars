function findNb(m: number): number {
  let n: number = 1;
  let check: number = 0;

  while (check <= m){
    check += n ** 3;
    if (check === m) {
      return n;
    }
    n += 1;
  }
  return -1;
}

console.log(findNb(4183059834009));
