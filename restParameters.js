function printNames(...allNames){
    allNames.forEach(name => console.log(name));
}
//printNames('AB', 'CD', 'EF', 'GH');

//Passing 2 params
function printNames2(age, ...allNames){
    allNames.forEach(name => console.log(name));
}
//printNames2(12, 'AB', 'CD', 'EF', 'GH');


//in this example, 12 will become part of allNames
// o/p: 12 AB CD EF GH 
function printNames3(...allNames){
    allNames.forEach(name => console.log(name));
}
//printNames3(12, 'AB', 'CD', 'EF', 'GH');


//this will throw error bc rest param must be the last param
function printNames4(...allNames, age){
    allNames.forEach(name => console.log(name));
}
printNames4('AB', 'CD', 'EF', 'GH', 12);