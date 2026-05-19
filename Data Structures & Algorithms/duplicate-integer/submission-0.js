class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const store = []
        for (const num of nums) {
            if (store.includes(num)) {
                return true
            }
            store.unshift(num)
        }
        return false
    }
}
