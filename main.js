import { calculateTotal } from './tipCalculator.js';

const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tipPercent');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);

    if (isNaN(bill) || isNaN(tipPercent)) {
        resultDiv.textContent = '❌ Podaj poprawne wartości liczbowe.';
        resultDiv.style.color = 'red';
        return;
    }

    try {
        const total = calculateTotal(bill, tipPercent);
        resultDiv.innerHTML = `💰 Całkowity rachunek: <strong>${total} PLN</strong>`;
        resultDiv.style.color = 'green';
    } catch (err) {
        resultDiv.textContent = `❌ Błąd: ${err.message}`;
        resultDiv.style.color = 'red';
    }
});