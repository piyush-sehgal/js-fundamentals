let carIds = [1, 2, 3, 4];

//will only store 1st 2 elements in car1 and car2
// let [car1, car2] = carIds;
// console.log(car1, car2);
// o/p: 1 2

let [car1, ...remainingCars] = carIds;
console.log(car1, remainingCars);
// o/p: 1 [2, 3, 4]

//this will skip first element
let [, ...remCars] = carIds;
console.log(remCars);
// o/p: [2, 3, 4]