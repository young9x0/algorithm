def solution(price, money, count):

  answer= (sum(i for i in range(count+1)) *price) -money
  return 0 if answer <0 else answer

print(solution(3,	20,	4))

# 3	20	4	10
