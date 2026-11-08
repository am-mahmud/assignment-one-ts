const multiplyValue = (a: number, b?: number) => {
    if (typeof b === 'undefined') {
        return a * 2;
    }else if (a === 0 || b === 0) {
        return 0;
    }else {
        return a * b;
    }
}

const processInput = (input: string | number | boolean) => {
    if (typeof input === 'string') {
        return input.trim().toUpperCase();
    }else if (typeof input === 'number') {
        return (input * 10);
    }else if (typeof input === 'boolean') {
        if (input === true) {
            return 'Active';
        }else {
            return 'Inactive';
        }
    }
}

