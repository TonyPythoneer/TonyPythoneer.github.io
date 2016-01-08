def strictly_increasing(L):
    return all(x<y for x, y in zip(L, L[1:]))

def strictly_decreasing(L):
    return all(x>y for x, y in zip(L, L[1:]))

def solution(A):
    # write your code in Python 2.7
    n = len(A)
    max_ = -1
    for i in range(n-2):
        for j in range(i+1,n-1):
            for k in range(j+1,n):
                left = strictly_decreasing(A[i:j])
                right = strictly_increasing(A[j:k])
                if right == True and left == True:
                    result = min(A[i] - A[j], A[k] - A[j])
                    if result > max_:
                        max_ = result
    return max_
