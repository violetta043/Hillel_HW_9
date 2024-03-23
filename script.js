function getSum() { 
    let sum = 0;
    return function(num) {
        return sum += num;
    }
    
}

let sum = getSum(); 
console.log(sum(3)); 
console.log(sum(5));
console.log(sum(20));