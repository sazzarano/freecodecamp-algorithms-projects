Array.prototype.last = function() {
    return this[this.length - 1]; 
};
Array.prototype.secondToLast = function() {
    return this[this.length - 2];
};

function sumFibs(num) {
    let sequence = [1, 1];

    while (sequence.secondToLast() + sequence.last() <= num) {
        sequence.push(sequence.secondToLast() + sequence.last());
    }
    return sequence.filter(function(num) {
        return num % 2 !== 0;
    }).reduce(function(a, b) {
        return a + b;
    });
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));