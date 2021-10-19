function getCount(str) {
  let vowelsCount;

  const amount = str.match(/[aeiou]/gi);
  vowelsCount = amount === null ? 0 : amount.length

  return vowelsCount;
}

console.log('Dries: getCount=',getCount('abracadabra'));