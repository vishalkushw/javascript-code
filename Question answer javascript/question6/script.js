
function fibonacciSeries(limit) {
    let fibSeries = [0, 1]; 

    if (limit <= 0) {
        return "Limit should be a positive number!";
    }

    for (let i = 2; i < limit; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }

    return fibSeries.slice(0, limit); 
}

let limit = parseInt(prompt("Enter the limit of the Fibonacci sequence:"));

let sequence = fibonacciSeries(limit);

if (typeof sequence === 'string') {
    alert(sequence);
} else {
    alert("Fibonacci Sequence: " + sequence.join(', '));
}