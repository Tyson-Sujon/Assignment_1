const processInput = (value) => {
    if (value === true) {
        return 'Active';
    }
    if (value === false) {
        return 'Inactive';
    }
    if (typeof value === 'string') {
        return value.trim().toLowerCase();
    }
    else {
        return value * 10;
    }
};
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
export {};
