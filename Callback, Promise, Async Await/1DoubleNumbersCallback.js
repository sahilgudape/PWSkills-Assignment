function h(a,fn){
    fn(a*a)
}
h(10, exec)

function exec(n){
    console.log('squared value of the number is: ',n);
}