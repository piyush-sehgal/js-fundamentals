console.log(Number.parseInt('55'));

//this will ignore ABC
console.log(Number.parseInt('55ABC'));

console.log(Number.parseFloat('55.36'));

console.log(Number.parseFloat('55.36ABC'));

//ABC in the beginning is not ignored
//this return NaN
console.log(Number.parseFloat('ABC55.36'));
