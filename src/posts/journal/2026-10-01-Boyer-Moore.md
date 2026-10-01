---
title: "Boyer-Moore Sorting algorithm"
date: "2026-10-01"
description: "An optimal streaming algorithm that finds the majority element defined as appearing more than half (n/2) the time."
tags:
  - Algorithms
  - LeetCode
---

I came across this algorithm when doing LC problem [168. Majority Element](https://leetcode.com/problems/majority-element/). This algorithm specifically finds the element that occurs more than half the time.

```python
def majorityElement(self, nums: list[int]) -> int:
    ans = majority = 0
    for num in nums:
        if majority == 0:
            ans = num
        majority += 1 if num == ans else -1
    return ans
```

Essentially it works by counting the frequency of the majority element. If an element occurs multiple times then it will increment the majority count. Each time there is an element that is not the majority then it decrements. Imagine the two differing numbers cancelling out each other. Below is how I visualize it.

```python
# For example
arr = [1, 2, 2, 1, 2]
[1]     count = 1
[1, 2]  count = 0   # two different values cancel out
[2]     count = 1   # reset since majority is 0
[2, 1]  count = 0
[2]     count = 1
```

Verbose version.

```python
def find_majority_element(nums):
    candidate = 0
    count = 0
    for num in nums:
        if count == 0:
            candidate = num
            count = 1
        elif num == candidate:
            count += 1
        else:
            count -= 1
```
