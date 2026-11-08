// const multiplyValue = (a: number, b?: number) => {
//     if (typeof b === 'undefined') {
//         return a * 2;
//     }else if (a === 0 || b === 0) {
//         return 0;
//     }else {
//         return a * b;
//     }
// }
// const processInput = (input: string | number | boolean) => {
//     if (typeof input === 'string') {
//         return input.trim().toUpperCase();
//     }else if (typeof input === 'number') {
//         return (input * 10);
//     }else if (typeof input === 'boolean') {
//         if (input === true) {
//             return 'Active';
//         }else {
//             return 'Inactive';
//         }
//     }
// }
var formatCoordinate = function (cordinate) {
    return "Location: ".concat(cordinate[2], " (").concat(cordinate[0], " - ").concat(cordinate[1], ")");
};
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
;
