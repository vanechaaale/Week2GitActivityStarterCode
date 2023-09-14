import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
console.log(`result_add = ${result_add}`);
const result_subtract = calc.subtract(2, 3);
console.log(`result_add = ${result_subtract}`);
const result_multiply = calc.multiply(2, 3);
console.log(`result_multiply = ${result_multiply}`);
const divide = calc.divide(2, 3);
console.log(`divide = ${divide}`);
calc.hello();