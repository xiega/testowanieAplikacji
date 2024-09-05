/**
 * dzieli 2 liczby pierwsza liczbe przez druga.
 * @param {number} x - pierwsza liczba
 * @param {number} y - druga liczba
 * @throws {Error} If `input` is `zero`
 * @returns {number} zwraca iloraz 2 liczba
 * @author Wojciech Ksiazkiewicz 4D
 * @example
 * const x = 10;
 * const x = 2;
 *
 * const result = divide(x,y);
 * // Logs: 5
 */

function divide(x, y) {
    if (y === 0) throw Error('divide bt 0');
    else return x / y;
}