/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * @param {number[]} nums - The array of integers.
 * @param {number} target - The target integer to find in the array.
 * @returns {number[]} - The indices of the two numbers that add up to the target.
 *
 * @example
 * ```typescript
 * const result = twoSum([2, 7, 11, 15], 9);
 * console.log(result); // [0, 1]
 * ```
 *
 * @example
 * ```typescript
 * const result = twoSum([3, 2, 4], 6);
 * console.log(result); // [1, 2]
 * ```
 *
 * @example
 * ```typescript
 * const result = twoSum([3, 3], 6);
 * console.log(result); // [0, 1]
 * ```
 */
function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

    return []
}

console.log(twoSum([3,3], 6))
