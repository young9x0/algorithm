def solution(n):
  if n ==1:
    return 1
  a, b = 1,2
  for i in range(2,n):
  # print(i, 'a,b',a,b)
    a, b = b, a+b
  return b % 1234567



# print(solution(7))
# print(solution(5))
# print(solution(4))
# print(solution(3))
# print(solution(100))
print(solution(1))

# 4	5
# 3	3
