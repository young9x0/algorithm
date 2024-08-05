# Bitwise 연산자: https://sdc-james.gitbook.io/onebook/3./3.4./1.1.1.
def solution(n):
  print('bin(n)',bin(n))
  #-1111
  #110

  print('bin(-n)',bin(-n))
  #-1111
  #110

  pivot=n&-n
  print('pivot', pivot)
  #1
  #2

  print('bin(n+pivot)',bin((n+pivot)))
  #10000
  #1000

  print('n ^ (n+pivot)',bin(n ^ (n+pivot)))
  #11111
  #1110
  print('n ^ (n+pivot)',(n ^ (n+pivot)))
  print('(n ^ (n+pivot)) // pivot',(n ^ (n+pivot)) // pivot)
  print('(n ^ (n+pivot)) // pivot',bin((n ^ (n+pivot)) // pivot))
  #11111
  #111
  before = ((n ^ (n+pivot)) // pivot) >> 2
  print('bin(before)',bin(before))
  # 111
  #1
  answer= (n+pivot)|before
  print('bin(answer)',bin(answer))
  return answer

# print(solution(78))
print(solution(15))
# print(solution(6))
# print(solution(949250))
# 78	83
# 15	23
