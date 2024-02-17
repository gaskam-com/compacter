function i(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function sum(a: number, b: number): number {
    return a + b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

console.log(i(10)); // Generate a random string of length 10

console.log(sum(5, 3)); // Output: 8

console.log(multiply(4, 2)); // Output: 8

try {
    console.log(divide(10, 0)); // Throws an error: "Cannot divide by zero"
} catch (error) {
    console.error((error as Error).message);
}