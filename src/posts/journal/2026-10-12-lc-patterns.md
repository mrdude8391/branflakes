---
title: "LC pattern for handling duplicate values"
date: "2026-10-12"
description: "After doing some LC problems I noticed some recurring patterns for handling duplicate values."
tags:
  - Algorithms
  - LeetCode
---

### How to recognize and use the pattern

The answer is using `while` loop. The thought initially is always if this value is the same as the next one, then I want to skip it. And you have to remember that it could happen again. There could be 3 of the same in a row. Then the thought instead should be, while my current thing is the same as the next thing, keep on skipping.

In these 2 examples, the pattern is used skip the duplicate value, but I believe the pattern can be used to do anything we want to the duplicate value. In both the while loop is `nested`, meaning that we are incrementing the parent loop within the child loop. I think that this pattern is inevitable because we need to be walking through the list already to be comparing a current item with its neighbors. The pattern can be broken down into the following pseudo-code.

```python
while can_increment:
    while (current_value == prev_value) and (can_increment): # Or (current_value == next_value):
        do_something()
    increment()
```

### Example 1 Using the previous value: LC 15. 3Sum

In 3sum we find the sum of 3 indexes while only moving one index at a time. If we find a target we add the first instance of it and then increment the `j` index. And then implement the pattern. To reiterate, while we are in the two pointers loop, after we move the `j` pointer, we check if the value is the same as the previous one we just moved from, if it is then we keep incrementing.

In this two pointer problem using a List, the pattern is applied by looking at the previous value. We increment first with `j+=1` and then check the new item with the previous one; along with `j<k` to make sure we can keep incrementing.

```python
# 15. 3sum (shortened)
while j < k:
    tot = nums[i] + nums[j] + nums[k]
    if tot == 0:
        triplets.append([nums[i], nums[j], nums[k]])
        j += 1
        # pattern here.
        while nums[j] == nums[j - 1] and j < k:
            j += 1
```

<details>
  <summary>Full 3sum solution</summary>

```python
def threeSum(self, nums: list[int]) -> list[list[int]]:
        triplets = []
        nums.sort()
        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            j = i + 1
            k = len(nums) - 1
            while j < k:
                tot = nums[i] + nums[j] + nums[k]
                if tot > 0:
                    k -= 1
                elif tot < 0:
                    j += 1
                else:
                    triplets.append([nums[i], nums[j], nums[k]])
                    j += 1
                    # A pattern I noticed is that if there is a value that we don't want we use a while loop
                    # to increment until it's a value we do want. This is a common pattern in two pointer problems.
                    while nums[j] == nums[j - 1] and j < k:
                        j += 1
        return triplets
```

</details>

### Example 2 - Using the next value: LC 83. Remove Duplicates from Sorted Linked List

In 83. remove duplicates from linked list, while our next node has the same value as our current node, then we want to skip. In this version we don't look at the previous because of the way the nodes are, we can just look at the next.

For the linked list, we implement the pattern by checking the next value. We make sure that there is a next value to look at and then compare them. But instead of incrementing like in a list we increment with `node.next`.

```python
# 83. Remove Duplicates from Sorted List (shortened)
while curr:
    while curr.next and curr.val == curr.next.val:
        curr.next = curr.next.next
    curr = curr.next
```

<details>
    <summary>Remove duplicates full solution</summary>
    
```python
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        while curr:
            while curr.next and curr.val == curr.next.val:
                curr.next = curr.next.next
            curr = curr.next
        return head
```

</details>

###
