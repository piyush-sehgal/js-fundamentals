function print(v1, v2, v3){
    console.log(v1, v2, v3);
}

//exapmle 1: arrays
let values = [1, 2, 3];
print(...values);

//exapmle 2: strings
let vals = 'abc';
print(...vals); 

//example 2: using spread syntax and rest params togeather
function print2(v1, v2, ...rest){
    console.log(rest);
}

let values2 = [1, 2, 3, 4, 5, 6, 7, 8];
print2(...values2);
