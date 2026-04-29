# Kalkulator napiwków z CI/CD

Prosta aplikacja webowa do obliczania całkowitego rachunku (kwota + napiwek).  
Projekt pokazuje, jak w praktyce działa **pipeline CI** (Continuous Integration) na GitHub Actions – automatyczne lintowanie i testowanie kodu przy każdym pushu i pull requeście.

## Funkcje
- Wprowadź kwotę rachunku i procent napiwku.
- Oblicz całkowitą kwotę do zapłaty.
- Walidacja danych (ujemne wartości, brak liczb).
- Responsywny interfejs.

## Przykładowy pipeline CI
Po każdym pushu do gałęzi `main` lub utworzeniu pull requesta GitHub Actions:
- sprawdza składnię HTML (HTMLHint),
- linter CSS (Stylelint),
- linter JS (ESLint),
- uruchamia testy jednostkowe funkcji `calculateTotal`.

## Jak uruchomić aplikację lokalnie?

### Wymagania
- Dowolna nowoczesna przeglądarka (Chrome, Firefox, Edge)
- Opcjonalnie: lokalny serwer HTTP (jeśli chcesz uniknąć błędu CORS dla modułów JS)

### Sposób  (zalecany) – z lokalnym serwerem HTTP
1. Pobierz lub sklonuj repozytorium:
   ```bash
   git clone https://github.com/paweltester/aplikacja-webowa-zastosowanieCI.git
#### Opcja z VS Code z rozszerzeniem „Live Server”
- Zainstaluj w VS Code rozszerzenie Live Server (autor: Ritwick Dey).
- Kliknij prawym przyciskiem na index.html → Open with Live Server.
- Aplikacja otworzy się pod adresem http://127.0.0.1:5500.

## Jak uruchomić testy i lintery ręcznie?
(Przydatne przed pushowaniem)

1. Zainstaluj zależności (wymaga Node.js):
```bash
npm install
```
2. Sprawdź style CSS:
```bash
npx stylelint "*.css"
```
3. Sprawdź HTML:
```bash
npx htmlhint index.html
```
4. Sprawdź JavaScript:
```bash
npx eslint "*.js"
```
5. Uruchom testy jednostkowe:
```bash
npm test
```
6. Aby poprawić błędy automatycznie (tam, gdzie to możliwe):
```bash
npx stylelint "*.css" --fix
npx eslint "*.js" --fix
```
## Struktura projektu

├── .github/workflows/ci.yml    // Definicja pipeline CI

├── index.html                  // Widok kalkulatora

├── styles.css                  // Style

├── tipCalculator.js            // Logika biznesowa (testowana)

├── main.js                     // Obsługa UI (importuje logikę)

├── test.js                     // Testy jednostkowe

├── package.json                // Zależności i skrypty

├── .eslintrc.json              // Konfiguracja ESLint

├── .stylelintrc.json           // Konfiguracja Stylelint

└── .htmlhintrc                 // Konfiguracja HTMLHint
