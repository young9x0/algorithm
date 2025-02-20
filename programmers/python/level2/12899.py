def solution(n):
  if n<=3:
    return '124'[n-1]
  else:
    q,r=divmod(n-1,3)
    print('q',q)
    print('r',r)
    return solution(q) + '124'[r]



# print(solution(1))
# print(solution(2))
# print(solution(3))
# print(solution(4))
#
# print(solution(10))
# print(solution(13))
# print(solution(14))
print(solution(15))

# 1	1
# 2	2
# 3	4
# 4	11