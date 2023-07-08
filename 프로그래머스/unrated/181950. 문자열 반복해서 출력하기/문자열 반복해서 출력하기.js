const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[1]);
    for(i = 1; i <= n; i++) {
        process.stdout.write(input[0]);
    }
    
});