// const multiplyValue = (a: number, b?: number) => {
//     if (typeof b === 'undefined') {
//         return a * 2;
//     }else if (a === 0 || b === 0) {
//         return 0;
//     }else {
//         return a * b;
//     }
// }
var processInput = function (input) {
    if (typeof input === 'string') {
        return input.trim().toUpperCase();
    }
    else if (typeof input === 'number') {
        return (input * 10);
    }
    else if (typeof input === 'boolean') {
        if (input === true) {
            return 'Active';
        }
        else {
            return 'Inactive';
        }
    }
};
console.log(processInput('   hello world   ')); // Output: 'HELLO WORLD'
console.log(processInput(5)); // Output: 50
console.log(processInput(true)); // Output: 'Active'
console.log(processInput(false)); // Output: 'Inactive'
