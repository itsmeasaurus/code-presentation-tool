const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
const filtered = numbers.filter(num => num > 2);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log({ doubled, filtered, sum });