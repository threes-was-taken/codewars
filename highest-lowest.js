function highAndLow(numbers){
  const max = numbers.split(' ').reduce((rv, curr) =>
    parseInt(rv) > parseInt(curr) ? rv : curr, numbers.split(' ')[0]);

  const min = numbers.split(' ').reduce((rv, curr) =>
    parseInt(rv) < parseInt(curr) ? rv : curr, numbers.split(' ')[0]);

  return `${max} ${min}`
}

console.log('Dries: highAndLow()=',highAndLow("4 5 29 54 4 0 -21 42 -64 1 -3 6 -6"));