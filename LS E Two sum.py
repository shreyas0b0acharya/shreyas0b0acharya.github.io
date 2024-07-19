def find_two_sums(nums,target):
  for i in range(len(nums)):
    for j in range(i+1,len(nums)):
      if  nums[i]+nums[j]== target:
        print(f"({i},{j})")
        
  
find_two_sums([3,3],6)


def two_sum(nums, target):
    num_to_index = {}
    for index, num in enumerate(nums):
        complement = target - num
        if complement in num_to_index:
            return [num_to_index[complement], index]
        num_to_index[num] = index
    return []

# Example usage
print(two_sum([2, 7, 11, 15], 9))  # Output: [0, 1]
print(two_sum([3, 2, 4], 6))       # Output: [1, 2]
print(two_sum([3, 3], 6))          # Output: [0, 1]