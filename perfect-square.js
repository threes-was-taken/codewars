const isSquare = function(n){
  return n >= 0 && Math.sqrt(n) % 1 === 0;
}

console.log('Dries: isSquare(25)=',isSquare(25));
console.log('Dries: isSquare(0)=',isSquare(0));
console.log('Dries: isSquare(-1)=',isSquare(-1));
console.log('Dries: isSquare(33)=',isSquare(33));
console.log('Dries: isSquare(23)=',isSquare(23));