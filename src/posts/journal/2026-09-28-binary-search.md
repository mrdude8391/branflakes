---
title: "Great Binary Search Breakdown"
date: "2026-09-28"
description: "A great article and explanation of binary search and how to set the bounds."
tags:
  - Algorithms
  - LeetCode
---

A friend sent me a great article that breaks down the binary search algorithm amazingly. [Topcoder Article](https://www.topcoder.com/thrive/articles/Binary%20Search).

Firstly we go over when to use Binary Search. When we are looking for an element in a monotonic series. But what does that mean? Essentially its a list where the items in the list go from a series of No's to a series of Yes's.

```
False False False False False True True True True True
```

Once we determined when binary search can be useful how do we execute it. We begin with defining the search space.

> The `lo` value will be the starting element of the list.

> The `hi` value will be the last element of the list. However if the item we are looking for can exist beyond our search space, for example if we are looking for `3` in a list `[0, 1, 2]`. Then our `hi` value needs to go past the value `2`.

What this may look like is

```python
lo, hi = 0, len(arr) - 1 # we are certain the answer is within this list arr
# or
lo, hi = 0, len(arr) # the answer can lie beyond the list arr
```

A crucial factor in how binary search words is defining `mid`. For simplicity sake we use `mid = lo + (hi - lo) / 2` or `mid = lo + hi // 2`. Essentially taking the average or getting the middle point between the two indices. What is crucial to understand is that when there are two values left i.e. `[0, 1]` `mid = 0 + 1 // 2` returns `0` or the `lo` element. This is ==**important**== to understand going into the following explanations.

Next we must define the binary search condition so that we create the monotonic series. Think about how do we make the list go from all No's to all Yes's. That will be our `p(mid)`.

The search condition and how we move the bounds should be decided together. This is because when we evaluate the condition, if it evaluates to `true` we can't be sure if we are at the first `true`. But if we arrive at `false` we can just skip to the next one since we are looking for `true`. As a general rule it makes the most sense to move the `lo` to `mid + 1` and `hi` to `mid`. If you're confused refer back to what the monotonic series looks like. The decision here is resulting from how `mid` is calculated above. When theres only 2 elements left if `mid` is our `lo` then when we move `lo` we want to move it to `mid + 1` which is also `lo + 1` and likewise `hi` to `mid` or `lo`.

Finally once the lower bound crosses the upper bound it will be when the `lo` and `hi` elements point to the same thing. Now this value will will represent the location of the first `true` in our monotonic series. And we can do with that what we please.

```python
def binary_search(lo, hi, p):
    while lo < hi:
        mid = lo + (hi - lo) / 2
    if p(mid) == true:
        hi = mid
    else:
        lo = mid + 1
    # if p(lo) == false:
    # complain // p(x) is false for all x in S!

    return lo  # // lo is the least x for which p(x) is true
```
