let car = {id: 5000, style: 'convertible'};

//example 1
//let {id, style} = car;

//example 2
// let id, style;
// {id, style} = car; //error bc '{' and '}' represents block scope and alse objecs so js doesn't know which one we're reffereing to

//exapmle 3
//correct way to declare and initialize by using parenthesis
let id, style;
({id, style} = car);


console.log(id, style);