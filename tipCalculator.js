// czysta funkcja – bez DOM, łatwa do testowania
export function calculateTotal(bill, tipPercent) {
    if (typeof bill !== 'number' || typeof tipPercent !== 'number') {
        throw new Error('Oba argumenty muszą być liczbami');
    }
    if (bill < 0 || tipPercent < 0) {
        throw new Error('Kwota i procent napiwku nie mogą być ujemne');
    }
    const tip = bill * (tipPercent / 100);
    const total = bill + tip;
    return parseFloat(total.toFixed(2));
}