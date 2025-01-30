/**
 * Finds the longest common prefix string amongst an array of strings.
 *
 * @param {string[]} strs - An array of strings to evaluate.
 * @returns {string} The longest common prefix string. If there is no common prefix, returns an empty string "".
 *
 * @example
 * // Example 1:
 * // Input: ["flower","flow","flight"]
 * // Output: "fl"
 * 
 * @example
 * // Example 2:
 * // Input: ["dog","racecar","car"]
 * // Output: ""
 * // Explanation: There is no common prefix among the input strings.
 */
function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix === "") return ""
        }
    }

    return prefix
}

console.log(["flower","flow","flight"])
