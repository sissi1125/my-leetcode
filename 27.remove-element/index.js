/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 输入：nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2
// 输出：5, nums = [0, 1, 4, 0, 3, _, _, _]
var removeElement = function (nums, val) {
    // 检查是否是array
    if (nums.length <= 0) {
        return []
    }

    let q = nums.length - 1
    let count = 0

    for (let i = 0; i <= q; i++) {

        // 这里最多是2
        for (; i <= q; q--) {
            // 是否命中val
            if (nums[i] === val) {
                // 交换和q的位置
                const temp = nums[i]
                nums[i] = nums[q]
                nums[q] = temp
                // q前移
            } else {
                break
            }
        }
    }

    return q + 1
};


console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
console.log(removeElement([3, 2, 2, 3], 3))

console.log(removeElement([3, 3], 3))