import { calculateTotal } from './tipCalculator.js';
import assert from 'assert';

// test prawidłowych wywołań
assert.strictEqual(calculateTotal(100, 10), 110.00);
assert.strictEqual(calculateTotal(50, 20), 60.00);
assert.strictEqual(calculateTotal(99.99, 15), 114.99);
assert.strictEqual(calculateTotal(0, 50), 0.00);

// test rzucania błędów
assert.throws(() => calculateTotal(-10, 10), /nie mogą być ujemne/);
assert.throws(() => calculateTotal(100, -5), /nie mogą być ujemne/);
assert.throws(() => calculateTotal('a', 10), /muszą być liczbami/);

console.log('✅ Wszystkie testy przeszły pomyślnie!');