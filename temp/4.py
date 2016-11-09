def solution(A):
    # write your code in Python 2.7
    pairs = {}
    sum_ = 0
    while len(A):
        for _, e in enumerate(A):
            sum_ += e
            abs_sum = abs(sum_)
            if abs_sum not in pairs:
                pairs[abs_sum] = 1
            else:
                pairs[abs_sum] += 1
        A.pop(0)
        sum_ = 0

    #
    min_ = float("inf")
    for k, v in pairs.items():
        if v % 2 == 0:
            if k < min_:
                min_ = k
    return min_
