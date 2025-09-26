import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, 'stdin.txt');
const input = fs.readFileSync(filePath, 'utf8');
const lines = input.trim().split('\n');
const [a, b] = lines.map((x) => parseInt(x));
const sum = a + b;
console.log(`X = ${sum}`);