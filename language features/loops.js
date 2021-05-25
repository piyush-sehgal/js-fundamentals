let i = 0
for(; i < 12; i++){
    console.log(i);
    if(i == 10){
        break;
    }
}


console.log('Example 2');
for(let j = 1; j <= 5; j++){
    if(j == 2){
        continue;
    }
    console.log(j);
}