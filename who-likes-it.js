const names = ["Alex", "Jacob", "Mark", "Max"];
const fewerNames = ["Alex", "Jacob", "Mark"];
const lessNames = ["Alex"];
const none = [];

function likes(names) {
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

console.log('Dries: names=',likes(names));
console.log('Dries: fewerNames=',likes(fewerNames));
console.log('Dries: lessNames=',likes(lessNames));
console.log('Dries: none=',likes(none));