class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}

        for i, x in enumerate(nums):
            compl = target - x
            if compl in seen:
                return [seen[compl], i]
            seen[x] = i
        return None
         