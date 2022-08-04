def solution(nums):
    mons = len(set(nums))
    if len(nums) / 2 > mons:
        return mons
    else:
        return len(nums) / 2