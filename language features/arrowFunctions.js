let getId = () => 123;
//console.log(getId());


let example2 = v1 => v1 + 123;
//console.log(example2('Id: '));

let example3 = (v1, v2) => v1 + 123 + v2;
//console.log(example3('Id: ', '!'));

let example4 = (v1, v2) => {
    return v1 + 123 + v2;
}
console.log(example4('Id: ', '!'));

//OR

let example5 = (v1, v2) => v1 + 123 + v2;

console.log(example5('Id: ', '!'));