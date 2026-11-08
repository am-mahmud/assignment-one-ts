var multiplyValue = function (a, b) {
    if (typeof b === 'undefined') {
        return a * 2;
    }
    else if (a === 0 || b === 0) {
        return 0;
    }
    else {
        return a * b;
    }
};
console.log(multiplyValue(5, 0));
