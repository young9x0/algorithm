def solution(price, money, count):
  return max(0, price * (count +1) * count // 2 - money)

print(solution(3,	20,	4))

# 3	20	4	10
