/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 *
 * For example, 2 is written as II in Roman numeral, just two ones added together. 
 * 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, 
 * which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from left to right. However, 
 * the numeral for four is not IIII. Instead, the number four is written as IV. Because 
 * the one is before the five we subtract it making four. The same principle applies to 
 * the number nine, which is written as IX. There are six instances where subtraction is used:
 *
 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90. 
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 *
 * Given a roman numeral, convert it to an integer.
 *
 * @example
 * // Example 1:
 * // Input: s = "III"
 * // Output: 3
 * // Explanation: III = 3.
 *
 * @example
 * // Example 2:
 * // Input: s = "LVIII"
 * // Output: 58
 * // Explanation: L = 50, V= 5, III = 3.
 *
 * @example
 * // Example 3:
 * // Input: s = "MCMXCIV"
 * // Output: 1994
 * // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */
function romanToInt(s: string): number {
    const splitedRomanString = s.split('')

    let totalValue = 0;
    
    let shouldSkipNextInteraction = false
    for(let i in splitedRomanString) {
        if (shouldSkipNextInteraction) {
            shouldSkipNextInteraction = false
            continue
        }

        const _i = parseInt(i)

        const char = splitedRomanString[i]
        const nextChar = splitedRomanString[_i+1]
         
        let romanValue = 0
        if (char === 'I' && (nextChar === 'V' || nextChar === 'X')) {
            nextChar === 'V' ? romanValue += 4 : romanValue += 9
            shouldSkipNextInteraction = true
        }

        if (char === 'X' && (nextChar === 'L' || nextChar === 'C')) {
            nextChar === 'L' ? romanValue += 4*10 : romanValue += 9*10
            shouldSkipNextInteraction = true
        }

        if (char === 'C' && (nextChar === 'D' || nextChar === 'M')) {
            nextChar === 'D' ? romanValue += 4*100 : romanValue += 9*100
            shouldSkipNextInteraction = true
        }

        if(romanValue) {
            totalValue += romanValue
            continue
        }

        if(char === 'I') romanValue += 1
        if(char === 'V') romanValue += 5
        if(char === 'X') romanValue += 10
        if(char === 'L') romanValue += 50
        if(char === 'C') romanValue += 100
        if(char === 'D') romanValue += 500
        if(char === 'M') romanValue += 1000

        totalValue += romanValue
    }

    return totalValue
}

console.log(romanToInt('MCMXCIV'))
