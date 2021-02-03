const nums = [0,1,2,3,4,5,6];
const part = nums.slice(2,5); // index 2 theke 5-1 porjnto

//const removed = nums.splice(2,4); // index 2 theke ektana 4 ta dlt
const removed = nums.splice(2,4, 11,22,33); // 2 no index theke 4 ta dlt kore main array te new 11,22,33 eigula insert korbe
console.log(nums);
console.log(removed);

//array ke string banano
const a = [0,1,2,3];
const b = a.join(", ");//iccha korle majhe , . space eigula dite pari
console.log(b);