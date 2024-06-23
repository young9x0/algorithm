# 중복된 숫자 개수

import math
def solution(array):
    return sorted(array)[len(array)//2]

print(solution([3, 4, 5, 1, 2 ]))
# print(solution([9, -1, 0]))

