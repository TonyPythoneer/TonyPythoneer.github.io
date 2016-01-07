def calculate(A, B, index):
    return A[index] + float(B[index]) / 1000000


def solution(A, B):
    sequence = []

    #
    n = len(A)    
    list_ = list(xrange(n))
    for index in range(n-1):
        element = [list_.pop(0)]
        remain_num = len(list_)
        sequence.extend(zip(element*remain_num, list_))

    #
    print sequence
    count = 0
    for index, pair in enumerate(sequence):
        p, q = pair
        cp, cq = calculate(A, B, p), calculate(A, B, q)
        if (cp * cq) >= (cp + cq):
            count += 1
            print pair
    return count


print solution([0,1,2,2,3,5], [500000,500000,0,0,0,20000])
