function destroyer(array, ...rmv) {
let result = [];

for (const arr of array) {
if(rmv.includes(arr)) {
  
}else{
  result.push(arr);
}
}
return result;
}


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
