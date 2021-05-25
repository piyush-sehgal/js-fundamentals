// Immediately invoked function exp
(function(){
    let id = 20;
    console.log('hello');
})();


let app = (function(){
    let id = 20;
    console.log('app');
    return {id};
})();

console.log(app);