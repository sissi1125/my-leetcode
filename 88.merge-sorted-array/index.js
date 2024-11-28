/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    // 两个合在一起，双指针根据大小交换顺序

    if (m === 0) {

        nums2.forEach((value, index) => {
            nums1[index] = nums2[index]
        })
        return nums1
    }

    if (n === 0) {
        return nums1
    }
    // nums1 最后一个元素
    let p = m - 1
    // nums2 最后一个元素
    let q = n - 1

    // q是最后一个元素，最大的
    let r = m + n - 1

    while (p >= 0 && q >= 0) {
        const tailValue1 = nums1[p]
        const tailValue2 = nums2[q]
        // 二者之间较大的一个
        if (tailValue1 > tailValue2) {
            nums1[r] = tailValue1
            nums1[p] = tailValue2
            p--
        } else {
            nums1[r] = tailValue2
            q--
        }
        r--
    }

    return nums1

};


const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3

// const nums1 = [1], m = 1, nums2 = [], n = 0

// const nums1 = [0], m = 0, nums2 = [1], n = 1

console.log(merge(nums1, m, nums2, n))